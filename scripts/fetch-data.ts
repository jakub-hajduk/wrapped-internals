import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import * as cheerio from 'cheerio';
import TurndownService from 'turndown';

// WAI-ARIA 1.1: https://www.w3.org/TR/wai-aria-1.1/
// WAI-ARIA 1.3: https://w3c.github.io/aria/ (EDITOR's DRAFT)

const turndown = new TurndownService();

function getRoot(path: string = process.cwd()): string {
  let currentPath = path;
  let i = 0;

  while (i < 10) {
    const packageJsonPath = resolve(currentPath, 'pnpm-lock.json');

    if (existsSync(packageJsonPath)) {
      return currentPath;
    }

    currentPath = dirname(currentPath);
    i++;
  }

  return '';
}

const file = resolve(getRoot(), '.cache/cache.html');

function ensureWriteFile(file: string, contents: string) {
  if (!existsSync(file)) {
    mkdirSync(dirname(file as string), { recursive: true });
  }

  writeFileSync(file, contents);
}

async function fetchData() {
  const page = await fetch('https://w3c.github.io/aria/');

  const html = await page.text();
  ensureWriteFile(file, html);
  return html;
}

async function readData() {
  const html = readFileSync(file, 'utf-8');
  return html;
}

async function fetchMdnCompatData() {
  const compatDataResponse = await fetch(
    'https://unpkg.com/@mdn/browser-compat-data',
  );
  const compatData = await compatDataResponse.json();

  const elementInternalsCompat = compatData.api.ElementInternals;

  return elementInternalsCompat;
}

fetchMdnCompatData();

async function main() {
  const html = existsSync(file) ? await readData() : await fetchData();

  const mdnCompatData = await fetchMdnCompatData();

  const $ = cheerio.load(html);
  const idlToAttr = new Map();

  const attrToIdl = new Map();
  const typeDescriptions = new Map();

  const out = [];

  const ariaAttributeCorespondence = $(
    '#accessibilityroleandproperties-correspondence table tr',
  );

  for (const row of ariaAttributeCorespondence) {
    const idl = $(row).find('td:nth-child(1)').text();
    const attr = $(row).find('td:nth-child(2)').text();

    idlToAttr.set(idl, attr);
    attrToIdl.set(attr, idl);
  }

  const valuesDescriptions = $('#propcharacteristic_value dl > dt');

  for (const valueDescription of valuesDescriptions) {
    const typeName = $(valueDescription).text();
    const typeDescription = $(valueDescription)
      .find('+ dd')
      .text()
      .split('\n')
      .map((t) => t.trim())
      .join('\n')
      .trim();

    typeDescriptions.set(typeName, typeDescription);
  }

  const ElementInternalsInterfaceMembers = Array.from(
    $('#ARIAMixin pre code .idlAttribute .idlName').map((_, member) =>
      $(member).text(),
    ),
  );

  const propertyDescriptions = $('.property.notoc');

  for (const property of propertyDescriptions) {
    const name = $(property).find('.property-name > code').text();
    const idlName = attrToIdl.get(name);
    const hasElementInternalsMember =
      ElementInternalsInterfaceMembers.includes(idlName);
    const shortDescription = $(property)
      .find('.property-description p:nth-child(1)')
      .text()
      .split('\n')
      .map((l) => l.trim())
      .join(' ')
      .trim();
    const fullDescription = $(property).find('.property-description');
    const fullDescriptionRaw = $(property)
      .find('.property-description')
      .text()
      .split('\n')
      .map((l) => l.trim())
      .join('\n')
      .replace(/\n\n\n/g, '\n\n')
      .replace(/(\S)(\n)(\S)/g, '$1 $3')
      .replace(/^\n\n/, '')
      .replace(/\n$/, '');

    const fullDescriptionMarkdown = turndown.turndown(
      fullDescription.html() || '',
    );

    let usedInRoles = Array.from(
      $(property)
        .find('table.def td.property-applicability ul li')
        .map((_, el) => $(el).text()),
    );

    if (usedInRoles.length === 0) {
      usedInRoles = [
        $(property).find('table.def td.property-applicability').text(),
      ];
    }

    let relatedConcepts = Array.from(
      $(property)
        .find('table.def td.property-related ul li')
        .map((_, el) => $(el).text().trim()),
    );

    if (relatedConcepts.length === 0) {
      relatedConcepts = [
        $(property)
          .find('table.def td.property-related')
          .text()
          .split('\n')
          .map((t) => t.trim())
          .join(' ')
          .trim(),
      ];
    }

    if (relatedConcepts[0] === '') {
      relatedConcepts = [];
    }

    const inheritsIntoRoles = Array.from(
      $(property)
        .find('table.def td.property-descendants ul li')
        .map((_, el) => $(el).text()),
    );

    const valueType = $(property).find('table.def td.property-value').text();
    const valueTypeDescription = typeDescriptions.get(valueType);

    const valueTypeValuesDescriptions = Array.from(
      $(property)
        .find('table.def')
        .has('caption:contains(Values)')
        .find('tbody tr')
        .map((_, tr) => {
          const valueName = $(tr)
            .find('.value-name')
            .text()
            .replace('(default)', '')
            .trim();
          const valueDescription = $(tr)
            .find('.value-description')
            .text()
            .split('\n')
            .map((t) => t.trim())
            .join(' ')
            .trim();
          const isDefault = $(tr).has('.value-name > .default').length > 0;
          return {
            name: valueName,
            description: valueDescription,
            default: isDefault,
          };
        }),
    );

    const propertyCompatData = mdnCompatData[idlName];

    const compat = {
      status: propertyCompatData?.__compat?.status || null,
      support: propertyCompatData?.__compat?.support || null,
    };

    out.push({
      name,
      idlName,
      hasElementInternalsMember,
      description: shortDescription,
      compat,
      fullDescription: {
        markdown: fullDescriptionMarkdown,
        raw: fullDescriptionRaw,
      },
      usedInRoles,
      relatedConcepts,
      inheritsIntoRoles,
      type: {
        type: valueType,
        description: valueTypeDescription,
        values: valueTypeValuesDescriptions,
      },
    });
  }

  ensureWriteFile(
    resolve(getRoot(), 'src/aria-metadata.json'),
    JSON.stringify(out, null, 2),
  );
}

main();
