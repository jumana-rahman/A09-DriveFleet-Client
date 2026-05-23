"use client";

import Image from "next/image";
import { useState } from "react";
import { FaTrash, FaPen } from "react-icons/fa6";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";

const MyCarsClient = ({ cars = [] }) => {

    const [deleteId, setDeleteId] = useState(null);

    const handleDelete = async (id) => {
    try {
        const { data: jwtData } = await authClient.token();
        const token = jwtData?.token;

        const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/cars/${id}`,
        {
            method: "DELETE",
            headers: {
            Authorization: `Bearer ${token}`,
            },
        }
        );

        if (res.ok) {
            toast.success("Car deleted successfully");
            window.location.reload();
        } else {
            toast.error("Delete failed");
        }

        window.location.reload();
    } catch (err) {
        toast.error("Delete failed");
    }
};

  if (!cars.length) {
    return (
      <div className="mt-20 text-center text-[var(--muted)]">
        No cars added yet.
      </div>
    );
  }

  return (

    <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {cars?.filter(car => car?._id).map((car) => (
        <div
          key={car._id}
          className="group relative overflow-hidden rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)] shadow-lg hover:border-[#E50914] transition-all duration-300"
        >
          <div className="relative h-64 overflow-hidden">
            {/* Image */}
          <Image
            src={car.image}
            alt={car.carName}
            width={500}
            height={300}
            className="h-52 w-full object-cover group-hover:scale-105 transition"
          />  

          <div
            className={`absolute top-4 right-4 px-4 py-1 rounded-full text-xs font-semibold backdrop-blur-md border
            ${
              car.availability === "Available"
                ? "bg-green-500/20 text-green-400 border-green-500/30"
                : "bg-red-500/20 text-red-300 border-red-500/30"
            }`}
            >
                {car.availability}
            </div>
          </div>

          {/* Content */}
            <div className="p-5">
                
                

                <h2 className="text-xl font-black text-[var(--foreground)]">
                {car.carName}
                </h2>

                <p className="text-sm text-[var(--muted)] mt-3 line-clamp-2 pt-2">
                    {car.description}
                </p>

                <p className="text-sm text-[var(--muted)] mt-1 py-2">
                {car.carType} • {car.seatCapacity} Seats
                </p>

                <p className="mt-3 text-sm text-[var(--soft)] pb-2">
                    Pickup: {car.pickupLocation}
                </p>

                <p className="text-[#E50914] font-bold mt-2">
                ${car.dailyRentPrice}/day
                </p>

                {/* Buttons */}
                <div className="flex gap-3 mt-5">
                    
                    <Link href={`/my-added-car/update-car/${car?._id}`} className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl pointer-cursor bg-blue-600/10 text-blue-500 hover:text-blue-700">
                        <FaPen /> Update
                    </Link>

                    <button onClick={() => setDeleteId(car._id)}
                        className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl pointer-cursor bg-red-600/10  text-red-500 hover:bg-red-600 hover:text-white transition-all duration-300">
                        <FaTrash /> Delete
                    </button>
                </div>
            </div>
        </div>
      ))}

      {deleteId && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
            <div className="bg-[var(--card-bg)] p-6 rounded-2xl w-[90%] max-w-md border border-[var(--border-color)]">

            <h2 className="text-xl font-bold text-[var(--foreground)]">
                Delete Car?
            </h2>

            <p className="text-sm text-[var(--muted)] mt-2">
                This action cannot be undone.
            </p>

            <div className="flex justify-end gap-3 mt-6">

                <button
                onClick={() => setDeleteId(null)}
                className="px-4 py-2 rounded-lg border border-[var(--border-color)]"
                >
                Cancel
                </button>

                <button
                onClick={() => {
                    handleDelete(deleteId);
                    setDeleteId(null);
                }}
                className="px-4 py-2 rounded-lg bg-red-600 text-white"
                >
                Delete
                </button>

            </div>
            </div>
        </div>
        )}
    </div>

    
  );
};

export default MyCarsClient;