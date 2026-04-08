"use client";

import { useState, ReactNode } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Youtube,
  GraduationCap,
} from "lucide-react";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function ContactPage() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const formDataObject = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataObject),
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully!");
        form.reset();
        setTimeout(() => setResult(""), 5000);
      } else {
        console.error("Form error:", data);
        setResult(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setResult("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-card text-foreground">
      {/* HERO */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary via-teal-700 to-teal-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md rounded-full px-4 py-2 mb-6 border border-white/20">
            <span className="text-sm font-medium text-white/90">
              Contact Us
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
            Get In Touch
          </h1>
          <p className="text-lg text-white/70 mt-4 max-w-xl mx-auto">
            Have questions about admissions, courses, or fees? We&apos;re here
            to help!
          </p>
          <div className="mt-6 text-white/60 text-sm font-medium tracking-wide">
            <Link href="/" className="hover:text-white transition">
              Home
            </Link>
            <span className="mx-3">&gt;</span>
            <span className="text-white font-semibold">Contact</span>
          </div>
        </div>
      </section>

      {/* CONTACT INFO CARDS */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeUp}
        className="max-w-6xl mx-auto px-6 py-20"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-foreground">
          Contact Information
        </h2>
        <p className="text-muted-foreground text-center mt-2">
          Reach out to us — we respond quickly!
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-14">
          <ContactCard
            icon={<Mail size={28} className="text-primary" />}
            title="Email"
            value="info@brightmindacademy.in"
            text="Write to us anytime"
          />
          <ContactCard
            icon={<Phone size={28} className="text-primary" />}
            title="Admissions"
            value="+91 98765 43210"
            text="Call for enrollment queries"
          />
          <ContactCard
            icon={<MapPin size={28} className="text-primary" />}
            title="Visit Us"
            value="123 Education Lane"
            text="Near City Center, Bhubaneswar"
          />
        </div>
      </motion.div>

      {/* FORM SECTION */}
      <motion.section
        initial="hidden"
        animate="show"
        variants={fadeUp}
        className="relative py-28 px-6 overflow-hidden bg-slate-900"
      >
        {/* Decorative */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="text-white space-y-8"
          >
            <div className="h-1.5 w-36 bg-primary rounded-full" />

            <h3 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Book a Free <br />
              Demo Class
            </h3>

            <p className="text-slate-300 text-lg max-w-lg">
              Interested in enrolling your child? Fill out the form to book a
              free demo class and experience the BrightMind difference.
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <MapPin size={22} className="text-primary shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white/90">Our Location</p>
                  <p className="text-slate-400 text-sm">
                    123 Education Lane, Near City Center, Bhubaneswar, Odisha -
                    751001
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={22} className="text-primary shrink-0" />
                <p className="text-slate-400">+91 98765 43210</p>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={22} className="text-primary shrink-0" />
                <p className="text-slate-400">info@brightmindacademy.in</p>
              </div>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <SocialIconLink
                href="#"
                icon={<Instagram size={20} className="text-white" />}
              />
              <SocialIconLink
                href="#"
                icon={<Facebook size={20} className="text-white" />}
              />
              <SocialIconLink
                href="#"
                icon={<Youtube size={20} className="text-white" />}
              />
              <SocialIconLink
                href="#"
                icon={<GraduationCap size={20} className="text-white" />}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative rounded-3xl shadow-2xl p-[2px] bg-gradient-to-br from-primary to-teal-600"
          >
            <form
              onSubmit={onSubmit}
              className="bg-white rounded-3xl p-10 space-y-6"
            >
              <h4 className="text-xl font-bold text-slate-900 mb-2">
                Enquiry Form
              </h4>

              <InputField
                label="Student Name"
                type="text"
                name="name"
                required
              />
              <InputField
                label="Parent/Guardian Email"
                type="email"
                name="email"
                required
              />
              <InputField
                label="Phone Number"
                type="tel"
                name="phone"
                required
              />

              <div>
                <label className="block font-medium text-slate-700 mb-2">
                  Class Interested In
                </label>
                <select
                  name="class"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition text-slate-700 bg-white"
                >
                  <option value="">Select Class</option>
                  <option value="6-8">Class 6-8</option>
                  <option value="9-10">Class 9-10 (CBSE)</option>
                  <option value="11-12-science-cbse">
                    Class 11-12 Science (CBSE)
                  </option>
                  <option value="11-12-commerce-cbse">
                    Class 11-12 Commerce (CBSE)
                  </option>
                  <option value="11-12-science-chse">
                    Class 11-12 Science (CHSE)
                  </option>
                  <option value="11-12-arts-chse">
                    Class 11-12 Arts (CHSE)
                  </option>
                  <option value="jee-neet">JEE & NEET Foundation</option>
                </select>
              </div>

              <div>
                <label className="block font-medium text-slate-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  name="message"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                  placeholder="Any specific questions or requirements..."
                />
              </div>

              <input
                type="hidden"
                name="from_name"
                value="BrightMind Academy Website"
              />

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 bg-primary text-white text-lg font-semibold rounded-xl shadow-xl shadow-primary/20 transition-all ${
                  isSubmitting
                    ? "opacity-70 cursor-not-allowed"
                    : "hover:bg-teal-800"
                }`}
              >
                {isSubmitting ? "Sending..." : "Submit Enquiry"}
              </motion.button>

              <div className="text-center">
                {result && (
                  <p
                    className={`font-medium text-sm ${
                      result.includes("successfully")
                        ? "text-emerald-600"
                        : result.includes("Sending")
                          ? "text-blue-600"
                          : "text-red-600"
                    }`}
                  >
                    {result}
                  </p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </motion.section>

      {/* MAP */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full h-[400px]"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119743.53573639378!2d85.7066906!3d20.3008841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909d2d5170aa5%3A0xfc580e2b68b33fa8!2sBhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin"
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="BrightMind Academy Location"
        />
      </motion.div>
    </div>
  );
}

/* SHARED COMPONENTS */
interface ContactCardProps {
  icon: ReactNode;
  title: string;
  value: string;
  text: string;
}

function ContactCard({ icon, title, value, text }: ContactCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -5 }}
      className="p-8 bg-card shadow-sm rounded-2xl text-center border border-border hover:shadow-lg transition-shadow"
    >
      <div className="flex justify-center">{icon}</div>
      <h4 className="text-lg font-bold mt-4 text-foreground">{title}</h4>
      <p className="text-foreground/80 font-medium mt-2">{value}</p>
      <p className="text-muted-foreground text-sm mt-1">{text}</p>
    </motion.div>
  );
}

interface InputFieldProps {
  label: string;
  type: string;
  name: string;
  required?: boolean;
}

function InputField({ label, type, name, required = false }: InputFieldProps) {
  return (
    <div>
      <label className="block font-medium text-slate-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
      />
    </div>
  );
}

interface SocialIconLinkProps {
  href: string;
  icon: ReactNode;
}

function SocialIconLink({ href, icon }: SocialIconLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-full bg-white/10 border border-white/20
      transition-all duration-300 hover:scale-110 hover:bg-primary"
    >
      {icon}
    </a>
  );
}
