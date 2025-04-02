import { RenderConfig } from "../../types";
import { pageTemplate } from "./templates/page";
import { pageNotFoundTemplate } from "./templates/page-not-found";

function render(config: RenderConfig) {
  if (config.type === "page") {
    return pageTemplate({
      siteId: config.clientGlobals.siteId,
      seoTitle: `${config.clientGlobals.companyName} | ${config.pageContext.title}`,
      title: config.clientGlobals.companyName,
    });
  }

  return pageNotFoundTemplate({
    siteId: config.clientGlobals.siteId,
    companyName: config.clientGlobals.companyName,
  });
}

export { render };
