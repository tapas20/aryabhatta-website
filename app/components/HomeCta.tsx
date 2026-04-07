"use client";
import React from "react";
import { PhoneCall } from "lucide-react";

const HomeCta = () => {
  return (
    <div className="w-full bg-white py-14 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        {/* Subheading */}
        <p className="text-primary tracking-wider font-semibold mb-2 text-sm md:text-base">
          NEED RELIABLE SERVICE?
        </p>

        {/* Main Heading */}
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
          We&apos;re Ready to Support Your Next Project
        </h2>

        {/* Buttons Container */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 w-full">
          {/* CALL NOW BUTTON */}
          <a
            href="tel:0536649777"
            className="group w-full sm:w-auto px-6 py-3 bg-primary text-white font-semibold
              flex items-center justify-center gap-2 border-2 border-primary
              shadow-lg hover:bg-white hover:text-primary hover:border-primary
              hover:shadow-[0_0_20px_rgba(0,0,0,0.25)] transition-all duration-300 
              rounded-xl text-base md:text-lg"
          >
            Call Now
            <PhoneCall className="w-5 h-5 group-hover:translate-x-1 transition-all duration-300" />
          </a>

          {/* REQUEST ESTIMATE BUTTON */}
          <a
            href="/contact"
            className="w-full sm:w-auto px-6 py-3 font-semibold text-primary border-2 border-primary
              shadow-md hover:bg-primary hover:text-white hover:shadow-primary/30
              rounded-xl text-base md:text-lg"
          >
            REQUEST ESTIMATE
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeCta;
