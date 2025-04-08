import { it, expect } from "vitest";
import { makeSection, SectionConfig } from "./section";

it("can make a section tag", () => {
  const sectionTestConfig: SectionConfig = {
    props: {},
    children: [],
  };
  const sectionTest = makeSection(sectionTestConfig);
  expect(sectionTest).toMatchSnapshot();
});
