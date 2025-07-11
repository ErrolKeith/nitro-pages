import {
  getGlobalsByBusinessId,
  getPageBySlug,
  randomBusinessClient,
} from "~/seed-data";
import { renderPage } from "~/utils/renderer/renderer";

export default defineEventHandler((event) => {
  const { slug } = getRouterParams(event);
  const page = getPageBySlug(slug);

  if (!page) {
    return sendRedirect(event, "/404", 307);
  }

  const clientGlobals = getGlobalsByBusinessId(randomBusinessClient.businessId);

  return renderPage({
    template: "page",
    clientGlobals,
    pageContext: page,
  });
});
