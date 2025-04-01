import { clientGlobals, getPageBySlug } from "~/seed-data";
import { render } from "~/utils/page-renderer/renderer";

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
    pageContext: page,
  });
});
