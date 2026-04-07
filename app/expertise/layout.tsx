import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Expertise - Engineering & Construction Services",
  description:
    "Explore Al Syed Group's expertise in construction, demolition, heavy equipment rental, rigging, logistics, plant maintenance, and technical solutions. Comprehensive engineering services across Saudi Arabia.",
  keywords: [
    "construction expertise Saudi Arabia",
    "engineering services KSA",
    "Al Syed services",
    "construction and demolition services",
    "heavy equipment services Saudi Arabia",
    "industrial services KSA",
  ],
  alternates: {
    canonical: "https://www.alsyedgroup.net/expertise",
  },
  openGraph: {
    title: "Our Expertise | Al Syed Group Saudi Arabia",
    description: "Comprehensive construction, demolition, and engineering expertise across Saudi Arabia.",
    url: "https://www.alsyedgroup.net/expertise",
  },
};

export default function ExpertiseLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
