"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  ChevronDown,
  GraduationCap,
  ArrowUpRight,
} from "lucide-react";
import { coursesData } from "@/lib/courses";

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

  const menuTextColor = scrolled ? "text-foreground" : "text-foreground/80";

  const courseItems = coursesData.map((course) => ({
    title: course.title,
    desc: course.shortDescription,
    href: `/courses/${course.slug}`,
    icon: course.classLevel,
  }));

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav
        className={`w-full max-w-[1800px] mx-auto flex justify-between items-center px-6 lg:px-10 py-2.5 transition-all duration-300 ${menuTextColor}`}
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold tracking-tight text-foreground">
              BrightMind
            </span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div
          className={`hidden md:flex items-center gap-8 font-medium text-[15px] transition-all duration-300 ${menuTextColor}`}
        >
          <Link href="/" className={hoverStyle}>
            Home
          </Link>

          {/* Courses Dropdown */}
          <div className="relative group" ref={coursesRef}>
            <button
              type="button"
              onClick={() => setCoursesOpen((v) => !v)}
              className={`${hoverStyle} flex items-center gap-1.5 py-5`}
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
              } bg-card border-border`}
              role="menu"
            >
              <div className="max-w-[1400px] mx-auto flex w-full">
                {/* Left Side: Featured */}
                <div className="w-1/3 bg-gradient-to-br from-primary/5 to-accent/5 p-6 lg:p-8 border-r border-border flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="h-[2px] w-8 bg-primary rounded-full"></span>
                    <span className="text-xs font-bold tracking-[0.25em] text-primary uppercase">
                      Featured Program
                    </span>
                  </div>

                  <div className="relative h-40 lg:h-48 w-full rounded-2xl overflow-hidden mb-4 shadow-md bg-gradient-to-br from-primary to-teal-800 flex items-center justify-center">
                    <div className="text-center text-primary-foreground p-6">
                      <GraduationCap className="w-12 h-12 mx-auto mb-3 opacity-90" />
                      <p className="text-2xl font-bold">CBSE & CHSE</p>
                      <p className="text-sm opacity-80 mt-1">Classes 6 to 12</p>
                    </div>
                  </div>

                  <h4 className="text-2xl lg:text-3xl font-extrabold text-foreground mb-3 tracking-tight leading-tight">
                    Board Exam <br /> Preparation
                  </h4>

                  <p className="text-muted-foreground font-medium leading-relaxed text-sm max-w-[95%]">
                    Comprehensive coaching with expert faculty, regular tests,
                    and personalized attention for guaranteed results.
                  </p>

                  <Link
                    href="/courses"
                    onClick={() => setCoursesOpen(false)}
                    className="inline-flex items-center gap-2 text-primary font-bold text-sm mt-4 transition-colors hover:text-teal-800 tracking-wide"
                  >
                    View All Courses
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="transition-transform duration-500 hover:translate-x-2"
                    >
                      <path
                        d="M5 12H19M19 12L12 5M19 12L12 19"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>

                {/* Right Side: Course Links Grid */}
                <div className="w-2/3 p-8 lg:p-10 grid grid-cols-2 gap-x-10 gap-y-5">
                  {courseItems.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="group/link flex items-start gap-4 p-3 rounded-xl transition-colors cursor-pointer hover:bg-primary/5"
                      onClick={() => setCoursesOpen(false)}
                      role="menuitem"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center shrink-0 group-hover/link:bg-primary group-hover/link:border-primary transition-colors shadow-sm">
                        <span className="text-xs font-extrabold text-primary group-hover/link:text-primary-foreground transition-colors">
                          {item.icon}
                        </span>
                      </div>
                      <div className="flex-1 mt-0.5">
                        <h5 className="text-sm font-bold text-foreground group-hover/link:text-primary transition-colors">
                          {item.title}
                        </h5>
                        <p className="text-xs text-muted-foreground font-medium mt-1 leading-snug">
                          {item.desc}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Link href="/about" className={hoverStyle}>
            About Us
          </Link>

          <Link href="/results" className={hoverStyle}>
            Results
          </Link>

          <Link href="/contact" className={hoverStyle}>
            Contact
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <Link href="/contact">
            <button className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 bg-primary text-primary-foreground hover:bg-teal-800 cursor-pointer shadow-md shadow-primary/15">
              Registration
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </Link>

          {/* Mobile icon */}
          <button className="md:hidden ml-2" onClick={() => setOpen(!open)}>
            {open ? (
              <X className="w-7 h-7 transition text-foreground" />
            ) : (
              <Menu className="w-7 h-7 transition text-foreground" />
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
          <div className="bg-card/95 text-foreground border-border">
            <ul className="flex flex-col text-center py-4 pb-8 space-y-4 font-semibold">
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
                  <div className="mt-3 rounded-xl border p-2 flex flex-col gap-1 overflow-hidden bg-card/70 border-border">
                    {courseItems.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="group flex items-center gap-3 p-2.5 rounded-lg hover:bg-primary/10 transition-colors text-left"
                      >
                        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <span className="text-[10px] font-extrabold text-primary">
                            {item.icon}
                          </span>
                        </div>
                        <span className="text-sm font-semibold group-hover:text-primary transition-colors">
                          {item.title}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </li>

              <li>
                <Link
                  href="/results"
                  onClick={() => setOpen(false)}
                  className={hoverStyle}
                >
                  Results
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className={hoverStyle}
                >
                  Contact
                </Link>
              </li>

              <li className="px-6 pt-2">
                <Link href="/contact" onClick={() => setOpen(false)}>
                  <button className="w-full py-3 rounded-full text-base font-semibold transition-all duration-300 bg-primary text-primary-foreground hover:bg-teal-800 cursor-pointer">
                    Registration
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
