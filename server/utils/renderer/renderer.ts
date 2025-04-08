import { renderToString } from "react-dom/server";
import { HomeRenderConfig, BaseRenderConfig, PageRenderConfig } from "./types";
import { makeTemplate } from "../jsx/template";
import { SiteGlobals } from "~/types";

function render(config: BaseRenderConfig) {
  return renderToString(
    makeTemplate({
      type: config.template,
      siteId: config.clientGlobals.siteId,
      companyName: config.clientGlobals.companyName,
      seoTitle: `${config.pageContext.title} | ${config.clientGlobals.companyName}`,
      content: config.pageContext.content,
    })
  );
}

export function renderHome(config: HomeRenderConfig) {
  return render({
    template: "home",
    clientGlobals: config.clientGlobals,
    pageContext: config.pageContext,
  });
}

export function render404(siteGlobals: SiteGlobals) {
  const { companyName, siteId } = siteGlobals;
  return renderToString(
    makeTemplate({
      type: "404",
      siteId,
      companyName,
      seoTitle: `Page Not Found | ${companyName}`,
      content: [],
    })
  );
}

export function renderPage(config: PageRenderConfig) {
  return render({
    template: config.template,
    clientGlobals: config.clientGlobals,
    pageContext: config.pageContext,
  });
}
