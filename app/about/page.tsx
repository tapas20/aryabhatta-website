import type { Metadata } from "next";
import PresidentMessage from "../components/PresidentMessage";
import Recognition from "../components/Recognition";
import WhyChooseUs from "../components/WhyChooseUs";
import HomeCta from "../components/HomeCta";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about BrightMind Academy — a premier coaching center for classes 6-12. Our expert faculty, proven methodology, and personalized approach help students excel in CBSE & CHSE board exams.",
};

export default function AboutPage() {
  return (
    <div className="scroll-smooth">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary via-teal-700 to-teal-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md rounded-full px-4 py-2 mb-6 border border-white/20">
            <span className="text-sm font-medium text-white/90">About Us</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
            Shaping Future Toppers
          </h1>
          <p className="text-lg text-white/70 mt-6 max-w-2xl mx-auto leading-relaxed">
            BrightMind Academy has been nurturing academic excellence since
            2015. We provide a supportive, result-oriented learning environment
            where every student gets the attention they deserve.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-card">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-primary/5 rounded-2xl p-8 border border-primary/15">
              <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted educational institution that empowers
                students with knowledge, confidence, and values to become
                leaders in their chosen fields. We envision a future where every
                student realizes their full potential through quality education.
              </p>
            </div>

            <div className="bg-accent/5 rounded-2xl p-8 border border-accent/15">
              <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide comprehensive, high-quality coaching that builds
                strong conceptual foundations and prepares students to excel in
                board exams and competitive entrance tests. We are committed to
                personalized learning with experienced faculty and modern
                teaching methodologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <Recognition />

      {/* Director's Message */}
      <PresidentMessage />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* CTA */}
      <HomeCta />
    </div>
  );
}
