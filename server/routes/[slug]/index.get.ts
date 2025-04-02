import {
  getGlobalsByBusinessId,
  getPageBySlug,
  randomBusinessClient,
} from "~/seed-data";
import { render } from "~/utils/page-renderer/renderer";

export default defineEventHandler((event) => {
  const { slug } = getRouterParams(event);
  const page = getPageBySlug(slug);
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
