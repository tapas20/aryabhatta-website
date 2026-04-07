import type { Metadata } from "next";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Recognition from "./components/Recognition";
import Services from "./components/Services";
import SplashScreen from "./components/SplashScreen";
import WhyChooseUs from "./components/WhyChooseUs";
import Reviwes from "./components/Reviwes";
// import { DragCards } from "./components/Dragcard";
import HomeCta from "./components/HomeCta";
import Businesshours from "./components/Businesshours";
import Award from "./components/Award";

export const metadata: Metadata = {
  title:
    "Al Syed Group | Best Construction & Demolition Company in Saudi Arabia",
  description:
    "Al Syed Group is the leading construction and demolition company in Saudi Arabia. Best demolition work, general construction, heavy equipment rental, rigging, logistics, and engineering services in Dammam, Riyadh, Jeddah, and across KSA. Contact us today.",
  alternates: {
    canonical: "https://www.alsyedgroup.net",
  },
  openGraph: {
    title:
      "Al Syed Group | Best Construction & Demolition Company in Saudi Arabia",
    description:
      "Leading construction, demolition, and engineering services company in Saudi Arabia. Trusted by major clients across Dammam, Riyadh, Jeddah, and all KSA.",
    url: "https://www.alsyedgroup.net",
    images: [
      {
        url: "/assets/alsyed-logo.png",
        width: 1200,
        height: 630,
        alt: "Al Syed Group - Best Construction Company in Saudi Arabia",
      },
    ],
  },
};

export default function Home() {
  return (
    <div className="text-red-700 scroll-smooth">
      <SplashScreen />
      <Hero />
      <Recognition />
      <Services />
      <Experience />
      <WhyChooseUs />
      <Reviwes />
      {/* <DragCards /> */}
      <Award />
      <Businesshours />
      <HomeCta />
    </div>
  );
}
