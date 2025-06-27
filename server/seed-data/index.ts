// TODO: everything in this file should be DB data.
import { PageContext } from "~/utils/renderer/types";
import { SiteGlobals } from "../types";

const businessId = "4efb01e4-7ab4-42cb-9cdf-7cfe9b58a5b1";

const randomBusinessClient: SiteGlobals = {
  businessId,
  siteId: "23bad6e0-6b06-43d5-9c45-8a42fdf38046",
  companyName: "Operatin Bidness",
  phoneNumber: "5554443333",
  blogSettings: {
    blogTitle: "Blog Posts",
  },
};

const globalsCollection: SiteGlobals[] = [randomBusinessClient];

interface PageCollection extends PageContext {
  type: "page" | "post";
}

const pageCollection: PageCollection[] = [
  {
    type: "page",
    template: "home",
    slug: "",
    title: "Home Page",
    head: [],
    content: [
      {
        type: "hero",
        title: randomBusinessClient.companyName,
        callout: "We Be Operatin",
      },
      {
        type: "featured",
        title: "Featured",
        callout: "We Be Operatin",
      },
      {
        type: "index-featured",
        title: "Blog Index",
        callout: "We Be Operatin",
      },
      {
        type: "cta",
        title: "CTA",
        callout: "We Be Operatin",
      },
      {
        type: "index-recent",
        title: "Recent index items",
        callout: "We Be Operatin",
      },
      {
        type: "subscribe",
        title: "Subscribe",
        callout: "We Be Operatin",
      },
    ],
  },
  {
    type: "page",
    template: "page",
    slug: "about",
    title: "About",
    head: [],
    content: [],
  },
  {
    type: "page",
    template: "page",
    slug: "contact",
    title: "Contact",
    head: [],
    content: [],
  },
  {
    type: "post",
    template: "internal",
    slug: "phenominal-service",
    title: "A Phenominal Service",
    head: [],
    content: [],
  },
  {
    type: "post",
    template: "internal",
    slug: "secondary-service",
    title: "A Secondary Service",
    head: [],
    content: [],
  },
  {
    type: "post",
    template: "internal",
    slug: "unique-product",
    title: "A Unique Product",
    head: [],
    content: [],
  },
  {
    type: "post",
    template: "internal",
    slug: "secondary-product",
    title: "A Secondary Product",
    head: [],
    content: [],
  },
];

function getPageCollection(): PageCollection[] {
  return pageCollection;
}

function getBlogIndex() {
  return pageCollection.filter((page) => page.type === "post");
}

function getGlobalsByBusinessId(id: string) {
  return globalsCollection.find((global) => (global.businessId = id));
}

function getHomePage(): PageContext | undefined {
  return pageCollection.find((page) => page.slug === "");
}

function getPageBySlug(slug: string): PageContext | undefined {
  return pageCollection.find((page) => page.slug === slug);
}

export {
  getBlogIndex,
  getGlobalsByBusinessId,
  getHomePage,
  getPageBySlug,
  getPageCollection,
  randomBusinessClient,
};
