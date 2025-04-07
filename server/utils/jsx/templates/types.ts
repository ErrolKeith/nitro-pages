const templates = ["home", "page", "internal", "404", "index", "post"] as const;
type TemplateType = (typeof templates)[number];

export interface TemplateConfig {
  type: TemplateType;
  siteId: string;
  companyName: string;
  seoTitle: string;
  content: PageContentSection[];
}
