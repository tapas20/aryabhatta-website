"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, GraduationCap } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [coursesOpen, setCoursesOpen] = useState(false);
  const [coursesMobileOpen, setCoursesMobileOpen] = useState(false);
  const coursesRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!coursesRef.current) return;
      if (!coursesRef.current.contains(e.target as Node)) {
        setCoursesOpen(false);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setCoursesOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => {
    if (!open) setCoursesMobileOpen(false);
  }, [open]);

  const hoverStyle =
    "hover:text-primary underline-offset-4 transition-all duration-200 cursor-pointer";

  const menuTextColor = scrolled ? "text-slate-800" : "text-white";

  const courseItems = [
    { title: "Class 6-8 (Middle School)", desc: "Strong foundation in all subjects", href: "/courses#middle-school", icon: "6-8" },
    { title: "Class 9-10 (CBSE)", desc: "Board exam focused preparation", href: "/courses#cbse-secondary", icon: "9-10" },
    { title: "Class 11-12 Science (CBSE)", desc: "Physics, Chemistry, Maths & Biology", href: "/courses#cbse-science", icon: "11-12" },
    { title: "Class 11-12 Commerce (CBSE)", desc: "Accounts, Economics & Business Studies", href: "/courses#cbse-commerce", icon: "11-12" },
    { title: "Class 11-12 Science (CHSE)", desc: "CHSE board Science stream coaching", href: "/courses#chse-science", icon: "11-12" },
    { title: "Class 11-12 Arts (CHSE)", desc: "CHSE board Arts stream coaching", href: "/courses#chse-arts", icon: "11-12" },
    { title: "JEE & NEET Foundation", desc: "Competitive exam preparation", href: "/courses#competitive", icon: "JEE" },
    { title: "Doubt Clearing Sessions", desc: "One-on-one expert guidance", href: "/courses#doubt-clearing", icon: "1:1" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm"
          : "bg-slate-900/80 backdrop-blur-md border-b border-white/10"
      }`}
    >
      <nav
        className={`w-full max-w-[1800px] mx-auto flex justify-between items-center px-6 py-3 transition-all duration-300 ${menuTextColor}`}
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-extrabold tracking-tight leading-none">
                BrightMind
              </span>
              <span className="text-[10px] font-semibold tracking-[0.2em] uppercase opacity-70 leading-none">
                Academy
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div
          className={`hidden md:flex items-center gap-8 font-semibold transition-all duration-300 ${menuTextColor}`}
        >
          <Link href="/" className={hoverStyle}>
            Home
          </Link>

          <Link href="/about" className={hoverStyle}>
            About
          </Link>

          {/* Courses Dropdown */}
          <div className="relative group" ref={coursesRef}>
            <button
              type="button"
              onClick={() => setCoursesOpen((v) => !v)}
              className={`${hoverStyle} flex items-center gap-1.5 py-6`}
              aria-haspopup="menu"
              aria-expanded={coursesOpen}
            >
              Courses
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 group-hover:rotate-180 ${
                  coursesOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            <div className="absolute top-full left-1/2 -translate-x-1/2 w-full h-[40px] bg-transparent" />

            {/* Mega Menu Dropdown */}
            <div
              className={`fixed top-[72px] left-0 w-full border-t shadow-2xl overflow-hidden transition-all duration-300 origin-top ${
                coursesOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0"
              } bg-white border-gray-100`}
              role="menu"
            >
              <div className="max-w-[1400px] mx-auto flex w-full">
                {/* Left Side: Featured */}
                <div className="w-1/3 bg-gradient-to-br from-indigo-50 to-violet-50 p-6 lg:p-8 border-r border-gray-100 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="h-[2px] w-8 bg-primary rounded-full"></span>
                    <span className="text-xs font-bold tracking-[0.25em] text-primary uppercase">
                      Featured Program
                    </span>
                  </div>

                  <div className="relative h-40 lg:h-48 w-full rounded-2xl overflow-hidden mb-4 shadow-md bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center">
                    <div className="text-center text-white p-6">
                      <GraduationCap className="w-12 h-12 mx-auto mb-3 opacity-90" />
                      <p className="text-2xl font-bold">CBSE & CHSE</p>
                      <p className="text-sm opacity-80 mt-1">Classes 6 to 12</p>
                    </div>
                  </div>

                  <h4 className="text-2xl lg:text-3xl font-extrabold text-slate-800 mb-3 tracking-tight leading-tight">
                    Board Exam <br /> Preparation
                  </h4>

                  <p className="text-slate-500 font-medium leading-relaxed text-sm max-w-[95%]">
                    Comprehensive coaching with expert faculty, regular tests, and personalized attention for guaranteed results.
                  </p>

                  <Link
                    href="/courses"
                    onClick={() => setCoursesOpen(false)}
                    className="inline-flex items-center gap-2 text-primary font-bold text-sm mt-4 transition-colors hover:text-indigo-700 tracking-wide"
                  >
                    View All Courses
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-500 hover:translate-x-2">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>

                {/* Right Side: Course Links Grid */}
                <div className="w-2/3 p-8 lg:p-10 grid grid-cols-2 gap-x-10 gap-y-5">
                  {courseItems.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="group/link flex items-start gap-4 p-3 rounded-xl transition-colors cursor-pointer hover:bg-indigo-50/50"
                      onClick={() => setCoursesOpen(false)}
                      role="menuitem"
                    >
                      <div className="w-12 h-12 rounded-xl bg-indigo-100 border border-indigo-200/50 flex items-center justify-center shrink-0 group-hover/link:bg-primary group-hover/link:border-primary transition-colors shadow-sm">
                        <span className="text-xs font-extrabold text-primary group-hover/link:text-white transition-colors">{item.icon}</span>
                      </div>
                      <div className="flex-1 mt-0.5">
                        <h5 className="text-sm font-bold text-slate-800 group-hover/link:text-primary transition-colors">
                          {item.title}
                        </h5>
                        <p className="text-xs text-slate-500 font-medium mt-1 leading-snug">
                          {item.desc}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Link href="/results" className={hoverStyle}>
            Results
          </Link>

          <Link href="/contact" className={hoverStyle}>
            Contact
          </Link>
        </div>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-3">
          <Link href="/contact">
            <button
              className={`hidden md:block px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300
    ${
      scrolled
        ? "bg-primary text-white hover:bg-indigo-700 shadow-md shadow-primary/20 cursor-pointer"
        : "bg-white text-slate-900 hover:bg-primary hover:text-white shadow-md cursor-pointer"
    }`}
            >
              Enroll Now
            </button>
          </Link>

          {/* Mobile icon */}
          <button className="md:hidden ml-2" onClick={() => setOpen(!open)}>
            {open ? (
              <X className={`w-7 h-7 transition ${scrolled ? "text-slate-800" : "text-white"}`} />
            ) : (
              <Menu className={`w-7 h-7 transition ${scrolled ? "text-slate-800" : "text-white"}`} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div
          className="md:hidden backdrop-blur-lg border-t transition-all duration-300 overflow-y-auto"
          style={{ maxHeight: "calc(100dvh - 72px)" }}
        >
          <div className={`${scrolled ? "bg-white/95 text-slate-800 border-gray-200" : "bg-slate-900/95 text-white border-white/10"}`}>
            <ul className="flex flex-col text-center py-4 pb-8 space-y-4 font-semibold">
              <li>
                <Link href="/" onClick={() => setOpen(false)} className={hoverStyle}>
                  Home
                </Link>
              </li>

              <li>
                <Link href="/about" onClick={() => setOpen(false)} className={hoverStyle}>
                  About
                </Link>
              </li>

              {/* Mobile Courses Accordion */}
              <li className="px-6">
                <button
                  type="button"
                  onClick={() => setCoursesMobileOpen((v) => !v)}
                  className={`w-full flex items-center justify-center gap-2 font-semibold ${hoverStyle}`}
                  aria-expanded={coursesMobileOpen}
                >
                  Courses
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-200 ${
                      coursesMobileOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>

                {coursesMobileOpen && (
                  <div
                    className={`mt-3 rounded-xl border p-2 flex flex-col gap-1 overflow-hidden ${
                      scrolled
                        ? "bg-white/70 border-gray-200"
                        : "bg-white/10 border-white/20"
                    }`}
                  >
                    {courseItems.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="group flex items-center gap-3 p-2.5 rounded-lg hover:bg-indigo-500/10 transition-colors text-left"
                      >
                        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <span className="text-[10px] font-extrabold text-primary">{item.icon}</span>
                        </div>
                        <span className="text-sm font-semibold group-hover:text-primary transition-colors">{item.title}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </li>

              <li>
                <Link href="/results" onClick={() => setOpen(false)} className={hoverStyle}>
                  Results
                </Link>
              </li>

              <li>
                <Link href="/contact" onClick={() => setOpen(false)} className={hoverStyle}>
                  Contact
                </Link>
              </li>

              <li className="px-6 pt-2">
                <Link href="/contact" onClick={() => setOpen(false)}>
                  <button
                    className="w-full py-3 rounded-xl text-base font-semibold transition-all duration-300 bg-primary text-white hover:bg-indigo-700 cursor-pointer shadow-lg shadow-primary/20"
                  >
                    Enroll Now
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
