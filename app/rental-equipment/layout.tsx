import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Heavy Equipment Rental in Saudi Arabia",
  description:
    "Al Syed Group offers reliable heavy equipment and machinery rental services for construction and industrial projects across Saudi Arabia. Cranes, excavators, loaders, and more available in Dammam, Riyadh, Jeddah.",
  keywords: [
    "heavy equipment rental Saudi Arabia",
    "construction equipment rental KSA",
    "crane rental Saudi Arabia",
    "excavator rental Dammam",
    "machinery rental Saudi Arabia",
    "equipment leasing KSA",
    "Al Syed equipment rental",
  ],
  alternates: {
    canonical: "https://www.alsyedgroup.net/rental-equipment",
  },
  openGraph: {
    title: "Heavy Equipment Rental | Al Syed Group Saudi Arabia",
    description: "Reliable heavy equipment and machinery rental for construction and industrial projects across Saudi Arabia.",
    url: "https://www.alsyedgroup.net/rental-equipment",
  },
};

export default function RentalEquipmentLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
