import CarCard from "@/components/ui/CarCard";
import { BiSearch } from "react-icons/bi";

const fetchCars = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cars`);
  const data = await res.json();
  return data || [];
};

const ExploreCarsPage = async () => {
  const cars = await fetchCars();

  return (
    <section className="pt-30 pb-20 px-4 md:px-8 bg-[var(--background)] min-h-screen">

      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-black leading-tight text-foreground">
            Explore <span className="bg-linear-to-r from-[#7A0000] via-[#E50914] to-[#7A0000] bg-clip-text text-transparent">Premium Cars</span>
        </h2>

        <p className="mt-4 text-[var(--muted)] max-w-2xl mx-auto">
          Discover luxury, sports, SUV, and family cars for your perfect journey.
          Choose the ride that matches your style and comfort.
        </p>
      </div>

      {/* Search + Filter */}
      <div className="max-w-7xl mx-auto mt-10 flex flex-col md:flex-row gap-4 items-center justify-between">

        {/* Search */}
        <div className="relative w-full md:w-[75%]">
          <input
            type="text"
            placeholder="Search cars by name..."
            className="w-full bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl py-4 pl-14 pr-4 outline-none text-[var(--foreground)] placeholder:text-[var(--soft)] focus:border-[#E50914] transition-all duration-300"
          />

          <BiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-[var(--soft)]" />
        </div>

        {/* Filter */}
        <button className="w-full md:w-auto px-8 py-4 rounded-2xl bg-linear-to-r from-[#7A0000] via-[#E50914] to-[#7A0000] text-white font-semibold shadow-lg hover:shadow-red-500/20 transition-all duration-300">
          Filter Cars
        </button>
      </div>

      {/* Cars Grid */}
      <div className="max-w-7xl mx-auto mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cars?.map((car) => (
          <CarCard key={car?._id} car={car} />
        ))}
      </div>
    </section>
  );
};

export default ExploreCarsPage;