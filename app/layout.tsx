import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SocialIcon from "./components/SocialIcon";
import { DM_Sans } from "next/font/google";
import {
  OrganizationJsonLd,
  LocalBusinessJsonLd,
  WebSiteJsonLd,
} from "./components/JsonLd";

const dmSans = DM_Sans({
  subsets: ["latin"],
});

const SITE_URL = "https://www.alsyedgroup.net";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Al Syed Group | Leading Construction & Demolition Company in Saudi Arabia",
    template: "%s | Al Syed Group",
  },
  description:
    "Al Syed Group is a leading construction, demolition, and engineering services company in Saudi Arabia. We deliver excellence in general construction, demolition, heavy equipment rental, rigging, plant maintenance, and logistics across Dammam, Riyadh, Jeddah, and all KSA.",
  keywords: [
    "Al Syed Group",
    "AlSyed Group",
    "Al Syed Company",
    "construction company Saudi Arabia",
    "best construction company in Saudi Arabia",
    "demolition company Saudi Arabia",
    "best demolition work in Saudi Arabia",
    "demolition services KSA",
    "construction services Dammam",
    "construction company Dammam",
    "demolition company Dammam",
    "heavy equipment rental Saudi Arabia",
    "rigging and lifting Saudi Arabia",
    "plant maintenance Saudi Arabia",
    "logistics company Saudi Arabia",
    "general contractor Saudi Arabia",
    "construction engineering KSA",
    "building contractor Dammam",
    "site clearance Saudi Arabia",
    "steel fabrication Saudi Arabia",
    "MEP services Saudi Arabia",
    "interior design Saudi Arabia",
    "asphalt paving Saudi Arabia",
    "gypsum works Saudi Arabia",
    "technical solutions Saudi Arabia",
    "QHSE Saudi Arabia",
    "construction company Riyadh",
    "construction company Jeddah",
    "demolition services Dammam",
    "best contractor in Saudi Arabia",
    "alsyedgroup",
  ],
  authors: [{ name: "Al Syed Group" }],
  creator: "Al Syed Group",
  publisher: "Al Syed Group",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Al Syed Group",
    title:
      "Al Syed Group | Leading Construction & Demolition Company in Saudi Arabia",
    description:
      "Al Syed Group delivers excellence in construction, demolition, heavy equipment rental, rigging, plant maintenance, and engineering services across Saudi Arabia.",
    images: [
      {
        url: "/assets/alsyed-logo.png",
        width: 1200,
        height: 630,
        alt: "Al Syed Group - Construction & Engineering Services in Saudi Arabia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Al Syed Group | Leading Construction & Demolition Company in Saudi Arabia",
    description:
      "Al Syed Group delivers excellence in construction, demolition, heavy equipment rental, rigging, plant maintenance, and engineering services across Saudi Arabia.",
    images: ["/assets/alsyed-logo.png"],
    creator: "@alsyedgroup",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your Google Search Console verification code here
    // google: "your-google-verification-code",
  },
  category: "Construction",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="icon" type="image/png" href="/assets/alsyed-logo.png" />
        <link rel="apple-touch-icon" href="/assets/alsyed-logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <OrganizationJsonLd />
        <LocalBusinessJsonLd />
        <WebSiteJsonLd />
      </head>
      <body suppressHydrationWarning className={`${dmSans.className}`}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main>{children}</main>
          <SocialIcon />
          <Footer />
        </div>
      </body>
    </html>
  );
}
