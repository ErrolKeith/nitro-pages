import { clientGlobals } from "~/test-data";
import { PageRouteContext } from "~/types";
import { render } from "~/utils/page-renderer/page";

const pages: PageRouteContext[] = [
  {
    slug: "",
    title: clientGlobals.companyName,
    heroText: "Product you need right now",
  },
  {
    slug: "about",
    title: "About",
    heroText: `About ${clientGlobals.companyName}`,
  },
  {
    slug: "contact",
    title: "Contact",
    heroText: `Contact ${clientGlobals.companyName}`,
  },
];

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
