import { it, expect } from "vitest";
import { makeHead, HeadConfig } from "./head";

it("can make a head tag", () => {
  const headTestConfig: HeadConfig = {
    props: {},
    children: [],
  };
  const headTest = makeHead(headTestConfig);
  expect(headTest).toMatchSnapshot();
});
