import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Logistics & Transportation Services in Saudi Arabia",
  description:
    "Al Syed Group provides comprehensive logistics and heavy transportation services across Saudi Arabia. Reliable freight, equipment transport, and supply chain solutions in Dammam, Riyadh, Jeddah, and all KSA.",
  keywords: [
    "logistics company Saudi Arabia",
    "heavy transportation KSA",
    "freight services Saudi Arabia",
    "equipment transport Dammam",
    "logistics services KSA",
    "supply chain Saudi Arabia",
    "Al Syed logistics",
  ],
  alternates: {
    canonical: "https://www.alsyedgroup.net/logistic",
  },
  openGraph: {
    title: "Logistics & Transportation | Al Syed Group Saudi Arabia",
    description: "Comprehensive logistics and heavy transportation services across Saudi Arabia.",
    url: "https://www.alsyedgroup.net/logistic",
  },
};

export default function LogisticLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
