import { it, expect } from "vitest";
import { make404Template } from "./404";
import { TemplateConfig } from "./types";

it("can make a 404 page", () => {
  const test404TemplateConfig: TemplateConfig = {
    type: "404",
    siteId: "124246796763",
    companyName: "sample company name",
    seoTitle: "sample 404",
    content: [],
  };
  const template404Test = make404Template(test404TemplateConfig);
  expect(template404Test).toMatchSnapshot();
});
