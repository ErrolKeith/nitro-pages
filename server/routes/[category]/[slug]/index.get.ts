import { clientGlobals, getCategoryBySlug } from "~/seed-data";
import { render } from "~/utils/page-renderer/renderer";

export default defineEventHandler((event) => {
  const { category, slug } = getRouterParams(event);

  if (!category) {
    return render({
      type: "404",
      clientGlobals,
    });
  }

  const pageContext = getCategoryBySlug(category, slug);

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
