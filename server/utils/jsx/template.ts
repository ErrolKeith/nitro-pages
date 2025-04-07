import { jsx } from "react/jsx-runtime";
import { makeHomeTemplate } from "./templates/home";

const templates = ["home", "page", "internal", "404", "index", "post"] as const;
type TemplateType = (typeof templates)[number];

export interface TemplateConfig {
  type: TemplateType;
  siteId: string;
  companyName: string;
  seoTitle: string;
  content: any[];
}

function makeTemplate(config: TemplateConfig) {
  const { type } = config;

  switch (type) {
    case "home":
      return makeHomeTemplate(config);
    case "page":
      return makePageTemplate(config);
    case "internal":
      return makeInternalTemplate(config);
    case "404":
      return make404Template(config);
    default:
      createError(`template of type ${type} has not been implemented.`);
  }
}

function makePageTemplate(config: TemplateConfig) {
  const { companyName, siteId, seoTitle } = config;

  return jsx("html", {
    children: [
      // makeHead({
      //   children: [makeTitle(seoTitle)],
      // }),
      // makeBody({
      //   children: [
      //     makeMain({
      //       children: [makeHeading(1, `PAGE TEMPLATE for ${companyName}`)],
      //     }),
      //   ],
      //   ["data-site-id"]: siteId,
      // }),
    ],
  });
}

function makeInternalTemplate(config: TemplateConfig) {
  const { companyName, siteId, seoTitle } = config;
  return jsx("html", {
    children: [
      // makeHead({
      //   children: [makeTitle(seoTitle)],
      // }),
      // makeBody({
      //   children: [
      //     makeMain({
      //       children: [makeHeading(1, `INTERNAL TEMPLATE for ${companyName}`)],
      //     }),
      //   ],
      //   ["data-site-id"]: siteId,
      // }),
    ],
  });
}
function make404Template(config: TemplateConfig) {
  const { companyName, siteId, seoTitle } = config;
  return jsx("html", {
    children: [
      // makeHead({
      //   children: [makeTitle(seoTitle)],
      // }),
      // makeBody({
      //   children: [
      //     makeMain({
      //       children: [makeHeading(1, `404 TEMPLATE for ${companyName}`)],
      //     }),
      //   ],
      //   ["data-site-id"]: siteId,
      // }),
    ],
  });
}

export { makeTemplate, templates, TemplateType };
