export interface Globals {
  siteId: string;
  companyName: string;
  phoneNumber: string;
}

export interface PageRouteContext {
  slug: string;
  title: string;
  categories: string[];
}

export interface PageNotFoundRenderConfig {
  type: "404";
  clientGlobals: Globals;
}

export interface PageRenderConfig {
  type: "page";
  clientGlobals: Globals;
  pageContext: PageRouteContext;
}

export type RenderConfig = PageRenderConfig | PageNotFoundRenderConfig;
