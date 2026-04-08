export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Aryabhatta Educations",
    alternateName: ["Aryabhatta Educations Coaching Center", "Aryabhatta Educations Coaching"],
    url: "https://www.aryabhattaeducations.in",
    logo: "https://www.aryabhattaeducations.in/assets/logo.png",
    description:
      "Aryabhatta Educations is a premier coaching center for classes 6 to 12, providing expert coaching for CBSE and CHSE boards with personalized learning and proven results.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Dhenkikote",
      addressLocality: "Keonjhar",
      addressRegion: "Odisha",
      postalCode: "758025",
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
    email: "info@aryabhattaeducations.in",
    sameAs: [
      "https://www.instagram.com/aryabhattaeducations",
      "https://www.facebook.com/aryabhattaeducations",
      "https://www.youtube.com/@aryabhattaeducations",
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
    name: "Aryabhatta Educations",
    image: "https://www.aryabhattaeducations.in/assets/logo.png",
    url: "https://www.aryabhattaeducations.in",
    telephone: "+91-98765-43210",
    email: "info@aryabhattaeducations.in",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Dhenkikote",
      addressLocality: "Keonjhar",
      addressRegion: "Odisha",
      postalCode: "758025",
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
    name: "Aryabhatta Educations",
    alternateName: "Aryabhatta Educations Coaching",
    url: "https://www.aryabhattaeducations.in",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.aryabhattaeducations.in/?q={search_term_string}",
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
