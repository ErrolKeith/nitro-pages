// TODO: everything in this file should be DB data.
import { Globals, PageRouteContext } from "../types";
const businessId = "4efb01e4-7ab4-42cb-9cdf-7cfe9b58a5b1";

const randomServiceCategory = "service";
const randomProductCategory = "product";
const randomBusinessClient: Globals = {
  businessId,
  siteId: "23bad6e0-6b06-43d5-9c45-8a42fdf38046",
  companyName: "Operatin Bidness",
  phoneNumber: "5554443333",
};

const globalsCollection: Globals[] = [randomBusinessClient];

const pageCollection: PageRouteContext[] = [
  {
    slug: "",
    title: globalsCollection.find(
      (global) => global.businessId === randomBusinessClient.businessId
    ).companyName,
    categories: [],
  },
  {
    slug: "about",
    title: "About",
    categories: [],
  },
  {
    slug: "contact",
    title: "Contact",
    categories: [],
  },
  {
    slug: "phenominal-service",
    title: "A Phenominal Service",
    categories: [randomServiceCategory],
  },
  {
    slug: "secondary-service",
    title: "A Secondary Service",
    categories: [randomServiceCategory],
  },
  {
    slug: "unique-product",
    title: "A Unique Product",
    categories: [randomProductCategory],
  },
  {
    slug: "secondary-product",
    title: "A Secondary Product",
    categories: [randomProductCategory],
  },
];

function getPageCollection(): PageRouteContext[] {
  return pageCollection;
}

function getGlobalsByBusinessId(id: string) {
  return globalsCollection.find(
    (global) => (global.businessId = randomBusinessClient.businessId)
  );
}

function getPageBySlug(slug: string): PageRouteContext | undefined {
  return pageCollection.find((page) => page.slug === slug);
}

function getCategoryIndex(category: string) {
  return pageCollection.filter((page) => {
    if (page.categories.includes(category)) return true;
    return false;
  });
}

function getCategoryPageBySlug(
  category: string,
  slug: string
): PageRouteContext | undefined {
  const pagesWithCategory = getCategoryIndex(category);
  return pagesWithCategory.find((page) => page.slug === slug);
}

export {
  getCategoryPageBySlug,
  getCategoryIndex,
  getGlobalsByBusinessId,
  getPageBySlug,
  getPageCollection,
  randomBusinessClient,
};
