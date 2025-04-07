import { SiteGlobals } from "~/types";
import { TemplateType } from "../jsx/template";

export interface PageContext {
  template: TemplateType;
  slug: string;
  title: string;
  categories: string[];
  content: PageContentSection[];
}

export interface BaseRenderConfig {
  template: TemplateType;
  clientGlobals: SiteGlobals;
  pageContext: PageContext;
}

export interface PageRenderConfig extends BaseRenderConfig {
  template: "page" | "internal" | "post" | "index";
}

export type HomeRenderConfig = Omit<BaseRenderConfig, "template">;
