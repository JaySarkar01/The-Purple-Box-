import React from "react";
import Image from "next/image";

const LandingPage = () => {
  return (
    <div
      className="relative flex w-full min-h-screen bg-cover bg-center items-center justify-left px-4 py-8"
      style={{ backgroundImage: "url('/assets/bg/BackGround1.png')" }}
    >
      {/* Blurred foreground image layer */}
      <div className="absolute inset-0">
        <Image
          src="/assets/bg/overLayer/Rectangle 1.png"
          alt="Blur Layer"
          fill
          className="object-cover blur-md opacity-70"
        />
      </div>

      {/* Content Block */}
      <div className="relative text-white text-left max-w-[90%] md:max-w-2xl flex flex-col gap-6 ml-14">
        <div>
          <h1 className="text-5xl md:text-7xl font-serif">Shake, Stir, Strain</h1>
          <h1 className="text-5xl md:text-7xl font-serif">Like You Mean It</h1>
          <p className="text-xl mt-2">
            Curated essentials that multiply your cocktail game.
          </p>
        </div>
        <div className="flex gap-4">
          <button className="px-6 py-2 font-normal border border-white text-white bg-black/30 backdrop-blur-md hover:bg-white hover:text-black transition-colors duration-300 ">
  SHOP NOW
</button>

<button className="px-6 py-2 font-normal border border-white text-white bg-white/10 backdrop-blur-md hover:bg-white hover:text-black transition-colors duration-300">
  EXPLORE KITS
</button>

        </div>
      </div>
    </div>
  );
};

export default LandingPage;
