import CarCard from "@/components/ui/CarCard";
import { fetchCars } from "@/lib/cars/data";
import { BiSearch, BiFilterAlt } from "react-icons/bi";


const ExploreCarsPage = async ({searchParams}) => {

  const sParams = await searchParams;

  const cars = await fetchCars(sParams?.searchTerm || '', sParams?.type || "All");

  return (
    <section className="pt-30 pb-20 px-4 md:px-8 bg-background min-h-screen">

      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-black leading-tight text-foreground">
            Explore <span className="bg-linear-to-r from-[#7A0000] via-[#E50914] to-[#7A0000] bg-clip-text text-transparent">Premium Cars</span>
        </h2>

        <p className="mt-4 text-muted max-w-2xl mx-auto">
          Discover luxury, sports, SUV, and family cars for your perfect journey.
          Choose the ride that matches your style and comfort.
        </p>
      </div>

      {/* Search + Filter */}
      <div className="max-w-7xl mx-auto mt-10 flex flex-col lg:flex-row gap-5 items-center justify-between">

        {/* Search */}
        <form className="relative w-full lg:w-[65%]">

          <input
            type="text"
            name="searchTerm"
            defaultValue={sParams?.searchTerm || ""}
            placeholder="Search cars by name..."
            className="w-full bg-(--card-bg) border border-(--border-color) rounded-2xl py-4 pl-14 pr-32 outline-none text-foreground placeholder:text-(--soft) focus:border-[#E50914] transition-all duration-300"
          />

          {/* Keep selected filter */}
          <input
            type="hidden"
            name="type"
            value={sParams?.type || "All"}
          />

          <BiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-[var(--soft)] text-xl" />

          <button
            type="submit"
            className="absolute right-0 top-1/2 -translate-y-1/2 px-6 py-4 rounded-xl bg-linear-to-r from-[#7A0000] via-[#E50914] to-[#7A0000] text-white font-semibold shadow-lg hover:shadow-red-500/20 transition-all duration-300"
          >
            Search
          </button>

        </form>

      </div>

      <div className="max-w-7xl mx-auto mt-3 flex flex-col lg:flex-row gap-3">
        {/* Filter */}
        <form className="relative flex items-start justify-start gap-2 mt-10">

          <input
            type="hidden"
            name="searchTerm"
            value={sParams?.searchTerm || ""}
          />

          <div className="relative">

            {/* <BiFilterAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-lg text-foreground pointer-events-none" /> */}

            <select
              name="type"
              defaultValue={sParams?.type || "All"}
              className="appearance-none cursor-pointer bg-(--card-bg) border border-(--border-color) hover:border-white/30 rounded-2xl py-3 pl-11 pr-10 text-sm font-medium text-foreground outline-none transition-all duration-300 shadow-md"
            >
              <option value="All">Filter</option>
              <option value="SUV">SUV</option>
              <option value="Sedan">Sedan</option>
              <option value="Sports">Sports</option>
              <option value="Luxury">Luxury</option>
              <option value="Electric">Electric</option>
              <option value="Convertible">Convertible</option>
            </select>

          </div>

          <button
            type="submit"
            className="px-4 py-3 rounded-2xl border border-(--border-color) bg-(--card-bg) text-foreground hover:border-white/30 transition-all duration-300 text-sm font-medium cursor-pointer"
          >
            Apply
          </button>

        </form>
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