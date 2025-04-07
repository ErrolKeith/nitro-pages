import { it, expect } from "vitest";
import { makeHeading, HeadingProps } from "./heading";

it("can make heading tags", () => {
  const headingTestProps: HeadingProps = {
    level: 1,
    text: "Sample heading level 1",
  };
  const headingTest = makeHeading(headingTestProps);
  expect(headingTest).toMatchSnapshot(headingTest);
});
