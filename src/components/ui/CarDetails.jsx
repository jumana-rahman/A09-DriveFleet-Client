"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaCarSide,
  FaChair,
  FaLocationDot,
  FaMoneyBillWave,
  FaCircleCheck,
} from "react-icons/fa6";

const CarDetails = ({ car }) => {
  const {
    _id,
    image,
    carName,
    dailyRentPrice,
    carType,
    seatCapacity,
    pickupLocation,
    description,
    availability,
  } = car;

  return (
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

      {/* LEFT IMAGE SECTION */}
      <div className="relative group">

        {/* Glow */}
        <div className="absolute -inset-2 bg-linear-to-r from-[#7A0000] via-[#E50914] to-[#7A0000] rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500"></div>

        {/* Image */}
        <div className="relative overflow-hidden rounded-3xl border border-[#E50914]/20 bg-[var(--card-bg)]">
          <Image
            src={image}
            alt={carName}
            width={700}
            height={500}
            className="w-full h-[500px] object-cover group-hover:scale-105 transition duration-700"
          />
        </div>
      </div>

      {/* RIGHT CONTENT SECTION */}
      <div>

        {/* Car Name */}
        <h2 className="text-4xl md:text-5xl font-black text-[var(--foreground)] leading-tight">
          {carName}
        </h2>

        {/* Price */}
        <div className="mt-5 flex items-center gap-3">
          <FaMoneyBillWave className="text-[#E50914] text-2xl" />

          <h3 className="text-3xl font-black bg-linear-to-r from-[#7A0000] via-[#E50914] to-[#7A0000] bg-clip-text text-transparent">
            ${dailyRentPrice}/Day
          </h3>
        </div>

        {/* Description */}
        <p className="mt-8 text-[var(--muted)] leading-8">
          {description}
        </p>

        {/* Features */}
        <div className="mt-10 grid sm:grid-cols-2 gap-5">

          <div className="flex items-center gap-4 rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] p-5">
            <FaCarSide className="text-[#E50914] text-xl" />

            <div>
              <p className="text-sm text-[var(--soft)]">Car Type</p>
              <h4 className="font-semibold text-[var(--foreground)]">
                {carType}
              </h4>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] p-5">
            <FaChair className="text-[#E50914] text-xl" />

            <div>
              <p className="text-sm text-[var(--soft)]">Seat Capacity</p>
              <h4 className="font-semibold text-[var(--foreground)]">
                {seatCapacity} Seats
              </h4>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] p-5">
            <FaLocationDot className="text-[#E50914] text-xl" />

            <div>
              <p className="text-sm text-[var(--soft)]">Pickup Location</p>
              <h4 className="font-semibold text-[var(--foreground)]">
                {pickupLocation}
              </h4>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] p-5">
            <FaCircleCheck className="text-[#E50914] text-xl" />

            <div>
              <p className="text-sm text-[var(--soft)]">Availability</p>
              <h4
                className={`font-semibold ${
                  availability === "Available"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {availability}
              </h4>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="mt-12">
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-2xl bg-linear-to-r from-[#7A0000] via-[#E50914] to-[#7A0000] px-10 py-4 text-white font-semibold shadow-lg hover:shadow-red-500/30 transition-all duration-300"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;