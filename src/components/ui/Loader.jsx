"use client";

export default function Loader() {
  return (
    <div className="min-h-75 flex items-center justify-center">
      
      <div className="relative flex flex-col items-center">

        {/* Outer Glow Ring */}
        <div className="w-20 h-20 rounded-full border-4 border-[#E50914]/20 animate-pulse"></div>

        {/* Spinning Ring */}
        <div className="absolute w-20 h-20 rounded-full border-4 border-t-[#E50914] border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>

        {/* Inner Core */}
        <div className="absolute w-10 h-10 rounded-full bg-linear-to-r from-[#7A0000] via-[#E50914] to-[#7A0000] animate-pulse"></div>

        {/* Text */}
        <p className="mt-6 text-muted font-medium tracking-wide">
          Loading your experience...
        </p>

      </div>
    </div>
  );
}