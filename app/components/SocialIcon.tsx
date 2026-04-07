"use client";

import {
  Facebook,
  Instagram,
  Linkedin,
  ArrowUp,
  MessageCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

const SocialIcon = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {/* RIGHT SOCIAL ICONS */}
      <div className="fixed right-5 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 z-30">
        {/* WHATSAPP */}
        <a
          href="https://wa.me/0567220786"
          target="_blank"
          className="group p-2 md:p-3 rounded-full bg-white/15 backdrop-blur-md border border-white/25 
      transition-all duration-300 hover:scale-110 hover:bg-primary"
        >
          <MessageCircle
            size={18}
            className="text-white md:w-[22px] md:h-[22px] group-hover:text-white"
          />
        </a>

        {/* INSTAGRAM */}
        <a
          href="https://www.instagram.com/alsyedgroup.ksa/?igsh=MTBnM3I3MGliZHRpcw%3D%3D&utm_source=qr#"
          className="group p-2 md:p-3 rounded-full bg-white/15 backdrop-blur-md border border-white/25 
      transition-all duration-300 hover:scale-110 hover:bg-primary"
        >
          <Instagram
            size={18}
            className="text-white md:w-[22px] md:h-[22px] group-hover:text-white"
          />
        </a>

        {/* FACEBOOK */}
        <a
          href="https://www.facebook.com/profile.php?id=61583824135180&mibextid=wwXIfr&rdid=YZYjlH4t4fwf30K9&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F163Hib3bcq%2F%3Fmibextid%3DwwXIfr#"
          className="group p-2 md:p-3 rounded-full bg-white/15 backdrop-blur-md border border-white/25 
      transition-all duration-300 hover:scale-110 hover:bg-primary"
        >
          <Facebook
            size={18}
            className="text-white md:w-[22px] md:h-[22px] group-hover:text-white"
          />
        </a>

        {/* LINKEDIN */}
        <a
          href="https://www.linkedin.com/company/alsyedgroup/"
          className="group p-2 md:p-3 rounded-full bg-white/15 backdrop-blur-md border border-white/25 
      transition-all duration-300 hover:scale-110 hover:bg-primary"
        >
          <Linkedin
            size={18}
            className="text-white md:w-[22px] md:h-[22px] group-hover:text-white"
          />
        </a>
      </div>

      {/* SCROLL TO TOP */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-5 right-6 p-3 rounded-full hover:bg-white/15 hover:backdrop-blur-md bg-primary border border-white/30 shadow-md transition-transform duration-200 z-50"
      >
        <ArrowUp size={22} className="text-white" />
      </motion.button>
    </div>
  );
};

export default SocialIcon;
