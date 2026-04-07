"use client";
import React from "react";
import { motion } from "framer-motion";
import { CalendarDays, Lock, Clock } from "lucide-react";

const Businesshours = () => {
  // ✅ Same hours as your image
  const businessHours = [
    { day: "Monday", hours: "8 am – 6 pm", isClosed: false },
    { day: "Tuesday", hours: "8 am – 6 pm", isClosed: false },
    { day: "Wednesday", hours: "8 am – 6 pm", isClosed: false },
    { day: "Thursday", hours: "8 am – 6 pm", isClosed: false },
    { day: "Friday", hours: "Closed", isClosed: true },
    { day: "Saturday", hours: "Closed", isClosed: true },
    { day: "Sunday", hours: "8 am – 6 pm", isClosed: false },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
  };

  return (
    <section className="relative w-full overflow-hidden bg-white py-14 px-6 md:px-11">
      {/* Premium subtle background (same palette: white/gray + primary) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />
        <div className="absolute -top-28 -right-28 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgb(0 0 0) 1px, transparent 0)",
            backgroundSize: "18px 18px",
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border bg-white/70 px-4 py-2 text-sm text-gray-700 shadow-sm backdrop-blur">
            <Clock className="h-4 w-4 text-primary" />
            <span className="font-medium">Operating Schedule</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-5 tracking-tight">
            Business Hours
          </h1>

          <div className="w-20 h-1.5 bg-primary mx-auto mt-4 rounded-full" />

          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            We welcome you during our operational hours — with full support &
            service.
          </p>
        </div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {businessHours.map((h, idx) => {
            const Icon = h.isClosed ? Lock : CalendarDays;

            return (
              <motion.div
                key={idx}
                variants={item}
                whileHover={h.isClosed ? undefined : { y: -3 }}
                className={[
                  "relative overflow-hidden rounded-2xl border bg-white/75 backdrop-blur",
                  "shadow-sm transition-all",
                  h.isClosed
                    ? "border-gray-200"
                    : "border-primary/20 hover:border-primary/30 hover:shadow-lg",
                ].join(" ")}
              >
                {/* Left accent bar */}
                <div
                  className={[
                    "absolute left-0 top-0 h-full w-1.5",
                    h.isClosed ? "bg-gray-200" : "bg-primary/70",
                  ].join(" ")}
                />

                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    {/* Left: icon + day */}
                    <div className="flex items-start gap-4">
                      <div
                        className={[
                          "grid place-items-center rounded-xl p-3 shadow-sm",
                          h.isClosed
                            ? "bg-gray-100 text-gray-500"
                            : "bg-primary text-white",
                        ].join(" ")}
                      >
                        <Icon className="h-6 w-6" />
                      </div>

                      <div>
                        <p
                          className={[
                            "text-lg font-semibold",
                            h.isClosed ? "text-gray-600" : "text-gray-900",
                          ].join(" ")}
                        >
                          {h.day}
                        </p>

                        <p
                          className={[
                            "mt-1 text-2xl font-extrabold tracking-tight",
                            h.isClosed ? "text-gray-400" : "text-gray-900",
                          ].join(" ")}
                        >
                          {h.hours}
                        </p>
                      </div>
                    </div>

                    {/* Right: status pill */}
                    <span
                      className={[
                        "shrink-0 rounded-full px-3 py-1 text-sm font-semibold",
                        h.isClosed
                          ? "bg-gray-100 text-gray-600 border border-gray-200"
                          : "bg-primary/10 text-primary border border-primary/20",
                      ].join(" ")}
                    >
                      {h.isClosed ? "Closed" : "Open"}
                    </span>
                  </div>

                  {/* Footer note */}
                  {!h.isClosed && (
                    <div className="mt-5 border-t pt-4 text-sm text-gray-600 flex items-center gap-2">
                      <span className="inline-block h-2 w-2 rounded-full bg-primary/70" />
                      Full-day service available
                    </div>
                  )}

                  {h.isClosed && (
                    <div className="mt-5 border-t pt-4 text-sm text-gray-500">
                      We’ll be back the next working day.
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Businesshours;
