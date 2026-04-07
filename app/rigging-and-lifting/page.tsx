"use client";

import React, { useEffect, useState, Suspense } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Anchor, Truck, Settings } from "lucide-react";

/* ---------------- Animations ---------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

/* ---------------- Images ---------------- */
const IMAGES = {
  hero: "/assets/Crane.jpg",
  section1: "/assets/HeavyLifting.jpg",
  section2: "/assets/Trans.jpg",
  section3: "/assets/Heavy.jpg",
};

/* ===============================
   PAGE CONTENT
================================ */

function RiggingAndLiftingContent() {
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
            alt="Rigging and Lifting"
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
          Rigging & Lifting
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
          <span className="text-primary font-bold">Rigging & Lifting</span>
        </motion.div>
      </div>

      {/* ================= WHAT WE DO ================= */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={ready ? "show" : "hidden"}
        className="max-w-5xl mx-auto px-4 md:px-6 py-16 md:py-24"
      >
        <div className="text-center mb-12">
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Specialized Heavy Lifting Operations
          </h2>
        </div>

        <div className="bg-slate-50 p-8 md:p-12 rounded-3xl w-full border border-slate-100 shadow-sm text-slate-700 text-lg leading-relaxed space-y-6">
          <p>
            We are specialized in heavy <strong className="text-slate-900">Lifting & Rigging works</strong> from small and standalone components to major and multiple machine line ups. Rigging & Lifting operations on Oil & Gas, Construction & Engineering sites are carried out across Saudi Arabia on a daily basis. 
          </p>
          <p>
            We provide the complete package of rigging activities around the kingdom including Cranes, Heavy Equipment, Trucks, well-modulated 3-D lifting plans, Advanced Calculation Charts, and Field Execution. Our highly-skilled and <strong className="text-slate-900">Qualified Riggers</strong> are our specialty. Paired with our specialized Rigging Equipment, they allow us to handle the safest and most challenging jobs while minimizing downtime to your operations.
          </p>
          <p>
            We carry an expansive inventory of commercial Rigging Equipment including Boom trucks, Fork lifts, and Cranes with the ability to lift up to <strong className="text-primary">1200+ tons</strong>.
          </p>
          
          <div className="mt-8 p-6 bg-red-50 border-l-4 border-red-500 rounded-r-xl">
            <p className="text-red-900 font-semibold mb-0 flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
              In an Emergency, Our team is available 24/7 to respond to your needs.
            </p>
          </div>
        </div>
      </motion.div>

      {/* ================= SERVICES SHOWCASE ================= */}
      <div className="bg-slate-900 py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* 1. Heavy Lifting */}
            <motion.div 
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                <Anchor className="text-primary w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-6">Heavy Lifting</h3>
              <ul className="space-y-4 text-slate-300">
                <li className="flex gap-3"><ArrowRight className="w-5 h-5 text-primary shrink-0"/> Lifting of heavy machineries on both onshore & offshore</li>
                <li className="flex gap-3"><ArrowRight className="w-5 h-5 text-primary shrink-0"/> Constructing & deconstructing of plants</li>
                <li className="flex gap-3"><ArrowRight className="w-5 h-5 text-primary shrink-0"/> Structural installation like roof top installation</li>
                <li className="flex gap-3"><ArrowRight className="w-5 h-5 text-primary shrink-0"/> Bundle pulling</li>
              </ul>
            </motion.div>

            {/* 2. Jacking and Skidding */}
            <motion.div 
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                <Settings className="text-blue-400 w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-6">Jacking & Skidding</h3>
              <ul className="space-y-4 text-slate-300">
                <li className="flex gap-3"><ArrowRight className="w-5 h-5 text-blue-400 shrink-0"/> Unloading and assembling of transformers, heavy motors and machineries</li>
                <li className="flex gap-3"><ArrowRight className="w-5 h-5 text-blue-400 shrink-0"/> Cost-effective lifting and moving solutions for complex equipments</li>
              </ul>
            </motion.div>

            {/* 3. Lifting and Transportation */}
            <motion.div 
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="w-14 h-14 bg-orange-500/20 rounded-xl flex items-center justify-center mb-6">
                <Truck className="text-orange-400 w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-6">Transportation</h3>
              <ul className="space-y-4 text-slate-300">
                <li className="flex gap-3"><ArrowRight className="w-5 h-5 text-orange-400 shrink-0"/> Pre-calculated Lifting Operation</li>
                <li className="flex gap-3"><ArrowRight className="w-5 h-5 text-orange-400 shrink-0"/> Ensuring The Validity Of Rigging Apparatus</li>
                <li className="flex gap-3"><ArrowRight className="w-5 h-5 text-orange-400 shrink-0"/> Keen Supervision Of Each Procedure</li>
              </ul>
            </motion.div>

          </div>
        </div>
      </div>

    </div>
  );
}

/* ===============================
   EXPORT
================================ */

export default function RiggingAndLiftingPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-white">
          <div className="animate-spin h-12 w-12 border-t-2 border-primary border-r-2 border-r-transparent rounded-full" />
        </div>
      }
    >
      <RiggingAndLiftingContent />
    </Suspense>
  );
}
