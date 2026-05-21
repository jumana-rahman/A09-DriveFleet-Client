"use client";

import { authClient, useSession } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import {
  FaCarSide,
  FaChair,
  FaLocationDot,
  FaMoneyBillWave,
  FaCircleCheck,
  FaUsers,
} from "react-icons/fa6";

const CarDetails = ({ car }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [driverNeeded, setDriverNeeded] = useState("No");
  const [specialNote, setSpecialNote] = useState("");
  const [loading, setLoading] = useState(false);

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
    bookingCount
  } = car || {};

  const {data: session} = useSession();
  const router = useRouter();
  
  const handleBooking = async () => {
    const {data: jwtData} = await authClient.token();
    const token = jwtData?.token;
    if(!token){
      toast.error("Authentication failed! Booking was not added!");
      return;
    }
    const updatedData = {
      userId: session?.user?.id,
      userName: session?.user?.name,
      userEmail: session?.user?.email,
      carName: car?.carName,
      image: car?.image,

      carId: _id,
      driverNeeded,
      specialNote,
    }

    const res =  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/booking/${car?._id}`,{
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(updatedData)
    })

    const data = await res.json();
    if(!data){
      toast.error("Something went wrong!");
    }
    else{
      toast.success("Your car has been booked!");
      router.push("/bookings");
    }
  }

  return (
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

      {/* LEFT IMAGE SECTION */}
      <div className="relative group">

        {/* Glow */}
        <div className="absolute -inset-2 bg-linear-to-r from-[#7A0000] via-[#E50914] to-[#7A0000] rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500"></div>

        {/* Image */}
        <div className="relative overflow-hidden rounded-3xl border border-[#E50914]/20 bg-[var(--card-bg)]">
          <Image
            src={image || "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop"}
            alt={carName || "Car Image"}
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

          <div className="flex items-center gap-4 rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] p-5">
            <FaUsers className="text-[#E50914] text-xl" />

            <div>
              <p className="text-sm text-[var(--soft)]">Bookings</p>

              <h4 className="font-semibold text-[var(--foreground)]">
                {`${bookingCount || 0}`}
              </h4>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="mt-12">
          <Link href="#"
          onClick={() => setIsOpen(true)}
          disabled={availability !== "Available"}
          className="inline-flex items-center justify-center rounded-2xl bg-linear-to-r from-[#7A0000] via-[#E50914] to-[#7A0000] px-10 py-4 text-white font-semibold shadow-lg hover:shadow-red-500/30 transition-all duration-300 disabled:opacity-50"
          >
            Book Now
          </Link>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
          
          <div className="w-full max-w-lg rounded-3xl border border-[#E50914]/30 bg-[var(--card-bg)] shadow-[0_0_60px_rgba(229,9,20,0.15)] p-6 relative">

            {/* Close */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-[var(--muted)] hover:text-red-500"
            >
              ✕
            </button>

            {/* Title */}
            <h2 className="text-2xl font-black text-center bg-linear-to-r from-[#7A0000] via-[#E50914] to-[#7A0000] bg-clip-text text-transparent">
              Book This Car
            </h2>

            <p className="text-center text-sm text-[var(--muted)] mt-2">
              Complete your booking details
            </p>

            {/* Form */}
            <div className="mt-6 space-y-5">

              {/* Driver Needed */}
              <div>
                <label className="text-sm text-[var(--muted)]">Driver Needed</label>
                <select
                  value={driverNeeded}
                  onChange={(e) => setDriverNeeded(e.target.value)}
                  className="w-full mt-2 px-4 py-3 rounded-xl bg-[var(--background)] border border-[var(--border-color)] text-[var(--foreground)] focus:border-[#E50914]"
                >
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </select>
              </div>

              {/* Special Note */}
              <div>
                <label className="text-sm text-[var(--muted)]">Special Note</label>
                <textarea
                  value={specialNote}
                  onChange={(e) => setSpecialNote(e.target.value)}
                  placeholder="Any special request..."
                  className="w-full mt-2 px-4 py-3 min-h-[120px] rounded-xl bg-[var(--background)] border border-[var(--border-color)] text-[var(--foreground)] focus:border-[#E50914]"
                />
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-2">

                <button
                  onClick={() => setIsOpen(false)}
                  className="flex-1 py-3 rounded-xl border border-[var(--border-color)] text-[var(--foreground)] hover:bg-white/5"
                >
                  Cancel
                </button>

                <Link href="#"
                  onClick={handleBooking}
                  disabled={loading}
                  className="flex-1 py-3 rounded-xl bg-linear-to-r from-[#7A0000] via-[#E50914] to-[#7A0000] text-white font-semibold hover:shadow-red-500/30"
                >
                  {loading ? "Booking..." : "Confirm Booking"}
                </Link>

              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default CarDetails;