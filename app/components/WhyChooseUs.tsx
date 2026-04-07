"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    title: "Transparent Pricing",
    desc: "Strategically competitive rates designed to offer superior value and cost savings without compromising excellence.",
    img: "/assets/pricing.jpg",
  },
  {
    title: "Skilled Professionals",
    desc: "Expertly trained & certified specialists committed to precision and ensuring superior performance at every stage.",
    img: "/assets/skilled.jpg",
  },
  {
    title: "Client Satisfaction",
    desc: "Delivering seamless, end-to-end support tailored to your needs.",
    img: "/assets/satisfaction.jpg",
  },
  {
    title: "Decades of Experience",
    desc: "A long-standing commitment to excellence that defines who we are.",
    img: "/assets/experience.jpg",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 md:mb-20">
          {/* Left: Big Title */}
          <motion.div
            initial={{ opacity: 0, x: -40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.05] italic">
              Why
              <br />
              Choose Us?
            </h2>
          </motion.div>

          {/* Right: Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-base sm:text-lg text-slate-600 font-medium italic lg:text-right max-w-md"
          >
            Dedicated to Exceeding Your Expectations.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {/* Row 1 — Card 1: Text left + Image right (wider image) */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="md:col-span-6 group rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 flex flex-col sm:flex-row min-h-[260px] hover:shadow-lg transition-shadow duration-500"
          >
            {/* Text */}
            <div className="flex flex-col justify-center p-6 sm:p-8 sm:w-1/2">
              <h3 className="text-xl sm:text-2xl font-extrabold text-primary mb-3 leading-snug">
                {features[0].title}
              </h3>
              <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed">
                {features[0].desc}
              </p>
            </div>
            {/* Image */}
            <div className="relative sm:w-1/2 h-[200px] sm:h-auto overflow-hidden">
              <Image
                src={features[0].img}
                alt={features[0].title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </motion.div>

          {/* Row 1 — Card 2: Image left + Text right */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="md:col-span-6 group rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 flex flex-col-reverse sm:flex-row min-h-[260px] hover:shadow-lg transition-shadow duration-500"
          >
            {/* Image */}
            <div className="relative sm:w-1/2 h-[200px] sm:h-auto overflow-hidden">
              <Image
                src={features[1].img}
                alt={features[1].title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            {/* Text */}
            <div className="flex flex-col justify-center p-6 sm:p-8 sm:w-1/2">
              <h3 className="text-xl sm:text-2xl font-extrabold text-primary mb-3 leading-snug">
                {features[1].title}
              </h3>
              <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed">
                {features[1].desc}
              </p>
            </div>
          </motion.div>

          {/* Row 2 — Card 3: Text left + Image right */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="md:col-span-5 group rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 flex flex-col sm:flex-row min-h-[260px] hover:shadow-lg transition-shadow duration-500"
          >
            {/* Text */}
            <div className="flex flex-col justify-center p-6 sm:p-8 sm:w-1/2">
              <h3 className="text-xl sm:text-2xl font-extrabold text-primary mb-3 leading-snug">
                {features[2].title}
              </h3>
              <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed">
                {features[2].desc}
              </p>
            </div>
            {/* Image */}
            <div className="relative sm:w-1/2 h-[200px] sm:h-auto overflow-hidden">
              <Image
                src={features[2].img}
                alt={features[2].title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </motion.div>

          {/* Row 2 — Card 4: Text left + Image right (wider) */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.36, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="md:col-span-7 group rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 flex flex-col sm:flex-row min-h-[260px] hover:shadow-lg transition-shadow duration-500"
          >
            {/* Text */}
            <div className="flex flex-col justify-center p-6 sm:p-8 sm:w-[40%]">
              <h3 className="text-xl sm:text-2xl font-extrabold text-primary mb-3 leading-snug">
                {features[3].title}
              </h3>
              <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed">
                {features[3].desc}
              </p>
            </div>
            {/* Image */}
            <div className="relative sm:w-[60%] h-[200px] sm:h-auto overflow-hidden">
              <Image
                src={features[3].img}
                alt={features[3].title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
