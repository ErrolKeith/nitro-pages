import { TemplateConfig } from "./types";
import { makeHtml } from "../tags/html";
import { makeHead } from "../tags/head";
import { makeMain } from "../tags/main";
import { makeTitle } from "../tags/title";

export function makePageTemplate(config: TemplateConfig) {
  const { siteId, seoTitle, content } = config;

  return makeHtml({
    props: {
      ["data-site-id"]: siteId,
    },
    children: [
      makeHead({ props: {}, children: [makeTitle({ title: seoTitle })] }),
      makeMain({ props: {}, children: [] }),
    ],
  });
}
