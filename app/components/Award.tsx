"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Awards + Key Milestones (Company started in 2007)
const awards = [
  {
    year: "2019",
    title: "Heavy Lifting & Rig Move Operations Expanded",
    subtitle: "Specialized support for industrial lifts, shifts, and site logistics",
  },
  {
    year: "2017",
    title: "Demolition Division Strengthened",
    subtitle: "Controlled demolition, selective dismantling, site clearance & debris removal",
  },
  {
    year: "2014",
    title: "Transportation & Equipment Fleet Growth",
    subtitle: "Heavy transport, equipment shifting, and project mobilization support",
  },
  {
    year: "2011",
    title: "Heavy Equipment Rental Services Launched",
    subtitle: "Cranes, loaders, excavators & project-ready machinery support",
  },
  {
    year: "2007",
    title: "Company Established",
    subtitle: "Started operations in construction & industrial support services",
  },
];


export default function Award() {
  const [index, setIndex] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % awards.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full py-20 bg-[#e1e1e1] overflow-hidden">
      {/* BACKGROUND PATTERN */}
      <div className="absolute inset-0 opacity-[0.12] bg-[url('/assets/award-bg.jpg')] bg-repeat"></div>

      <div className="relative max-w-6xl mx-auto text-center px-4">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-semibold text-[#333]"
        >
          Recognition for Excellence
        </motion.h2>

        {/* Animated Slider Content */}
        <div className="mt-10 h-[180px] flex items-center justify-center relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="absolute w-full"
            >
              <p className="text-5xl md:text-6xl font-extrabold text-[#333] mb-3">
                {awards[index].year}
              </p>
              <p className="text-xl md:text-2xl font-medium text-[#222]">
                {awards[index].title}
              </p>
              <p className="text-sm md:text-base text-[#555] mt-1">
                {awards[index].subtitle}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* DOT INDICATORS */}
        <div className="flex justify-center mt-8 gap-2">
          {awards.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 w-2 rounded-full transition-all ${
                index === i ? "bg-black w-5" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
