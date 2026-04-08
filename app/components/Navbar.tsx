"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  GraduationCap,
  ArrowUpRight,
  BookOpen,
  Target,
  Atom,
  TrendingUp,
  FlaskConical,
  Palette,
  Rocket,
  HelpCircle,
} from "lucide-react";
import { coursesData } from "@/lib/courses";

const iconMap: Record<string, LucideIcon> = {
  BookOpen,
  Target,
  Atom,
  TrendingUp,
  FlaskConical,
  Palette,
  Rocket,
  HelpCircle,
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [coursesOpen, setCoursesOpen] = useState(false);
  const [coursesMobileOpen, setCoursesMobileOpen] = useState(false);
  const [hoveredCourse, setHoveredCourse] = useState<number | null>(null);
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

  const toggleMobileMenu = () => {
    const next = !open;
    setOpen(next);
    if (!next) setCoursesMobileOpen(false);
  };

  const hoverStyle =
    "hover:text-primary underline-offset-4 transition-all duration-200 cursor-pointer";

  const menuTextColor = scrolled ? "text-foreground" : "text-foreground/80";

  const courseItems = coursesData.map((course) => ({
    title: course.title,
    desc: course.shortDescription,
    href: `/courses/${course.slug}`,
    classLevel: course.classLevel,
    board: course.board,
    gradient: course.gradient,
    icon: course.icon,
    subjects: course.subjects,
  }));

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-card"
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
              Aryabhatta
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

            <div className="absolute top-full left-1/2 -translate-x-1/2 w-full h-[20px] bg-transparent" />

            {/* Full-width Mega Menu */}
            <div
              className={`fixed top-[60px] left-0 w-full border-t shadow-2xl overflow-hidden transition-all duration-300 origin-top ${
                coursesOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0"
              } bg-card border-border`}
              role="menu"
            >
              <div className="max-w-[1400px] mx-auto flex w-full">
                {/* Left Panel - Featured */}
                <div className="w-[300px] shrink-0 p-8 border-r border-border flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-1 h-5 bg-primary rounded-full" />
                      <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">
                        Our Programs
                      </span>
                    </div>

                    <h3 className="text-2xl font-extrabold text-foreground leading-tight mt-4">
                      CBSE & CHSE
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Classes 6 to 12
                    </p>

                    <p className="text-sm text-muted-foreground leading-relaxed mt-4">
                      Credentials backed by expert faculty — aligned with board
                      exam success and competitive readiness.
                    </p>
                  </div>

                  <Link
                    href="/courses"
                    onClick={() => setCoursesOpen(false)}
                    className="inline-flex items-center gap-2 text-primary font-semibold text-sm mt-6 hover:text-teal-800 transition-colors"
                  >
                    View All Courses
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Right Panel - Course Grid */}
                <div className="flex-1 p-6">
                  <div className="grid grid-cols-2 gap-1.5">
                    {courseItems.map((item, idx) => {
                      const IconComp = iconMap[item.icon] || BookOpen;
                      return (
                        <Link
                          key={item.title}
                          href={item.href}
                          className={`group/link flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-200 cursor-pointer ${
                            hoveredCourse === idx
                              ? "bg-primary/[0.07]"
                              : "hover:bg-primary/[0.04]"
                          }`}
                          onClick={() => setCoursesOpen(false)}
                          onMouseEnter={() => setHoveredCourse(idx)}
                          onMouseLeave={() => setHoveredCourse(null)}
                          role="menuitem"
                        >
                          <div
                            className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shrink-0 shadow-sm transition-transform duration-200 group-hover/link:scale-110`}
                          >
                            <IconComp className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h5 className="text-sm font-semibold text-foreground group-hover/link:text-primary transition-colors truncate">
                              {item.title}
                            </h5>
                            <p className="text-[11px] text-muted-foreground mt-0.5 truncate">
                              {item.board} &middot; Class {item.classLevel}
                            </p>
                          </div>
                          <ChevronRight className="w-4 h-4 text-muted-foreground/30 group-hover/link:text-primary shrink-0 transition-all duration-200 group-hover/link:translate-x-0.5" />
                        </Link>
                      );
                    })}
                  </div>

                  {/* Bottom CTA Bar */}
                  <div className="mt-4 rounded-xl bg-gradient-to-r from-primary/[0.06] to-accent/[0.06] px-5 py-3.5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                        <GraduationCap className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-foreground">Not sure which course?</p>
                        <p className="text-[11px] text-muted-foreground">Get a free counselling session</p>
                      </div>
                    </div>
                    <Link
                      href="/contact"
                      onClick={() => setCoursesOpen(false)}
                      className="px-5 py-2 rounded-full bg-primary text-white text-xs font-semibold hover:bg-teal-800 transition-colors shadow-sm"
                    >
                      Book Free Demo
                    </Link>
                  </div>
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
          <button className="md:hidden ml-2" onClick={toggleMobileMenu}>
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
                    {courseItems.map((item) => {
                      const IconComp = iconMap[item.icon] || BookOpen;
                      return (
                        <Link
                          key={item.title}
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className="group flex items-center gap-3 p-2.5 rounded-lg hover:bg-primary/10 transition-colors text-left"
                        >
                          <div
                            className={`w-9 h-9 rounded-lg bg-gradient-to-br ${item.gradient} flex items-center justify-center shrink-0`}
                          >
                            <IconComp className="w-4 h-4 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="text-sm font-semibold group-hover:text-primary transition-colors block truncate">
                              {item.title}
                            </span>
                            <span className="text-[11px] text-muted-foreground">
                              {item.board} &middot; Class {item.classLevel}
                            </span>
                          </div>
                        </Link>
                      );
                    })}
                    <Link
                      href="/courses"
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-primary/5 text-primary text-sm font-semibold mt-1"
                    >
                      View All Courses
                      <ChevronRight className="w-4 h-4" />
                    </Link>
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
