import React from "react";
import { Facebook, Linkedin, Instagram, MessageCircle, Youtube, GraduationCap, MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-slate-900 text-white py-16 px-8">
      <div className="max-w-[1700px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 items-start">
          {/* Brand & Description */}
          <div className="space-y-6 lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-lg font-extrabold tracking-tight leading-none">BrightMind</p>
                <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/50 leading-none">Academy</p>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed text-sm max-w-sm">
              Premier coaching center for classes 6-12, providing expert coaching
              for CBSE and CHSE boards. We shape future toppers with personalized
              learning and proven results.
            </p>

            <div className="pt-2">
              <p className="text-xs text-slate-500 font-semibold mb-3 tracking-wider uppercase">
                Follow Us
              </p>
              <div className="flex gap-2">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-9 h-9 text-slate-400 bg-white/5 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-9 h-9 text-slate-400 bg-white/5 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="#"
                  aria-label="YouTube"
                  className="w-9 h-9 text-slate-400 bg-white/5 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <Youtube size={18} />
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="w-9 h-9 text-slate-400 bg-white/5 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="#"
                  aria-label="WhatsApp"
                  className="w-9 h-9 text-slate-400 bg-white/5 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <MessageCircle size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white text-sm mb-5 tracking-wider uppercase">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Courses", href: "/courses" },
                { label: "Results", href: "/results" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-primary hover:translate-x-1 inline-block transition-all duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-bold text-white text-sm mb-5 tracking-wider uppercase">
              Programs
            </h3>
            <ul className="space-y-3">
              {[
                "CBSE Classes 6-10",
                "CBSE Classes 11-12 Science",
                "CBSE Classes 11-12 Commerce",
                "CHSE Classes 11-12",
                "JEE & NEET Foundation",
                "Doubt Clearing Sessions",
              ].map((prog) => (
                <li key={prog}>
                  <Link
                    href="/courses"
                    className="text-slate-400 hover:text-primary hover:translate-x-1 inline-block transition-all duration-200 text-sm"
                  >
                    {prog}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-white text-sm mb-5 tracking-wider uppercase">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm">
                  123 Education Lane, Near City Center,
                  <br />
                  Bhubaneswar, Odisha - 751001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="text-slate-400 hover:text-primary transition-colors text-sm"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a
                  href="mailto:info@brightmindacademy.in"
                  className="text-slate-400 hover:text-primary transition-colors text-sm"
                >
                  info@brightmindacademy.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} BrightMind Academy. All rights reserved.
          </p>
          <p className="text-xs text-slate-600">
            CBSE & CHSE Affiliated Coaching Center
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
