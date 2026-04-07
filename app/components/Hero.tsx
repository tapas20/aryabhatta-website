"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Rigmove from "../../public/assets/Rigmove.jpg";
import HeavyLifting from "../../public/assets/HeavyLifting.jpg";
import Construction from "../../public/assets/Constructionhero.jpg";
import Manpower from "../../public/assets/Manpowerhero.jpg";
import Transportation from "../../public/assets/Transportation.jpg";
import HeavyEq from "../../public/assets/HeavyMechine.jpg";
import Demolition from "../../public/assets/Demolition.jpg";
import ROPlantMaintenance from "../../public/assets/RoPlant.png";

const slides = [
  {
    img: Demolition,
    title: "Demolition Works",
    subtitle:
      "Safe, controlled demolition services using engineered methods to dismantle structures with precision while minimizing operational risks.",
    direction: "left",
  },
  {
    img: HeavyLifting,
    title: "Heavy Lifting",
    subtitle:
      "Advanced heavy-duty lifting solutions using certified operators and state-of-the-art equipment to handle critical loads with maximum safety.",
    direction: "left",
  },
  {
    img: Transportation,
    title: "Transportation",
    subtitle:
      "Comprehensive industrial logistics ensuring safe, timely, and controlled movement of oversized, sensitive, and high-value equipment.",
    direction: "right",
  },
  {
    img: Rigmove,
    title: "Rig Move Support Services",
    subtitle:
      "End-to-end rig relocation engineered with precision, safety compliance, and seamless multi-phase coordination for complex operations.",
    direction: "right",
  },
  {
    img: Construction,
    title: "Construction Division",
    subtitle:
      "End-to-end civil and industrial construction services delivering quality workmanship, structural integrity, and timely project execution.",
    direction: "right",
  },
  {
    img: HeavyEq,
    title: "Heavy Equipment Rentals",
    subtitle:
      "Reliable, high-performance machinery available on demand to support every scale of industrial, construction, and infrastructure project.",
    direction: "left",
  },
  {
    img: Manpower,
    title: "Manpower Rental",
    subtitle:
      "Skilled, experienced, and safety-trained personnel deployed for demanding industrial operations, ensuring efficiency and reliability.",
    direction: "left",
  },

  {
    img: ROPlantMaintenance,
    title: "RO Plant Maintenance",
    subtitle:
      "Complete RO system maintenance ensuring optimal performance, reduced downtime, and uninterrupted industrial water purification operations.",
    direction: "right",
  },
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* IMAGE SLIDER */}
      <AnimatePresence>
        {slides.map((slide, i) =>
          i === index ? (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
              className="absolute inset-0"
            >
              {/* ==== CONDITIONAL SLIDING ==== */}
              <motion.div
                initial={
                  isMobile
                    ? { scale: 1, x: 0 } // mobile → no sliding
                    : {
                        scale: 1.08,
                        x: slide.direction === "left" ? 50 : -50,
                      }
                }
                animate={isMobile ? { scale: 1, x: 0 } : { scale: 1, x: 0 }}
                transition={{
                  duration: isMobile ? 0 : 4,
                  ease: "easeOut",
                }}
                className="absolute inset-0"
              >
                <Image
                  src={slide.img}
                  alt="Hero Background"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </motion.div>
          ) : null,
        )}
      </AnimatePresence>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40" />

      {/* TEXT CONTENT */}
      <div className="absolute top-1/2 -translate-y-1/2 left-10 sm:left-20 text-white z-20 max-w-2xl">
        {/* TITLE */}
        <motion.h1
          key={slides[index].title}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-6xl font-extrabold tracking-wide leading-tight drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)]"
        >
          <span className="bg-white bg-clip-text text-transparent">
            {slides[index].title}
          </span>
        </motion.h1>

        {/* SUBTITLE */}
        <motion.p
          key={slides[index].subtitle}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg sm:text-2xl font-light opacity-95 tracking-wide leading-relaxed drop-shadow-[0_4px_10px_rgba(0,0,0,0.7)]"
        >
          {slides[index].subtitle}
        </motion.p>
      </div>

      {/* INDICATORS */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-[3px] w-6 rounded-full transition-all duration-500 hover:bg-white/80 ${
              i === index ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
