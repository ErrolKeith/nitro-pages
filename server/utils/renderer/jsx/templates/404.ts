import { TemplateConfig } from "./types";

export function make404Template(config: TemplateConfig) {
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
