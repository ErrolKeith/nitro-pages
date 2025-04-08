import {
  getBlogIndex,
  getGlobalsByBusinessId,
  randomBusinessClient,
} from "~/seed-data";
import { renderPage } from "~/utils/renderer/renderer";

export default defineEventHandler((event) => {
  const { slug } = getRouterParams(event);
  const page = getBlogIndex().find((page) => page.slug === slug);

  if (!page) {
    return sendRedirect(event, "/404", 307);
  }

  const clientGlobals = getGlobalsByBusinessId(randomBusinessClient.businessId);

  return renderPage({
    template: "post",
    clientGlobals,
    pageContext: page,
  });
});
