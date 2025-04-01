import { clientGlobals, pages } from "~/seed-data";
import { PageRouteContext } from "~/types";
import { render } from "~/utils/page-renderer/renderer";

function getPageBySlug(slug: string): PageRouteContext | undefined {
  return pages.find((page) => page.slug === slug);
}

export default defineEventHandler((event) => {
  const slug = getRouterParam(event, "slug");
  const page = getPageBySlug(slug);

  if (!page) {
    return render({
      type: "404",
      clientGlobals,
    });
  }

  return render({
    type: "page",
    clientGlobals,
    pageContext: getPageBySlug(slug),
  });
});
