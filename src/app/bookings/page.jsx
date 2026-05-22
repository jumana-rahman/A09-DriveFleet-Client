

import { headers } from "next/headers";

import BookingCard from "@/components/ui/BookingCard";
import { auth } from "@/lib/auth";


const bookingsPage = async () => {
  const {token} = await auth.api.getToken({
      headers: await headers()
  });

  const session = await auth.api.getSession({
    headers: await headers()
  });
  
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/booking/${session?.user?.id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  const booking = await res.json();
  console.log(booking)

  return (
    <section className="pt-30 pb-20 px-4 md:px-8 bg-[var(--background)] min-h-screen">
      <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-4xl md:text-5xl font-black leading-tight text-foreground">
              My <span className="bg-linear-to-r from-[#7A0000] via-[#E50914] to-[#7A0000] bg-clip-text text-transparent">Bookings</span>
          </h2>

          <p className="mt-4 text-[var(--muted)] max-w-2xl mx-auto">
          Track all your premium car reservations and manage your rental
          history with ease.
          </p>



        {/* Booking Layout */}
        

          {/* <BookingCard bookings={booking}/> */}
          
        
      </div>
    </section>
  );
};

export default bookingsPage;