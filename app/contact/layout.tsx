import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Get a Free Quote",
  description:
    "Contact Al Syed Group for construction, demolition, and engineering services in Saudi Arabia. Get a free quote today. Located in Dammam 31972, KSA. Call +966-536-649-777 or email info@alsyedgroup.net.",
  keywords: [
    "contact Al Syed Group",
    "construction quote Saudi Arabia",
    "demolition quote KSA",
    "Al Syed contact",
    "construction company Dammam contact",
    "free quote construction Saudi Arabia",
  ],
  alternates: {
    canonical: "https://www.alsyedgroup.net/contact",
  },
  openGraph: {
    title: "Contact Al Syed Group | Get a Free Quote",
    description: "Contact us for construction, demolition, and engineering services in Saudi Arabia. Free quotes available.",
    url: "https://www.alsyedgroup.net/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
