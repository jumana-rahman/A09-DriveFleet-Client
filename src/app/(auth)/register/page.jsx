"use client";

import { authClient, signUp } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const RegisterPage = () => {
  const router = useRouter();
  const [passwordError, setPasswordError] = useState("");

  const validatePassword = (password) => {
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasMinLength = password?.length >= 6;

    return hasUppercase && hasLowercase && hasMinLength;
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const registerData = Object.fromEntries(formData.entries());

    const password = registerData.password;

    // PASSWORD VALIDATION
    if (!validatePassword(password)) {
      setPasswordError(
        "Password must be 6+ chars, include uppercase & lowercase letters"
      );
      return;
    }

    setPasswordError("");

    const { data, error } = await signUp.email({
      ...registerData,
    });

    if (error) {
      toast.error(error.message || "Registration Failed!");
      return;
    }

    await authClient.signOut();

    toast.success("Registration Successful!");
    router.push("/login");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background px-4 py-30">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-700/20 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-700/20 blur-[140px] rounded-full"></div>

      {/* Register Card */}
      <div className="relative w-full max-w-lg">

        {/* Glow Border */}
        <div className="absolute -inset-px rounded-3xl bg-linear-to-r from-[#7A0000] via-[#E50914] to-[#7A0000] opacity-70 blur-md"></div>

        {/* Main Card */}
        <div className="relative rounded-3xl border border-(--border-color) bg-(--card-bg) backdrop-blur-xl p-8 md:p-10 shadow-[0_0_40px_rgba(229,9,20,0.15)]">

          {/* Top Content */}
          <div className="text-center">

            <p className="uppercase tracking-[6px] text-sm font-semibold text-[#E50914] mb-4">
              Join DriveFleet
            </p>

            <h1 className="text-4xl font-black text-foreground">
              Create Your{" "}
              <span className="bg-linear-to-r from-[#7A0000] via-[#E50914] to-[#7A0000] bg-clip-text text-transparent">
                Account
              </span>
            </h1>

            <p className="mt-5 text-sm leading-7 text-muted">
              Register now to explore premium car rentals, luxury rides,
              and seamless booking experiences.
            </p>
          </div>

          {/* Form */}
          <form className="mt-10 space-y-6" onSubmit={handleRegister}>
            

            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-3">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your full name"
                name="name"
                className="w-full rounded-2xl border border-(--border-color) bg-background px-5 py-4 text-foreground outline-none transition-all duration-300 focus:border-[#E50914] focus:shadow-[0_0_20px_rgba(229,9,20,0.15)]"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-3">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                name="email"
                className="w-full rounded-2xl border border-(--border-color) bg-background px-5 py-4 text-foreground outline-none transition-all duration-300 focus:border-[#E50914] focus:shadow-[0_0_20px_rgba(229,9,20,0.15)]"
              />
            </div>

            {/* Photo URL */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-3">
                Photo URL
              </label>

              <input
                type="text"
                placeholder="Enter your profile photo URL"
                name="photo"
                className="w-full rounded-2xl border border-(--border-color) bg-background px-5 py-4 text-foreground outline-none transition-all duration-300 focus:border-[#E50914] focus:shadow-[0_0_20px_rgba(229,9,20,0.15)]"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-3">
                Password
              </label>

              <input
                type="password"
                placeholder="Create a password"
                name="password"
                className="w-full rounded-2xl border border-(--border-color) bg-background px-5 py-4 text-foreground outline-none transition-all duration-300 focus:border-[#E50914] focus:shadow-[0_0_20px_rgba(229,9,20,0.15)]"
              />

              <p className="text-red-300 text-sm mt-2 font-light">Password must be 6 characters, include uppercase and lowercase letters</p>

              {passwordError && (
                <p className="text-red-500 text-sm mt-2">{passwordError}</p>
              )}
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full rounded-2xl bg-linear-to-r from-[#7A0000] via-[#E50914] to-[#7A0000] px-6 py-4 text-white font-semibold shadow-lg hover:shadow-red-500/30 transition-all duration-300"
            >
              Register
            </button>

            {/* Divider */}
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-(--border-color)"></div>

              <span className="text-sm text-muted">
                OR
              </span>

              <div className="h-px flex-1 bg-(--border-color)"></div>
            </div>

            {/* Google Button */}
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 rounded-2xl border border-(--border-color) bg-background px-6 py-4 text-foreground font-medium transition-all duration-300 hover:border-[#E50914] hover:shadow-[0_0_20px_rgba(229,9,20,0.15)]"
            >
              <FcGoogle className="text-2xl" />

              Continue with Google
            </button>
          </form>

          {/* Bottom Text */}
          <p className="mt-8 text-center text-sm text-muted">
            Already have an account?{" "}

            <Link
              href={'/login'}
              className="font-semibold text-[#E50914] hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;