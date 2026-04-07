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
  hero: "/assets/rental-hero.jpg",
  section1: "/assets/rental-1.jpg",
  section2: "/assets/rental-2.jpg",
  section3: "/assets/rental-3.jpg",
  section4: "/assets/rental-4.jpg",
  section5: "/assets/rental-5.jpg",
  section6: "/assets/rental-6.jpg",
};

function RentalEquipmentContent() {
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
            alt="Rental Equipment Sector"
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
          Rental Equipment Sector
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
          <span className="text-primary font-bold">
            Rental Equipment Sector
          </span>
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
          Powerful Equipment Rentals to Keep Projects Moving
        </h2>

        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          We supply reliable rental equipment for industrial, construction, and
          project operations—backed by experienced support and safe practices.
          <br />
          <br />
          From lifting to site needs, our fleet helps clients meet timelines
          with confidence and operational efficiency.
        </p>
      </motion.div>

      {/* ================= SECTIONS ================= */}

      <Section
        id="01"
        index={0}
        ready={ready}
        title="Wide Fleet for Diverse Project Needs"
        image={IMAGES.section1}
        text={
          <>
            <p>
              Our rental fleet supports multiple industries with a variety of
              heavy and support equipment.
            </p>
            <p>
              We provide flexible options that match your job scope, site size,
              and operational requirements.
            </p>
          </>
        }
      />

      <Section
        id="02"
        index={1}
        ready={ready}
        reverse
        title="Certified, Safe & Maintained Equipment"
        image={IMAGES.section2}
        text={
          <>
            <p>
              Equipment is delivered with safety and maintenance standards in
              mind—ensuring dependable performance at your site.
            </p>
            <p>
              Our approach reduces breakdown risk and improves project
              stability.
            </p>
          </>
        }
      />

      <Section
        id="03"
        index={2}
        ready={ready}
        title="Fast Mobilization & On-Time Availability"
        image={IMAGES.section3}
        text={
          <>
            <p>
              We support fast mobilization and planned dispatch to meet project
              timelines without delays.
            </p>
            <p>
              Clear coordination ensures equipment arrives when and where you
              need it.
            </p>
          </>
        }
      />

      <Section
        id="04"
        index={3}
        ready={ready}
        reverse
        title="Operator & Site Support Options"
        image={IMAGES.section4}
        text={
          <>
            <p>
              Depending on project needs, we can support operations with skilled
              manpower and coordination.
            </p>
            <p>
              Safety and execution quality remain consistent across all work
              environments.
            </p>
          </>
        }
      />

      <Section
        id="05"
        index={4}
        ready={ready}
        title="Cost-Effective Rental Solutions"
        image={IMAGES.section5}
        text={
          <>
            <p>
              We provide cost-effective rental options that help manage project
              budgets while maintaining capability.
            </p>
            <p>
              Transparent planning and scheduling supports predictable delivery.
            </p>
          </>
        }
      />

      <Section
        id="06"
        index={5}
        ready={ready}
        reverse
        title="Trusted Partner for Continuous Operations"
        image={IMAGES.section6}
        text={
          <>
            <p>
              Our goal is long-term reliability—supporting clients with
              consistency, responsiveness, and trusted service.
            </p>
            <p>
              From short rentals to long engagements, we stay aligned with your
              success.
            </p>
          </>
        }
      />

      {/* ================= EQUIPMENT GRID ================= */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        animate={ready ? "show" : "hidden"}
        className="py-12 md:py-20 bg-slate-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1b1464]">
              Available Equipment
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mx-auto">
            {[
              { title: "Earthmoving Equipment", img: IMAGES.section1 },
              { title: "Lifting & Rigging", img: IMAGES.section2 },
              { title: "Power Generation", img: IMAGES.section3 },
              { title: "Heavy Transport", img: IMAGES.section4 },
              { title: "Construction Support", img: IMAGES.section5 },
              { title: "Specialized Machinery", img: IMAGES.section6 },
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.05)] border-b-[6px] border-[#f59e0b] flex flex-col hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="relative w-full aspect-4/3 md:aspect-16/10">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 md:p-8 text-center flex flex-1 items-center justify-center min-h-[80px] md:min-h-[100px]">
                  <h3 className="text-sm sm:text-base md:text-xl font-semibold text-[#1b1464] leading-snug">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ================= CTA ================= */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={ready ? { opacity: 1, y: 0 } : {}}
        className="py-16 md:py-24 px-4 bg-gradient-to-r from-gray-900 to-black"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white">
            Need Equipment for Your Next Project?
          </h2>

          <p className="mt-4 text-gray-300 text-base md:text-xl">
            Let&apos;s match the right equipment to your timeline and site
            needs.
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

export default function RentalEquipmentPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-white">
          <div className="animate-spin h-12 w-12 border-t-2 border-b-2 border-orange-500 rounded-full" />
        </div>
      }
    >
      <RentalEquipmentContent />
    </Suspense>
  );
}
