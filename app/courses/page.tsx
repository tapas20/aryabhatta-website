import type { Metadata } from "next";
import Link from "next/link";
import { coursesData } from "@/lib/courses";
import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Target,
  Atom,
  TrendingUp,
  FlaskConical,
  Palette,
  Rocket,
  HelpCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Courses & Programs",
  description:
    "Explore our comprehensive coaching programs for CBSE & CHSE classes 6-12. Science, Commerce, Arts streams, JEE & NEET foundation coaching available at BrightMind Academy.",
};

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

export default function CoursesPage() {
  return (
    <div className="scroll-smooth">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary via-teal-700 to-teal-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md rounded-full px-4 py-2 mb-6 border border-white/20">
            <span className="text-sm font-medium text-white/90">
              Our Programs
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
            Courses & Programs
          </h1>
          <p className="text-lg text-white/70 mt-6 max-w-2xl mx-auto leading-relaxed">
            Comprehensive coaching programs designed for CBSE & CHSE students
            from classes 6 to 12. Choose the program that fits your academic
            goals.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-primary mb-2">
                8+
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                Programs Offered
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-primary mb-2">
                50+
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                Expert Faculty
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-primary mb-2">
                95%+
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                Success Rate
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-primary mb-2">
                5000+
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                Students Enrolled
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Overview - NO cards, just categories */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="h-[2px] w-10 bg-primary rounded-full"></span>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">
                Our Programs
              </p>
              <span className="h-[2px] w-10 bg-primary rounded-full"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-6">
              Comprehensive Coaching Programs
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We offer specialized coaching for CBSE & CHSE students from
              classes 6 to 12. Click on any program category below to explore
              complete details including syllabus, faculty, testimonials, and
              enrollment options.
            </p>
          </div>

          {/* Program Categories - Simple List */}
          <div className="max-w-4xl mx-auto space-y-4">
            {coursesData.map((course) => {
              const IconComponent = iconMap[course.icon] || BookOpen;
              return (
                <Link
                  key={course.id}
                  href={`/courses/${course.slug}`}
                  className="group block p-6 rounded-2xl border border-border bg-card hover:shadow-xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-6">
                    {/* Icon */}
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${course.gradient} flex items-center justify-center text-white shrink-0 shadow-lg`}
                    >
                      <IconComponent className="w-8 h-8" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <span
                          className={`text-xs font-bold px-3 py-1 rounded-full text-white bg-gradient-to-r ${course.gradient}`}
                        >
                          {course.board}
                        </span>
                        <span className="text-xs font-semibold text-muted-foreground">
                          Class {course.classLevel}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                        {course.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {course.shortDescription}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="shrink-0">
                      <svg
                        className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-2 transition-all duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Simple CTA */}
          <div className="text-center mt-16">
            <p className="text-lg text-muted-foreground mb-6">
              Click on any program above to explore complete details including
              syllabus, faculty, testimonials, pricing, and enrollment options.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded-full hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Get Complete Course Catalog
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Our Programs */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="h-[2px] w-10 bg-primary rounded-full"></span>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">
                Why BrightMind
              </p>
              <span className="h-[2px] w-10 bg-primary rounded-full"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-4">
              What Makes Our Programs Special
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Personalized Attention
              </h3>
              <p className="text-muted-foreground">
                Small batch sizes ensure every student gets individual guidance
                and support throughout their learning journey.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mx-auto mb-4">
                <BookOpen className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Expert Faculty
              </h3>
              <p className="text-muted-foreground">
                Learn from experienced teachers with proven track records of
                producing top performers in board and competitive exams.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 mx-auto mb-4">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Regular Assessments
              </h3>
              <p className="text-muted-foreground">
                Weekly tests, monthly exams, and detailed performance analysis
                to track progress and identify areas for improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-teal-700 to-teal-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-20 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Join thousands of successful students who have achieved their
            academic goals with BrightMind Academy. Enroll today and take the
            first step towards excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded-full hover:bg-white/90 transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Enroll Now
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white font-bold px-8 py-4 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              Schedule a Free Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
