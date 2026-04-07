"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // ✅ Services dropdown states
  const [servicesOpen, setServicesOpen] = useState(false);
  const [servicesMobileOpen, setServicesMobileOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement | null>(null);

  // Detect Scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) setScrolled(true);
      else setScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Close desktop dropdown on outside click / Escape
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!servicesRef.current) return;
      if (!servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setServicesOpen(false);
    };

    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  // ✅ Close dropdown when mobile menu closes
  useEffect(() => {
    if (!open) setServicesMobileOpen(false);
  }, [open]);

  const hoverStyle =
    "hover:text-primary underline-offset-4 transition-all duration-200 cursor-pointer";

  const menuTextColor = scrolled ? "text-black" : "text-white";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white backdrop-blur-md border-b border-gray-300 shadow-sm"
          : "bg-transparent backdrop-blur-md border-b border-white/20"
      }`}
    >
      <nav
        className={`w-full max-w-[1800px] mx-auto flex justify-between items-center px-6 py-2 transition-all duration-300 
        ${menuTextColor}`}
      >
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/assets/alsyed-logo.png"
              alt="logo"
              width={80}
              height={80}
              className="h-20 w-auto object-contain cursor-pointer"
              priority
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div
          className={`hidden md:flex items-center gap-10 font-bold uppercase transition-all duration-300 ${menuTextColor}`}
        >
          <Link href="/" className={hoverStyle}>
            Home
          </Link>

          <Link href="/about" className={hoverStyle}>
            About Us
          </Link>

          <Link href="/qhse" className={hoverStyle}>
            QHSE
          </Link>

          <Link href="/expertise" className={hoverStyle}>
            Expertise
          </Link>

          {/* ✅ Our Services Dropdown */}
          <div className="relative group" ref={servicesRef}>
            <button
              type="button"
              onClick={() => setServicesOpen((v) => !v)}
              className={`${hoverStyle} flex items-center gap-2 py-6`} // Added py-6 to increase the vertical native hover area
              aria-haspopup="menu"
              aria-expanded={servicesOpen}
            >
              OUR SERVICES
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-200 group-hover:rotate-180 ${
                  servicesOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            {/* Invisible hover bridge to prevent menu from closing when moving mouse down */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-full h-[40px] bg-transparent" />

            {/* Mega Menu Dropdown */}
            <div
              className={`fixed top-[96px] left-0 w-full border-t shadow-2xl overflow-hidden transition-all duration-300 origin-top ${
                servicesOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0"
              } ${
                scrolled
                  ? "bg-white border-gray-100"
                  : "bg-white border-white/20" 
              }`}
              role="menu"
            >
              <div className="max-w-[1400px] mx-auto flex w-full">
                {/* Left Side: Spotlight / Featured Image area */}
                <div className="w-1/3 bg-transparent p-6 lg:p-8 border-r border-gray-100 flex flex-col justify-start group/featured cursor-pointer">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="h-[2px] w-8 bg-primary rounded-full"></span>
                    <span className="text-xs font-bold tracking-[0.25em] text-primary uppercase">
                      Featured Expertise
                    </span>
                  </div>

                  <div className="relative h-40 lg:h-48 w-full rounded-2xl overflow-hidden mb-4 shadow-md">
                    <Image
                      src="/assets/DemolitionHeroNew.png"
                      alt="Featured Service"
                      fill
                      className="object-cover transition-transform duration-700 group-hover/featured:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent mix-blend-multiply" />
                  </div>

                  <h4 className="text-2xl lg:text-3xl font-extrabold text-[#1a2b4c] mb-3 tracking-tight leading-tight uppercase">
                    Complex <br /> Demolition Works
                  </h4>

                  <p className="text-slate-500 font-medium leading-relaxed text-sm max-w-[95%]">
                    Explore our specialized capabilities in handling
                    large-scale industrial projects across the Kingdom.
                  </p>

                  <div className="inline-flex items-center gap-2 text-[#1a2b4c] font-bold text-sm mt-4 transition-colors group-hover/featured:text-primary uppercase tracking-wide">
                    Explore Division
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="transition-transform duration-500 group-hover/featured:translate-x-2"
                    >
                      <path
                        d="M5 12H19M19 12L12 5M19 12L12 19"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                {/* Right Side: Service Links Grid */}
                <div className="w-2/3 p-8 lg:p-12 pl-12 lg:pl-16 grid grid-cols-2 gap-x-12 gap-y-8 items-center">
                  <Link
                    href="/demolition"
                    className="group/link flex items-start gap-5 p-2 rounded-xl transition-colors cursor-pointer"
                    onClick={() => setServicesOpen(false)}
                    role="menuitem"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0 group-hover/link:border-primary/30 transition-colors overflow-hidden relative shadow-sm">
                       <Image src="/assets/Demolition Work.jpg" alt="Demolition" fill className="object-cover" />
                    </div>
                    <div className="flex-1 mt-1">
                      <h5 className="text-sm font-bold text-slate-900 group-hover/link:text-primary transition-colors uppercase tracking-wide">
                        DEMOLITION DIVISION
                      </h5>
                      <p className="text-xs text-slate-500 font-medium mt-1.5 leading-snug">
                        Safe and controlled structural dismantling.
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="/construction"
                    className="group/link flex items-start gap-5 p-2 rounded-xl transition-colors cursor-pointer"
                    onClick={() => setServicesOpen(false)}
                    role="menuitem"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0 group-hover/link:border-primary/30 transition-colors overflow-hidden relative shadow-sm">
                       <Image src="/assets/ConstructionDiv.jpg" alt="Construction" fill className="object-cover" />
                    </div>
                    <div className="flex-1 mt-1">
                      <h5 className="text-sm font-bold text-slate-900 group-hover/link:text-primary transition-colors uppercase tracking-wide">
                        CONSTRUCTION DIVISION
                      </h5>
                      <p className="text-xs text-slate-500 font-medium mt-1.5 leading-snug">
                         End-to-end civil and industrial construction.
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="/re-routing"
                    className="group/link flex items-start gap-5 p-2 rounded-xl transition-colors cursor-pointer"
                    onClick={() => setServicesOpen(false)}
                    role="menuitem"
                  >
                     <div className="w-14 h-14 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0 group-hover/link:border-primary/30 transition-colors overflow-hidden relative shadow-sm">
                       <Image src="/assets/rerouting-hero.jpg" alt="Re-routing Sector" fill className="object-cover" />
                    </div>
                    <div className="flex-1 mt-1">
                      <h5 className="text-sm font-bold text-slate-900 group-hover/link:text-primary transition-colors uppercase tracking-wide">
                        RE-ROUTING SECTOR
                      </h5>
                      <p className="text-xs text-slate-500 font-medium mt-1.5 leading-snug">
                        Strategic planning and execution.
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="/rental-equipment"
                    className="group/link flex items-start gap-5 p-2 rounded-xl transition-colors cursor-pointer"
                    onClick={() => setServicesOpen(false)}
                    role="menuitem"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0 group-hover/link:border-primary/30 transition-colors overflow-hidden relative shadow-sm">
                       <Image src="/assets/HeavyEqp.jpg" alt="Rental Equipment" fill className="object-cover" />
                    </div>
                    <div className="flex-1 mt-1">
                      <h5 className="text-sm font-bold text-slate-900 group-hover/link:text-primary transition-colors uppercase tracking-wide">
                        RENTAL EQUIPMENT
                      </h5>
                      <p className="text-xs text-slate-500 font-medium mt-1.5 leading-snug">
                        High-performance machinery on demand.
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="/logistic"
                    className="group/link flex items-start gap-5 p-2 rounded-xl transition-colors cursor-pointer"
                    onClick={() => setServicesOpen(false)}
                    role="menuitem"
                  >
                     <div className="w-14 h-14 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0 group-hover/link:border-primary/30 transition-colors overflow-hidden relative shadow-sm">
                       <Image src="/assets/Logistics.jpg" alt="Logistics" fill className="object-cover" />
                    </div>
                    <div className="flex-1 mt-1">
                      <h5 className="text-sm font-bold text-slate-900 group-hover/link:text-primary transition-colors uppercase tracking-wide">
                        LOGISTIC SECTOR
                      </h5>
                      <p className="text-xs text-slate-500 font-medium mt-1.5 leading-snug">
                        Comprehensive transportation solutions.
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="/technical-solutions"
                    className="group/link flex items-start gap-5 p-2 rounded-xl transition-colors cursor-pointer"
                    onClick={() => setServicesOpen(false)}
                    role="menuitem"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0 group-hover/link:border-primary/30 transition-colors overflow-hidden relative shadow-sm">
                       <Image src="/assets/industry.jpg" alt="Technical Solutions" fill className="object-cover" />
                    </div>
                    <div className="flex-1 mt-1">
                      <h5 className="text-sm font-bold text-slate-900 group-hover/link:text-primary transition-colors uppercase tracking-wide">
                        TECHNICAL SOLUTIONS
                      </h5>
                      <p className="text-xs text-slate-500 font-medium mt-1.5 leading-snug">
                        Project management & qualified manpower.
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="/plant-maintenance"
                    className="group/link flex items-start gap-5 p-2 rounded-xl transition-colors cursor-pointer"
                    onClick={() => setServicesOpen(false)}
                    role="menuitem"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0 group-hover/link:border-primary/30 transition-colors overflow-hidden relative shadow-sm">
                       <Image src="/assets/oil-refinery-twilight-with-reflection.jpg" alt="Plant Maintenance" fill className="object-cover" />
                    </div>
                    <div className="flex-1 mt-1">
                      <h5 className="text-sm font-bold text-slate-900 group-hover/link:text-primary transition-colors uppercase tracking-wide">
                        PLANT MAINTENANCE
                      </h5>
                      <p className="text-xs text-slate-500 font-medium mt-1.5 leading-snug">
                        Turnaround and shutdown services.
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="/rigging-and-lifting"
                    className="group/link flex items-start gap-5 p-2 rounded-xl transition-colors cursor-pointer"
                    onClick={() => setServicesOpen(false)}
                    role="menuitem"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0 group-hover/link:border-primary/30 transition-colors overflow-hidden relative shadow-sm">
                       <Image src="/assets/Crane.jpg" alt="Rigging & Lifting" fill className="object-cover" />
                    </div>
                    <div className="flex-1 mt-1">
                      <h5 className="text-sm font-bold text-slate-900 group-hover/link:text-primary transition-colors uppercase tracking-wide">
                        RIGGING & LIFTING
                      </h5>
                      <p className="text-xs text-slate-500 font-medium mt-1.5 leading-snug">
                        Specialized heavy lifting and rigging.
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Link href="/projects" className={hoverStyle}>
            Projects
          </Link>

          <Link href="/careers" className={hoverStyle}>
            Careers
          </Link>
        </div>

        {/* Right Side Buttons */}
        <div className="flex items-center">
          <Link href="/contact">
            <button
              className={`hidden md:block px-5 py-2 rounded-xl text-base font-semibold uppercase transition-all duration-300
    ${
      scrolled
        ? "bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white hover:shadow-[#a9a9a9] cursor-pointer"
        : "bg-white/10 backdrop-blur-sm text-white border-2 border-white/20 hover:border-primary hover:text-black hover:bg-primary hover:shadow-[#a9a9a9] cursor-pointer"
    }`}
            >
              Contact
            </button>
          </Link>

          {/* Mobile icon */}
          <button className="md:hidden ml-4" onClick={() => setOpen(!open)}>
            {open ? (
              <X
                className={`w-7 h-7 transition ${
                  scrolled ? "text-black" : "text-primary"
                }`}
              />
            ) : (
              <Menu
                className={`w-7 h-7 transition ${
                  scrolled ? "text-black" : "text-primary"
                }`}
              />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div
          className={`md:hidden backdrop-blur-lg border-t transition-all duration-300 overflow-y-auto`}
          style={{ maxHeight: "calc(100dvh - 80px)" }}
        >
          <div className={`${scrolled ? "bg-white/90 text-black border-gray-300" : "bg-white/10 text-white border-white/20"}`}>
          <ul className="flex flex-col text-center py-4 pb-8 space-y-4 font-semibold uppercase">
            <li>
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className={hoverStyle}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                onClick={() => setOpen(false)}
                className={hoverStyle}
              >
                About Us
              </Link>
            </li>

            <li>
              <Link
                href="/qhse"
                onClick={() => setOpen(false)}
                className={hoverStyle}
              >
                QHSE
              </Link>
            </li>

            <li>
              <Link
                href="/expertise"
                onClick={() => setOpen(false)}
                className={hoverStyle}
              >
                Expertise
              </Link>
            </li>

            {/* ✅ Mobile Our Services Accordion */}
            <li className="px-6">
              <button
                type="button"
                onClick={() => setServicesMobileOpen((v) => !v)}
                className={`w-full flex items-center justify-center gap-2 font-semibold uppercase ${hoverStyle}`}
                aria-expanded={servicesMobileOpen}
              >
                OUR SERVICES
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-200 ${
                    servicesMobileOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              {servicesMobileOpen && (
                <div
                  className={`mt-3 rounded-xl border p-2 flex flex-col gap-1 overflow-hidden ${
                    scrolled
                      ? "bg-white/70 border-gray-300"
                      : "bg-white/10 border-white/20"
                  }`}
                >
                  <Link
                    href="/demolition"
                    onClick={() => setOpen(false)}
                    className="group flex items-center gap-3 p-2 rounded-lg hover:bg-slate-500/10 transition-colors text-left"
                  >
                    <div className="w-10 h-10 rounded-lg overflow-hidden relative shrink-0 shadow-sm border border-slate-200/20">
                      <Image src="/assets/Demolition Work.jpg" alt="Demolition" fill className="object-cover" />
                    </div>
                    <span className="text-sm font-bold uppercase tracking-wide group-hover:text-primary transition-colors">DEMOLITION DIVISION</span>
                  </Link>

                  <Link
                    href="/construction"
                    onClick={() => setOpen(false)}
                    className="group flex items-center gap-3 p-2 rounded-lg hover:bg-slate-500/10 transition-colors text-left"
                  >
                    <div className="w-10 h-10 rounded-lg overflow-hidden relative shrink-0 shadow-sm border border-slate-200/20">
                      <Image src="/assets/ConstructionDiv.jpg" alt="Construction" fill className="object-cover" />
                    </div>
                    <span className="text-sm font-bold uppercase tracking-wide group-hover:text-primary transition-colors">CONSTRUCTION DIVISION</span>
                  </Link>

                  <Link
                    href="/re-routing"
                    onClick={() => setOpen(false)}
                    className="group flex items-center gap-3 p-2 rounded-lg hover:bg-slate-500/10 transition-colors text-left"
                  >
                    <div className="w-10 h-10 rounded-lg overflow-hidden relative shrink-0 shadow-sm border border-slate-200/20">
                      <Image src="/assets/rerouting-hero.jpg" alt="Re-routing" fill className="object-cover" />
                    </div>
                    <span className="text-sm font-bold uppercase tracking-wide group-hover:text-primary transition-colors">RE-ROUTING SECTOR</span>
                  </Link>

                  <Link
                    href="/rental-equipment"
                    onClick={() => setOpen(false)}
                    className="group flex items-center gap-3 p-2 rounded-lg hover:bg-slate-500/10 transition-colors text-left"
                  >
                    <div className="w-10 h-10 rounded-lg overflow-hidden relative shrink-0 shadow-sm border border-slate-200/20">
                      <Image src="/assets/HeavyEqp.jpg" alt="Rental Equipment" fill className="object-cover" />
                    </div>
                    <span className="text-sm font-bold uppercase tracking-wide group-hover:text-primary transition-colors">RENTAL EQUIPMENT</span>
                  </Link>

                  <Link
                    href="/logistic"
                    onClick={() => setOpen(false)}
                    className="group flex items-center gap-3 p-2 rounded-lg hover:bg-slate-500/10 transition-colors text-left"
                  >
                    <div className="w-10 h-10 rounded-lg overflow-hidden relative shrink-0 shadow-sm border border-slate-200/20">
                      <Image src="/assets/Logistics.jpg" alt="Logistics" fill className="object-cover" />
                    </div>
                    <span className="text-sm font-bold uppercase tracking-wide group-hover:text-primary transition-colors">LOGISTIC SECTOR</span>
                  </Link>

                  <Link
                    href="/technical-solutions"
                    onClick={() => setOpen(false)}
                    className="group flex items-center gap-3 p-2 rounded-lg hover:bg-slate-500/10 transition-colors text-left"
                  >
                    <div className="w-10 h-10 rounded-lg overflow-hidden relative shrink-0 shadow-sm border border-slate-200/20">
                      <Image src="/assets/industry.jpg" alt="Technical Solutions" fill className="object-cover" />
                    </div>
                    <span className="text-sm font-bold uppercase tracking-wide group-hover:text-primary transition-colors">TECHNICAL SOLUTIONS</span>
                  </Link>

                  <Link
                    href="/plant-maintenance"
                    onClick={() => setOpen(false)}
                    className="group flex items-center gap-3 p-2 rounded-lg hover:bg-slate-500/10 transition-colors text-left"
                  >
                    <div className="w-10 h-10 rounded-lg overflow-hidden relative shrink-0 shadow-sm border border-slate-200/20">
                      <Image src="/assets/oil-refinery-twilight-with-reflection.jpg" alt="Plant Maintenance" fill className="object-cover" />
                    </div>
                    <span className="text-sm font-bold uppercase tracking-wide group-hover:text-primary transition-colors">PLANT MAINTENANCE</span>
                  </Link>

                  <Link
                    href="/rigging-and-lifting"
                    onClick={() => setOpen(false)}
                    className="group flex items-center gap-3 p-2 rounded-lg hover:bg-slate-500/10 transition-colors text-left"
                  >
                    <div className="w-10 h-10 rounded-lg overflow-hidden relative shrink-0 shadow-sm border border-slate-200/20">
                      <Image src="/assets/Crane.jpg" alt="Rigging & Lifting" fill className="object-cover" />
                    </div>
                    <span className="text-sm font-bold uppercase tracking-wide group-hover:text-primary transition-colors">RIGGING & LIFTING</span>
                  </Link>
                </div>
              )}
            </li>

            <li>
              <Link
                href="/projects"
                onClick={() => setOpen(false)}
                className={hoverStyle}
              >
                Projects
              </Link>
            </li>

            <li>
              <Link
                href="/careers"
                onClick={() => setOpen(false)}
                className={hoverStyle}
              >
                Careers
              </Link>
            </li>

            <li className="px-6 pt-2">
              <Link href="/contact" onClick={() => setOpen(false)}>
                <button
                  className={`w-full py-3 rounded-xl text-base font-semibold uppercase transition-all duration-300 border-2 cursor-pointer
    ${
      scrolled
        ? "bg-primary text-white border-primary hover:bg-primary/90"
        : "bg-primary text-white border-primary hover:bg-primary/90"
    }`}
                >
                  Contact
                </button>
              </Link>
            </li>
          </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
