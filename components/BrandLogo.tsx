import Image from "next/image";
import React from "react";

const BrandLogo = () => {
  return (
    // Main section for the brand logos
    <section className="bg-lightbgColor h-[40rem] sm:h-[8rem] mt-12 sm:mt-3 -mb-20">
      {/* Container to center and constrain the content */}
      <div className="container mx-auto">
        {/* Flex container for logos with responsive spacing and alignment */}
        <div className="flex flex-col sm:flex-row gap-x-[2rem] md:gap-x-[2rem] lg:gap-x-[4.5rem] xl:gap-x-[5.5rem] 2xl:gap-x-[7.5rem] items-center justify-center pt-10 sm:pt- space-y-10 sm:space-y-0">
          {/* Individual brand logo 1 */}
          <Image
            src={"/images/brandlogos/brand-logo-one.png"}
            alt="hooli-logo"
            width={75.5}
            height={71.86}
          />
          {/* Individual brand logo 2 */}
          <Image
            src={"/images/brandlogos/brand-logo-two.png"}
            alt="hooli-logo"
            width={83}
            height={59}
          />
          {/* Individual brand logo 3 */}
          <Image
            src={"/images/brandlogos/brand-logo-three.png"}
            alt="hooli-logo"
            width={102}
            height={74.84}
          />
          {/* Individual brand logo 4 */}
          <Image
            src={"/images/brandlogos/brand-logo-four.png"}
            alt="hooli-logo"
            width={103.68}
            height={61.75}
          />
          {/* Individual brand logo 5 */}
          <Image
            src={"/images/brandlogos/brand-logo-five.png"}
            alt="hooli-logo"
            width={103.68}
            height={61.75}
          />
          {/* Individual brand logo 6 */}
          <Image
            src={"/images/brandlogos/brand-logo-six.png"}
            alt="hooli-logo"
            width={75.75}
            height={71.86}
          />
        </div>
      </div>
    </section>
  );
};

export default BrandLogo;
