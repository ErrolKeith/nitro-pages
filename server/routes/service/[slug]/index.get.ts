import { clientGlobals } from "~/test-data";
import { ServiceRouteContext } from "~/types";
import { render } from "~/utils/page-renderer/page";

const servicesContext: ServiceRouteContext[] = [
  {
    slug: "phenominal-service",
    title: "A Phenominal Service",
    heroText: `A completely phenominal service being sold.`,
  },
  {
    slug: "unique-product",
    title: "A Unique Product",
    heroText: `A completely unique product being sold.`,
  },
];

function getServiceBySlug(slug: string): ServiceRouteContext | undefined {
  return servicesContext.find((service) => service.slug === slug);
}

export default defineEventHandler((event) => {
  const slug = getRouterParam(event, "slug");
  const page = getServiceBySlug(slug);

  if (!page) {
    return render({
      type: "404",
      clientGlobals,
    });
  }

  return render({
    type: "service",
    clientGlobals,
    pageContext: page,
  });
});
