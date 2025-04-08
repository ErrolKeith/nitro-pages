import { TemplateConfig } from "./types";
import { makeHtml } from "../tags/html";
import { makeHead } from "../tags/head";
import { makeMain } from "../tags/main";
import { makeTitle } from "../tags/title";

export function makeHomeTemplate(config: TemplateConfig) {
  const { siteId, seoTitle, content } = config;

  const pageContent = content.map((content) => {
    return makeParagraph({ text: "home" });
  });

  return makeHtml({
    props: {
      ["data-site-id"]: siteId,
    },
    children: [
      makeHead({ props: {}, children: [makeTitle({ title: seoTitle })] }),
      makeMain({ props: {}, children: pageContent }),
    ],
  });
}
