import React from "react";

const Hero = () => {
  return (
    <section className="container mx-auto">
      {/* Hero Section for Desktop View */}
      <div className="relative bg-[url('/images/bgimages/hero-bg.jpg')] bg-cover bg-top h-[39rem] hidden sm:flex items-center -mt-4 px-6 md:px-12 lg:px-40">
        {/* Content container for desktop */}
        <div className="text-white max-w-lg md:max-w-2xl mt-24 space-y-6">
          {/* Promotional Text */}
          <p className="text-lg font-semibold uppercase">Summer 2020</p>
          {/* Main Heading */}
          <h1 className="text-6xl uppercase font-semibold leading-tight">
            New Collection
          </h1>
          {/* Supporting Description */}
          <p className="text-lg font-bold max-w-lg text-lighttextGray1">
            We know how large objects will act, <br /> but things on a small scale.
          </p>
          {/* Call-to-Action Button */}
          <button className="mt-6 px-10 py-4 bg-sucessColor text-white font-semibold rounded-sm hover:bg-green-600 transition">
            Shop Now
          </button>
        </div>
      </div>

      {/* Hero Section for Mobile View */}
      <div className="relative bg-[url('/images/bgimages/mob-hero-bg.jpg')] bg-cover bg-top h-[39rem] flex sm:hidden items-center mt-20 px-0">
        {/* Content container for mobile */}
        <div className="text-white max-w-lg mt-32 space-y-6 text-center">
          {/* Promotional Text */}
          <p className="text-sm font-semibold uppercase">Summer 2020</p>
          {/* Main Heading */}
          <h1 className="text-3xl max-w-sm uppercase font-semibold leading-tight">
            New Collection
          </h1>
          {/* Supporting Description */}
          <p className="text-sm max-w-xs text-lighttextGray1">
            We know how large objects will act, but things on a small scale.
          </p>
          {/* Call-to-Action Button */}
          <button className="mt-6 px-8 py-3 bg-sucessColor text-white font-semibold rounded-sm hover:bg-green-600 transition">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
