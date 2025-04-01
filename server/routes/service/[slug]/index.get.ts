import { clientGlobals } from "~/test-data";
import { render } from "~/utils/page-renderer/page";

const servicesContext = [
  {
    slug: "phenominal-service",
    title: "A Phenominal Service",
    heroText: `A completely phenominal service being sold.`,
    cta: "10% off the first month of a phenominal service.",
  },
  {
    slug: "unique-product",
    title: "A Unique Product",
    heroText: `A completely unique product being sold.`,
    cta: "10% off a unique product",
  },
];

export default defineEventHandler((event) => {
  const { services } = clientGlobals;
  const serviceSlug = getRouterParam(event, "slug");

  if (!services.includes(serviceSlug)) {
    return render({
      type: "404",
      clientGlobals,
    });
  }

  return render({
    type: "service",
    clientGlobals,
    pageContext: servicesContext.find(
      (context) => context.slug === serviceSlug
    ),
  });
});
