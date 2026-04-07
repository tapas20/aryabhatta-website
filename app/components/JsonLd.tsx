export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "BrightMind Academy",
    alternateName: ["BrightMind Coaching Center", "BrightMind Academy Coaching"],
    url: "https://www.brightmindacademy.in",
    logo: "https://www.brightmindacademy.in/assets/logo.png",
    description:
      "BrightMind Academy is a premier coaching center for classes 6 to 12, providing expert coaching for CBSE and CHSE boards with personalized learning and proven results.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Education Lane, Near City Center",
      addressLocality: "Bhubaneswar",
      addressRegion: "Odisha",
      postalCode: "751001",
      addressCountry: "IN",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-98765-43210",
        contactType: "admissions",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi", "Odia"],
      },
    ],
    email: "info@brightmindacademy.in",
    sameAs: [
      "https://www.instagram.com/brightmindacademy",
      "https://www.facebook.com/brightmindacademy",
      "https://www.youtube.com/@brightmindacademy",
    ],
    knowsAbout: [
      "CBSE Board Coaching",
      "CHSE Board Coaching",
      "Science Coaching",
      "Mathematics Coaching",
      "JEE Preparation",
      "NEET Preparation",
      "Board Exam Preparation",
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
    "@type": "EducationalOrganization",
    name: "BrightMind Academy",
    image: "https://www.brightmindacademy.in/assets/logo.png",
    url: "https://www.brightmindacademy.in",
    telephone: "+91-98765-43210",
    email: "info@brightmindacademy.in",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Education Lane, Near City Center",
      addressLocality: "Bhubaneswar",
      addressRegion: "Odisha",
      postalCode: "751001",
      addressCountry: "IN",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "07:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "17:00",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Coaching Programs",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Course",
            name: "CBSE Classes 6-10 Coaching",
            description: "Comprehensive coaching for CBSE middle and secondary school students.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Course",
            name: "CBSE Classes 11-12 Science & Commerce",
            description: "Board exam and competitive exam integrated coaching for senior secondary.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Course",
            name: "CHSE Classes 11-12",
            description: "Expert coaching for CHSE board Science and Arts streams.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Course",
            name: "JEE & NEET Preparation",
            description: "Foundation and advanced coaching for competitive entrance exams.",
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
    name: "BrightMind Academy",
    alternateName: "BrightMind Coaching",
    url: "https://www.brightmindacademy.in",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.brightmindacademy.in/?q={search_term_string}",
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
