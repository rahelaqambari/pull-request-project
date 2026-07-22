import Hero from "@/components/Hero";
import Header from "@/components/Share/Header/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <Hero />
    </div>
  );
}
