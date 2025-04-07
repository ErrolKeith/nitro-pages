import { it, expect } from "vitest";
import { makeMeta, MetaProps } from "./meta";

it("can make a mata tag", () => {
  const metaTestConfig: MetaProps = {
    name: "keywords",
    content: "asdfasdfs",
  };
  const metaTest = makeMeta(metaTestConfig);
  expect(metaTest).toMatchSnapshot();
});
