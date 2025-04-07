import { it, expect } from "vitest";
import { makeHeader, HeaderConfig } from "./header";
it("can make a header tag", () => {
  const headerTestConfig: HeaderConfig = {
    props: {},
    children: [],
  };
  const headerTest = makeHeader(headerTestConfig);
  expect(headerTest).toMatchSnapshot();
});
