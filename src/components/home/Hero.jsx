"use client";

import Link from "next/link";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/assets/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6">

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-black text-[#ffffff] leading-tight">
          Drive Your <span className="text-[#E50914]">Dream Car</span> Today
        </h1>

        {/* Description */}
        <p className="mt-8 max-w-2xl text-sm md:text-base text-gray-300">
          Experience premium car rentals with comfort, style, and affordability.
          Choose from luxury, SUV, and sports cars for your perfect journey.
        </p>

        {/* Button */}
        <Link
          href="/explore-cars"
          className="mt-8 px-8 py-3 rounded-xl bg-linear-to-r from-[#7A0000] via-[#E50914] to-[#7A0000] text-white font-semibold shadow-lg transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-gray-600"
        >
          Explore Cars <FaArrowUpRightFromSquare />
        </Link>

      </div>
    </section>
  );
};

export default Hero;