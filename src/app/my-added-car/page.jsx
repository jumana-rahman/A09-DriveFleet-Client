import MyCarsClient from "@/components/ui/MyCarsClient";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const MyAddedCarsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const tokenData = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/my-cars`, {
    headers: {
      Authorization: `Bearer ${tokenData?.token}`,
    },
    cache: "no-store",
  });

  const cars = await res.json();

  return (
    <section className="pt-30 pb-20 px-4 md:px-8 bg-[var(--background)] min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="max-w-7xl mx-auto text-center pb-8">
            <h2 className="text-4xl md:text-5xl font-black leading-tight text-foreground">
                My <span className="bg-linear-to-r from-[#7A0000] via-[#E50914] to-[#7A0000] bg-clip-text text-transparent">Added Cars</span>
            </h2>

            <p className="mt-4 text-[var(--muted)] max-w-2xl mx-auto">
            Check out your listed cars here.
            </p>
        </div>

        <MyCarsClient cars={cars} />
      </div>
    </section>
  );
};

export default MyAddedCarsPage;