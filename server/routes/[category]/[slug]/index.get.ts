import {
  getCategoryPageBySlug,
  getGlobalsByBusinessId,
  randomBusinessClient,
} from "~/seed-data";
import { render } from "~/utils/page-renderer/renderer";

export default defineEventHandler((event) => {
  const { category, slug } = getRouterParams(event);
  const page = getCategoryPageBySlug(category, slug);
  const clientGlobals = getGlobalsByBusinessId(randomBusinessClient.businessId);

  if (!page) {
    return render({
      type: "404",
      clientGlobals,
    });
  }

  return render({
    type: "page",
    clientGlobals,
    pageContext: page,
  });
});
