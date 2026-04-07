"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, BookOpen, Trophy, Clock, Target, HeadphonesIcon } from "lucide-react";

const features = [
  {
    title: "Expert Faculty",
    desc: "Our teachers bring 10+ years of experience and deep subject expertise. They simplify complex concepts and make learning enjoyable for every student.",
    icon: <Users className="w-8 h-8" />,
    gradient: "from-indigo-500 to-blue-500",
    color: "indigo",
  },
  {
    title: "Proven Results",
    desc: "95%+ students score distinction in board exams every year. Our structured approach consistently produces top rankers in both CBSE and CHSE boards.",
    icon: <Trophy className="w-8 h-8" />,
    gradient: "from-amber-500 to-orange-500",
    color: "amber",
  },
  {
    title: "Personalized Learning",
    desc: "Small batch sizes ensure individual attention. Regular assessments identify weak areas and our faculty provides targeted support to every student.",
    icon: <Target className="w-8 h-8" />,
    gradient: "from-emerald-500 to-teal-500",
    color: "emerald",
  },
  {
    title: "Comprehensive Study Material",
    desc: "Well-researched notes, practice papers, previous year question banks, and topic-wise worksheets designed by subject matter experts.",
    icon: <BookOpen className="w-8 h-8" />,
    gradient: "from-violet-500 to-purple-500",
    color: "violet",
  },
  {
    title: "Regular Assessments",
    desc: "Weekly tests, monthly exams, and mock board papers with detailed performance analysis to track progress and ensure consistent improvement.",
    icon: <Clock className="w-8 h-8" />,
    gradient: "from-rose-500 to-pink-500",
    color: "rose",
  },
  {
    title: "Doubt Clearing Sessions",
    desc: "Dedicated one-on-one doubt clearing sessions after every chapter. No question goes unanswered at BrightMind Academy.",
    icon: <HeadphonesIcon className="w-8 h-8" />,
    gradient: "from-cyan-500 to-blue-500",
    color: "cyan",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 md:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="h-[2px] w-10 bg-primary rounded-full"></span>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">
                Why BrightMind
              </p>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.05]">
              Why Choose
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
                BrightMind Academy?
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg text-slate-600 font-medium lg:text-right max-w-md"
          >
            We don&apos;t just teach subjects, we build confident learners who are
            ready to excel in academics and beyond.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="group rounded-2xl overflow-hidden bg-white border border-slate-100 p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 relative"
            >
              {/* Gradient accent top */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white mb-6 shadow-lg transition-transform duration-500 group-hover:scale-110`}>
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
