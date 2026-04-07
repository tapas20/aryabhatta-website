"use client";

import React, { useEffect, useState, Suspense } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ChevronsRight } from "lucide-react";

/* ---------------- Animations ---------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

/* ---------------- Images ---------------- */
const IMAGES = {
  hero: "/assets/industry.jpg",
  section1: "/assets/Manpower.jpg",
  section2: "/assets/Manpowerhero.jpg",
};

/* ===============================
   PAGE CONTENT
================================ */

function TechnicalSolutionsContent() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <div className="bg-white text-black">
      {/* ================= HERO ================= */}
      <div className="relative w-full h-[55vh] flex flex-col items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={IMAGES.hero}
            alt="Technical Solutions"
            fill
            className="object-cover opacity-70"
            priority
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90" />

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate={ready ? "show" : "hidden"}
          className="relative text-3xl md:text-5xl lg:text-6xl font-extrabold text-white text-center px-4 tracking-tight"
        >
          Technical Solutions
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
          <span className="text-primary font-bold">Technical Solutions</span>
        </motion.div>
      </div>

      {/* ================= INTRO ================= */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={ready ? "show" : "hidden"}
        className="max-w-4xl mx-auto text-center px-4 md:px-6 py-16 md:py-24"
      >
        <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
          Comprehensive Support
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
          Project Management & Manpower Support
        </h2>

        <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
          At Al Syed Company, we provide expert{" "}
          <strong className="text-slate-900 font-semibold">
            Project Management Services
          </strong>{" "}
          coupled with highly trained,{" "}
          <strong className="text-slate-900 font-semibold">
            Technical & Qualified Manpower
          </strong>{" "}
          support. Whether managing short-term industrial turnarounds or executing long-term commercial projects, our technical solutions ensure optimal efficiency, safety, and operational excellence for any type of project.
        </p>
      </motion.div>

      {/* ================= SECTIONS ================= */}
      <Section
        id="01"
        index={0}
        ready={ready}
        title="Expert Project Management"
        image={IMAGES.section1}
        text={
          <>
            <p className="mb-4">
              Our project management teams bring years of rigorous field experience to oversee complex industrial workflows. From initial planning phases to execution and handover, we maintain strict oversight to ensure timelines and budgets are met without compromising safety or quality.
            </p>
            <ul className="space-y-3 mt-6">
              {[
                "End-to-End Project Planning & Execution",
                "Risk Management & Quality Assurance",
                "Resource Allocation & Optimization",
                "Strict Compliance with Saudi Safety Standards",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </>
        }
      />

      <Section
        id="02"
        index={1}
        ready={ready}
        reverse
        title="Qualified Manpower Support"
        image={IMAGES.section2}
        text={
          <>
            <p className="mb-4">
              We supply highly skilled professionals capable of seamlessly integrating into your operations. Our personnel are carefully vetted and trained to exceed industry standards, ensuring your project is powered by the right expertise.
            </p>
            <p>
              Whether you need specialized engineers, certified riggers, safety officers, or heavy equipment operators, our technical manpower division provides scalable workforce solutions tailored exactly to your project&apos;s size and scope.
            </p>
          </>
        }
      />

      {/* ================= MANPOWER LISTS ================= */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        animate={ready ? "show" : "hidden"}
        className="py-16 md:py-24 px-4 bg-slate-50"
      >
        <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden border border-slate-100">
          
          {/* Our Services */}
          <div className="p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1b1464]">
                Our Services
              </h2>
              <div className="w-16 h-1.5 bg-[#f59e0b] mx-auto mt-4 rounded-full" />
            </div>
            
            <ul className="divide-y divide-slate-100">
              {[
                "Comprehensive Staffing Solutions Including Saudi Nationals",
                "Operation & Maintenance Manpower",
                "Construction Manpower Support",
                "Personnel Provided on Short and Long Term Contracts",
                "Overseas Recruitment, as per Client Requirement.",
                "Engineers, Technician, Planning Crew, EHSS, Administrating Staff, QA/QC Crew, certified Operators, etc."
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 py-4 group">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#f59e0b] flex items-center justify-center shadow-md">
                    <ChevronsRight className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-slate-700 font-medium text-base md:text-lg group-hover:text-primary transition-colors">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Available Man Power */}
          <div className="p-8 md:p-12 bg-slate-50/50 border-t border-slate-100">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1b1464]">
                Available Man Power
              </h2>
              <div className="w-16 h-1.5 bg-[#f59e0b] mx-auto mt-4 rounded-full" />
            </div>
            
            <ul className="divide-y divide-slate-100">
              {[
                "Condition monitoring engineers and technicians",
                "QA/QC inspectors (certified & non-certified)",
                "Commissioning & pre-commissioning crew",
                "Reliability & risk-based inspection engineers",
                "Engineers (projects & maintenance)",
                "Planners (SAP & Primavera)",
                "Supervisor/Foreman",
                "Housekeeping crew",
                "Static & rotary engineers and technicians",
                "Quantity & land surveyors",
                "Administrative staff",
                "IT professionals",
                "Technicians",
                "Riggers",
                "EHSS crew",
                "Multi welders",
                "Civil construction crew",
                "QA/QC engineers"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 py-4 group">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#f59e0b] flex items-center justify-center shadow-md">
                    <ChevronsRight className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-slate-700 font-medium text-base md:text-lg group-hover:text-primary transition-colors">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.section>


      {/* ================= CTA ================= */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={ready ? { opacity: 1, y: 0 } : {}}
        className="py-16 md:py-24 px-4 bg-slate-900"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need Expert Technical Support?
          </h2>

          <p className="text-slate-300 text-lg md:text-xl mb-10">
            Partner with us to streamline your operations with premier project management and skilled manpower.
          </p>

          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-primary text-white font-bold uppercase tracking-wider rounded-xl shadow-[0_10px_30px_-10px_rgba(34,197,94,0.5)] hover:-translate-y-1 hover:shadow-[0_15px_40px_-10px_rgba(34,197,94,0.7)] transition-all duration-300"
          >
            Contact Our Team
          </Link>
        </div>
      </motion.section>
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
  image: string;
  reverse?: boolean;
  index: number;
  ready: boolean;
}

function Section({ id, title, text, image, reverse = false, index, ready }: SectionProps) {
  return (
    <motion.section
      id={id}
      variants={fadeUp}
      initial="hidden"
      animate={ready ? "show" : "hidden"}
      className={`${
        index % 2 === 0 ? "bg-slate-50" : "bg-white"
      } py-16 md:py-24 px-4 md:px-6 scroll-mt-20`}
    >
      <div
        className={`max-w-7xl mx-auto flex flex-col ${
          reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        } items-center gap-10 md:gap-16`}
      >
        <div className="relative w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-2xl group">
          <Image
            src={image}
            alt={title}
            width={900}
            height={600}
            className="w-full h-[300px] md:h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-slate-900/10 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-0" />
        </div>

        <div className="w-full lg:w-1/2">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary font-bold text-lg mb-6">
            {id}
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
            {title}
          </h3>
          <div className="text-slate-600 text-lg leading-relaxed">
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

export default function TechnicalSolutionsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-white">
          <div className="animate-spin h-12 w-12 border-t-2 border-primary border-r-2 border-r-transparent rounded-full" />
        </div>
      }
    >
      <TechnicalSolutionsContent />
    </Suspense>
  );
}
