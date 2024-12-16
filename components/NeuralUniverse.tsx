import Image from "next/image";

const Neuraluniverse = () => {
  return (
    <section className="container mx-auto">
      {/* For Medium Screens (md) */}
      <div className="hidden md:flex justify-center md:justify-around px-6 md:px-0 lg:px-32">
        {/* Image Section for Medium Screens */}
        <div>
          <Image
            src={"/images/productsimages/summer-2020.png"}
            alt="Summer-2020"
            width={725}
            height={774}
            className="w-[20rem] md:w-[25rem]"
          />
        </div>
        {/* Text Content for Medium Screens */}
        <div className="max-w-md mt-16 md:mt-24 md:ml-6 space-y-4">
          {/* Highlighted Text */}
          <p className="text-sm font-semibold uppercase text-muttedColor">
            Summer 2020
          </p>
          {/* Title */}
          <h1 className="text-darkbackgroundColor text-3xl md:text-4xl font-semibold leading-tight">
            Part of the Neural Universe
          </h1>
          {/* Description */}
          <p className="text-[1rem] md:text-[1.1rem] text-secondtextColor max-w-[20rem]">
            We know how large objects will act, but things on a small scale.
          </p>
          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row md:space-x-2 space-y-4 md:space-y-0">
            {/* Buy Now Button */}
            <button className="px-6 py-3 bg-sucessColor text-white font-semibold rounded-sm hover:bg-green-600 transition uppercase">
              Buy Now
            </button>
            {/* Read More Button */}
            <button className="px-6 py-3 border-2 border-sucessColor text-sucessColor hover:text-white font-semibold rounded-sm hover:bg-sucessColor transition uppercase">
              Read More
            </button>
          </div>
        </div>
      </div>

      {/* For Small and Large Screens */}
      <div className="sm:flex md:hidden flex flex-col justify-center items-center">
        {/* Content Section for Small Screens */}
        <div className="max-w-sm mt-16 space-y-4 text-center">
          {/* Highlighted Text */}
          <p className="text-sm font-semibold uppercase text-muttedColor">
            Summer 2020
          </p>
          {/* Title */}
          <h1 className="text-darkbackgroundColor text-3xl font-semibold leading-tight">
            Part of the Neural Universe
          </h1>
          {/* Description */}
          <p className="text-[1rem] text-secondtextColor max-w-[18rem] mx-auto">
            We know how large objects will act, but things on a small scale.
          </p>
          {/* Action Buttons */}
          <div className="flex flex-col items-center space-y-4">
            {/* Buy Now Button */}
            <button className="px-8 py-3 bg-primaryColor text-white font-semibold rounded-sm hover:bg-green-600 transition uppercase">
              Buy Now
            </button>
            {/* Learn More Button */}
            <button className="px-8 py-3 border-2 border-primaryColor text-primaryColor hover:text-white font-semibold rounded-sm hover:bg-primary transition uppercase">
              Learn More
            </button>
          </div>
        </div>
        {/* Image Section for Small Screens */}
        <div className="mt-8">
          <Image
            src={"/images/productsimages/summer-2020.png"}
            alt="Summer-2020"
            width={725}
            height={774}
            className="w-[18rem] sm:w-[22rem]"
          />
        </div>
      </div>
    </section>
  );
};

export default Neuraluniverse;
