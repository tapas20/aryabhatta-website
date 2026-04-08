"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";

const highlights = [
  "CBSE & CHSE board affiliated coaching",
  "Experienced faculty with 10+ years expertise",
  "Small batch sizes (max 25 students)",
  "Regular tests & performance tracking",
  "Doubt clearing sessions every week",
  "Study material & practice papers included",
  "Parent-teacher meetings every month",
  "JEE & NEET foundation integrated courses",
];

const Experience: React.FC = () => {
  return (
    <section className="w-full bg-card">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
        {/* LEFT PANEL */}
        <div className="bg-slate-900 text-white p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 mb-6 w-fit">
            <span className="w-2 h-2 bg-teal-400 rounded-full" />
            <span className="text-sm font-medium text-white/80">
              Since 2015
            </span>
          </div>

          <h2 className="text-4xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
            Building Academic
            <br />
            Excellence for
            <br />
            <span className="text-teal-400">Over a Decade</span>
          </h2>

          <div className="w-14 h-1 bg-primary rounded-full mb-6" />

          <p className="text-slate-300 text-base leading-relaxed mb-8 max-w-lg">
            At BrightMind Academy, we believe every student has the potential to
            excel. Our structured approach combines expert teaching, regular
            assessments, and personalized attention to transform students into
            confident achievers.
          </p>

          <Link
            href="/about"
            className="group inline-flex items-center gap-2 bg-primary hover:bg-teal-800 text-white px-6 py-3 rounded-xl w-fit font-semibold transition-all shadow-lg shadow-primary/20"
          >
            Know More About Us
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* RIGHT PANEL */}
        <div className="flex flex-col">
          {/* Highlights Grid */}
          <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-gradient-to-br from-primary/5 to-accent/5">
            <h3 className="text-2xl font-bold text-foreground mb-8">
              What Sets Us Apart
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-xl bg-card/70 border border-border"
                >
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-sm font-medium text-foreground/80">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="bg-primary p-8">
              <h3 className="text-white font-bold text-2xl mb-2">
                Call for Admission
              </h3>
              <a
                href="tel:+919876543210"
                className="text-teal-200 text-3xl font-bold hover:text-white transition"
              >
                +91 98765 43210
              </a>
            </div>

            <div className="bg-primary/10 p-8 flex items-center justify-center">
              <Link
                href="/contact"
                className="bg-primary text-white px-8 py-3 rounded-xl font-semibold hover:bg-teal-800 transition shadow-lg shadow-primary/20"
              >
                BOOK A FREE DEMO CLASS
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
