import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pipeline Re-routing Services in Saudi Arabia",
  description:
    "Al Syed Group provides expert pipeline re-routing and relocation services across Saudi Arabia. Professional pipeline modification, rerouting, and installation services for oil, gas, and industrial projects.",
  keywords: [
    "pipeline re-routing Saudi Arabia",
    "pipeline relocation KSA",
    "pipeline services Saudi Arabia",
    "pipeline modification Dammam",
    "industrial pipeline KSA",
    "Al Syed re-routing",
  ],
  alternates: {
    canonical: "https://www.alsyedgroup.net/re-routing",
  },
  openGraph: {
    title: "Pipeline Re-routing Services | Al Syed Group Saudi Arabia",
    description: "Expert pipeline re-routing and relocation services across Saudi Arabia.",
    url: "https://www.alsyedgroup.net/re-routing",
  },
};

export default function ReRoutingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
