import { it, expect } from "vitest";
import { makeHomeTemplate } from "./home";
import { TemplateConfig } from "./types";

it("can make a home page", () => {
  const testTemplateConfig: TemplateConfig = {
    type: "home",
    siteId: "124246796763",
    companyName: "sample company name",
    seoTitle: "sample home",
    content: [],
  };
  const templateHomeTest = makeHomeTemplate(testTemplateConfig);
  expect(templateHomeTest).toMatchSnapshot();
});
