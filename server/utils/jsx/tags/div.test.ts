import { it, expect } from "vitest";
import { makeDiv, DivConfig } from "./div";

it("can make a div", () => {
  const divTestConfig: DivConfig = {
    props: {
      className: "div-class",
      ["data-div-id"]: "test-div-id-att",
    },
    children: [],
  };
  const divTest = makeDiv(divTestConfig);
  expect(divTest).toMatchSnapshot();
});
