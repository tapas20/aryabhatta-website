"use client";

import Link from "next/link";
import { coursesData } from "@/lib/courses";
import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  Sparkles,
  BookOpen,
  Atom,
  FlaskConical,
  Calculator,
  PenTool,
  Globe,
  Dumbbell,
  Languages,
  Code,
  Microscope,
  Target,
  TrendingUp,
  Palette,
  Rocket,
  HelpCircle,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  BookOpen,
  Atom,
  FlaskConical,
  Calculator,
  PenTool,
  Globe,
  Dumbbell,
  Languages,
  Code,
  Microscope,
  Target,
  TrendingUp,
  Palette,
  Rocket,
  HelpCircle,
};

export default function Services() {
  // Get first 6 courses for display on homepage
  const displayCourses = coursesData.slice(0, 6);

  return (
    <section className="relative w-full py-16 md:py-24 bg-secondary/50 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-primary/5 via-secondary/50 to-background" />
      <div className="pointer-events-none absolute top-1/4 left-0 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/5 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 -z-10 h-[600px] w-[600px] translate-x-1/3 translate-y-1/3 rounded-full bg-accent/5 blur-[120px]" />

      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-3 mx-auto mb-5">
            <span className="h-[2px] w-10 bg-primary rounded-full"></span>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">
              Our Programs
            </p>
            <span className="h-[2px] w-10 bg-primary rounded-full"></span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-4">
            Courses We <br className="hidden lg:block" />
            <span className="text-primary">Offer</span>
          </h2>

          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed font-medium">
            Comprehensive coaching programs designed for CBSE & CHSE students
            from classes 6 to 12. Expert faculty, structured curriculum, and
            regular assessments to help every student achieve their academic
            goals.
          </p>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {displayCourses.map((course, idx) => {
            const IconComponent = iconMap[course.icon] || BookOpen;
            return (
              <Link
                key={course.id}
                href={`/courses/${course.slug}`}
                className="group"
              >
                <div
                  className={[
                    "group relative isolate overflow-hidden cursor-pointer flex flex-col justify-between h-full",
                    "h-[240px] sm:h-[260px] md:h-[280px]",
                    "rounded-2xl sm:rounded-3xl p-6 sm:p-8",
                    "border border-border bg-card",
                    "shadow-sm transition-all duration-500 ease-out",
                    "hover:-translate-y-2 hover:shadow-xl hover:border-primary/30",
                  ].join(" ")}
                >
                  {/* Gradient accent on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500 rounded-[inherit]`}
                  />

                  {/* Large outline number */}
                  <div
                    className={[
                      "pointer-events-none absolute -bottom-4 right-2 z-0 select-none",
                      "text-[90px] sm:text-[100px] font-black leading-none",
                      "text-foreground/5 transition-all duration-700 ease-out",
                      "group-hover:-translate-y-3 group-hover:scale-105 group-hover:text-primary/10",
                    ].join(" ")}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </div>

                  <div className="relative z-10 flex w-full justify-between items-start">
                    {/* Icon */}
                    <div
                      className={`flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${course.gradient} text-white shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl`}
                    >
                      <IconComponent className="w-7 h-7" />
                    </div>

                    {idx < 2 && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 sm:px-4 py-1.5 text-xs font-semibold text-accent ring-1 ring-accent/20 transition-transform duration-500 group-hover:scale-105">
                        <Sparkles className="h-3.5 w-3.5" />
                        Popular
                      </span>
                    )}
                  </div>

                  {/* Content Footer */}
                  <div className="translate-y-2 transition-transform duration-500 group-hover:translate-y-0 relative z-10">
                    <h3 className="text-lg sm:text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
                      {course.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1.5 leading-snug line-clamp-2">
                      {course.shortDescription}
                    </p>

                    <div className="mt-3 flex items-center justify-between opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                        Learn more
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded-full hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            View All Courses
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
