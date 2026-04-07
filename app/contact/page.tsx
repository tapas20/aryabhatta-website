"use client";

import { useState, ReactNode } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Linkedin,
  Facebook,
} from "lucide-react";
import Link from "next/link";

/* -------------------------------------------- ANIMATIONS -------------------------------------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

/* ========================================================================================================= */
/*                                        MAIN PAGE COMPONENT                                                */
/* ========================================================================================================= */

export default function PremiumContactPage() {
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
    <div className="bg-white text-black">
      {/* -------------------------------------------- HERO -------------------------------------------- */}
      <div className="relative w-full h-[55vh] flex flex-col items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 3.15, opacity: 0 }}
          animate={{ scale: 1.5, opacity: 1, x: [-20, 20, -20] }}
          transition={{
            duration: 1.4,
            ease: "easeOut",
            x: { duration: 12, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute inset-0"
        >
          <Image
            src="/assets/contact-us.jpg"
            alt="Contact"
            fill
            className="object-cover opacity-70"
            priority
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90" />

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative text-4xl md:text-6xl font-semibold tracking-wide text-white"
        >
          Get In Touch
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative mt-4 text-lg text-center text-white font-medium"
        >
          We&apos;re here to support your next project with precision &
          expertise.
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="relative mt-6 text-white text-sm md:text-base font-medium tracking-widest uppercase text-center"
        >
          <Link href="/" className="hover:text-primary transition">
            Home
          </Link>
          <span className="mx-3 text-white/50">&gt;</span>
          <span className="text-primary font-bold">Contact</span>
        </motion.div>
      </div>

      {/* -------------------------------------------- CONTACT INFO -------------------------------------------- */}
      <motion.div
        initial="hidden"
        animate="show" // Fix: animate immediately on load
        variants={fadeUp}
        className="max-w-6xl mx-auto px-6 py-20"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Contact Information
        </h2>
        <p className="text-gray-600 text-center mt-2">
          Reach out to our team anytime — we respond quickly!
        </p>

        <div className="grid md:grid-cols-3 gap-10 mt-14">
          <ContactCard
            icon={<Mail size={32} className="text-primary" />}
            title="Email"
            value="info@alsyedgroup.net"
            text="Write to us anytime"
          />
          <ContactCard
            icon={<Phone size={32} className="text-primary" />}
            title="Rentals"
            value="0567220786"
            text="Heavy equipment rentals"
          />
          <ContactCard
            icon={<Phone size={32} className="text-primary" />}
            title="Construction"
            value="0536649777"
            text="Construction division"
          />
        </div>
      </motion.div>

      {/* -------------------------------------------- FORM SECTION -------------------------------------------- */}
      <motion.section
        initial="hidden"
        animate="show" // Fix: animate immediately
        variants={fadeUp}
        className="relative py-28 px-6 overflow-hidden"
      >
        <div className="absolute inset-0">
          <Image
            src="/assets/Contact_Bg.jpg"
            alt="Background"
            fill
            className="object-cover brightness-[0.35] scale-110"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/70 to-black/20" />

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }} // Fix: animate immediately
            transition={{ duration: 0.9 }}
            className="text-white space-y-8"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 150 }}
              transition={{ duration: 1 }}
              className="h-1.5 bg-primary rounded-full"
            />

            <h3 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Send Us a Message
            </h3>

            <p className="text-gray-200 text-lg md:text-xl max-w-lg">
              Whether you need equipment, manpower, rig move support or heavy
              lifting solutions — we are ready to assist you.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={26} className="text-primary" />
                <div>
                  <p className="font-semibold text-white/90 text-lg">
                    Our Location
                  </p>
                  <p className="text-gray-300">
                    Dammam 31972, Kingdom of Saudi Arabia
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={26} className="text-primary" />
                <p className="text-gray-300">0567220786</p>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={26} className="text-primary" />
                <p className="text-gray-300">info@alsyedgroup.net</p>
              </div>
            </div>

            <div className="mt-10 flex items-center gap-5">
              <SocialIcon
                href="https://wa.me/0535884777"
                icon={<Phone size={22} className="text-white" />}
              />
              <SocialIcon
                href="https://www.instagram.com/alsyedgroup.ksa/?igsh=MTBnM3I3MGliZHRpcw%3D%3D&utm_source=qr#"
                icon={<Instagram size={22} className="text-white" />}
              />
              <SocialIcon
                href="https://www.facebook.com/profile.php?id=61583824135180&mibextid=wwXIfr&rdid=YZYjlH4t4fwf30K9&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F163Hib3bcq%2F%3Fmibextid%3DwwXIfr#"
                icon={<Facebook size={22} className="text-white" />}
              />
              <SocialIcon
                href="https://www.linkedin.com/company/alsyedgroup/"
                icon={<Linkedin size={22} className="text-white" />}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }} // Fix: animate immediately
            transition={{ duration: 1 }}
            className="relative rounded-3xl shadow-2xl p-[2px] bg-primary backdrop-blur-lg"
          >
            <form
              onSubmit={onSubmit}
              className="bg-white/95 backdrop-blur-xl rounded-3xl p-10 space-y-6"
            >
              <InputField label="Full Name" type="text" name="name" required />
              <InputField
                label="Email Address"
                type="email"
                name="email"
                required
              />
              <InputField label="Phone Number" type="tel" name="phone" />

              <div>
                <label className="block font-medium mb-2">Message</label>
                <textarea
                  rows={5}
                  name="message"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition duration-200"
                  placeholder="Tell us about your project..."
                />
              </div>

              <input
                type="hidden"
                name="from_name"
                value="AlSyed Group Website"
              />
              <input
                type="hidden"
                name="redirect"
                value="https://alsyedgroup.net/thank-you"
              />

              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(249,115,22,0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 bg-primary text-white text-lg font-semibold rounded-full shadow-xl transition-all ${
                  isSubmitting
                    ? "opacity-70 cursor-not-allowed"
                    : "hover:shadow-2xl"
                }`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>

              <div className="text-center">
                {result && (
                  <p
                    className={`font-medium ${
                      result.includes("successfully")
                        ? "text-green-600"
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

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full h-[450px] mt-10"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118317.40505120118!2d49.61088128114763!3d26.42216906879704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e36179c177c177f%3A0xba96f7f8fea1b13a!2sDammam%2031972%2C%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="AlSyed Group Location"
        />
      </motion.div>
    </div>
  );
}

/* ========================================================================================================= */
/*                                        SHARED COMPONENTS                                                  */
/* ========================================================================================================= */

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
      whileHover={{ y: -5, scale: 1.02 }}
      className="p-8 bg-white shadow-lg rounded-2xl text-center border border-gray-100 hover:shadow-2xl transition-shadow"
    >
      <div className="flex justify-center">{icon}</div>
      <h4 className="text-xl font-bold mt-4">{title}</h4>
      <p className="text-gray-800 font-medium mt-2">{value}</p>
      <p className="text-gray-500 text-sm mt-2">{text}</p>
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
      <label className="block font-medium mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition duration-200"
      />
    </div>
  );
}

interface SocialIconProps {
  href: string;
  icon: ReactNode;
}

function SocialIcon({ href, icon }: SocialIconProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group p-3 rounded-full bg-white/15 backdrop-blur-md border border-white/25 
      transition-all duration-300 hover:scale-110 hover:bg-primary 
      hover:shadow-[#a9a9a9]"
    >
      {icon}
    </a>
  );
}

export { ContactCard, InputField, SocialIcon };
