"use client";

import Link from "next/link";
import {
  FaCalendarDays,
  FaLocationDot,
  FaMoneyBillWave,
  FaCarSide,
} from "react-icons/fa6";

const BookingCard = ({ bookings }) => {

  // Empty State
  if (!bookings || bookings.length === 0) {
    return (
      <div className="max-w-7xl mx-auto mt-16">

        <div className="rounded-3xl border border-dashed border-[var(--border-color)] bg-[var(--card-bg)] p-10 flex flex-col items-center justify-center text-center min-h-[350px]">

          <div className="w-20 h-20 rounded-full bg-[#E50914]/10 flex items-center justify-center">
            <FaCarSide className="text-3xl text-[#E50914]" />
          </div>

          <h3 className="mt-6 text-2xl font-bold text-[var(--foreground)]">
            No Bookings Found
          </h3>

          <p className="mt-3 text-[var(--muted)] max-w-sm leading-7">
            Your upcoming car reservations will appear here after booking.
          </p>

          <Link
            href="/explore-cars"
            className="mt-8 px-6 py-3 rounded-2xl border border-[#E50914] text-[#E50914] font-semibold hover:bg-[#E50914] hover:text-white transition-all duration-300"
          >
            Explore Cars
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto">

      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">

        {bookings?.map((booking) => (

          <div
            key={booking?._id}
            className="group relative overflow-hidden rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)] p-8 shadow-lg hover:border-[#E50914] hover:shadow-[0_0_25px_rgba(229,9,20,0.2)] transition-all duration-500"
          >

            {/* Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-linear-to-r from-[#7A0000]/5 via-[#E50914]/5 to-[#7A0000]/5"></div>

            <div className="relative">

              {/* Top */}
              <div className="flex items-center justify-between">

                <div>
                  <h2 className="text-2xl font-black text-[var(--foreground)]">
                    {booking?.carName}
                  </h2>

                  <p className="mt-2 text-sm text-[var(--muted)]">
                    Premium Luxury Rental
                  </p>
                </div>

                {/* Status */}
                <div className="px-4 py-1 rounded-full text-xs font-semibold border bg-green-500/10 text-green-500 border-green-500/20">
                  Confirmed
                </div>
              </div>

              {/* Info */}
              <div className="mt-8 space-y-5">

                <div className="flex items-center gap-3 text-[var(--muted)]">
                  <FaCalendarDays className="text-[#E50914]" />

                  <span>
                    Booking Date:{" "}
                    {new Date(booking?.bookedAt).toLocaleDateString()}
                  </span>
                </div>

                <div className="flex items-center gap-3 text-[var(--muted)]">
                  <FaLocationDot className="text-[#E50914]" />

                  <span>
                    {booking?.pickupLocation}
                  </span>
                </div>

                <div className="flex items-center gap-3 text-[var(--muted)]">
                  <FaCarSide className="text-[#E50914]" />

                  <span>
                    {booking?.carType}
                  </span>
                </div>
              </div>

              {/* Bottom */}
              <div className="mt-10 flex items-center justify-between">

                {/* Price */}
                <div>
                  <p className="text-sm text-[var(--soft)]">
                    Total Price
                  </p>

                  <h3 className="flex items-center gap-2 text-3xl font-black bg-linear-to-r from-[#7A0000] via-[#E50914] to-[#7A0000] bg-clip-text text-transparent">
                    <FaMoneyBillWave />
                    ${booking?.dailyRentPrice}
                  </h3>
                </div>

                {/* Button */}
                <Link
                  href={`/explore-cars/${booking?.carId}`}
                  className="px-6 py-3 rounded-2xl bg-linear-to-r from-[#7A0000] via-[#E50914] to-[#7A0000] text-white font-semibold shadow-lg hover:shadow-red-500/30 transition-all duration-300"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>

        ))}

      </div>
    </div>
  );
};

export default BookingCard;