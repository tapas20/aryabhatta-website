"use client";

import React, { useEffect, useState, Suspense } from "react";
import { motion } from "framer-motion";
import Image, { type StaticImageData } from "next/image";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

/* ---------------- IMAGES ---------------- */

import Heavy from "../../public/assets/Constructionhero.jpg";
import HeavyLifting from "../../public/assets/GenConstruction.jpg";
import Transportation from "../../public/assets/StillandAlu.jpg";
import Plumbing from "../../public/assets/pipes-2672184.jpg";
import Fabrication from "../../public/assets/welding-7104637.jpg";
import Fire from "../../public/assets/rose-galloway-green-o6asPZdUjUs-unsplash.jpg";
import Land from "../../public/assets/land.jpg";
import Alumunium from "../../public/assets/alumunium.jpg";
import Bed from "../../public/assets/bedroom-416062_1920.jpg";
import gypsum from "../../public/assets/gypsum.jpg";
import asphalt from "../../public/assets/asphalt.jpg";
import mechele from "../../public/assets/mechanical.jpg";

/* ---------------- ANIMATION ---------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

/* ===============================
   MAIN CONTENT
================================ */

function ConstructionContent() {
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
            src={Heavy}
            alt="Construction"
            fill
            className="object-cover opacity-70"
            priority
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90" />

        <motion.h1
          initial="hidden"
          animate={ready ? "show" : "hidden"}
          variants={fadeUp}
          className="relative text-3xl md:text-4xl lg:text-6xl font-semibold text-white text-center px-4"
        >
          Construction Division
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
          <span className="text-primary font-bold">
            Construction Division
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
          Welcome to the Construction Division
        </h2>

        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          We specialize in multi-storey residential and commercial buildings,
          villas, renovation, refurbishment, demolition, and excavation.
          <br />
          <br />
          Our expertise includes electrical installations, industrial works,
          cable laying, panel boards, substations, and pole erection projects
          across Saudi Arabia.
        </p>

        <p className="mt-6 text-primary text-xl font-semibold italic">
          “Turning visions into strong foundations.”
        </p>
      </motion.div>

      {/* ================= SECTIONS ================= */}

      <Section
        id="01"
        index={0}
        ready={ready}
        title="General Construction"
        image={HeavyLifting}
        text={
          <>
            <p>
              We deliver complete general construction services covering civil,
              electrical, mechanical, fire protection, carpentry, and surveying
              works.
            </p>
            <p>
              Our experienced teams ensure quality execution, safety compliance,
              and reliable delivery across residential, commercial, and
              industrial developments.
            </p>
          </>
        }
      />

      <Section
        id="02"
        index={1}
        ready={ready}
        reverse
        title="Gypsum Works"
        image={gypsum}
        text={
          <>
            <p>
              We provide professional gypsum works and interior decoration
              solutions for residential, commercial, and hospitality projects.
            </p>
            <p>
              Our services include partitions, ceilings, cabinets, and
              customized finishes delivered with precision and craftsmanship.
            </p>
          </>
        }
      />

      <Section
        id="03"
        index={2}
        ready={ready}
        title="Asphalt Work"
        image={asphalt}
        text={
          <>
            <p>
              We offer complete asphalt paving and milling services for roads,
              parking areas, and high-traffic industrial zones.
            </p>
            <p>
              Our certified equipment and experienced teams ensure durability,
              precision, and timely completion.
            </p>
          </>
        }
      />

      <Section
        id="04"
        index={3}
        ready={ready}
        reverse
        title="Steel & Aluminum Works"
        image={Transportation}
        text={
          <>
            <p>
              We specialize in steel and aluminum fabrication for structural and
              architectural applications.
            </p>
            <p>
              Using modern machinery and strict quality controls, we deliver
              durable, cost-effective solutions on schedule.
            </p>
          </>
        }
      />

      <Section
        id="05"
        index={4}
        ready={ready}
        title="Mechanical & Electrical Work"
        image={mechele}
        text={
          <>
            <p>
              Our MEP services cover industrial Installation pipe line, power
              distribution, cabling, grounding, and system testing.
            </p>
            <p>
              We ensure technical precision, safety compliance, and long-term
              operational reliability.
            </p>
          </>
        }
      />

      <Section
        id="06"
        index={5}
        ready={ready}
        reverse
        title="Plumbing Works"
        image={Plumbing}
        text={
          <>
            <p>
              We deliver complete plumbing solutions including process water
              systems, drainage networks, pumps, boilers, and gas piping.
            </p>
            <p>
              Our execution meets international standards for safety,
              efficiency, and durability.
            </p>
          </>
        }
      />

      <Section
        id="07"
        index={6}
        ready={ready}
        title="Fabrication Works"
        image={Fabrication}
        text={
          <>
            <p>
              We provide light, medium, and heavy fabrication services for
              industrial and construction applications.
            </p>
            <p>
              Our scope includes structural steel, platforms, walkways,
              railings, and custom metal components.
            </p>
          </>
        }
      />

      <Section
        id="08"
        index={7}
        ready={ready}
        reverse
        title="Fire & Safety"
        image={Fire}
        text={
          <>
            <p>
              We deliver comprehensive fire protection and life safety systems
              for all facility types.
            </p>
            <p>
              Our solutions meet regulatory and international safety standards.
            </p>
          </>
        }
      />

      <Section
        id="09"
        index={8}
        ready={ready}
        title="Land Surveying"
        image={Land}
        text={
          <>
            <p>
              Our land surveying services provide accurate measurements and site
              data for all project types.
            </p>
            <p>
              Using advanced equipment, we support planning and construction
              with precision.
            </p>
          </>
        }
      />

      <Section
        id="10"
        index={9}
        ready={ready}
        reverse
        title="Aluminium Fabrication"
        image={Alumunium}
        text={
          <>
            <p>
              We deliver high-quality aluminum fabrication for architectural and
              structural applications.
            </p>
            <p>
              Our work combines modern design, functionality, and durability.
            </p>
          </>
        }
      />

      <Section
        id="11"
        index={10}
        ready={ready}
        title="Interior Design & Décor Works"
        image={Bed}
        text={
          <>
            <p>
              We provide complete interior design and décor solutions from
              concept to execution.
            </p>
            <p>
              Our services include space planning, 3D visualization, ceilings,
              partitions, furniture, and turnkey fit-outs.
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
            Ready to Start Your Project?
          </h2>
          <p className="mt-4 text-gray-300 text-base md:text-xl">
            Let&apos;s bring your vision to life with our expertise.
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
   SECTION COMPONENT
================================ */

interface SectionProps {
  id: string;
  title: string;
  text: React.ReactNode;
  image: StaticImageData;
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

export default function ConstructionPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-white">
          <div className="animate-spin h-12 w-12 border-t-2 border-b-2 border-orange-500 rounded-full" />
        </div>
      }
    >
      <ConstructionContent />
    </Suspense>
  );
}
