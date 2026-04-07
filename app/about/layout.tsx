import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Al Syed Group - Leading Engineering Company in Saudi Arabia",
  description:
    "Learn about Al Syed Group, a leading construction and engineering services company in Saudi Arabia. Headquartered in Dammam, we deliver excellence in construction, demolition, equipment rental, and industrial services across KSA.",
  keywords: [
    "about Al Syed Group",
    "Al Syed Company",
    "AlSyed Group",
    "construction company Dammam",
    "engineering company Saudi Arabia",
    "about alsyedgroup",
    "Al Syed Group history",
    "Al Syed Group KSA",
  ],
  alternates: {
    canonical: "https://www.alsyedgroup.net/about",
  },
  openGraph: {
    title: "About Al Syed Group - Leading Engineering Company in Saudi Arabia",
    description:
      "Learn about Al Syed Group, a leading construction and engineering services company headquartered in Dammam, Saudi Arabia.",
    url: "https://www.alsyedgroup.net/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
