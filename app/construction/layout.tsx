import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Construction Services in Saudi Arabia - General Contractor",
  description:
    "Al Syed Group provides top-quality construction services across Saudi Arabia including general construction, steel & aluminum works, MEP, plumbing, fabrication, gypsum works, asphalt paving, fire safety, land surveying, and interior design in Dammam, Riyadh, Jeddah.",
  keywords: [
    "construction company Saudi Arabia",
    "best construction company in Saudi Arabia",
    "general contractor Dammam",
    "construction services KSA",
    "building contractor Saudi Arabia",
    "steel fabrication Saudi Arabia",
    "MEP services KSA",
    "plumbing contractor Saudi Arabia",
    "gypsum works Saudi Arabia",
    "asphalt paving Saudi Arabia",
    "interior design Saudi Arabia",
    "construction company Riyadh",
    "construction company Jeddah",
    "Al Syed construction",
  ],
  alternates: {
    canonical: "https://www.alsyedgroup.net/construction",
  },
  openGraph: {
    title: "Construction Services | Al Syed Group - Best Contractor in Saudi Arabia",
    description:
      "Professional construction services including general construction, steel works, MEP, plumbing, fabrication, and interior design across Saudi Arabia.",
    url: "https://www.alsyedgroup.net/construction",
    images: [{ url: "/assets/Constructionhero.jpg", width: 1200, height: 630, alt: "Al Syed Group Construction Services in Saudi Arabia" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Construction Services | Al Syed Group",
    description: "Professional construction services across Saudi Arabia - general construction, steel works, MEP, and more.",
    images: ["/assets/Constructionhero.jpg"],
  },
};

export default function ConstructionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
