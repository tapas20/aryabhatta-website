"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, ShieldCheck, Settings, MapPin, Sparkles } from "lucide-react";

const PRESIDENT_IMAGE_SRC = "/assets/president.jpg"; // ✅ replace with your actual image path
const PRESIDENT_NAME = "The President";
const PRESIDENT_ROLE = "Al Syed Company";

/** ✅ Missing in your code: focusAreas array */
const focusAreas = [
  {
    icon: <ShieldCheck className="w-5 h-5 text-primary" />,
    title: "Safety First",
    desc: "High standards across every operation and site.",
  },
  {
    icon: <Settings className="w-5 h-5 text-primary" />,
    title: "Precision & Control",
    desc: "Planned execution for complex dismantling work.",
  },
  {
    icon: <Sparkles className="w-5 h-5 text-primary" />,
    title: "Modernization",
    desc: "Continuous improvement and operational excellence.",
  },
  {
    icon: <MapPin className="w-5 h-5 text-primary" />,
    title: "Regional Reach",
    desc: "From Red Sea to Arabian Gulf — GCC & Middle East.",
  },
  {
    icon: <Sparkles className="w-5 h-5 text-primary" />,
    title: "Sustainability",
    desc: "Environmentally conscious practices and waste reduction.",
  },
  {
    icon: <Quote className="w-5 h-5 text-primary" />,
    title: "Client Focus",
    desc: "Client-first approach with clear communication and support.",
  },
];

const PresidentMessage = () => {
  const paragraphs = [
    `Al Syed Company has grown into one of the leading names in the Eastern Region's industrial sector, recognized for its commitment to safety, precision, and reliable service delivery. While our capabilities span construction, lifting, logistics, transport, and manpower, our strongest footprint lies in Demolition and Industrial Dismantling—a field where expertise, planning, and control are critical.`,
    `Over the years, we have executed complex demolition works across various structures and industrial environments, ensuring safe removal, controlled dismantling, and smooth project transition. Our teams are equipped with the experience, modern techniques, and specialized equipment required to manage high-risk operations with confidence.`,
    `Beyond demolition, we continue to support clients through Construction, Heavy Lifting, Equipment Rental, Rig Move Support, Plant Maintenance, and General Industrial Services. We engineer solutions, manage logistics, coordinate with authorities, and plan every phase with efficiency to achieve the shortest and safest execution time.`,
    `Our vision for the future remains focused on modernization, operational excellence, and developing a highly skilled workforce. Every member of Al Syed Company is dedicated to maintaining the highest standards of safety and ensuring outstanding service on every project. With operations extending from the Red Sea to the Arabian Gulf, and headquartered in Dammam, our capabilities allow us to serve clients across the GCC and the Middle East.`,
  ];

  return (
    <section
      className="py-12 sm:py-16 md:py-24 px-4 md:px-8 bg-gray-50 relative overflow-hidden"
      dir="ltr"
    >
      {/* subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 60h120' stroke='%23000' stroke-width='1'/%3E%3Cpath d='M60 0v120' stroke='%23000' stroke-width='1'/%3E%3C/svg%3E")`,
            backgroundSize: "120px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14 md:mb-20"
        >
          <p className="text-xs sm:text-sm tracking-[0.2em] uppercase text-gray-500">
            AL SYED COMPANY
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-light text-gray-900">
            President&apos;s{" "}
            <span className="font-bold text-primary">Message</span>
          </h2>
          <div className="w-20 h-0.5 bg-primary mx-auto mt-4 sm:mt-6" />
          <p className="text-gray-600 mt-4 sm:mt-6 max-w-2xl mx-auto font-light text-base sm:text-lg px-4">
            A message that reflects our commitment to safety, precision, and
            reliable delivery.
          </p>
        </motion.div>

        {/* ✅ Layout (items-stretch makes both columns same height on lg) */}
        <div className="grid lg:grid-cols-12 gap-8 lg:items-stretch">
          {/* Left column */}
          <motion.aside
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-4 h-full self-stretch flex flex-col gap-6"
          >
            {/* ✅ Key Focus Areas (flex-1 makes left side fill remaining height) */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8 flex flex-col flex-1">
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
                Key Focus Areas
              </h4>

              <div className="flex-1 space-y-4">
                {focusAreas.map((it, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 rounded-xl border border-gray-200 p-4 bg-gray-50"
                  >
                    <div className="shrink-0 w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center border border-orange-200/60">
                      {it.icon}
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-gray-900">{it.title}</p>
                      <p className="text-gray-600 text-sm font-light leading-relaxed">
                        {it.desc}
                      </p>
                    </div>
                  </div>
                ))}
                <div className="mt-2" />
              </div>
            </div>
          </motion.aside>

          {/* Right column Main message card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-8 h-full self-stretch"
          >
            {/* ✅ h-full + flex-col so it stretches to match left */}
            <div className="relative bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden h-full flex flex-col">
              {/* top accent */}
              <div className="h-1.5 bg-gradient-to-r from-primary to-primary/50" />

              {/* ✅ flex-1 lets content area fill remaining height */}
              <div className="p-6 sm:p-8 md:p-10 flex-1">
                <div className="flex items-start gap-3 sm:gap-4 mb-6">
                  <div className="shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-orange-200/60">
                    <Quote className="w-6 h-6 text-primary" />
                  </div>

                  <div className="text-left">
                    <p className="text-xs sm:text-sm uppercase tracking-wider text-gray-500">
                      Official Statement
                    </p>
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                      Excellence is our identity
                    </h3>
                  </div>
                </div>

                <div className="space-y-5 sm:space-y-6 text-left">
                  {paragraphs.map((t, i) => (
                    <motion.p
                      key={i}
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.55, delay: i * 0.06 }}
                      viewport={{ once: true }}
                      className="text-gray-700 leading-relaxed font-light text-sm sm:text-base md:text-lg"
                    >
                      {t}
                    </motion.p>
                  ))}

                  <motion.p
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.32 }}
                    viewport={{ once: true }}
                    className="text-gray-900 leading-relaxed text-sm sm:text-base md:text-lg"
                  >
                    Demolition may be our hallmark, but{" "}
                    <span className="font-semibold">
                      excellence is our identity.
                    </span>
                  </motion.p>

                  <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-t border-gray-200">
                    <div className="text-left">
                      <p className="text-gray-900 font-semibold">
                        {PRESIDENT_NAME}
                      </p>
                      <p className="text-gray-500 text-sm">{PRESIDENT_ROLE}</p>
                    </div>

                    <div className="text-left sm:text-right">
                      <p className="text-xs sm:text-sm text-gray-500">
                        Headquartered in Dammam • Serving GCC & Middle East
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* soft glow */}
              <div className="pointer-events-none absolute -top-16 -right-16 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PresidentMessage;
