"use client";

import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import toast from "react-hot-toast";

const UpdateCarForm = ({ car }) => {
  const [loading, setLoading] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const { data: jwtData } = await authClient.token();

      const token = jwtData?.token;

      const form = e.target;

      const updatedCar = {
        dailyRentPrice: form.dailyRentPrice.value,
        description: form.description.value,
        availability: form.availability.value,
        image: form.image.value,
        carType: form.carType.value,
        pickupLocation: form.pickupLocation.value,
      };

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/cars/${car._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(updatedCar),
        }
      );

      if (res.ok) {
        toast.success("Car updated successfully");
      } else {
        toast.error("Update failed");
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="pt-30 pb-20 px-4 md:px-8 bg-[var(--background)] min-h-screen">
        
        <div className="min-h-screen flex items-center justify-center px-4 py-20 bg-background">
            <form
              onSubmit={handleUpdate}
              className="w-full max-w-3xl rounded-3xl border border-[#E50914]/30 bg-[var(--card-bg)] shadow-[0_0_60px_rgba(229,9,20,0.12)] backdrop-blur-xl p-8 md:p-10 relative overflow-hidden"
            >
              {/* Glow Accent */}
              <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#E50914]/10 blur-3xl rounded-full" />
              <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#7A0000]/10 blur-3xl rounded-full" />

              {/* Heading */}
              <div className="text-center mb-10 relative z-10">
                <h2 className="text-4xl md:text-5xl font-black leading-tight text-foreground">
                    Update <span className="bg-linear-to-r from-[#7A0000] via-[#E50914] to-[#7A0000] bg-clip-text text-transparent">Your Car</span>
                </h2>
                <p className="text-[var(--muted)] mt-2 text-sm pt-3 pb-8">
                  Edit your listing details and keep your car information up to date
                </p>
              </div>

              {/* Grid Inputs */}
              <div className="grid md:grid-cols-2 gap-6 relative z-10">

                {[
                  { name: "dailyRentPrice", label: "Daily Rent Price", defaultValue: car?.dailyRentPrice },
                  { name: "carType", label: "Car Type", defaultValue: car?.carType },
                  { name: "pickupLocation", label: "Pickup Location", defaultValue: car?.pickupLocation },
                  { name: "image", label: "Image URL", defaultValue: car?.image },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="text-sm text-[var(--muted)]">{field.label}</label>
                    <input
                      name={field.name}
                      defaultValue={field.defaultValue}
                      className="w-full mt-2 px-4 py-3 rounded-xl bg-[var(--background)] border border-[var(--border-color)] text-[var(--foreground)] focus:border-[#E50914] focus:ring-2 focus:ring-[#E50914]/20 outline-none transition"
                    />
                  </div>
                ))}
              </div>

              {/* Availability */}
              <div className="mt-6 relative z-10">
                <label className="text-sm text-[var(--muted)]">Availability</label>
                <select
                  name="availability"
                  defaultValue={car?.availability}
                  className="w-full mt-2 px-4 py-3 rounded-xl bg-[var(--background)] border border-[var(--border-color)] text-[var(--foreground)] focus:border-[#E50914] focus:ring-2 focus:ring-[#E50914]/20 outline-none transition"
                >
                  <option value="Available">Available</option>
                  <option value="Unavailable">Unavailable</option>
                </select>
              </div>

              {/* Description */}
              <div className="mt-6 relative z-10">
                <label className="text-sm text-[var(--muted)]">Description</label>
                <textarea
                  name="description"
                  defaultValue={car?.description}
                  className="w-full mt-2 px-4 py-3 rounded-xl min-h-[140px] bg-[var(--background)] border border-[var(--border-color)] text-[var(--foreground)] focus:border-[#E50914] focus:ring-2 focus:ring-[#E50914]/20 outline-none transition"
                />
              </div>

              {/* Button */}
              <button
                disabled={loading}
                className="w-full mt-8 py-4 rounded-2xl font-semibold text-white bg-linear-to-r from-[#7A0000] via-[#E50914] to-[#7A0000] shadow-lg hover:shadow-red-500/30 hover:scale-[1.01] transition-all duration-300 relative z-10"
              >
                {loading ? "Updating..." : "Update Car"}
              </button>
            </form>
        </div>
    </section>
  );
};

export default UpdateCarForm;