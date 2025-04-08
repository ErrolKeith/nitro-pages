import { it, expect } from "vitest";
import { makeAnchor, AnchorConfig } from "./a";

it("can make an anchor tag", () => {
  const anchorTestConfig: AnchorConfig = {
    props: {
      href: "#",
      target: "_self",
      className: "a1-test",
    },
    children: "intenral link",
  };
  const anchorTest = makeAnchor(anchorTestConfig);
  expect(anchorTest).toMatchSnapshot();
});
