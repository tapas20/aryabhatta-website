import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technical Solutions & Engineering Services in Saudi Arabia",
  description:
    "Al Syed Group provides specialized technical solutions and engineering services across Saudi Arabia. Expert technical consulting, project management, and engineering solutions in Dammam, Riyadh, Jeddah.",
  keywords: [
    "technical solutions Saudi Arabia",
    "engineering services KSA",
    "technical consulting Dammam",
    "project management Saudi Arabia",
    "engineering company KSA",
    "Al Syed technical solutions",
  ],
  alternates: {
    canonical: "https://www.alsyedgroup.net/technical-solutions",
  },
  openGraph: {
    title: "Technical Solutions | Al Syed Group Saudi Arabia",
    description: "Specialized technical solutions and engineering services across Saudi Arabia.",
    url: "https://www.alsyedgroup.net/technical-solutions",
  },
};

export default function TechnicalSolutionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
