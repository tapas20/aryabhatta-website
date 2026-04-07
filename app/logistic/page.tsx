"use client";

import React, { useEffect, useState, Suspense } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

/* ---------------- Animations ---------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

/* ---------------- Images ---------------- */
/** ✅ Replace these with your real images in /public/assets */
const IMAGES = {
  hero: "/assets/Logistics.jpg",
  section1: "/assets/logistic-1.jpg",
  section2: "/assets/logistic-2.jpg",
  section3: "/assets/logistic-3.jpg",
  section4: "/assets/logistic-4.jpg",
  section5: "/assets/logistic-5.jpg",
  section6: "/assets/logistic-6.jpg",
};

function LogisticContent() {
  const searchParams = useSearchParams();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const sectionId = searchParams.get("section");
    let timer: NodeJS.Timeout | undefined;

    if (sectionId) {
      timer = setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
          el.classList.add("highlight-section");

          setTimeout(() => {
            el.classList.remove("highlight-section");
            setReady(true);
          }, 1200);
        } else {
          setReady(true);
        }
      }, 300);
    } else {
      setReady(true);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [searchParams]);

  return (
    <div className="bg-white text-black">
      {/* ================= HERO ================= */}
      <div className="relative w-full h-[55vh] flex flex-col items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 3.15, opacity: 0 }}
          animate={{ scale: 1.5, opacity: 1, x: [-20, 20, -20] }}
          transition={{
            duration: 1.4,
            ease: "easeOut",
            x: { duration: 12, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute inset-0"
        >
          <Image
            src={IMAGES.hero}
            alt="Logistic Sector"
            fill
            className="object-cover opacity-70"
            priority
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90" />

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate={ready ? "show" : "hidden"}
          className="relative text-3xl md:text-4xl lg:text-6xl font-semibold text-white text-center px-4"
        >
          Logistic Sector
        </motion.h1>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={ready ? "show" : "hidden"}
          className="relative mt-6 text-white text-sm md:text-base font-medium tracking-widest uppercase"
        >
          <Link href="/" className="hover:text-primary transition">
            Home
          </Link>
          <span className="mx-3 text-white/50">&gt;</span>
          <span className="text-primary font-bold">Logistic Sector</span>
        </motion.div>
      </div>

      {/* ================= INTRO ================= */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={ready ? "show" : "hidden"}
        className="max-w-4xl mx-auto text-center px-4 md:px-6 py-12 md:py-16"
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          End-to-End Transportation & Project Logistics
        </h2>

        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          We provide dependable logistics solutions—covering transportation,
          site moves, and project coordination to keep operations running
          smoothly across Saudi Arabia.
          <br />
          <br />
          Our focus is safety, planning, and reliable delivery for complex cargo
          and demanding timelines.
        </p>
      </motion.div>

      {/* ================= SECTIONS ================= */}

      <Section
        id="01"
        index={0}
        ready={ready}
        title="Project Logistics Planning"
        image={IMAGES.section1}
        text={
          <>
            <p>
              We plan logistics with route study, scheduling, site access, and
              coordination—so deliveries stay controlled and predictable.
            </p>
            <p>
              This reduces disruption and supports smooth project execution.
            </p>
          </>
        }
      />

      <Section
        id="02"
        index={1}
        ready={ready}
        reverse
        title="Heavy & Specialized Transportation"
        image={IMAGES.section2}
        text={
          <>
            <p>
              We handle complex transportation operations for equipment, project
              cargo, and specialized loads.
            </p>
            <p>
              Execution is supported by safety controls, coordination, and
              dependable timelines.
            </p>
          </>
        }
      />

      <Section
        id="03"
        index={2}
        ready={ready}
        title="Site Move & Camp Movement Support"
        image={IMAGES.section3}
        text={
          <>
            <p>
              We assist with organized site moves, including camp relocations and
              operational repositioning.
            </p>
            <p>
              Clear planning ensures safe movement and reduced downtime.
            </p>
          </>
        }
      />

      <Section
        id="04"
        index={3}
        ready={ready}
        reverse
        title="Road Haulage & Distribution"
        image={IMAGES.section4}
        text={
          <>
            <p>
              Our road haulage services support distribution and supply movement
              across multiple project locations.
            </p>
            <p>
              We maintain control over scheduling, coordination, and safe
              delivery standards.
            </p>
          </>
        }
      />

      <Section
        id="05"
        index={4}
        ready={ready}
        title="Warehousing & Storage Support"
        image={IMAGES.section5}
        text={
          <>
            <p>
              We support project logistics with storage coordination and
              warehousing options where required.
            </p>
            <p>
              This improves inventory handling and operational continuity.
            </p>
          </>
        }
      />

      <Section
        id="06"
        index={5}
        ready={ready}
        reverse
        title="Reliable Delivery for Demanding Timelines"
        image={IMAGES.section6}
        text={
          <>
            <p>
              From standard deliveries to complex cargo movements, we focus on
              safety, efficiency, and consistent results.
            </p>
            <p>
              Our logistics model is built for reliability—no matter how complex
              the project requirement.
            </p>
          </>
        }
      />

      {/* ================= CTA ================= */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={ready ? { opacity: 1, y: 0 } : {}}
        className="py-16 md:py-24 px-4 bg-gradient-to-r from-gray-900 to-black"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white">
            Planning a Complex Move or Delivery?
          </h2>

          <p className="mt-4 text-gray-300 text-base md:text-xl">
            Let&apos;s build a safe, efficient, and dependable logistics plan.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-8 px-10 py-4 bg-primary text-white font-semibold rounded-full shadow-xl"
          >
            Contact Us
          </Link>
        </div>
      </motion.section>

      {/* ================= HIGHLIGHT ================= */}
      <style jsx global>{`
        .highlight-section {
          animation: highlight 1.6s ease;
        }
        @keyframes highlight {
          0% {
            box-shadow: 0 0 0 0 rgba(250, 144, 0, 0.7);
          }
          50% {
            box-shadow: 0 0 0 14px rgba(250, 144, 0, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(250, 144, 0, 0);
          }
        }
      `}</style>
    </div>
  );
}

interface SectionProps {
  id: string;
  title: string;
  text: React.ReactNode;
  image: string;
  reverse?: boolean;
  index: number;
  ready: boolean;
}

function Section({
  id,
  title,
  text,
  image,
  reverse = false,
  index,
  ready,
}: SectionProps) {
  return (
    <motion.section
      id={id}
      variants={fadeUp}
      initial="hidden"
      animate={ready ? "show" : "hidden"}
      className={`${
        index % 2 === 0 ? "bg-white" : "bg-gray-50"
      } py-12 md:py-20 px-4 md:px-6 scroll-mt-20`}
    >
      <div
        className={`max-w-7xl mx-auto flex flex-col ${
          reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        } items-center gap-8 md:gap-14`}
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="relative w-full lg:w-1/2 overflow-hidden rounded-xl shadow-xl"
        >
          <Image
            src={image}
            alt={title}
            width={900}
            height={600}
            className="w-full h-[280px] md:h-[420px] object-cover duration-700 group-hover:scale-110"
          />
        </motion.div>

        <div className="w-full lg:w-1/2">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            {title}
          </h3>
          <div className="text-gray-700 text-base md:text-lg leading-relaxed space-y-4">
            {text}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default function LogisticPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-white">
          <div className="animate-spin h-12 w-12 border-t-2 border-b-2 border-orange-500 rounded-full" />
        </div>
      }
    >
      <LogisticContent />
    </Suspense>
  );
}
