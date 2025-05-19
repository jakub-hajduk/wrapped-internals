export interface PropertyMetadata {
  name: string;
  idlName?: string;
  hasElementInternalsMember: boolean;
  description: string;
  compat: CompatData;
  fullDescription: FullDescription;
  usedInRoles: string[];
  relatedConcepts: string[];
  inheritsIntoRoles: string[];
  type: Type;
}

export interface CompatData {
  status: CompatStatus | null;
  support: BrowserSupport | null;
}

export interface CompatStatus {
  deprecated: boolean;
  experimental: boolean;
  standard_track: boolean;
}

export interface BrowserSupport {
  chrome: BrowserVersion;
  chrome_android: BrowserVersion;
  edge: BrowserVersion;
  firefox: BrowserVersion;
  firefox_android: BrowserVersion;
  ie: BrowserVersion;
  oculus: BrowserVersion;
  opera: BrowserVersion;
  opera_android: BrowserVersion;
  safari: BrowserVersion;
  safari_ios: BrowserVersion;
  samsunginternet_android: BrowserVersion;
  webview_android: BrowserVersion;
  webview_ios: BrowserVersion;
}

export type BrowserVersion = {
  version_added: false | string;
};

export interface FullDescription {
  markdown: string;
  raw: string;
}

export interface Type {
  type: string;
  description: string;
  values: Value[];
}

export interface Value {
  name: string;
  description: string;
  default: boolean;
}
