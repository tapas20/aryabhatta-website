"use client";
import React from "react";
import { Clock, Lock } from "lucide-react";

const Businesshours = () => {
  const classSchedule = [
    { day: "Monday", hours: "7 am – 8 pm", isClosed: false },
    { day: "Tuesday", hours: "7 am – 8 pm", isClosed: false },
    { day: "Wednesday", hours: "7 am – 8 pm", isClosed: false },
    { day: "Thursday", hours: "7 am – 8 pm", isClosed: false },
    { day: "Friday", hours: "7 am – 8 pm", isClosed: false },
    { day: "Saturday", hours: "8 am – 5 pm", isClosed: false },
    { day: "Sunday", hours: "Closed", isClosed: true },
  ];

  return (
    <section className="w-full bg-card py-20 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border bg-primary/5 px-4 py-1.5 text-sm border-primary/15 mb-4">
            <Clock className="h-4 w-4 text-primary" />
            <span className="font-semibold text-primary">Class Timings</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
            Class Schedule
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            Morning, afternoon & evening batches available to suit every
            student&apos;s schedule.
          </p>
        </div>

        {/* Schedule Table */}
        <div className="rounded-2xl border border-border overflow-hidden bg-card shadow-sm">
          {classSchedule.map((h, idx) => (
            <div
              key={idx}
              className={`flex items-center justify-between px-6 py-4 ${
                idx !== classSchedule.length - 1
                  ? "border-b border-border"
                  : ""
              } ${h.isClosed ? "bg-secondary/30" : "hover:bg-primary/[0.03] transition-colors"}`}
            >
              {/* Day */}
              <div className="flex items-center gap-3 w-40">
                {h.isClosed ? (
                  <Lock className="w-4 h-4 text-muted-foreground/50" />
                ) : (
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                )}
                <span
                  className={`font-semibold text-sm ${
                    h.isClosed ? "text-muted-foreground" : "text-foreground"
                  }`}
                >
                  {h.day}
                </span>
              </div>

              {/* Hours */}
              <span
                className={`font-bold text-sm ${
                  h.isClosed ? "text-muted-foreground/50" : "text-foreground"
                }`}
              >
                {h.hours}
              </span>

              {/* Status */}
              <span
                className={`text-xs font-semibold px-3 py-1 rounded-full ${
                  h.isClosed
                    ? "bg-secondary text-muted-foreground"
                    : "bg-primary/10 text-primary"
                }`}
              >
                {h.isClosed ? "Closed" : "Open"}
              </span>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-xs text-muted-foreground mt-4">
          Batch timings may vary by course. Contact us for specific schedules.
        </p>
      </div>
    </section>
  );
};

export default Businesshours;
