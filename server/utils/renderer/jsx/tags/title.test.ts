import { it, expect } from "vitest";
import { makeTitle, TitleProps } from "./title";

it("can make a title tag", () => {
  const titleTestProps: TitleProps = { title: "test title" };
  const titleTest = makeTitle(titleTestProps);
  expect(titleTest).toMatchSnapshot();
});
