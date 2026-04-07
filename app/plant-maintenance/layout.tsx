import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plant Maintenance Services in Saudi Arabia",
  description:
    "Al Syed Group delivers comprehensive plant maintenance and industrial facility services across Saudi Arabia. Preventive maintenance, shutdown support, and facility management in Dammam, Jubail, Yanbu, and all KSA industrial cities.",
  keywords: [
    "plant maintenance Saudi Arabia",
    "industrial maintenance KSA",
    "facility maintenance Dammam",
    "shutdown maintenance Saudi Arabia",
    "preventive maintenance KSA",
    "industrial services Saudi Arabia",
    "Al Syed plant maintenance",
  ],
  alternates: {
    canonical: "https://www.alsyedgroup.net/plant-maintenance",
  },
  openGraph: {
    title: "Plant Maintenance Services | Al Syed Group Saudi Arabia",
    description: "Comprehensive plant maintenance and industrial facility services across Saudi Arabia.",
    url: "https://www.alsyedgroup.net/plant-maintenance",
  },
};

export default function PlantMaintenanceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
