export type NavigationItem = {
  label: string;
  href: string;
};

export type GlobalContent = {
  siteUrl: string;
  businessName: string;
  legalName: string;
  tagline: string;
  address: {
    street: string;
    postalCode: string;
    city: string;
    country: string;
  };
  contact: {
    phone: string;
    email: string;
  };
  openingHours: string[];
  paymentMethods: string[];
  publicTransport: string[];
  socials: {
    instagram?: string;
    facebook?: string;
  };
  geo: {
    latitude: number;
    longitude: number;
  };
};

export type SeoContent = {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
};

export type Breadcrumb = {
  name: string;
  href: string;
};

export type StructuredData = Record<string, unknown>;
