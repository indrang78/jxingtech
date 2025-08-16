// Base organization schema
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://jxingtech.my/#org",
  "name": "JXING Tech Group Sdn. Bhd.",
  "legalName": "JXING Tech Group Sdn. Bhd.",
  "identifier": "202501026040",
  "url": "https://jxingtech.my/",
  "logo": "https://jxingtech.my/og-image.png",
  "sameAs": [
    "https://my.linkedin.com/company/jxingtech",
    "https://www.facebook.com/people/JXING-TECH/61578691138030/",
    "https://www.instagram.com/jxingtech/"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+60-10-288-2827",
    "contactType": "customer service",
    "email": "hello@jxingtech.my"
  }
};

// Website schema
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://jxingtech.my/#website",
  "url": "https://jxingtech.my/",
  "name": "JXING Tech Group",
  "publisher": {"@id": "https://jxingtech.my/#org"}
};

// Service schema generator
export const createServiceSchema = (serviceName: string, description: string, url: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": serviceName,
  "description": description,
  "provider": {"@id": "https://jxingtech.my/#org"},
  "url": url,
  "serviceType": "Digital Marketing Service"
});

// Breadcrumb schema generator
export const createBreadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

// Combined schema for pages with organization + website
export const createPageSchema = (additionalSchemas: object[] = []) => [
  organizationSchema,
  websiteSchema,
  ...additionalSchemas
];