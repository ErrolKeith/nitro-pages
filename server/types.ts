export interface BusinessClientGlobals {
  businessId: string; //uuidv4
  sites: string[]; //uuidv4[]
  companyName: string;
  phoneNumber: string;
}

export interface SiteGlobals {
  businessId: string; //uuidv4
  siteId: string;
  companyName: string;
  phoneNumber: string;
  blogSettings: {
    blogTitle: string;
  };
}
