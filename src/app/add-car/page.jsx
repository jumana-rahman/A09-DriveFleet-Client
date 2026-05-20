"use client";

import { useState } from "react";
import { useSession, authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

const AddCarPage = () => {
  const { data: session } = useSession();

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data: jwtData } = await authClient.token();
      const token = jwtData?.token;

      const form = e.target;

      const carData = {
        carName: form.carName.value,
        dailyRentPrice: form.dailyRentPrice.value,
        carType: form.carType.value,
        image: form.image.value,
        seatCapacity: form.seatCapacity.value,
        pickupLocation: form.pickupLocation.value,
        description: form.description.value,
        availability: form.availability.value,
      };

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cars`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(carData),
      });

      if (!res.ok) throw new Error("Failed");

      toast.success("Car added successfully!");
      form.reset();
    } catch (err) {
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="pt-30 pb-20 px-4 md:px-8 bg-[var(--background)] min-h-screen">

        {/* Heading */}
        <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black leading-tight text-foreground">
                Add <span className="bg-linear-to-r from-[#7A0000] via-[#E50914] to-[#7A0000] bg-clip-text text-transparent">Your Car</span>
            </h2>

            <p className="mt-4 text-[var(--muted)] max-w-2xl mx-auto">
            List your car and start earning from rentals
            </p>
        </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-[var(--card-bg)] border border-[var(--border-color)] rounded-3xl p-8 shadow-lg space-y-5 mt-6"
      >

        <div className="grid md:grid-cols-2 gap-5">

          <input name="carName" placeholder="Car Name"
            className="input" />

          <input name="dailyRentPrice" placeholder="Daily Rent Price"
            className="input" />

          <input name="carType" placeholder="Car Type"
            className="input" />

          <input name="image" placeholder="Image URL"
            className="input" />

          <input name="seatCapacity" placeholder="Seat Capacity"
            className="input" />

          <input name="pickupLocation" placeholder="Pickup Location"
            className="input" />

        </div>

        <textarea
          name="description"
          placeholder="Car Description"
          className="input h-28"
        />

        <select name="availability" className="input">
          <option value="Available">Available</option>
          <option value="Unavailable">Unavailable</option>
        </select>

        <button
          disabled={loading}
          className="w-full py-4 rounded-2xl font-semibold text-white bg-linear-to-r from-[#7A0000] via-[#E50914] to-[#7A0000] shadow-lg hover:shadow-red-500/30 transition"
        >
          {loading ? "Adding..." : "Add Car"}
        </button>
      </form>

      {/* reusable input style */}
      <style jsx>{`
        .input {
          width: 100%;
          padding: 14px;
          border-radius: 14px;
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          outline: none;
          color: var(--foreground);
        }

        .input:focus {
          border-color: #e50914;
        }
      `}</style>

    </section>
  );
};

export default AddCarPage;