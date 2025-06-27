import type { SiteGlobals } from "~/types";
import type {
  HomeRenderConfig,
  BaseRenderConfig,
  PageRenderConfig,
} from "./types";
import { renderToString } from "react-dom/server";
import { makeHtml } from "~/utils/jsx/tags/html";
import { makeParagraph } from "~/utils/jsx/tags/p";
import { makeHead } from "~/utils/jsx/tags/head";
import { makeMain } from "~/utils/jsx/tags/main";

function makeTemplate(config: BaseRenderConfig) {
  const { siteId } = config.clientGlobals;
  const { content, title } = config.pageContext;

  const pageContent = content.map((content) => {
    console.log(content);
    return makeParagraph({
      text: `Template type: ${config.pageContext.template}`,
    });
  });

  return makeHtml({
    props: {
      ["data-site-id"]: siteId,
    },
    children: [
      makeHead({ props: {}, children: [makeTitle({ title })] }),
      makeMain({ props: {}, children: pageContent }),
    ],
  });
}

function renderTemplate(config: BaseRenderConfig) {
  return renderToString(makeTemplate(config));
}

export function renderHome(config: HomeRenderConfig) {
  return renderTemplate({
    clientGlobals: config.clientGlobals,
    pageContext: config.pageContext,
  });
}

export function render404(siteGlobals: SiteGlobals) {
  return renderTemplate({
    clientGlobals: siteGlobals,
    pageContext: {
      template: "404",
      slug: "404",
      title: "Page Not Found",
      head: [],
      content: [],
    },
  });
}

export function renderPage(config: PageRenderConfig) {
  return renderTemplate({
    clientGlobals: config.clientGlobals,
    pageContext: config.pageContext,
  });
}
