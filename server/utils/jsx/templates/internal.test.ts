import { it, expect } from "vitest";
import { makeInternalTemplate } from "./internal";
import { TemplateConfig } from "./types";

it("can make an internal page", () => {
    const testTemplateConfig: TemplateConfig = {
        type: "internal",
        siteId: "124246796763",
        companyName: "sample company name",
        seoTitle: "sample internal",
        content: [],
      };
      const templateInternalTest = makeInternalTemplate(testTemplateConfig);
      expect(templateInternalTest).toMatchSnapshot();
});
