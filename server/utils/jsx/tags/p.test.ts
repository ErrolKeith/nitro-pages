import { it, expect } from "vitest";
import { makeParagraph, ParagraphConfig } from "./p";

it("can make a p tag", () => {
  const pTestConig: ParagraphConfig = {
    text: "lorem ipsum",
  };
  const pTest = makeParagraph(pTestConig);
  expect(pTest).toMatchSnapshot();
});
