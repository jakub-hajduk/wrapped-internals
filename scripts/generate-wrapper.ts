import { execSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';
import { pascalCase } from 'change-case';
// @ts-ignore
import CommentBuilder from 'comment-builder';
import ariaMetadata from '../src/aria-metadata.json' assert { type: 'json' };

type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

type ValuesOfMap<T> = T extends Map<any, infer I> ? I : never;

type PropertyEntry = (typeof ariaMetadata)[number];
type PropertyEntryType = Prettify<ValuesOfMap<ReturnType<typeof typeMap>>>;

const empty = (v: any[]) => v.length === 0;

const typeMap = () => {
  const out = new Map();

  for (const property of ariaMetadata) {
    let definition: string | undefined;
    let name = '';
    let usage = '';
    let conversionFromInternals: string | undefined;
    let conversionToInternals: string | undefined;
    const defaultValue = property.type.values.find((v) => v.default);

    switch (property.type.type) {
      case 'ID reference':
        definition = undefined;
        name = 'string';
        usage = 'string';
        conversionFromInternals = `value as ${usage}`;
        conversionToInternals = 'value as string';
        break;
      case 'ID reference list':
        definition = undefined;
        name = 'string';
        usage = 'string[]';
        conversionFromInternals = `(value?.split(' ') || []) as ${usage}`;
        conversionToInternals = `value.join(' ')`;
        break;
      case 'token':
        definition = unionTypeDefinitionTemplate(property);
        name = `${pascalCase(property.name)}Token`;
        usage = name;
        conversionFromInternals = `value as ${name}`;
        conversionToInternals = 'value as string';
        break;
      case 'token list':
        definition = unionTypeDefinitionTemplate(property);
        name = `${pascalCase(property.name)}Token`;
        usage = `${name}[]`;
        conversionFromInternals = `(value?.split(' ') || []) as ${usage}`;
        conversionToInternals = `value.join(' ')`;
        break;
      case 'integer':
      case 'number':
        definition = undefined;
        name = 'number';
        usage = 'number';
        conversionFromInternals = 'Number(value)';
        conversionToInternals = 'String(value)';
        break;
      case 'true/false':
        definition = undefined;
        name = 'boolean';
        usage = 'boolean';
        conversionFromInternals = `value === 'true'`;
        conversionToInternals = 'String(value)';
        break;
      case 'string':
        definition = undefined;
        name = 'string';
        usage = 'string';
        conversionFromInternals = 'value as string';
        conversionToInternals = 'value as string';
    }

    out.set(property.idlName, {
      name,
      definition,
      usage,
      defaultValue: defaultValue ? formatValue(defaultValue.name) : undefined,
      conversion: {
        from: conversionFromInternals,
        to: conversionToInternals,
      },
    });
  }

  return out;
};

const getterSetterTemplate = (
  property: PropertyEntry,
  type: PropertyEntryType,
) => {
  if (!property.hasElementInternalsMember) return;

  const cb = new CommentBuilder();

  const commentBlock: Record<string, string | string[] | undefined> = {
    property: property.idlName,
    description: property.description,
    'aria-attribute': property.name,
  };

  if (!empty(property.usedInRoles)) {
    commentBlock['aria-used-in'] = property.usedInRoles.join(', ');
  }

  if (!empty(property.inheritsIntoRoles)) {
    commentBlock['aria-inherited-by'] = property.inheritsIntoRoles.join(', ');
  }

  if (!empty(property.relatedConcepts)) {
    commentBlock['aria-related-concepts'] = property.relatedConcepts.join(', ');
  }

  cb.writeObject(commentBlock);
  const jsDodocs = cb.toString();

  return `
    ${jsDodocs}get ${property.idlName}(): ${type.usage} {
      return ${type.conversion.from.replace('value', `this[internalsKey].${property.idlName}`)};
    }
    set ${property.idlName}(value: ${type.usage}) {
      this[internalsKey].${property.idlName} = ${type.conversion.to};
    }
    `;
};

function formatValue(value: string) {
  switch (true) {
    case value === 'undefined':
    case value === 'true':
    case value === 'false':
      return value;
    case !Number.isNaN(value) &&
      !Number.isNaN(Number.parseFloat(value as string)):
      return 'number';
    default:
      return `'${value}'`;
  }
}

const unionTypeDefinitionTemplate = (property: PropertyEntry) => {
  const cb = new CommentBuilder();

  const values = property.type.values
    .map(
      (token) =>
        `    /** ${token.description} */\n    | ${formatValue(token.name)}`,
    )
    .join('\n');

  cb.writeLine(`${property.idlName} values`);

  const defaultValue = property.type.values.find((v) => v.default);

  if (defaultValue) {
    cb.writeLine('');
    cb.writeObject({
      default: formatValue(defaultValue.name),
    });
  }

  const docs = cb.toString();

  return `
${docs}export type ${pascalCase(property.name)}Token = \n${values};`;
};

const types = typeMap();

const cb = new CommentBuilder();

cb.writeLine('This file is generated automatically.');
cb.writeLine('Do not edit it directly.');
cb.writeLine('');
cb.writeLine(`Generated at ${new Date().toUTCString()}`);

let finalString = cb.toString();

for (const type of types.values()) {
  if (type.definition) {
    finalString += type.definition;
  }
}

finalString += `\n\n
declare global {
  export interface ElementInternals {
`;

finalString += ariaMetadata
  .map((property) => {
    if (!property.hasElementInternalsMember) return;
    return `    ${property.idlName}: string | null;`;
  })
  .filter(Boolean)
  .join('\n');

finalString += `
  }
}`;

finalString += `\n\n
const internalsKey = Symbol('internals');

export class WrappedInternals {
    [internalsKey]: ElementInternals;

    constructor(element: HTMLElement) {
      this[internalsKey] = element.attachInternals();
    }

`;

for (const property of ariaMetadata) {
  if (!property.hasElementInternalsMember) continue;

  const typeDef = types.get(property.idlName);
  finalString += getterSetterTemplate(property, typeDef);
}

finalString += `
}
`;

writeFileSync('src/wrapped-internals.ts', finalString);

execSync('pnpm biome check --fix');
