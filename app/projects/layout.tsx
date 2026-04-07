import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects - Construction & Demolition Portfolio",
  description:
    "View Al Syed Group's portfolio of completed construction, demolition, and engineering projects across Saudi Arabia. Trusted by major clients in Dammam, Riyadh, Jeddah, Jubail, and across KSA.",
  keywords: [
    "construction projects Saudi Arabia",
    "demolition projects KSA",
    "Al Syed projects",
    "construction portfolio Saudi Arabia",
    "engineering projects Dammam",
    "completed projects KSA",
  ],
  alternates: {
    canonical: "https://www.alsyedgroup.net/projects",
  },
  openGraph: {
    title: "Our Projects | Al Syed Group Saudi Arabia",
    description: "Portfolio of construction, demolition, and engineering projects across Saudi Arabia.",
    url: "https://www.alsyedgroup.net/projects",
  },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
