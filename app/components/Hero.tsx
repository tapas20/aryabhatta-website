"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { GraduationCap, BookOpen, Trophy, Users, ArrowRight } from "lucide-react";

const slides = [
  {
    title: "Excel in Board Exams",
    subtitle:
      "Expert coaching for CBSE & CHSE classes 6-12. Build strong foundations and score top marks with our proven teaching methodology.",
    icon: <GraduationCap className="w-16 h-16" />,
    gradient: "from-indigo-600 via-violet-600 to-purple-700",
  },
  {
    title: "Learn from the Best Faculty",
    subtitle:
      "Experienced and passionate teachers who simplify complex concepts and make learning engaging for every student.",
    icon: <BookOpen className="w-16 h-16" />,
    gradient: "from-blue-600 via-indigo-600 to-violet-700",
  },
  {
    title: "Proven Track Record",
    subtitle:
      "Consistently producing top rankers in CBSE & CHSE board exams. 95%+ students score distinction every year.",
    icon: <Trophy className="w-16 h-16" />,
    gradient: "from-violet-600 via-purple-600 to-fuchsia-700",
  },
  {
    title: "Personalized Attention",
    subtitle:
      "Small batch sizes ensure every student gets individual attention, regular assessments, and one-on-one doubt clearing sessions.",
    icon: <Users className="w-16 h-16" />,
    gradient: "from-indigo-700 via-blue-600 to-cyan-600",
  },
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* GRADIENT BACKGROUNDS */}
      <AnimatePresence>
        {slides.map((slide, i) =>
          i === index ? (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
              className={`absolute inset-0 bg-gradient-to-br ${slide.gradient}`}
            >
              {/* Decorative elements */}
              <div className="absolute inset-0">
                <div className="absolute top-20 right-20 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.03] rounded-full" />

                {/* Grid pattern */}
                <div
                  className="absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  }}
                />
              </div>
            </motion.div>
          ) : null
        )}
      </AnimatePresence>

      {/* TEXT CONTENT */}
      <div className="absolute inset-0 flex items-center z-20">
        <div className="max-w-[1800px] mx-auto w-full px-6 sm:px-10 lg:px-16">
          <div className="max-w-3xl">
            {/* Badge */}
            <motion.div
              key={`badge-${index}`}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md rounded-full px-4 py-2 mb-6 border border-white/20"
            >
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-white/90 text-sm font-medium">Admissions Open for 2025-26</span>
            </motion.div>

            {/* Icon */}
            <motion.div
              key={`icon-${index}`}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-white/20 mb-4"
            >
              {slides[index].icon}
            </motion.div>

            {/* TITLE */}
            <motion.h1
              key={slides[index].title}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] text-white"
            >
              {slides[index].title}
            </motion.h1>

            {/* SUBTITLE */}
            <motion.p
              key={slides[index].subtitle}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-lg sm:text-xl font-medium text-white/80 mt-6 max-w-2xl leading-relaxed"
            >
              {slides[index].subtitle}
            </motion.p>

            {/* CTAs */}
            <motion.div
              key={`cta-${index}`}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mt-10"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl hover:bg-indigo-50 transition-all shadow-xl shadow-black/10 text-base"
              >
                Enroll Now
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/courses"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-xl border border-white/20 hover:bg-white/20 transition-all text-base"
              >
                Explore Courses
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* INDICATORS */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1 rounded-full transition-all duration-500 hover:bg-white/80 ${
              i === index ? "bg-white w-10" : "bg-white/40 w-6"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
