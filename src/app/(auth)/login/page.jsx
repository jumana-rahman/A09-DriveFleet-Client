"use client";

import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--background)] px-4 py-30">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-700/20 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-700/20 blur-[140px] rounded-full"></div>

      {/* Login Card */}
      <div className="relative w-full max-w-md">

        {/* Glow Border */}
        <div className="absolute -inset-[1px] rounded-3xl bg-linear-to-r from-[#7A0000] via-[#E50914] to-[#7A0000] opacity-70 blur-md"></div>

        {/* Card */}
        <div className="relative rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)] backdrop-blur-xl p-8 md:p-10 shadow-[0_0_40px_rgba(229,9,20,0.15)]">

          {/* Top Content */}
          <div className="text-center">

            <p className="uppercase tracking-[6px] text-sm font-semibold text-[#E50914] mb-4">
              Welcome Back
            </p>

            <h1 className="text-4xl font-black text-[var(--foreground)]">
              Login to <span className="bg-linear-to-r from-[#7A0000] via-[#E50914] to-[#7A0000] bg-clip-text text-transparent">DriveFleet</span>
            </h1>

            <p className="mt-5 text-sm leading-7 text-[var(--muted)]">
              Access premium car rentals, manage your bookings,
              and explore luxury rides effortlessly.
            </p>
          </div>

          {/* Form */}
          <form className="mt-10 space-y-6">

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-[var(--foreground)] mb-3">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-2xl border border-[var(--border-color)] bg-[var(--background)] px-5 py-4 text-[var(--foreground)] outline-none transition-all duration-300 focus:border-[#E50914] focus:shadow-[0_0_20px_rgba(229,9,20,0.15)]"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-[var(--foreground)] mb-3">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter your password"
                className="w-full rounded-2xl border border-[var(--border-color)] bg-[var(--background)] px-5 py-4 text-[var(--foreground)] outline-none transition-all duration-300 focus:border-[#E50914] focus:shadow-[0_0_20px_rgba(229,9,20,0.15)]"
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full rounded-2xl bg-linear-to-r from-[#7A0000] via-[#E50914] to-[#7A0000] px-6 py-4 text-white font-semibold shadow-lg hover:shadow-red-500/30 transition-all duration-300"
            >
              Login
            </button>

            {/* Divider */}
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-[var(--border-color)]"></div>

              <span className="text-sm text-[var(--muted)]">
                OR
              </span>

              <div className="h-px flex-1 bg-[var(--border-color)]"></div>
            </div>

            {/* Google Button */}
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 rounded-2xl border border-[var(--border-color)] bg-[var(--background)] px-6 py-4 text-[var(--foreground)] font-medium transition-all duration-300 hover:border-[#E50914] hover:shadow-[0_0_20px_rgba(229,9,20,0.15)]"
            >
              <FcGoogle className="text-2xl" />

              Continue with Google
            </button>
          </form>

          {/* Bottom Text */}
          <p className="mt-8 text-center text-sm text-[var(--muted)]">
            Don&apos;t have an account?{" "}

            <Link
              href={'/register'}
              className="font-semibold text-[#E50914] hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;