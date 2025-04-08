import { it, expect } from "vitest";
import { makePageTemplate } from "./page";
import { TemplateConfig } from "./types";

it("can make a page", () => {
  const testPageTemplateConfig: TemplateConfig = {
    type: "internal",
    siteId: "124246796763",
    companyName: "sample company name",
    seoTitle: "sample internal",
    content: [],
  };
  const templateInternalTest = makePageTemplate(testPageTemplateConfig);
  expect(templateInternalTest).toMatchSnapshot();
});
