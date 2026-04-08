"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy } from "lucide-react";

const milestones = [
  {
    year: "2025",
    title: "98.6% — Highest Score in CBSE Class 12",
    subtitle: "15 students scored above 95% in CBSE board exams",
  },
  {
    year: "2024",
    title: "50+ Students Qualified JEE & NEET",
    subtitle:
      "Record-breaking competitive exam results with integrated coaching",
  },
  {
    year: "2023",
    title: "100% Pass Rate in CHSE Board Exams",
    subtitle:
      "Every student passed with first division — 80% scored distinction",
  },
  {
    year: "2021",
    title: "Expanded to 3 Branches",
    subtitle: "Growing reach to serve more students across the city",
  },
  {
    year: "2019",
    title: "First Batch of 100% Distinction",
    subtitle: "All Class 10 CBSE students scored 80%+ in board exams",
  },
  {
    year: "2015",
    title: "Academy Founded",
    subtitle:
      "Started with a vision to provide quality education for every student",
  },
];

export default function Award() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % milestones.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full py-20 bg-gradient-to-br from-primary via-teal-700 to-teal-900 overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto text-center px-4">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-6 border border-white/20">
          <Trophy className="w-4 h-4 text-accent" />
          <span className="text-sm font-medium text-white/90">
            Our Milestones
          </span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-extrabold text-white"
        >
          Achievements & Results
        </motion.h2>

        {/* Animated Slider Content */}
        <div className="mt-12 h-[180px] flex items-center justify-center relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="absolute w-full"
            >
              <p className="text-6xl md:text-7xl font-extrabold text-white/90 mb-4">
                {milestones[index].year}
              </p>
              <p className="text-xl md:text-2xl font-semibold text-white">
                {milestones[index].title}
              </p>
              <p className="text-base text-white/60 mt-2">
                {milestones[index].subtitle}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* DOT INDICATORS */}
        <div className="flex justify-center mt-8 gap-2">
          {milestones.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${
                index === i ? "bg-white w-8" : "bg-white/30 w-2"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
