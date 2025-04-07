import { it, expect } from "vitest";
import { makeBody } from "./body";
import { jsx } from "react/jsx-runtime";

it("can make a body tag", () => {
  const body = makeBody({
    props: {},
    children: [],
  });
  const bodyWithChildren = makeBody({
    props: {},
    children: [jsx("p", { children: "test-body-content" })],
  });
  expect(body).toMatchSnapshot();
  expect(bodyWithChildren).toMatchSnapshot();
});
