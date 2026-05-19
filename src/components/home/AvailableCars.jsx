import { FaArrowRightLong } from "react-icons/fa6";
import CarCard from "../ui/CarCard";


const fetchCars = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cars`, {
    cache: "no-store",
  });

  const data = await res.json();

  return data?.slice(0, 6) || [];
};

const AvailableCars = async () => {
  const cars = await fetchCars();

  return (
    <section className="relative py-24 overflow-hidden bg-[var(--background)]">

      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-700/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-700/10 blur-[120px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">

          <p className="uppercase tracking-[6px] text-sm text-[#E50914] font-semibold mb-4">
            Premium Collection
          </p>

          <h2 className="text-4xl md:text-5xl font-black leading-tight text-foreground">
            Discover Our <span className="bg-linear-to-r from-[#7A0000] via-[#E50914] to-[#7A0000] bg-clip-text text-transparent">Available Cars</span>
          </h2>

          <p className="mt-6 text-[var(--muted)] leading-7">
            Explore luxury sedans, powerful SUVs, and premium sports cars
            designed to elevate every journey with comfort, style, and performance.
          </p>
        </div>

        {/* Top Decoration Line */}
        <div className="w-40 h-[2px] bg-linear-to-r from-transparent via-[#E50914] to-transparent mx-auto mt-8"></div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {cars.map((car) => (
            <CarCard key={car?._id} car={car} />
          ))}
        </div>

        {/* Bottom Button */}
        <div className="flex justify-center mt-16">
          <a
            href="/explore-cars"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl border border-[#E50914]/40 px-8 py-4 font-semibold text-white transition-all duration-300 shadow-lg hover:shadow-gray-700"
          >
            <span className="absolute inset-0 bg-linear-to-r from-[#7A0000] via-[#E50914] to-[#7A0000] opacity-90 transition-all duration-300 group-hover:scale-110 "></span>

            <span className="relative z-10 flex justify-center items-center gap-2 ">
              Browse All Cars <FaArrowRightLong />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AvailableCars;