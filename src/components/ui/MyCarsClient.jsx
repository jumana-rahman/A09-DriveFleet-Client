"use client";

import Image from "next/image";
import Link from "next/link";
import { FaTrash, FaPen } from "react-icons/fa6";

const MyCarsClient = ({ cars = [] }) => {
  if (!cars.length) {
    return (
      <div className="mt-20 text-center text-[var(--muted)]">
        No cars added yet.
      </div>
    );
  }

  return (
    <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {cars.map((car) => (
        <div
          key={car._id}
          className="group relative overflow-hidden rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)] shadow-lg hover:border-[#E50914] transition-all duration-300"
        >
          {/* Image */}
          <Image
            src={car.image}
            alt={car.carName}
            width={500}
            height={300}
            className="h-52 w-full object-cover group-hover:scale-105 transition"
          />

            

          {/* Content */}
            <div className="p-5">
                
                <div
                className={`inline-block mt-3 px-3 mb-2 py-1 mb-2 text-center rounded-full text-xs font-semibold border  ${
                    car.availability === "Available"
                    ? "bg-green-500/10 text-green-500 border-green-500/20"
                    : "bg-red-500/10 text-red-500 border-red-500/20"
                }`}
                >
                    {car.availability}
                </div>

                <h2 className="text-xl font-black text-[var(--foreground)]">
                {car.carName}
                </h2>

                <p className="text-sm text-[var(--muted)] mt-3 line-clamp-2 pt-2">
                    {car.description}
                </p>

                <p className="text-sm text-[var(--muted)] mt-1 py-2">
                {car.carType} • {car.seatCapacity} Seats
                </p>

                <p className="text-[#E50914] font-bold mt-2">
                ${car.dailyRentPrice}/day
                </p>

                

                {/* Buttons */}
                <div className="flex gap-3 mt-5 border-t border-foreground">
                <Link href="#" className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl bg-blue-600/10 text-blue-500 hover:text-blue-600/20">
                    <FaPen /> Update
                </Link>

                <Link href="#" className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl bg-red-600/10 text-red-500 hover:text-red-600/20">
                    <FaTrash /> Delete
                </Link>
                </div>
            </div>
        </div>
      ))}
    </div>
  );
};

export default MyCarsClient;