import Hero from "@/ui/hero";
import Video from "@/ui/video";
import Monitoring from "@/ui/monitoring";
import Benefits from "@/ui/benefits";
import Contact from "@/ui/contact";
import Footer from "@/ui/footer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-w-[375px]">
      <Hero />
      <Video youtubeId="08SFSw3hpGY?si=d7RvcEpBlloIrSp6" />
      <Monitoring />
      <Benefits />
      <Video youtubeId="5gF7upTW48U?si=eDPoLWEhftgBqQ43" />
      <Contact />
      <Footer />
    </main>
  );
}
