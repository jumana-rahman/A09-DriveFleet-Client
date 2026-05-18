"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { Button } from "@heroui/react";
import { Bars, Xmark } from "@gravity-ui/icons";
import Image from "next/image";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Explore Cars", path: "/explore-cars" },
  { name: "Add Car", path: "/add-car" },
  { name: "My Bookings", path: "/my-bookings" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/95 backdrop-blur-xl border-b border-[#262626]">
      <nav className="max-w-7xl mx-auto flex items-center justify-between h-20 px-4 md:px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="logo" width={70} height={70}  />

          <h1 className="text-2xl font-black tracking-wide">
            <span className="text-white">Drive</span>
            <span className="text-[#E50914]">Fleet</span>
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((item) => {
            const isActive = pathname === item.path;

            return (
              <Link
                key={item.path}
                href={item.path}
                className={`relative text-sm uppercase tracking-wide transition ${
                  isActive
                    ? "text-[#E50914]"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.name}

                <span
                  className={`absolute left-0 -bottom-2 h-0.5 bg-[#E50914] transition-all ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* Right Button */}
        <div className="hidden lg:block">
          <Link 
          href="/login" 
          className="bg-transparent border border-white text-white font-semibold px-6 py-2 rounded-xl shadow-lg mr-2 transition-all duration-300 hover:bg-linear-to-r from-[#7A0000] via-[#E50914] to-[#7A0000] hover:border-black">
            Login
          </Link>

          <Link 
          href="/register" 
          className="bg-linear-to-r from-[#7A0000] via-[#E50914] to-[#7A0000] border border-transparent text-white font-semibold px-6 py-2 rounded-xl shadow-lg transition-all duration-300 hover:shadow-gray-600">
            Register
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white"
        >
          {open ? <Xmark /> : <Bars />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-[#0B0B0B] border-t border-[#262626] px-6 py-6 space-y-5">
          {navLinks.map((item) => {
            const isActive = pathname === item.path;

            return (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setOpen(false)}
                className={`block text-sm uppercase tracking-wide ${
                  isActive
                    ? "text-[#E50914]"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            );
          })}


          <div className="mt-8 flex flex-col gap-4">
            <Link
                href="/login"
                className="w-full text-center bg-transparent border border-white text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:bg-linear-to-r hover:from-[#7A0000] hover:via-[#E50914] hover:to-[#7A0000] hover:border-transparent"
            >
                Login
            </Link>

            <Link
                href="/register"
                className="w-full text-center bg-linear-to-r from-[#7A0000] via-[#E50914] to-[#7A0000] text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition-all duration-300 hover:shadow-red-500/30"
            >
                Register
            </Link>
            </div>
        </div>
      )}
    </header>
  );
}