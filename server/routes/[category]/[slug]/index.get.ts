import { clientGlobals, getCategoryPageBySlug } from "~/seed-data";
import { render } from "~/utils/page-renderer/renderer";

export default defineEventHandler((event) => {
  const { category, slug } = getRouterParams(event);

  const pageContext = getCategoryPageBySlug(category, slug);

  if (!pageContext) {
    return render({
      type: "404",
      clientGlobals,
    });
  }

  return render({
    type: "page",
    clientGlobals,
    pageContext,
  });
});
