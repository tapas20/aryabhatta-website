import React from "react";
import Image from "next/image";
import { Facebook, Linkedin, Instagram, MessageCircle } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-[#a9a9a9] text-white py-12 px-8">
      <div className="max-w-[1700px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Section - Logo & Social */}
          <div className="space-y-6">
            <div>
              <Image
                src="/assets/alsyed-logo.png"
                alt="Al Syed Group - Construction & Engineering Company in Saudi Arabia"
                width={80}
                height={80}
                className="h-25 w-25 object-contain"
              />
            </div>

            {/* Address Section */}
            <div className="space-y-2">
              <p className="font-bold text-black text-lg tracking-wide">
                COMPANY ADDRESS
              </p>
              <div className="text-black/90 text-sm leading-relaxed">
                <p>Adh Dhahran Al Jubail Highway</p>
                <p>Dammam 31972, Kingdom of Saudi Arabia</p>
              </div>
            </div>

            <p className="text-black/90 leading-relaxed max-w-md">
              We take pride in being a trusted partner for businesses across
              Saudi Arabia, delivering excellence, reliability, and value-driven
              solutions in every project we undertake.
            </p>

            <div className="pt-4">
              <p className="text-sm text-black font-semibold mb-3 tracking-wide">
                FOLLOW US
              </p>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/alsyedgroup.ksa/?igsh=MTBnM3I3MGliZHRpcw%3D%3D&utm_source=qr#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Al Syed Group on Instagram"
                  className="w-10 h-10 text-black bg-white/20 rounded-lg flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300 hover:scale-110"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61583824135180&mibextid=wwXIfr&rdid=YZYjlH4t4fwf30K9&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F163Hib3bcq%2F%3Fmibextid%3DwwXIfr#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Al Syed Group on Facebook"
                  className="w-10 h-10 text-black bg-white/20 rounded-lg flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300 hover:scale-110"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/company/alsyedgroup/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Al Syed Group on LinkedIn"
                  className="w-10 h-10 text-black bg-white/20 rounded-lg flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300 hover:scale-110"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://wa.me/8105590926"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contact Al Syed Group on WhatsApp"
                  className="w-10 h-10 text-black bg-white/20 rounded-lg flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300 hover:scale-110"
                >
                  <MessageCircle size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Section - Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:mt-31">
            <div>
              <h3 className="font-bold text-black text-lg mb-5 tracking-wide">
                PAGES
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/about"
                    className="text-black/90 hover:text-primary hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-black/90 hover:text-primary hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-black/90 hover:text-primary hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/expertise"
                    className="text-black/90 hover:text-primary hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    Expertise
                  </Link>
                </li>
                <li>
                  <Link
                    href="/demolition"
                    className="text-black/90 hover:text-primary hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    Demolition
                  </Link>
                </li>
                <li>
                  <Link
                    href="/construction"
                    className="text-black/90 hover:text-primary hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    Construction
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-black text-lg mb-5 tracking-wide">
                CONTACT
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto: info@alsyedgroup.net"
                    className="text-black/90 hover:text-primary hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    info@alsyedgroup.net
                  </a>
                </li>
                <li>
                  <a
                    href="tel:0567220786"
                    className="text-black/90 hover:text-primary hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    0567220786
                  </a>
                </li>
                <li>
                  <a
                    href="tel:0536649777"
                    className="text-black/90 hover:text-primary hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    0536649777
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-black/20 mt-8 pt-6 text-center">
          <p className="text-sm text-black/80">
            © {new Date().getFullYear()} Al Syed. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
