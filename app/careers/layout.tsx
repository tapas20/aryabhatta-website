import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers - Join Our Team",
  description:
    "Join Al Syed Group and build your career in construction and engineering in Saudi Arabia. View current job openings and apply today. We offer opportunities in construction, demolition, logistics, and more.",
  keywords: [
    "Al Syed Group careers",
    "construction jobs Saudi Arabia",
    "engineering jobs KSA",
    "jobs in Dammam",
    "Al Syed jobs",
    "construction career Saudi Arabia",
  ],
  alternates: {
    canonical: "https://www.alsyedgroup.net/careers",
  },
  openGraph: {
    title: "Careers at Al Syed Group | Join Our Team",
    description: "Build your career in construction and engineering. View job openings at Al Syed Group, Saudi Arabia.",
    url: "https://www.alsyedgroup.net/careers",
  },
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
