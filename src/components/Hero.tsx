// "use client";
import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <div className="h-screen w-full bg-[url(/images/hero-1.jpg)] bg-center bg-no-repeat bg-cover">
      {/* <Image
        src="/images/hero-2.jpg"
        alt="hero"
        height={800}
        width={800}
        className="h-full w-full"
      /> */}
    </div>
  );
}

export default Hero;
