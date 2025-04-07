import { it, expect } from "vitest";
import { makeHtml, HtmlConfig } from "./html";

it("can make an html tag", () => {
  const htmlTestConfig: HtmlConfig = {
    props: {
      ["data-site-id"]: "1234235",
    },
    children: [],
  };
  const htmlTest = makeHtml(htmlTestConfig);
  expect(htmlTest).toMatchSnapshot();
});
