import { TemplateConfig } from "./types";

export function makeHomeTemplate(config: TemplateConfig) {
  const { siteId, seoTitle, content } = config;

  const pageContent = content.map((content) => {
    return makeParagraph({ text: content.type });
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
