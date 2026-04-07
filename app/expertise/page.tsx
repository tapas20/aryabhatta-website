"use client";

import React, { useEffect, useState, Suspense } from "react";
import { motion } from "framer-motion";
import Image, { type StaticImageData } from "next/image";
import { useSearchParams } from "next/navigation";

import Rigmove from "../../public/assets/Rigmove.jpg";
import HeavyLifting from "../../public/assets/HeavyLifting.jpg";
import Heavy_Lifting from "../../public/assets/Heavy Lifting-exp.jpg";
import Construction_Division from "../../public/assets/ConstructionDiv.jpg";
import Manpower from "../../public/assets/Manpower.jpg";
import Transportation from "../../public/assets/Transportation.jpg";
import Demolition_Work from "../../public/assets/Demolition Work.jpg";
import RO_Plant_Maintenance from "../../public/assets/RO plant-exp.png";
import Plumbing from "../../public/assets/pipes-2672184.jpg";
import Link from "next/link";

// Fade-up animation
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

// Component that uses useSearchParams
function ExpertiseContent() {
  const searchParams = useSearchParams();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const sectionId = searchParams.get("section");

    // use timers and defer the initial setReady to avoid synchronous setState inside effect
    let startTimer: ReturnType<typeof setTimeout> | null = null;
    let scrollTimer: ReturnType<typeof setTimeout> | null = null;
    let highlightTimer: ReturnType<typeof setTimeout> | null = null;

    if (sectionId) {
      // defer to next tick so we don't call setState synchronously within the effect
      startTimer = setTimeout(() => {
        setReady(false); // stop animations

        scrollTimer = setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "center" });

            element.classList.add("highlight-section");

            highlightTimer = setTimeout(() => {
              element.classList.remove("highlight-section");

              setReady(true); // ⬅️ enable animations AFTER scroll ends
            }, 1300);
          } else {
            // if element not found, re-enable animations
            setReady(true);
          }
        }, 300);
      }, 0);
    } else {
      // defer setReady to avoid calling setState synchronously inside the effect
      startTimer = setTimeout(() => {
        setReady(true); // no scroll = animations allowed (deferred)
      }, 0);
    }

    return () => {
      if (startTimer) clearTimeout(startTimer);
      if (scrollTimer) clearTimeout(scrollTimer);
      if (highlightTimer) clearTimeout(highlightTimer);
    };
  }, [searchParams]);

  return (
    <div className="bg-white text-black">
      {/* HERO */}
      <div className="relative w-full h-[55vh] flex flex-col items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 3.15, opacity: 0 }}
          animate={{
            scale: 1.5,
            opacity: 1,
            x: [-20, 20, -20],
          }}
          transition={{
            duration: 1.4,
            ease: "easeOut",
            x: { duration: 12, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute inset-0"
        >
          <Image
            src={Rigmove}
            alt="Hero"
            fill
            className="object-cover opacity-70"
            priority
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90"></div>

        <motion.h1
          initial="hidden"
          animate={ready ? "show" : "hidden"}
          variants={fadeUp}
          className="relative text-4xl md:text-6xl font-semibold tracking-wide text-white text-center"
        >
          Expertise That Shapes Excellence
        </motion.h1>

        <motion.div
          initial="hidden"
          animate={ready ? "show" : "hidden"}
          variants={fadeUp}
          className="relative mt-6 text-white text-sm md:text-base font-medium tracking-widest uppercase"
        >
          <Link href="/" className="hover:text-primary transition">
            Home
          </Link>
          <span className="mx-3 text-white/50">&gt;</span>
          <span className="text-primary font-bold">Expertise</span>
        </motion.div>
      </div>

      {/* INTRO */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={ready ? "show" : "hidden"}
        className="max-w-4xl mx-auto text-center px-6 py-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Unique Ideas Transformed Into Reality
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed">
          Quality and precision have always been the foundation of{" "}
          <span className="text-primary font-bold">AL SYED COMPANY</span>.
        </p>

        <p className="text-gray-600 text-lg leading-relaxed mt-4">
          <span className="text-primary font-bold">AL SYED COMPANY</span> is
          expert in the field of Heavy Equipment Rental, Heavy Lifting,
          Transportation and Rig Move Support Services. With a strong foundation
          in facility management since 2014, we have proudly served major rig
          move support service companies in the Kingdom of Saudi Arabia,
          including well-known ARAMCO Contractors and Drilling Companies.
        </p>
      </motion.div>

      {/* SECTIONS */}
      <div>
        <Section
          title="Demolition Works"
          text="Al Syed Company provides safe, controlled, and environmentally responsible demolition services across Saudi Arabia. Our expertise includes selective dismantling, total demolition, debris removal, and complete site clearance. With modern equipment, trained professionals, and strict safety standards, we ensure efficient project execution and smooth site preparation for future construction."
          image={Demolition_Work}
          reverse={false}
          index={0}
          id="01"
          ready={ready}
        />

        <Section
          title="Rig Move Support Services"
          text="We deliver end-to-end rig move support services focused on safety, efficiency, and reduced downtime. From planning and coordination to execution, Al Syed Company ensures smooth rig movement while maintaining HSSE compliance. Our proven experience enables optimized rig utilization and reliable performance across complex drilling operations."
          image={Rigmove}
          reverse={true}
          index={1}
          id="02"
          ready={ready}
        />

        <Section
          title="Heavy Lifting"
          text="Al Syed Company specializes in heavy and extra-heavy lifting services using advanced crawler and mobile cranes. Our capabilities include precise planning, safe execution, and handling of oversized or delicate equipment. With experienced operators and modern lifting solutions, we support complex industrial and infrastructure projects efficiently."
          image={Heavy_Lifting}
          reverse={false}
          index={2}
          id="03"
          ready={ready}
        />

        <Section
          title="Transportation"
          text="We provide reliable transportation and logistics solutions for industrial, commercial, and project cargo. Our services cover safe and timely movement of pipes, equipment, bulk materials, and consumables. With extensive industry experience, we deliver cost-effective solutions even for complex and demanding transportation requirements."
          image={Transportation}
          reverse={true}
          index={3}
          id="04"
          ready={ready}
        />

        <Section
          title="Manpower Rental"
          text="Al Syed Company offers skilled and certified manpower rental services to support various project requirements. Our workforce includes crane operators, riggers, drivers, technicians, and general labor. We prioritize safety, reliability, and performance to ensure seamless workforce integration and successful project delivery."
          image={Manpower}
          reverse={false}
          index={4}
          id="05"
          ready={ready}
        />

        <Section
          title="Construction Division"
          text="Our Construction Division delivers integrated solutions across civil, mechanical, electrical, and finishing works. We handle projects ranging from heavy construction to specialized steel, asphalt, and gypsum works. With strong technical expertise and quality standards, we ensure timely and dependable project execution."
          image={Construction_Division}
          reverse={true}
          index={5}
          id="06"
          ready={ready}
        />

        <Section
          title="Heavy Equipment Rentals"
          text="Al Syed Company maintains a strong and diverse fleet of heavy equipment available for rental. Our range includes earthmoving equipment, cranes, generators, and trailers. All equipment is well-maintained and industry-certified, ensuring reliable performance for drilling, industrial, and infrastructure projects."
          image={HeavyLifting}
          reverse={false}
          index={6}
          id="07"
          ready={ready}
        />

        <Section
          title="RO Plant Maintenance"
          text="We provide comprehensive RO plant maintenance services designed to ensure reliable and efficient water treatment operations. Our solutions include routine inspections, membrane cleaning, system upgrades, and emergency support. With experienced technicians, we help maximize system performance and extend equipment life."
          image={RO_Plant_Maintenance}
          reverse={true}
          index={7}
          id="08"
          ready={ready}
        />

        {/* ✅ ADDED: Re-routing Sector (ID 09) */}
        <Section
          title="Re-routing Sector"
          text="We provide controlled re-routing support for industrial and project sites to ensure smooth movement and minimal disruption. Our services include route planning, access control, on-site coordination, and safety supervision to maintain compliance and operational continuity. With structured execution and clear communication, we help projects move efficiently without downtime."
          image="/assets/rerouting-hero.jpg"
          reverse={false}
          index={8}
          id="09"
          ready={ready}
        />

        {/* ✅ ADDED: Rental Equipment Sector (ID 10) */}
        <Section
          title="Rental Equipment Sector"
          text="Our Rental Equipment Sector supports projects with dependable equipment availability and flexible rental solutions. From site support equipment to project-critical units, we ensure reliable performance through proper maintenance, safety checks, and timely mobilization. We help clients meet timelines with cost-effective rental options and responsive support."
          image="/assets/rental-hero.jpg"
          reverse={true}
          index={9}
          id="10"
          ready={ready}
        />

        {/* ✅ ADDED: Logistic Sector (ID 11) */}
        <Section
          title="Logistic Sector"
          text="We deliver end-to-end logistics solutions for complex project operations, including planning, scheduling, and safe transportation coordination. Our logistics approach focuses on reliability, compliance, and on-time delivery—supporting demanding timelines and multi-location projects. From routine cargo movement to specialized transport coordination, we keep operations running smoothly."
          image="/assets/Logistics.jpg"
          reverse={false}
          index={10}
          id="11"
          ready={ready}
        />

        {/* ✅ ADDED: Plumbing Works (ID 12) */}
        <Section
          title="Plumbing Works"
          text={"We deliver complete plumbing solutions including process water systems, drainage networks, pumps, boilers, and gas piping.\n\nOur execution meets international standards for safety, efficiency, and durability."}
          image={Plumbing}
          reverse={true}
          index={11}
          id="12"
          ready={ready}
        />
      </div>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={ready ? { opacity: 1, y: 0 } : {}}
        className="relative py-24 px-6 bg-gradient-to-r from-gray-900 to-black"
      >
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Ready to Start Your Project?
          </h2>

          <p className="mt-4 text-xl text-gray-300">
            Let&apos;s bring your vision to life with our expertise.
          </p>

          <motion.a
            href="/contact"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-12 py-4 mt-10 text-lg font-semibold bg-primary text-white rounded-full shadow-xl"
          >
            Contact Us
          </motion.a>
        </div>
      </motion.section>

      <style jsx global>{`
        .highlight-section {
          animation: highlight 2s ease;
        }
        @keyframes highlight {
          0% {
            box-shadow: 0 0 0 0 rgba(250, 144, 0, 0.7);
          }
          50% {
            box-shadow: 0 0 0 10px rgba(250, 144, 0, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(250, 144, 0, 0);
          }
        }
      `}</style>
    </div>
  );
}

/* ------------------- SECTION COMPONENT ------------------- */

type SectionProps = {
  title: string;
  text: string;
  image: StaticImageData | string;
  reverse: boolean;
  index: number;
  id: string;
  ready: boolean;
};

function Section({
  title,
  text,
  image,
  reverse,
  index,
  id,
  ready,
}: SectionProps) {
  return (
    <motion.section
      id={id}
      variants={fadeUp}
      initial="hidden"
      animate={ready ? "show" : "hidden"} // ⬅️ Only animate AFTER scroll finishes
      className={`${
        index % 2 === 0 ? "bg-white" : "bg-gray-50"
      } py-20 px-6 scroll-mt-20`}
    >
      <div
        className={`max-w-7xl mx-auto flex flex-col ${
          reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        } items-center gap-14`}
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4 }}
          className="relative w-full lg:w-1/2 group overflow-hidden rounded-2xl shadow-xl"
        >
          <Image
            src={image}
            alt={title}
            width={900}
            height={600}
            className="w-full h-[420px] object-cover duration-700 group-hover:scale-110"
          />
        </motion.div>

        <div className="w-full lg:w-1/2">
          <div className="flex items-center gap-4 mb-6">
            <motion.div
              initial={{ width: 0 }}
              animate={ready ? { width: 80 } : { width: 0 }}
              transition={{ duration: 0.8 }}
              className="h-1.5 bg-primary rounded-full"
            />
          </div>

          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {title}
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
            {text}
          </p>
        </div>
      </div>
    </motion.section>
  );
}

// Main export with Suspense boundary
export default function ExpertisePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-white">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
            <p className="mt-4 text-gray-600">Loading expertise...</p>
          </div>
        </div>
      }
    >
      <ExpertiseContent />
    </Suspense>
  );
}
