import type { Metadata } from "next";
import HomeCta from "../components/HomeCta";

export const metadata: Metadata = {
  title: "Results",
  description:
    "View the outstanding results of BrightMind Academy students in CBSE & CHSE board exams. 95%+ distinction rate with consistent top rankers every year.",
};

const toppers = [
  {
    name: "Priya Mohanty",
    score: "98.6%",
    class: "Class 12 CBSE Science",
    year: "2025",
  },
  {
    name: "Arjun Das",
    score: "97.8%",
    class: "Class 12 CBSE Commerce",
    year: "2025",
  },
  { name: "Sneha Patel", score: "97.2%", class: "Class 10 CBSE", year: "2025" },
  {
    name: "Rahul Sharma",
    score: "96.4%",
    class: "Class 12 CHSE Science",
    year: "2025",
  },
  {
    name: "Ananya Mishra",
    score: "96.0%",
    class: "Class 12 CBSE Science",
    year: "2024",
  },
  {
    name: "Vikram Nayak",
    score: "95.8%",
    class: "Class 10 CBSE",
    year: "2024",
  },
  {
    name: "Kavya Tripathy",
    score: "95.2%",
    class: "Class 12 CHSE Science",
    year: "2024",
  },
  {
    name: "Siddharth Behera",
    score: "94.8%",
    class: "Class 12 CBSE Commerce",
    year: "2024",
  },
  {
    name: "Deepika Rout",
    score: "94.6%",
    class: "Class 12 CBSE Science",
    year: "2023",
  },
  {
    name: "Aditya Panda",
    score: "94.2%",
    class: "Class 10 CBSE",
    year: "2023",
  },
  {
    name: "Riya Sen",
    score: "93.8%",
    class: "Class 12 CHSE Arts",
    year: "2023",
  },
  {
    name: "Manish Kumar",
    score: "93.4%",
    class: "Class 12 CBSE Science",
    year: "2023",
  },
];

const yearlyStats = [
  {
    year: "2025",
    students: 320,
    distinction: "96%",
    topScore: "98.6%",
    passRate: "100%",
  },
  {
    year: "2024",
    students: 280,
    distinction: "95%",
    topScore: "96.0%",
    passRate: "100%",
  },
  {
    year: "2023",
    students: 240,
    distinction: "93%",
    topScore: "94.6%",
    passRate: "100%",
  },
  {
    year: "2022",
    students: 200,
    distinction: "91%",
    topScore: "93.8%",
    passRate: "100%",
  },
  {
    year: "2021",
    students: 160,
    distinction: "89%",
    topScore: "92.4%",
    passRate: "100%",
  },
];

const competitiveResults = [
  { exam: "JEE Main", year: "2025", qualified: 28, topRank: "AIR 4,521" },
  { exam: "NEET UG", year: "2025", qualified: 35, topRank: "AIR 3,890" },
  { exam: "JEE Main", year: "2024", qualified: 22, topRank: "AIR 5,120" },
  { exam: "NEET UG", year: "2024", qualified: 30, topRank: "AIR 4,200" },
];

export default function ResultsPage() {
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
              Our Results
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
            Proven Track Record
          </h1>
          <p className="text-lg text-white/70 mt-6 max-w-2xl mx-auto leading-relaxed">
            Our students consistently achieve outstanding results in CBSE & CHSE
            board exams and competitive entrance tests. Here are the numbers
            that speak for themselves.
          </p>
        </div>
      </section>

      {/* Yearly Stats Table */}
      <section className="py-20 bg-card">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="h-0.5 w-10 bg-primary rounded-full"></span>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">
                Year-wise Performance
              </p>
              <span className="h-0.5 w-10 bg-primary rounded-full"></span>
            </div>
            <h2 className="text-4xl font-extrabold text-foreground">
              Board Exam Results
            </h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-border shadow-sm">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gradient-to-r from-primary to-teal-700 text-white">
                  <th className="px-6 py-4 font-semibold text-sm">Year</th>
                  <th className="px-6 py-4 font-semibold text-sm">
                    Total Students
                  </th>
                  <th className="px-6 py-4 font-semibold text-sm">
                    Distinction Rate
                  </th>
                  <th className="px-6 py-4 font-semibold text-sm">Top Score</th>
                  <th className="px-6 py-4 font-semibold text-sm">Pass Rate</th>
                </tr>
              </thead>
              <tbody>
                {yearlyStats.map((stat, idx) => (
                  <tr
                    key={stat.year}
                    className={`border-b border-border ${idx % 2 === 0 ? "bg-secondary/50" : "bg-card"} hover:bg-primary/5 transition-colors`}
                  >
                    <td className="px-6 py-4 font-bold text-primary">
                      {stat.year}
                    </td>
                    <td className="px-6 py-4 text-foreground/80 font-medium">
                      {stat.students}+
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold">
                        {stat.distinction}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-bold text-foreground">
                      {stat.topScore}
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                        {stat.passRate}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Top Performers */}
      <section className="py-20 bg-secondary">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="h-0.5 w-10 bg-primary rounded-full"></span>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">
                Star Performers
              </p>
              <span className="h-0.5 w-10 bg-primary rounded-full"></span>
            </div>
            <h2 className="text-4xl font-extrabold text-foreground">
              Our Toppers
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {toppers.map((topper, idx) => (
              <div
                key={idx}
                className="bg-card rounded-2xl border border-border p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-teal-600 flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  {topper.name.charAt(0)}
                </div>
                <p className="text-3xl font-extrabold text-primary mb-1">
                  {topper.score}
                </p>
                <p className="font-bold text-foreground">{topper.name}</p>
                <p className="text-sm text-muted-foreground mt-1">
                  {topper.class}
                </p>
                <span className="inline-block mt-3 text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/15">
                  Batch {topper.year}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Exam Results */}
      <section className="py-20 bg-card">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="h-0.5 w-10 bg-primary rounded-full"></span>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">
                Competitive Exams
              </p>
              <span className="h-0.5 w-10 bg-primary rounded-full"></span>
            </div>
            <h2 className="text-4xl font-extrabold text-foreground">
              JEE & NEET Results
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {competitiveResults.map((res, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl border border-primary/15 p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-foreground">
                    {res.exam}
                  </h3>
                  <span className="text-sm font-bold px-3 py-1 rounded-full bg-primary text-white">
                    {res.year}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-3xl font-extrabold text-primary">
                      {res.qualified}+
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Students Qualified
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl font-extrabold text-foreground">
                      {res.topRank}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Best Rank
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HomeCta />
    </div>
  );
}
