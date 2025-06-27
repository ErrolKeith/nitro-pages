import { SiteGlobals } from "~/types";

const templates = ["home", "page", "internal", "404", "index", "post"] as const;
type TemplateType = (typeof templates)[number];

export interface PageContext {
  template: TemplateType;
  slug: string;
  title: string;
  head: unknown[];
  content: unknown[];
}

export interface BaseRenderConfig {
  clientGlobals: SiteGlobals;
  pageContext: PageContext;
}

export interface PageRenderConfig extends BaseRenderConfig {
  template: "page" | "internal" | "post" | "index";
}

export type HomeRenderConfig = Omit<BaseRenderConfig, "template">;
