"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect, useRef, } from "react";

import { Bars, Xmark } from "@gravity-ui/icons";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import { signOut, useSession } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import { FiLogOut } from "react-icons/fi";
import toast from "react-hot-toast";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Explore Cars", path: "/explore-cars" },
  { name: "Add Car", path: "/add-car" },
  { name: "My Bookings", path: "/bookings" },
];

export default function Navbar() {

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}, []);

  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const {data:session, isPending} = useSession();

  const router = useRouter();

  const handleLogout = async () => {
    await signOut();
    toast.success("Logged out!");
    router.push("/");
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-(--background)/95 backdrop-blur-xl border-b border-[#262626]">
      <nav className="max-w-7xl mx-auto flex items-center justify-between h-20 px-4 md:px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="logo" width={70} height={70}  />

          <h1 className="text-2xl font-black tracking-wide">
            <span className="text-[var(--foreground)]">Drive</span>
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
                    : "text-[var(--muted)] hover:text-[#E50914] dark:text-[var(--muted)] dark:hover:text-[#E50914]"
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

        {/* Toggle */}
        <div>
          <ThemeToggle />
        </div>

        {/* Right Button */}
        <div className="hidden lg:block">
          { !isPending && !session ? 
          <div>
            <Link 
          href={"/login" }
          className="bg-transparent border border-[var(--border-color)] text-[var(--foreground)] font-semibold px-6 py-2 rounded-xl shadow-lg mr-2 transition-all duration-300 hover:border-[#E50914] hover:text-[#E50914]">
            Login
          </Link> 

          <Link 
          href={"/register"} 
          className="bg-linear-to-r from-[#7A0000] via-[#E50914] to-[#7A0000] border border-transparent text-[#ffffff] font-semibold px-6 py-2 rounded-xl shadow-lg transition-all duration-300 hover:shadow-gray-600">
            Register
          </Link>
          </div> :  <div ref={dropdownRef} className="relative hidden lg:flex items-center gap-3">

                      {/* Avatar Button */}
                      <button
                        onClick={() => setDropdownOpen((prev) => !prev)}
                        className="relative"
                      >
                        <Avatar className="border-2 border-[#E50914] hover:shadow-[0_0_15px_rgba(229,9,20,0.4)] transition-all duration-300">
                          <Avatar.Image
                            alt="User"
                            src={session?.user?.image}
                            referrerPolicy="no-referrer"
                          />

                          <Avatar.Fallback>
                            {session?.user?.name?.charAt(0)}
                          </Avatar.Fallback>
                        </Avatar>
                      </button>

                      {/* Dropdown */}
                      {dropdownOpen && (
                        <div className="absolute top-0 right-0 w-64 rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] shadow-[0_0_25px_rgba(229,9,20,0.15)] overflow-hidden z-50">

                          {/* User Info */}
                          <div className="p-5 border-b border-[var(--border-color)]">
                            <h3 className="font-semibold text-[var(--foreground)]">
                              {session?.user?.name}
                            </h3>

                            <p className="text-sm text-[var(--muted)] mt-1">
                              {session?.user?.email}
                            </p>
                          </div>

                          {/* Menu Items */}
                          <div className="flex flex-col p-2">

                            <Link
                              href={"/add-car"}
                              className="px-4 py-3 rounded-xl text-sm text-[var(--foreground)] hover:bg-[#E50914]/10 hover:text-[#E50914]"
                              onClick={() => setDropdownOpen(false)}
                            >
                              Add Car
                            </Link>

                            <Link
                              href={"/bookings"}
                              className="px-4 py-3 rounded-xl text-sm text-[var(--foreground)] hover:bg-[#E50914]/10 hover:text-[#E50914]"
                              onClick={() => setDropdownOpen(false)}
                            >
                              My Bookings
                            </Link>

                            <Link
                              href={"/my-added-cars"}
                              className="px-4 py-3 rounded-xl text-sm text-[var(--foreground)] hover:bg-[#E50914]/10 hover:text-[#E50914]"
                              onClick={() => setDropdownOpen(false)}
                            >
                              My Added Cars
                            </Link>

                            <button
                              onClick={handleLogout}
                              className="mt-2 flex cursor-pointer items-center gap-2 px-4 py-3 rounded-xl text-sm text-left text-red-500 hover:bg-red-500/10"
                            >
                              Logout <FiLogOut />
                            </button>

                          </div>
                        </div>
                      )}
                    </div>
          }

    
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-[var(--foreground)]"
        >
          {open ? <Xmark /> : <Bars />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-[var(--background)] border-t border-[#262626] px-6 py-6 space-y-5">
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
                    : "text-[var(--muted)] hover:text-[var(--foreground)]"
                }`}
              >
                {item.name}
              </Link>
            );
          })}

          <div className="mt-8 flex flex-col gap-4">
            { !isPending && !session ? <>
            <Link
                href={"/login"}
                className="w-full text-center bg-transparent border border-[var(--border-color)] text-[var(--foreground)] font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:border-[#E50914] hover:text-[#E50914]"
            >
                Login
            </Link>

            <Link
                href={"/register"}
                className="w-full text-center bg-linear-to-r from-[#7A0000] via-[#E50914] to-[#7A0000] text-[#ffffff] font-semibold px-6 py-3 rounded-xl shadow-lg transition-all duration-300 hover:shadow-red-500/30"
            >
                Register
            </Link> </> : <>
            {/* Avatar Button */}
                      <button
                        onClick={() => setDropdownOpen((prev) => !prev)}
                        className="relative"
                      >
                        <Avatar className="border-2 border-[#E50914] hover:shadow-[0_0_15px_rgba(229,9,20,0.4)] transition-all duration-300">
                          <Avatar.Image
                            alt="User"
                            src={session?.user?.image}
                            referrerPolicy="no-referrer"
                          />

                          <Avatar.Fallback>
                            {session?.user?.name?.charAt(0)}
                          </Avatar.Fallback>
                        </Avatar>
                      </button>

                      {/* Dropdown */}
                      {dropdownOpen && (
                        <div className="absolute top-0 right-0 w-64 rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] shadow-[0_0_25px_rgba(229,9,20,0.15)] overflow-hidden z-50">

                          {/* User Info */}
                          <div className="p-5 border-b border-[var(--border-color)]">
                            <h3 className="font-semibold text-[var(--foreground)]">
                              {session?.user?.name}
                            </h3>

                            <p className="text-sm text-[var(--muted)] mt-1">
                              {session?.user?.email}
                            </p>
                          </div>

                          {/* Menu Items */}
                          <div className="flex flex-col p-2">

                            <Link
                              href={"/my-added-cars"}
                              className="px-4 py-3 rounded-xl text-sm text-[var(--foreground)] hover:bg-[#E50914]/10 hover:text-[#E50914]"
                              onClick={() => setDropdownOpen(false)}
                            >
                              My Added Cars
                            </Link>

                            <button
                              onClick={handleLogout}
                              className="mt-2 flex cursor-pointer items-center gap-2 px-4 py-3 rounded-xl text-sm text-left text-red-500 hover:bg-red-500/10"
                            >
                              Logout <FiLogOut />
                            </button>

                          </div>
                        </div>
                      )}
            </>
            
            }
          </div>
        </div>
      )}
    </header>
  );
}