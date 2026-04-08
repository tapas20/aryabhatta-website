import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCourseBySlug, getAllCourseSlugs } from "@/lib/courses";
import type { Course } from "@/lib/courses";
import {
  BookOpen,
  Clock,
  Calendar,
  Users,
  CheckCircle,
  Star,
  ChevronRight,
  Home,
  Award,
  MessageCircle,
} from "lucide-react";

interface CourseDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: CourseDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    return {
      title: "Course Not Found",
    };
  }

  return {
    title: `${course.title} - Aryabhatta Educations`,
    description: course.fullDescription,
    keywords: [
      course.title,
      course.board,
      ...course.subjects,
      "coaching",
      "education",
      "Aryabhatta Educations",
    ],
  };
}

// Generate static paths for all courses
export async function generateStaticParams() {
  const slugs = getAllCourseSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Breadcrumb Component
function Breadcrumb({ course }: { course: Course }) {
  return (
    <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
      <Link
        href="/"
        className="flex items-center gap-1 hover:text-primary transition-colors"
      >
        <Home className="w-4 h-4" />
        <span>Home</span>
      </Link>
      <ChevronRight className="w-4 h-4" />
      <Link href="/courses" className="hover:text-primary transition-colors">
        Courses
      </Link>
      <ChevronRight className="w-4 h-4" />
      <span className="text-foreground font-medium">{course.title}</span>
    </nav>
  );
}

// Course Hero Section
function CourseHero({ course }: { course: Course }) {
  return (
    <section className="relative pt-32 pb-16 bg-gradient-to-br from-primary via-teal-700 to-teal-900 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <Breadcrumb course={course} />

        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <span
              className={`text-sm font-bold px-4 py-2 rounded-full text-white bg-gradient-to-r ${course.gradient}`}
            >
              {course.board}
            </span>
            <span className="text-sm font-medium text-white/80 bg-white/10 px-4 py-2 rounded-full">
              Class {course.classLevel}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
            {course.title}
          </h1>

          <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-3xl">
            {course.fullDescription}
          </p>

          {/* Quick Info */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <div className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-accent" />
                <div>
                  <div className="text-xs text-white/60 mb-1">Duration</div>
                  <div className="text-sm font-bold text-white">
                    {course.duration}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <div className="flex items-center gap-3">
                <Calendar className="w-6 h-6 text-accent" />
                <div>
                  <div className="text-xs text-white/60 mb-1">Schedule</div>
                  <div className="text-sm font-bold text-white">
                    {course.schedule.days}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <div className="flex items-center gap-3">
                <Users className="w-6 h-6 text-accent" />
                <div>
                  <div className="text-xs text-white/60 mb-1">Batch Time</div>
                  <div className="text-sm font-bold text-white">
                    {course.schedule.time}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Course Features Section
function CourseFeatures({ course }: { course: Course }) {
  return (
    <section className="py-16 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-extrabold text-foreground mb-8">
              Course Highlights
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {course.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50 border border-border"
                >
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Syllabus Section */}
            <h2 className="text-3xl font-extrabold text-foreground mb-8">
              Detailed Syllabus
            </h2>

            <div className="space-y-6">
              {course.syllabus.map((module, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-border bg-card overflow-hidden"
                >
                  <div className={`bg-gradient-to-r ${course.gradient} p-4`}>
                    <h3 className="text-xl font-bold text-white">
                      {module.module}
                    </h3>
                  </div>

                  <div className="p-6">
                    <ul className="space-y-3">
                      {module.topics.map((topic, topicIdx) => (
                        <li key={topicIdx} className="flex items-start gap-3">
                          <BookOpen className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-foreground">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Pricing Card */}
              <div className="rounded-2xl border border-border bg-card p-6 shadow-lg">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Course Fees
                </h3>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center p-3 rounded-lg bg-secondary/50">
                    <span className="text-sm font-medium text-foreground">
                      Monthly
                    </span>
                    <span className="text-lg font-bold text-primary">
                      {course.pricing.monthly}
                    </span>
                  </div>

                  <div className="flex justify-between items-center p-3 rounded-lg bg-secondary/50">
                    <span className="text-sm font-medium text-foreground">
                      Quarterly
                    </span>
                    <span className="text-lg font-bold text-primary">
                      {course.pricing.quarterly}
                    </span>
                  </div>

                  <div className="flex justify-between items-center p-3 rounded-lg bg-primary/10 border-2 border-primary">
                    <span className="text-sm font-bold text-foreground">
                      Annually
                      <span className="ml-2 text-xs bg-primary text-white px-2 py-0.5 rounded-full">
                        Best Value
                      </span>
                    </span>
                    <span className="text-lg font-bold text-primary">
                      {course.pricing.annually}
                    </span>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="w-full block text-center bg-gradient-to-r from-primary to-teal-600 text-white font-bold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Enroll Now
                </Link>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  Flexible payment options available
                </p>
              </div>

              {/* Schedule Card */}
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Class Schedule
                </h3>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <div>
                      <div className="text-xs text-muted-foreground">Days</div>
                      <div className="text-sm font-semibold text-foreground">
                        {course.schedule.days}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <div>
                      <div className="text-xs text-muted-foreground">Time</div>
                      <div className="text-sm font-semibold text-foreground">
                        {course.schedule.time}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-primary" />
                    <div>
                      <div className="text-xs text-muted-foreground">
                        Batch Type
                      </div>
                      <div className="text-sm font-semibold text-foreground">
                        {course.schedule.batchType}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Faculty Section
function FacultySection({ course }: { course: Course }) {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="h-[2px] w-10 bg-primary rounded-full"></span>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">
              Expert Teachers
            </p>
            <span className="h-[2px] w-10 bg-primary rounded-full"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
            Meet Your Faculty
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {course.faculty.map((teacher, idx) => (
            <div
              key={idx}
              className="bg-card rounded-2xl border border-border p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${course.gradient} flex items-center justify-center text-white text-2xl font-bold`}
                >
                  {teacher.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {teacher.name}
                  </h3>
                  <p className="text-sm text-primary font-semibold mb-3">
                    {teacher.subject}
                  </p>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-accent" />
                      <span className="text-sm text-muted-foreground">
                        {teacher.experience} experience
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-accent" />
                      <span className="text-sm text-muted-foreground">
                        {teacher.qualification}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Testimonials Section
function TestimonialsSection({ course }: { course: Course }) {
  return (
    <section className="py-16 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="h-[2px] w-10 bg-primary rounded-full"></span>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">
              Success Stories
            </p>
            <span className="h-[2px] w-10 bg-primary rounded-full"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
            What Our Students Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {course.testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-secondary/50 rounded-2xl border border-border p-8 relative"
            >
              <div className="absolute -top-4 left-8">
                <div className="bg-primary text-white px-4 py-2 rounded-full text-sm font-bold">
                  <Star className="w-4 h-4 inline mr-1" />
                  {testimonial.score}
                </div>
              </div>

              <MessageCircle className="w-8 h-8 text-primary/20 mb-4 mt-4" />

              <p className="text-foreground leading-relaxed mb-6 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${course.gradient} flex items-center justify-center text-white font-bold`}
                >
                  {testimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="font-bold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.class}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// FAQ Section
function FAQSection({ course }: { course: Course }) {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="h-[2px] w-10 bg-primary rounded-full"></span>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">
              Got Questions?
            </p>
            <span className="h-[2px] w-10 bg-primary rounded-full"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {course.faq.map((item, idx) => (
            <div
              key={idx}
              className="bg-card rounded-2xl border border-border p-6"
            >
              <h3 className="text-lg font-bold text-foreground mb-3">
                {item.question}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CourseCTA({ course }: { course: Course }) {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-teal-700 to-teal-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 right-20 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
          Ready to Excel in {course.title}?
        </h2>
        <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
          Join our program today and take the first step towards academic
          excellence. Limited seats available for the current batch.
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
  );
}

// Main Page Component
export default async function CourseDetailPage({
  params,
}: CourseDetailPageProps) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  return (
    <div className="scroll-smooth">
      <CourseHero course={course} />
      <CourseFeatures course={course} />
      <FacultySection course={course} />
      <TestimonialsSection course={course} />
      <FAQSection course={course} />
      <CourseCTA course={course} />
    </div>
  );
}
