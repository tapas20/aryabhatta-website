import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "QHSE - Quality, Health, Safety & Environment",
  description:
    "Al Syed Group is committed to the highest QHSE standards in Saudi Arabia. Our Quality, Health, Safety & Environment programs ensure compliance, worker safety, and environmental responsibility across all construction and demolition projects.",
  keywords: [
    "QHSE Saudi Arabia",
    "quality health safety environment KSA",
    "construction safety Saudi Arabia",
    "HSE compliance KSA",
    "safety standards Saudi Arabia",
    "Al Syed QHSE",
  ],
  alternates: {
    canonical: "https://www.alsyedgroup.net/qhse",
  },
  openGraph: {
    title: "QHSE Policy | Al Syed Group Saudi Arabia",
    description: "Our commitment to Quality, Health, Safety & Environment across all projects in Saudi Arabia.",
    url: "https://www.alsyedgroup.net/qhse",
  },
};

export default function QhseLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
