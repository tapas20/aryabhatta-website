"use client";

import { ArrowUp, MessageCircle, Phone } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

const SocialIcon = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {/* RIGHT SIDE QUICK ACTIONS */}
      <div className="fixed right-5 top-1/2 -translate-y-1/2 flex flex-col items-center gap-3 z-30">
        {/* WHATSAPP */}
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          className="group p-2.5 md:p-3 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/30
            transition-all duration-300 hover:scale-110"
        >
          <MessageCircle
            size={18}
            className="text-white md:w-[20px] md:h-[20px]"
          />
        </a>

        {/* PHONE */}
        <a
          href="tel:+919876543210"
          className="group p-2.5 md:p-3 rounded-full bg-primary shadow-lg shadow-primary/30
            transition-all duration-300 hover:scale-110"
        >
          <Phone size={18} className="text-white md:w-[20px] md:h-[20px]" />
        </a>
      </div>

      {/* SCROLL TO TOP */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-5 right-6 p-3 rounded-full bg-primary shadow-lg shadow-primary/30 border border-teal-600/20 transition-transform duration-200 z-50"
      >
        <ArrowUp size={22} className="text-white" />
      </motion.button>
    </div>
  );
};

export default SocialIcon;
