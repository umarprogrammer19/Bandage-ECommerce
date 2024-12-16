import Image from "next/image";
import SupportSection from "./SupportSection";

const Contact = () => {
  return (
    <section className="container mx-auto">
      {/* Layout for Small Screens */}
      <div className="block sm:hidden px-4 text-center space-y-6 mt-10">
        {/* Highlighted Text */}
        <p className="text-[0.875rem] font-semibold uppercase text-darkbackgroundColor">
          CONTACT US
        </p>
        {/* Title */}
        <h1 className="text-darkbackgroundColor text-2xl font-semibold leading-tight mx-14 sm:mx-0">
          Get in touch today!
        </h1>
        {/* Description */}
        <p className="text-[1rem] text-secondtextColor mx-20 sm:mx-0">
          We know how large objects will act, but things on a small scale.
        </p>
        {/* Contact Information */}
        <div className="space-y-2">
          <p className="text-[1rem] text-textColor font-semibold">
            Phone: +451 215 215
          </p>
          <p className="text-[1rem] text-textColor font-semibold">
            Fax: +451 215 215
          </p>
        </div>
        {/* Social Icons */}
        <div className="flex justify-center gap-x-4">
          <Image
            src={"/images/icons/twitter-blk.png"}
            alt="Twitter-icon"
            width={23}
            height={23}
          />
          <Image
            src={"/images/icons/facebook-blk.png"}
            alt="Facebook-icon"
            width={23}
            height={23}
          />
          <Image
            src={"/images/icons/insta-blk.png"}
            alt="Instagram-icon"
            width={23}
            height={23}
          />
          <Image
            src={"/images/icons/linkedin-blk.png"}
            alt="Linkedin-icon"
            width={23}
            height={23}
          />
        </div>
        {/* Image Section */}
        <div className="relative flex justify-center">
          <Image
            src={"/images/team/blob.png"}
            alt="Blob"
            width={250}
            height={250}
            className="absolute top-0 z-0"
          />
          <Image
            src={"/images/team/technology 1.png"}
            alt="Girl-image"
            width={200}
            height={200}
            className="relative z-10"
          />
        </div>
      </div>

      {/* Layout for Medium and Larger Screens */}
      <div className="hidden sm:flex justify-center md:justify-around px-6 md:px-0 lg:px-20">
        {/* Text Content for Medium Screens */}
        <div className="max-w-md mt-16 md:mt-24 md:ml-6 space-y-8">
          <p className="text-[0.875rem] font-semibold uppercase text-darkbackgroundColor">
            CONTACT US
          </p>
          <h1 className="text-darkbackgroundColor text-3xl md:text-[3rem] font-semibold leading-tight">
            Get in touch today!
          </h1>
          <p className="text-[1rem] md:text-[0.9rem] text-secondtextColor max-w-[17rem]">
            We know how large objects will act, but things on a small scale.
          </p>
          <div className="space-y-3">
            <p className="text-[1rem] md:text-[1.2rem] text-textColor font-semibold">
              Phone: +451 215 215
            </p>
            <p className="text-[1rem] md:text-[1.2rem] text-textColor font-semibold">
              Fax: +451 215 215
            </p>
          </div>
          <div className="flex gap-x-5 pt-3">
            <Image
              src={"/images/icons/twitter-blk.png"}
              alt="Twitter-icon"
              width={23}
              height={23}
            />
            <Image
              src={"/images/icons/facebook-blk.png"}
              alt="Facebook-icon"
              width={23}
              height={23}
            />
            <Image
              src={"/images/icons/insta-blk.png"}
              alt="Instagram-icon"
              width={23}
              height={23}
            />
            <Image
              src={"/images/icons/linkedin-blk.png"}
              alt="Linkedin-icon"
              width={23}
              height={23}
            />
          </div>
        </div>
        {/* Image Section for Medium Screens */}
        <div className="relative mr-2">
          <Image
            src={"/images/team/blob.png"}
            alt="Blob"
            width={632}
            height={612}
            className="w-[20rem] md:w-[50rem] absolute top-12 z-0"
          />
          <Image
            src={"/images/team/technology 1.png"}
            alt="Girl-image"
            width={571}
            height={668}
            className="w-[20rem] md:w-[25rem] relative z-10"
          />
        </div>
      </div>
      {/* Visit Our Office */}
      <div className="px-4 flex flex-col justify-center items-center text-center space-y-2 mt-10">
        {/* Highlighted Text */}
        <p className="text-[0.875rem] font-semibold uppercase text-textColor">
          VISIT OUR OFFICE
        </p>
        {/* Title */}
        <h1 className="text-darkbackgroundColor text-[2.3rem] font-semibold leading-tight max-w-[31rem]">
          We help small businesses with big ideas
        </h1>
        <SupportSection />
      </div>
    </section>
  );
};

export default Contact;
