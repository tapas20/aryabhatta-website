"use client";

import React, { useEffect, useState, Suspense } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Wrench } from "lucide-react";

/* ---------------- Animations ---------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

/* ---------------- Images ---------------- */
const IMAGES = {
  hero: "/assets/oil-refinery-twilight-with-reflection.jpg",
  section1: "/assets/modern-factory-industrial-zone-blue-sky.jpg",
};

/* ===============================
   PAGE CONTENT
================================ */

function PlantMaintenanceContent() {
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
            alt="Plant Maintenance"
            fill
            className="object-cover opacity-80"
            priority
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90" />

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate={ready ? "show" : "hidden"}
          className="relative text-3xl md:text-5xl lg:text-7xl font-extrabold text-white text-center px-4 tracking-tight"
        >
          Plant Maintenance
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
          <span className="text-primary font-bold">Plant Maintenance</span>
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
          Industrial Reliability
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
          Turn Around and Shut Down Services
        </h2>

        <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
          The removal, replacement, and maintenance of heavy plant equipment often involve complicated and sensitive challenges. At Al Syed Company, our customized solutions minimize downtime and keep your plant operational at peak efficiency.
        </p>
      </motion.div>

      {/* ================= SERVICES SECTION ================= */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        animate={ready ? "show" : "hidden"}
        className="py-16 md:py-24 bg-slate-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 lg:p-16 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.1)] border border-slate-100 relative overflow-hidden">
            
            {/* Background pattern */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 relative z-10 items-center">
              
              {/* Left Side: Image */}
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={IMAGES.section1}
                  alt="Industrial Plant Maintenance"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Right Side: Bullet Points */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-8 text-slate-900 border-l-4 border-primary pl-4">
                  Turn Around & Shut Down Execution
                </h3>
                
                <ul className="space-y-5">
                  {[
                    "Technical engineering teams",
                    "Site visiting and inspection",
                    "Engineered 3D CAD lifting plans",
                    "Planning and survey",
                    "ID process, documentation & execution",
                    "Mobilization of equipment & qualified manpower",
                  ].map((service, index) => (
                    <li key={index} className="flex items-start gap-4 group">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                           <Wrench className="w-4 h-4 text-slate-500 group-hover:text-white" />
                        </div>
                      </div>
                      <p className="text-slate-700 text-lg font-medium pt-1">
                        {service}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </motion.section>

      {/* ================= INDUSTRIAL SERVICES ================= */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        animate={ready ? "show" : "hidden"}
        className="py-12 md:py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1b1464]">
              Industrial Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 max-w-7xl mx-auto">
            {[
              { title: "Catalyst Handling & Reactor", img: "/assets/catalyst_handling.png" },
              { title: "Water Jetting", img: "/assets/water_jetting.png" },
              { title: "Industrial Vacuuming", img: "/assets/industrial_vacuuming.png" },
              { title: "Tank Maintenance", img: "/assets/tank_maintenance.png" },
              { title: "Column & Vessel", img: "/assets/column_and_vessel.png" },
              { title: "Chemical Cleaning", img: "/assets/chemical_cleaning.png" },
            ].map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.05)] border-b-[6px] border-[#f59e0b] flex flex-col hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="relative w-full aspect-4/3 md:aspect-16/10">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 md:p-8 text-center flex flex-1 items-center justify-center min-h-[80px] md:min-h-[120px]">
                  <h3 className="text-sm sm:text-base md:text-2xl font-semibold text-[#1b1464] leading-snug">
                    {service.title}
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
        className="py-16 md:py-24 px-4 bg-slate-900"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ensure Uninterrupted Operations
          </h2>

          <p className="text-slate-300 text-lg md:text-xl mb-10">
            Contact us today to schedule comprehensive maintenance and turnaround services for your facility.
          </p>

          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-primary text-white font-bold uppercase tracking-wider rounded-xl shadow-[0_10px_30px_-10px_rgba(34,197,94,0.5)] hover:-translate-y-1 hover:shadow-[0_15px_40px_-10px_rgba(34,197,94,0.7)] transition-all duration-300"
          >
            Request a Consultation
          </Link>
        </div>
      </motion.section>
    </div>
  );
}

/* ===============================
   EXPORT
================================ */

export default function PlantMaintenancePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-white">
          <div className="animate-spin h-12 w-12 border-t-2 border-primary border-r-2 border-r-transparent rounded-full" />
        </div>
      }
    >
      <PlantMaintenanceContent />
    </Suspense>
  );
}
