import { clientGlobals, pages } from "~/seed-data";
import { PageRouteContext } from "~/types";
import { render } from "~/utils/page-renderer/renderer";

function getCategoryBySlug(
  category: string,
  slug: string
): PageRouteContext | undefined {
  return pages.find((page) => {
    if (page.slug === slug && page.categories.includes(category)) return true;
    return false;
  });
}

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
