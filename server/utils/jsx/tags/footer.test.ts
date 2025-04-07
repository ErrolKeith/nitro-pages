import { it, expect } from "vitest";
import { makeFooter, FooterConfig } from "./footer";

it("can make a footer tag", () => {
  const footerTestConfig: FooterConfig = {
    props: {
      className: "footer-class",
    },
    children: [],
  };
  const footerTest = makeFooter(footerTestConfig);
  expect(footerTest).toMatchSnapshot();
});
