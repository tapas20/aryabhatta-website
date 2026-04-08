"use client";
import React from "react";
import { motion } from "framer-motion";
import { CalendarDays, Lock, Clock } from "lucide-react";

const Businesshours = () => {
  const classSchedule = [
    { day: "Monday", hours: "7 am - 8 pm", isClosed: false },
    { day: "Tuesday", hours: "7 am - 8 pm", isClosed: false },
    { day: "Wednesday", hours: "7 am - 8 pm", isClosed: false },
    { day: "Thursday", hours: "7 am - 8 pm", isClosed: false },
    { day: "Friday", hours: "7 am - 8 pm", isClosed: false },
    { day: "Saturday", hours: "8 am - 5 pm", isClosed: false },
    { day: "Sunday", hours: "Closed", isClosed: true },
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
    <section className="relative w-full overflow-hidden bg-card py-16 px-6 md:px-11">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-card via-primary/3 to-card" />
        <div className="absolute -top-28 -right-28 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-accent/5 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
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
          <div className="inline-flex items-center gap-2 rounded-full border bg-card/70 px-4 py-2 text-sm text-foreground/70 shadow-sm backdrop-blur border-border">
            <Clock className="h-4 w-4 text-primary" />
            <span className="font-medium">Class Timings</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mt-5 tracking-tight">
            Class Schedule
          </h2>

          <div className="w-20 h-1.5 bg-primary mx-auto mt-4 rounded-full" />

          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            Multiple batches available — morning, afternoon & evening slots to
            suit every student&apos;s schedule.
          </p>
        </div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {classSchedule.map((h, idx) => {
            const Icon = h.isClosed ? Lock : CalendarDays;

            return (
              <motion.div
                key={idx}
                variants={item}
                whileHover={h.isClosed ? undefined : { y: -3 }}
                className={[
                  "relative overflow-hidden rounded-2xl border bg-card/80 backdrop-blur",
                  "shadow-sm transition-all",
                  h.isClosed
                    ? "border-border"
                    : "border-primary/20 hover:border-primary/40 hover:shadow-lg",
                ].join(" ")}
              >
                <div
                  className={[
                    "absolute left-0 top-0 h-full w-1.5",
                    h.isClosed ? "bg-border" : "bg-primary/70",
                  ].join(" ")}
                />

                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div
                        className={[
                          "grid place-items-center rounded-xl p-3 shadow-sm",
                          h.isClosed
                            ? "bg-secondary text-muted-foreground"
                            : "bg-primary text-white",
                        ].join(" ")}
                      >
                        <Icon className="h-6 w-6" />
                      </div>

                      <div>
                        <p
                          className={[
                            "text-lg font-semibold",
                            h.isClosed
                              ? "text-muted-foreground"
                              : "text-foreground",
                          ].join(" ")}
                        >
                          {h.day}
                        </p>

                        <p
                          className={[
                            "mt-1 text-2xl font-extrabold tracking-tight",
                            h.isClosed
                              ? "text-muted-foreground/60"
                              : "text-foreground",
                          ].join(" ")}
                        >
                          {h.hours}
                        </p>
                      </div>
                    </div>

                    <span
                      className={[
                        "shrink-0 rounded-full px-3 py-1 text-sm font-semibold",
                        h.isClosed
                          ? "bg-secondary text-muted-foreground border border-border"
                          : "bg-primary/10 text-primary border border-primary/20",
                      ].join(" ")}
                    >
                      {h.isClosed ? "Closed" : "Open"}
                    </span>
                  </div>

                  {!h.isClosed && (
                    <div className="mt-4 border-t border-border pt-3 text-sm text-muted-foreground flex items-center gap-2">
                      <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
                      Morning, afternoon & evening batches available
                    </div>
                  )}

                  {h.isClosed && (
                    <div className="mt-4 border-t border-border pt-3 text-sm text-muted-foreground/60">
                      Students can access online study material on Sundays.
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
