import type { Metadata } from "next";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Recognition from "./components/Recognition";
import Services from "./components/Services";
import SplashScreen from "./components/SplashScreen";
import WhyChooseUs from "./components/WhyChooseUs";
import Reviwes from "./components/Reviwes";
import HomeCta from "./components/HomeCta";
import Businesshours from "./components/Businesshours";
import Award from "./components/Award";

export const metadata: Metadata = {
  title:
    "Aryabhatta Educations | Best CBSE & CHSE Coaching for Classes 6-12",
  description:
    "Aryabhatta Educations is a premier coaching center for classes 6-12. Expert faculty, proven results, personalized learning for CBSE & CHSE boards. JEE & NEET foundation coaching available. Enroll today!",
  alternates: {
    canonical: "https://www.aryabhattaeducations.in",
  },
  openGraph: {
    title:
      "Aryabhatta Educations | Best CBSE & CHSE Coaching for Classes 6-12",
    description:
      "Premier coaching center with expert faculty, 95%+ distinction rate, and personalized attention for CBSE & CHSE students.",
    url: "https://www.aryabhattaeducations.in",
    images: [
      {
        url: "/assets/logo.png",
        width: 1200,
        height: 630,
        alt: "Aryabhatta Educations - Best Coaching Center",
      },
    ],
  },
};

export default function Home() {
  return (
    <div className="scroll-smooth">
      <SplashScreen />
      <Hero />
      <Recognition />
      <Services />
      <Experience />
      <WhyChooseUs />
      <Reviwes />
      <Award />
      <Businesshours />
      <HomeCta />
    </div>
  );
}
