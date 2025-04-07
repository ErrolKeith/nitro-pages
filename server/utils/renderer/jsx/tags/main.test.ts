import { it, expect } from "vitest";
import { makeMain, MainConfig } from "./main";

it("can make a main tag", () => {
  const mainTestConfig: MainConfig = {
    props: {},
    children: [],
  };
  const mainTest = makeMain(mainTestConfig);
  expect(mainTestConfig).toMatchSnapshot();
});
