"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[var(--background)] border-t border-[#262626] text-[var(--muted)] mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Logo + About */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image src="/logo.png" alt="logo" width={70} height={70} />

            <h2 className="text-2xl font-black">
              <span className="text-[var(--foreground)]">Drive</span>
              <span className="text-[#E50914]">Fleet</span>
            </h2>
          </div>

          <p className="text-sm text-[var(--muted)] leading-6">
            DriveFleet is a premium car rental platform offering luxury,
            comfort, and affordability. Book your ride easily and travel in style.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-[var(--foreground)] font-semibold mb-4 uppercase tracking-wide">
            Useful Links
          </h3>

          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/explore-cars" className="hover:text-[#E50914] transition text-[var(--muted)]">
                Explore Cars
              </Link>
            </li>
            <li>
              <Link href="/bookings" className="hover:text-[#E50914] transition text-[var(--muted)]">
                My Bookings
              </Link>
            </li>
            <li>
              <Link href="/policy" className="hover:text-[#E50914] transition text-[var(--muted)]">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-[#E50914] transition text-[var(--muted)]">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h3 className="text-[var(--foreground)] font-semibold mb-4 uppercase tracking-wide">
            Contact Info
          </h3>

          <div className="space-y-3 text-sm text-[var(--muted)]">
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-[#E50914]" />
              support@drivefleet.com
            </p>

            <p className="flex items-center gap-2">
              <FaPhoneAlt className="text-[#E50914]" />
              +880 1234-567890
            </p>

            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-[#E50914]" />
              Dhaka, Bangladesh
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-5">
            <a
              href="https://www.facebook.com"
              target="_blank"
              className="p-2 rounded-lg border border-[#262626] text-[var(--muted)] hover:border-[#E50914] hover:text-[#E50914] transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="p-2 rounded-lg border border-[#262626] text-[var(--muted)] hover:border-[#E50914] hover:text-[#E50914] transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.x.com"
              target="_blank"
              className="p-2 rounded-lg border border-[#262626] text-[var(--muted)] hover:border-[#E50914] hover:text-[#E50914] transition"
            >
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#262626] text-center py-4 text-xs text-[var(--muted)]">
        © {new Date().getFullYear()} DriveFleet. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;