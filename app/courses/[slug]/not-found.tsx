import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function CourseNotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <div className="text-9xl font-extrabold text-primary mb-4">404</div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-4">
            Course Not Found
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            The course you&apos;re looking for doesn&apos;t exist or may have
            been moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/courses"
            className="inline-flex items-center justify-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded-full hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            <ArrowLeft className="w-5 h-5" />
            Browse All Courses
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-secondary text-foreground font-bold px-8 py-4 rounded-full border border-border hover:bg-secondary/80 transition-all duration-300"
          >
            <Home className="w-5 h-5" />
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
