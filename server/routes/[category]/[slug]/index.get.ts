import { PageRouteContext } from "~/types";
import { clientGlobals, getCategoryBySlug, pages } from "~/seed-data";
import { render } from "~/utils/page-renderer/renderer";

export default defineEventHandler((event) => {
  const { category, slug } = getRouterParams(event);

  if (!category) {
    return render({
      type: "404",
      clientGlobals,
    });
  }

  const page = getCategoryBySlug(category, slug);

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
