"use client";

import Image from "next/image";
import Link from "next/link";

const CarCard = ({ car }) => {
  const {
    image,
    carName,
    availability,
    carType,
    seatCapacity,
    pickupLocation,
    dailyRentPrice,
  } = car;

  return (
    <div className="group relative rounded-3xl overflow-hidden bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-[#E50914] transition-all duration-500 shadow-lg hover:shadow-[0_0_25px_rgba(229,9,20,0.25)]">

      {/* Car Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={carName}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />

        {/* Availability Badge */}
        <div
          className={`absolute top-4 right-4 px-4 py-1 rounded-full text-xs font-semibold backdrop-blur-md border
            ${
              availability === "Available"
                ? "bg-green-500/20 text-green-400 border-green-500/30"
                : "bg-red-500/20 text-red-300 border-red-500/30"
            }`}
        >
          {availability}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">

        {/* Car Name */}
        <h2 className="text-2xl font-bold text-[var(--foreground)]">
          {carName}
        </h2>

        {/* Type + Seat */}
        <div className="flex items-center justify-between mt-3 text-sm text-[var(--muted)]">
          <p>{carType}</p>
          <p>{seatCapacity} Seats</p>
        </div>

        {/* Location */}
        <p className="mt-3 text-sm text-[var(--soft)]">
          Pickup: {pickupLocation}
        </p>

        {/* Price */}
        <div className="mt-5 flex items-center justify-between">

          <div>
            <p className="text-[var(--soft)] text-sm">Daily Rent</p>

            <h3 className="text-3xl font-black bg-linear-to-r from-[#7A0000] via-[#E50914] to-[#7A0000] bg-clip-text text-transparent">
              ${dailyRentPrice}
            </h3>
          </div>

          {/* Button */}
          <Link
            href={`/cars/${car?._id}`}
            className="px-5 py-3 rounded-xl bg-linear-to-r from-[#7A0000] via-[#E50914] to-[#7A0000] text-white font-semibold shadow-lg hover:shadow-red-500/20 transition-all duration-300"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarCard;