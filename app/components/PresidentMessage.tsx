"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Quote,
  BookOpen,
  Target,
  Users,
  Award,
  Heart,
  GraduationCap,
} from "lucide-react";

const DIRECTOR_NAME = "The Director";
const DIRECTOR_ROLE = "Founder & Director, BrightMind Academy";

const focusAreas = [
  {
    icon: <BookOpen className="w-5 h-5 text-primary" />,
    title: "Conceptual Learning",
    desc: "Building deep understanding, not rote memorization.",
  },
  {
    icon: <Target className="w-5 h-5 text-primary" />,
    title: "Result Oriented",
    desc: "Focused approach towards board & competitive exams.",
  },
  {
    icon: <Users className="w-5 h-5 text-primary" />,
    title: "Personal Attention",
    desc: "Small batches ensuring every student is supported.",
  },
  {
    icon: <Award className="w-5 h-5 text-primary" />,
    title: "Proven Track Record",
    desc: "Consistently producing top rankers since 2015.",
  },
  {
    icon: <Heart className="w-5 h-5 text-primary" />,
    title: "Student Well-being",
    desc: "Stress-free learning with balanced schedules.",
  },
  {
    icon: <GraduationCap className="w-5 h-5 text-primary" />,
    title: "Career Guidance",
    desc: "Counseling for stream selection and higher education.",
  },
];

const PresidentMessage = () => {
  const paragraphs = [
    `BrightMind Academy was founded with a simple yet powerful vision: to make quality education accessible to every student, regardless of their starting point. We believe that with the right guidance, proper methodology, and genuine care, every student has the potential to excel.`,
    `Over the past decade, we have grown from a small tuition center to one of the most trusted coaching institutes in the region. Our approach combines conceptual learning with regular practice, ensuring students not only score well in exams but truly understand the subjects they study.`,
    `Our faculty members are the backbone of BrightMind Academy. Each teacher brings years of experience and a passion for teaching that goes beyond the textbook. We invest in continuous training and updated curriculum to ensure our students always receive the best education possible.`,
    `Looking ahead, we remain committed to our core values of academic excellence, personalized attention, and holistic student development. Whether preparing for CBSE or CHSE board exams, or laying the foundation for competitive entrance exams like JEE and NEET, BrightMind Academy is here to guide every student towards success.`,
  ];

  return (
    <section
      className="py-12 sm:py-16 md:py-24 px-4 md:px-8 bg-secondary relative overflow-hidden"
      dir="ltr"
    >
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 60h120' stroke='%23000' stroke-width='1'/%3E%3Cpath d='M60 0v120' stroke='%23000' stroke-width='1'/%3E%3C/svg%3E")`,
            backgroundSize: "120px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14 md:mb-20"
        >
          <p className="text-xs sm:text-sm tracking-[0.2em] uppercase text-muted-foreground">
            BrightMind Academy
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-light text-foreground">
            Director&apos;s{" "}
            <span className="font-bold text-primary">Message</span>
          </h2>
          <div className="w-20 h-0.5 bg-primary mx-auto mt-4 sm:mt-6" />
          <p className="text-muted-foreground mt-4 sm:mt-6 max-w-2xl mx-auto font-light text-base sm:text-lg px-4">
            A message reflecting our commitment to nurturing young minds and
            building a brighter future through quality education.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:items-stretch">
          {/* Left column */}
          <motion.aside
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-4 h-full self-stretch flex flex-col gap-6"
          >
            <div className="bg-card rounded-2xl border border-border shadow-sm p-6 sm:p-8 flex flex-col flex-1">
              <h4 className="text-lg sm:text-xl font-semibold text-foreground mb-4">
                Our Core Values
              </h4>

              <div className="flex-1 space-y-4">
                {focusAreas.map((it, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 rounded-xl border border-border p-4 bg-secondary"
                  >
                    <div className="shrink-0 w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/15">
                      {it.icon}
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-foreground">
                        {it.title}
                      </p>
                      <p className="text-muted-foreground text-sm font-light leading-relaxed">
                        {it.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.aside>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-8 h-full self-stretch"
          >
            <div className="relative bg-card rounded-2xl border border-border shadow-sm overflow-hidden h-full flex flex-col">
              <div className="h-1.5 bg-gradient-to-r from-primary via-teal-500 to-emerald-500" />

              <div className="p-6 sm:p-8 md:p-10 flex-1">
                <div className="flex items-start gap-3 sm:gap-4 mb-6">
                  <div className="shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/15">
                    <Quote className="w-6 h-6 text-primary" />
                  </div>

                  <div className="text-left">
                    <p className="text-xs sm:text-sm uppercase tracking-wider text-muted-foreground">
                      Our Vision
                    </p>
                    <h3 className="text-xl sm:text-2xl font-semibold text-foreground">
                      Every student deserves excellence
                    </h3>
                  </div>
                </div>

                <div className="space-y-5 sm:space-y-6 text-left">
                  {paragraphs.map((t, i) => (
                    <motion.p
                      key={i}
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.55, delay: i * 0.06 }}
                      viewport={{ once: true }}
                      className="text-muted-foreground leading-relaxed font-light text-sm sm:text-base md:text-lg"
                    >
                      {t}
                    </motion.p>
                  ))}

                  <motion.p
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.32 }}
                    viewport={{ once: true }}
                    className="text-foreground leading-relaxed text-sm sm:text-base md:text-lg"
                  >
                    Education is our mission, and{" "}
                    <span className="font-semibold">
                      excellence is our promise.
                    </span>
                  </motion.p>

                  <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-t border-border">
                    <div className="text-left">
                      <p className="text-foreground font-semibold">
                        {DIRECTOR_NAME}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {DIRECTOR_ROLE}
                      </p>
                    </div>

                    <div className="text-left sm:text-right">
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        Bhubaneswar, Odisha &bull; Serving students since 2015
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute -top-16 -right-16 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PresidentMessage;
