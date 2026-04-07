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
  hero: "/assets/rerouting-hero.jpg",
  section1: "/assets/rerouting-1.jpg",
  section2: "/assets/rerouting-2.jpg",
  section3: "/assets/rerouting-3.jpg",
  section4: "/assets/rerouting-4.jpg",
  section5: "/assets/rerouting-5.jpg",
  section6: "/assets/rerouting-6.jpg",
};

/* ===============================
   PAGE CONTENT
================================ */

function ReRoutingContent() {
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
            src={IMAGES.hero}
            alt="Re-routing Sector"
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
          Re-routing Sector
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
          <span className="text-primary font-bold">Re-routing Sector</span>
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
          Controlled Re-routing & Site Movement Support
        </h2>

        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          We provide safe and well-coordinated re-routing support for complex
          site operations—ensuring smooth movement, minimal downtime, and full
          compliance with safety standards.
          <br />
          <br />
          From planning to execution, our teams work with precision and strong
          coordination to keep operations efficient and controlled.
        </p>
      </motion.div>

      {/* ================= SECTIONS ================= */}

      <Section
        id="01"
        index={0}
        ready={ready}
        title="Detailed Planning & Execution"
        image={IMAGES.section1}
        text={
          <>
            <p>
              Every re-routing task starts with detailed planning—routes, access
              control, site constraints, and movement scheduling.
            </p>
            <p>
              This ensures safe execution, faster mobilization, and predictable
              outcomes for all stakeholders.
            </p>
          </>
        }
      />

      <Section
        id="02"
        index={1}
        ready={ready}
        reverse
        title="Safety First Operations"
        image={IMAGES.section2}
        text={
          <>
            <p>
              We apply strict safety protocols, risk assessments, and site
              supervision throughout the operation.
            </p>
            <p>
              Our goal is to protect personnel, equipment, and the surrounding
              environment—without interruptions.
            </p>
          </>
        }
      />

      <Section
        id="03"
        index={2}
        ready={ready}
        title="Permits, Access & Local Compliance"
        image={IMAGES.section3}
        text={
          <>
            <p>
              We support compliance with site rules and local requirements,
              including access coordination and operational controls.
            </p>
            <p>
              Clear documentation and process discipline keep work aligned with
              project expectations.
            </p>
          </>
        }
      />

      <Section
        id="04"
        index={3}
        ready={ready}
        reverse
        title="Coordination With Project Teams"
        image={IMAGES.section4}
        text={
          <>
            <p>
              We coordinate closely with client teams, supervisors, and site
              stakeholders for seamless movement scheduling.
            </p>
            <p>
              This reduces delays and ensures safe integration with other site
              activities.
            </p>
          </>
        }
      />

      <Section
        id="05"
        index={4}
        ready={ready}
        title="Minimized Downtime & Smooth Transitions"
        image={IMAGES.section5}
        text={
          <>
            <p>
              Our re-routing approach focuses on minimizing downtime with
              structured movement windows and contingency planning.
            </p>
            <p>
              We keep operations flowing while maintaining controlled execution.
            </p>
          </>
        }
      />

      <Section
        id="06"
        index={5}
        ready={ready}
        reverse
        title="Reliable Support From Start to Finish"
        image={IMAGES.section6}
        text={
          <>
            <p>
              From mobilization to final positioning, we maintain professionalism
              and consistency throughout the job.
            </p>
            <p>
              Expect safe outcomes, clear communication, and dependable delivery.
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
            Need Reliable Re-routing Support?
          </h2>

          <p className="mt-4 text-gray-300 text-base md:text-xl">
            Let&apos;s plan a safe, controlled, and efficient re-routing solution.
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

/* ===============================
   SECTION COMPONENT (NO TOGGLE)
================================ */

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

/* ===============================
   EXPORT
================================ */

export default function ReRoutingPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-white">
          <div className="animate-spin h-12 w-12 border-t-2 border-b-2 border-orange-500 rounded-full" />
        </div>
      }
    >
      <ReRoutingContent />
    </Suspense>
  );
}
