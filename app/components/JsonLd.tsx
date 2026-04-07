export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Al Syed Group",
    alternateName: ["Al Syed Company", "AlSyed Group", "Al Syed Group KSA"],
    url: "https://www.alsyedgroup.net",
    logo: "https://www.alsyedgroup.net/assets/alsyed-logo.png",
    image: "https://www.alsyedgroup.net/assets/alsyed-logo.png",
    description:
      "Al Syed Group is a leading construction, demolition, and engineering services company in Saudi Arabia, delivering excellence across Dammam, Riyadh, Jeddah, and all major cities in KSA.",
    foundingLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dammam",
        addressRegion: "Eastern Province",
        postalCode: "31972",
        addressCountry: "SA",
      },
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Dammam",
      addressLocality: "Dammam",
      addressRegion: "Eastern Province",
      postalCode: "31972",
      addressCountry: "SA",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+966-567-220-786",
        contactType: "sales",
        areaServed: "SA",
        availableLanguage: ["English", "Arabic"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+966-536-649-777",
        contactType: "customer service",
        areaServed: "SA",
        availableLanguage: ["English", "Arabic"],
      },
    ],
    email: "info@alsyedgroup.net",
    sameAs: [
      "https://www.instagram.com/alsyedgroup.ksa",
      "https://www.facebook.com/alsyedgroup",
      "https://www.linkedin.com/company/alsyedgroup",
      "https://twitter.com/alsyedgroup",
    ],
    areaServed: {
      "@type": "Country",
      name: "Saudi Arabia",
    },
    knowsAbout: [
      "Construction",
      "Demolition",
      "Heavy Equipment Rental",
      "Rigging and Lifting",
      "Plant Maintenance",
      "Logistics",
      "Technical Solutions",
      "QHSE",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: "Al Syed Group",
    alternateName: "Al Syed Company",
    image: "https://www.alsyedgroup.net/assets/alsyed-logo.png",
    url: "https://www.alsyedgroup.net",
    telephone: "+966-536-649-777",
    email: "info@alsyedgroup.net",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Dammam",
      addressLocality: "Dammam",
      addressRegion: "Eastern Province",
      postalCode: "31972",
      addressCountry: "SA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 26.4207,
      longitude: 50.0888,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
        ],
        opens: "08:00",
        closes: "17:00",
      },
    ],
    priceRange: "$$",
    areaServed: [
      { "@type": "City", name: "Dammam" },
      { "@type": "City", name: "Riyadh" },
      { "@type": "City", name: "Jeddah" },
      { "@type": "City", name: "Jubail" },
      { "@type": "City", name: "Yanbu" },
      { "@type": "City", name: "Mecca" },
      { "@type": "City", name: "Medina" },
      { "@type": "Country", name: "Saudi Arabia" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Construction & Engineering Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Construction Services",
            description:
              "General construction, steel works, mechanical & electrical, plumbing, fabrication, and interior design services in Saudi Arabia.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Demolition Services",
            description:
              "Safe, efficient, and environmentally responsible demolition works across Saudi Arabia including site clearance, debris removal, and backfilling.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Heavy Equipment Rental",
            description:
              "Heavy equipment and machinery rental for construction and industrial projects across Saudi Arabia.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Rigging & Heavy Lifting",
            description:
              "Professional rigging and heavy lifting services for industrial and construction projects in KSA.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Plant Maintenance",
            description:
              "Comprehensive plant maintenance and industrial facility services in Saudi Arabia.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Logistics & Transportation",
            description:
              "Logistics and heavy transportation services across Saudi Arabia.",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function WebSiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Al Syed Group",
    alternateName: "AlSyed Group",
    url: "https://www.alsyedgroup.net",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.alsyedgroup.net/?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
