// TODO: everything in this file should be DB data.
import { Globals, PageRouteContext } from "../types";

const randomBusinessClient = {
  businessId: "4efb01e4-7ab4-42cb-9cdf-7cfe9b58a5b1",
  siteId: "23bad6e0-6b06-43d5-9c45-8a42fdf38046",
  companyName: "Operatin Bidness",
  phone: "5554443333",
};

const globalsCollection: Globals[] = [
  {
    businessId: randomBusinessClient.businessId, //primary key
    siteId: randomBusinessClient.siteId,
    companyName: randomBusinessClient.companyName,
    phoneNumber: randomBusinessClient.phone,
  },
];

const categoriesCollection = [
  {
    businessId: "4efb01e4-7ab4-42cb-9cdf-7cfe9b58a5b1", // foreign-key
    slug: "service",
    siteId: "23bad6e0-6b06-43d5-9c45-8a42fdf38046",
  },
  {
    businessId: "4efb01e4-7ab4-42cb-9cdf-7cfe9b58a5b1", // foreign-key
    slug: "product",
    siteId: "23bad6e0-6b06-43d5-9c45-8a42fdf38046",
  },
];

const serviceCategory = "service";
const productCategory = "product";
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
