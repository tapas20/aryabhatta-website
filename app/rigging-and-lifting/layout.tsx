import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rigging & Heavy Lifting Services in Saudi Arabia",
  description:
    "Al Syed Group provides professional rigging and heavy lifting services across Saudi Arabia. Expert crane operations, load management, and industrial lifting solutions in Dammam, Riyadh, Jeddah, Jubail, and Yanbu.",
  keywords: [
    "rigging services Saudi Arabia",
    "heavy lifting Saudi Arabia",
    "crane services KSA",
    "industrial lifting Dammam",
    "rigging contractor Saudi Arabia",
    "heavy lifting company KSA",
    "Al Syed rigging",
  ],
  alternates: {
    canonical: "https://www.alsyedgroup.net/rigging-and-lifting",
  },
  openGraph: {
    title: "Rigging & Heavy Lifting Services | Al Syed Group Saudi Arabia",
    description: "Professional rigging and heavy lifting services across Saudi Arabia for industrial and construction projects.",
    url: "https://www.alsyedgroup.net/rigging-and-lifting",
  },
};

export default function RiggingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
