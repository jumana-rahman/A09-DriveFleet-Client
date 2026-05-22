import AvailableCars from "@/components/home/AvailableCars";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import WhyChooseUs from "@/components/home/WhyChooseUs";


export default function Home() {
  return (
    <div>
      <Hero/>

      <AvailableCars/>

      <HowItWorks/>

      <WhyChooseUs/>
      
    </div>
  );
}
