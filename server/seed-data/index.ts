import type { Globals, PageRouteContext } from "../types";
// TODO: everything in this file should be Db data.

const clientGlobals: Globals = {
  siteId: "4efb01e4-7ab4-42cb-9cdf-7cfe9b58a5b1",
  companyName: "Operatin Bidness",
  phoneNumber: "5554443333",
};

const serviceCategory = "service";
const productCategory = "product";

const pages: PageRouteContext[] = [
  {
    slug: "",
    title: clientGlobals.companyName,
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
    categories: [serviceCategory],
  },
  {
    slug: "secondary-service",
    title: "A Secondary Service",
    categories: [serviceCategory],
  },
  {
    slug: "unique-product",
    title: "A Unique Product",
    categories: [productCategory],
  },
  {
    slug: "secondary-product",
    title: "A Secondary Product",
    categories: [productCategory],
  },
];

function getPageBySlug(slug: string): PageRouteContext | undefined {
  return pages.find((page) => page.slug === slug);
}

function getCategoryIndex(category: string) {
  return pages.filter((page) => {
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
  clientGlobals,
  pages,
  getCategoryPageBySlug,
  getPageBySlug,
  getCategoryIndex,
};
