import UpdateCarForm from "@/components/ui/UpdateCarForm";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

const UpdateCarPage = async ({ params }) => {
  const { id } = await params;

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/cars/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    }
  );

  const car = await res.json();


  return (
    <section className="min-h-screen pt-36 px-4 bg-background">
      <UpdateCarForm car={car} />
    </section>
  );
};

export default UpdateCarPage;