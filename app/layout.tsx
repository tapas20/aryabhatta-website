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

const SITE_URL = "https://www.aryabhattaeducations.in";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Aryabhatta Educations | Best CBSE & CHSE Coaching for Classes 6-12",
    template: "%s | Aryabhatta Educations",
  },
  description:
    "Aryabhatta Educations is a premier coaching center for classes 6 to 12, offering expert coaching for CBSE and CHSE boards. We provide personalized learning, experienced faculty, and proven results in Science, Commerce, and Arts streams.",
  keywords: [
    "Aryabhatta Educations",
    "Aryabhatta coaching center",
    "Aryabhatta tuition",
    "coaching center",
    "CBSE coaching",
    "CHSE coaching",
    "class 6 to 12 coaching",
    "best coaching center",
    "tuition center",
    "science coaching",
    "maths coaching",
    "physics coaching",
    "chemistry coaching",
    "biology coaching",
    "board exam preparation",
    "CBSE board coaching",
    "CHSE board coaching",
    "JEE preparation",
    "NEET preparation",
    "competitive exam coaching",
    "best tuition classes",
    "online coaching",
    "offline coaching",
    "experienced faculty",
    "student results",
    "academic excellence",
  ],
  authors: [{ name: "Aryabhatta Educations" }],
  creator: "Aryabhatta Educations",
  publisher: "Aryabhatta Educations",
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
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Aryabhatta Educations",
    title: "Aryabhatta Educations | Best CBSE & CHSE Coaching for Classes 6-12",
    description:
      "Premier coaching center for classes 6-12. Expert faculty, proven results, and personalized learning for CBSE & CHSE boards.",
    images: [
      {
        url: "/assets/logo.png",
        width: 1200,
        height: 630,
        alt: "Aryabhatta Educations - Best Coaching Center for Classes 6-12",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aryabhatta Educations | Best CBSE & CHSE Coaching for Classes 6-12",
    description:
      "Premier coaching center for classes 6-12. Expert faculty, proven results, and personalized learning for CBSE & CHSE boards.",
    images: ["/assets/logo.png"],
    creator: "@aryabhattaeducations",
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
  category: "Education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="icon" type="image/png" href="/assets/logo.png" />
        <link rel="apple-touch-icon" href="/assets/logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0D7377" />
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
