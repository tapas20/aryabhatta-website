"use client";
import React from "react";
import { PhoneCall, ArrowRight } from "lucide-react";
import Link from "next/link";

const HomeCta = () => {
  return (
    <div className="w-full bg-card py-16 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-1.5 mb-4">
          <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          <span className="text-sm font-semibold text-accent">
            Admissions Open 2025-26
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight mb-4">
          Start Your Journey to Academic Excellence
        </h2>

        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
          Join thousands of successful students. Book a free demo class and
          experience the Aryabhatta Educations difference today.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 w-full">
          <a
            href="tel:+919876543210"
            className="group w-full sm:w-auto px-8 py-4 bg-primary text-white font-semibold
              flex items-center justify-center gap-2
              shadow-xl shadow-primary/20 hover:bg-teal-800
              transition-all duration-300
              rounded-xl text-base md:text-lg"
          >
            Call Now
            <PhoneCall className="w-5 h-5 group-hover:translate-x-1 transition-all duration-300" />
          </a>

          <Link
            href="/contact"
            className="group w-full sm:w-auto px-8 py-4 font-semibold text-primary border-2 border-primary
              shadow-md hover:bg-primary hover:text-white
              rounded-xl text-base md:text-lg flex items-center justify-center gap-2 transition-all duration-300"
          >
            Book Free Demo Class
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeCta;
