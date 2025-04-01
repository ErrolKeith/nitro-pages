import {
  getCategoryPageBySlug,
  getGlobalsByBusinessId,
  randomBusinessClient,
} from "~/seed-data";
import { render } from "~/utils/page-renderer/renderer";

export default defineEventHandler((event) => {
  const { category, slug } = getRouterParams(event);

  const pageContext = getCategoryPageBySlug(category, slug);

  if (!pageContext) {
    return render({
      type: "404",
      clientGlobals: getGlobalsByBusinessId(randomBusinessClient.businessId),
    });
  }

  return render({
    type: "page",
    clientGlobals: getGlobalsByBusinessId(randomBusinessClient.businessId),
    pageContext,
  });
});
