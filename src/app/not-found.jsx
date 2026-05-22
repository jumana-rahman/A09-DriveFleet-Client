import Link from "next/link";
import { FaCarCrash } from "react-icons/fa";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-[var(--background)] relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-linear-to-r from-[#7A0000]/10 via-[#E50914]/10 to-[#7A0000]/10 blur-3xl"></div>

      {/* Content Box */}
      <div className="relative text-center max-w-xl">

        {/* Error Code */}
        <h1 className="mt-8 text-7xl md:text-8xl font-black text-[var(--foreground)]">
          404
        </h1>

        {/* Message */}
        <h2 className="mt-4 text-2xl md:text-3xl font-bold text-[var(--foreground)]">
          Oops! Page Not Found
        </h2>

        <p className="mt-4 text-[var(--muted)] leading-7">
          The page you are looking for doesn’t exist or has been moved.
          Please check the URL or go back to the homepage.
        </p>

        {/* Button */}
        <div className="mt-10">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-linear-to-r from-[#7A0000] via-[#E50914] to-[#7A0000] text-white font-semibold shadow-lg hover:shadow-red-500/30 transition-all duration-300"
          >
            Back to Home
          </Link>
        </div>

      </div>
    </section>
  );
}