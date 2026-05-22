import CarDetails from "@/components/ui/CarDetails";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const fetchSingleCar = async (id, token) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/cars/${id}`,
    {
      headers: token
        ? {
            authorization: `Bearer ${token}`,
          }
        : {},
    }
  );

  const data = await res.json();
  return data || {};
};

const CarDetailsPage = async ({ params }) => {
  const {id} = await params;
  const {token} = await auth.api.getToken({
          headers: await headers(),
  });
  const car = await fetchSingleCar(id, token);

  return (
    <section className="bg-[var(--background)] min-h-screen pt-30 pb-20 px-4 md:px-8">

      {/* Page Heading */}
      <div className="max-w-7xl mx-auto text-center">

        <p className="uppercase tracking-[6px] text-[#E50914] text-sm font-semibold mb-4">
          Premium Car Details
        </p>

        <h1 className="text-4xl md:text-5xl font-black leading-tight text-[var(--foreground)]">
          Explore The <span className="bg-linear-to-r from-[#7A0000] via-[#E50914] to-[#7A0000] bg-clip-text text-transparent">Perfect Ride</span>
        </h1>

        <p className="mt-6 max-w-3xl mx-auto text-[var(--muted)] leading-7">
          Discover complete details, premium features, pricing, and availability
          of your selected car before booking your next journey.
        </p>
      </div>

      {/* Details Component */}
      <div className="mt-16">
        <CarDetails car={car} />
      </div>
    </section>
  );
};

export default CarDetailsPage;