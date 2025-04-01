export interface BusinessClientGlobalsCollection {
  businessId: string; //uuidv4
  sites: string[]; //uuidv4[]
  companyName: string;
  phoneNumber: string;
}

export interface Globals {
  businessId: string; //uuidv4
  siteId: string;
  companyName: string;
  phoneNumber: string;
}

export interface PageRouteContext {
  slug: string;
  title: string;
  categories: string[];
}

interface PageNotFoundRenderConfig {
  type: "404";
  clientGlobals: Globals;
}

export interface PageRenderConfig {
  type: "page";
  clientGlobals: Globals;
  pageContext: PageRouteContext;
}

export type RenderConfig = PageRenderConfig | PageNotFoundRenderConfig;
