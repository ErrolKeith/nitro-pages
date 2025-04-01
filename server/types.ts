export interface Globals {
  siteId: string;
  companyName: string;
  phoneNumber: string;
}

export interface PageRouteContext {
  slug: string;
  title: string;
  heroText: string;
}

export interface ServiceRouteContext extends PageRouteContext {}

export interface NotFoundRenderConfig {
  type: "404";
  clientGlobals: Globals;
}

export interface PageRenderConfig {
  type: "page";
  clientGlobals: Globals;
  pageContext: PageRouteContext;
}

export interface ServiceRenderConfig {
  type: "service";
  clientGlobals: Globals;
  pageContext: ServiceRouteContext;
}

export type RenderConfig =
  | NotFoundRenderConfig
  | PageRenderConfig
  | ServiceRenderConfig;
