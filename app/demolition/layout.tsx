import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demolition Services in Saudi Arabia - Safe & Efficient",
  description:
    "Al Syed Group delivers the best demolition work in Saudi Arabia. Professional demolition services including site clearance, debris removal, backfilling, selective dismantling, and total demolition across Dammam, Riyadh, Jeddah, and all KSA cities.",
  keywords: [
    "best demolition work in Saudi Arabia",
    "demolition company Saudi Arabia",
    "demolition services KSA",
    "demolition contractor Dammam",
    "site clearance Saudi Arabia",
    "debris removal Saudi Arabia",
    "building demolition Saudi Arabia",
    "selective demolition KSA",
    "demolition company Riyadh",
    "demolition company Jeddah",
    "safe demolition Saudi Arabia",
    "industrial demolition KSA",
    "backfilling services Saudi Arabia",
    "Al Syed demolition",
  ],
  alternates: {
    canonical: "https://www.alsyedgroup.net/demolition",
  },
  openGraph: {
    title: "Best Demolition Services in Saudi Arabia | Al Syed Group",
    description:
      "Safe, efficient, and environmentally responsible demolition works across Saudi Arabia. Site clearance, debris removal, backfilling, and more.",
    url: "https://www.alsyedgroup.net/demolition",
    images: [{ url: "/assets/demolitionhero.jpeg", width: 1200, height: 630, alt: "Al Syed Group Demolition Services in Saudi Arabia" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Demolition Services in Saudi Arabia | Al Syed Group",
    description: "Safe, efficient demolition services across Saudi Arabia including site clearance, debris removal, and backfilling.",
    images: ["/assets/demolitionhero.jpeg"],
  },
};

export default function DemolitionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
