import ExploreApartements from "@/components/features/home/ExploreApartemens";
import Hero from "@/components/features/home/Hero";
import LastestNews from "@/components/features/home/LastestNews";
import OurClient from "@/components/features/home/OurClient";
import Overview from "@/components/features/home/Overview";
import Showcase from "@/components/features/home/Showcase";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Overview />
      <hr className="h-0.5 w-[95%] mx-auto bg-black" />
      <Showcase />
      <ExploreApartements />
      <OurClient />
      <LastestNews />
    </main>
  );
}
