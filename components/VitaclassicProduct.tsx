import Image from "next/image";

const Vitaclassicproduct = () => {
  return (
    <section className="container mx-auto mt-20">
      {/* Vita classic section for iPad and Larger Screens */}
      <div className="relative bg-[url('/images/bgimages/sub-hero-bg.jpg')] bg-cover bg-top h-[39rem] hidden sm:flex items-center mt-4 px-6 md:px-12 lg:px-40">
        {/* Responsive Hero Image */}
        <Image
          src={"/images/productsimages/bg-product.png"}
          width={443}
          height={685}
          alt="person-png"
          className="absolute -right-2 sm: md:right-2 xl:right-52 top-[25.5rem] sm: md:top-[22.2rem] lg:top-[22.2rem] transform -translate-y-1/2 w-[20rem] md:w-[25rem] lg:w-[25rem] object-contain"
        />
        {/* Vita classic section Text */}
        <div className="text-white max-w-lg space-y-5">
          {/* Product Collection and Title */}
          <p className="text-[1rem] uppercase text-lighttextColor font-light">
            Summer 2020
          </p>
          <h1 className="text-[3.345rem] font-semibold leading-tight">
            Vita Classic Product
          </h1>
          {/* Product Description */}
          <p className="text-[0.840rem] text-lighttextGray1 max-w-[20rem]">
            We know how large objects will act, We know how are objects will
            act, We know
          </p>
          {/* Product Price and Add-to-Cart Button */}
          <div className="flex items-center gap-x-8">
            <p className="text-[1.3rem] font-bold">$16.48</p>
            <button className="px-9 py-[0.7650rem] text-[0.740rem] bg-sucessColor text-white font-semibold rounded-sm hover:bg-green-600 transition uppercase">
              add to cart
            </button>
          </div>
        </div>
      </div>

      {/* Vita classic section for Mobile */}
      <div className="relative bg-[url('/images/bgimages/mob-bg-hero-sub.jpg')] bg-cover bg-top h-[54rem] flex sm:hidden items-center px-4 mt-20">
        {/* Mobile Layout - Centered Content */}
        <div className="text-white max-w-lg mx-auto text-center space-y-6 -mt-[25.5rem]">
          {/* Hero Image */}
          <Image
            src={"/images/productsimages/bg-product.png"}
            width={443}
            height={685}
            alt="person-png"
            className="absolute right-[4.2rem] sm: md:right-2 xl:right-52 top-[40.6rem] sm: md:top-[22.2rem] lg:top-[22.2rem] transform -translate-y-1/2 w-[20rem] md:w-[25rem] lg:w-[25rem] object-contain"
          />
          {/* Product Collection and Title */}
          <p className="text-sm uppercase">Summer 2020</p>
          <h1 className="text-3xl uppercase font-semibold leading-tight max-w-[20rem] ml-[0rem] text-center">
            Vita Classic Product
          </h1>
          {/* Product Description */}
          <p className="text-sm text-lighttextGray1 max-w-[12.3rem] ml-[4.2rem]">
            We know how large objects will act, but things on a small scale.
          </p>
          {/* Product Price and Add-to-Cart Button */}
          <div className="flex flex-col items-center gap-y-5">
            <p className="text-[1.3rem] font-bold">$16.48</p>
            <button className="px-9 py-[0.7650rem] text-[0.740rem] bg-sucessColor text-white font-semibold rounded-sm hover:bg-green-600 transition uppercase">
              add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vitaclassicproduct;
