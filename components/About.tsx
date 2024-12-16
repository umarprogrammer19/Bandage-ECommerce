import Image from "next/image";
import Button from "./button";

const About = () => {
  return (
    <section className="container mx-auto">
      {/* For Medium Screens (md) */}
      <div className="hidden sm:flex justify-center md:justify-around px-6 md:px-0 lg:px-0">
        {/* Text Content for Medium Screens */}
        <div className="max-w-md mt-16 md:mt-24 md:ml-6 space-y-8">
          {/* Highlighted Text */}
          <p className="text-[0.875rem] font-semibold uppercase text-darkbackgroundColor">
            ABOUT COMPANY
          </p>
          {/* Title */}
          <h1 className="text-darkbackgroundColor text-3xl md:text-4xl font-semibold leading-tight">
            ABOUT US
          </h1>
          {/* Description */}
          <p className="text-[1rem] md:text-[0.875rem] text-secondtextColor max-w-[17rem]">
            We know how large objects will act, but things on a small scale.
          </p>
          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row md:space-x-2 space-y-4 md:space-y-0">
            {/*Get Quote Now */}
            <Button
              text="Get Quote Now "
              paddingY="11px"
              paddingL="28px"
              paddingR="28px"
              rounded="rounded-sm rounded-bl-sm"
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
            src={"/images/team/girl.png"}
            alt="Girl-image"
            width={571}
            height={668}
            className="w-[20rem] md:w-[25rem] relative z-10"
          />
        </div>
      </div>

      {/* another div */}
      <div className="hidden sm:flex justify-around items-center px-[2rem] md:px-[2rem] lg:px-[7rem] xl:px-[11rem]">
        <div className="space-y-4">
          <p className="text-[0.875rem] text-dangerColor">Problems trying</p>
          <h3 className="text-[1.3rem] text-textColor font-semibold max-w-[23rem]">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </h3>
        </div>
        <div>
          <p className="text-[0.875rem] text-secondtextColor max-w-[25rem] md:max-w-[21rem] lg:max-w-[25rem]  xl:max-w-[32rem]">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>
      </div>

      {/* reviews for md and large screens */}
      <div className="hidden sm:flex justify-around px-[0rem] md:px-[2rem] lg:px-[7rem] xl:px-[8rem] text-center mt-[4.5rem]">
        {/* review 1 */}
        <div>
          <h2 className="text-textColor text-[3rem] font-semibold">15K</h2>
          <p className="text-[0.875rem] text-secondtextColor font-semibold">
            Happy Customers
          </p>
        </div>
        {/* review 2 */}
        <div>
          <h2 className="text-textColor text-[3rem] font-semibold">150K</h2>
          <p className="text-[0.875rem] text-secondtextColor font-semibold">
            Monthly Visitors
          </p>
        </div>
        {/* review 3 */}
        <div>
          <h2 className="text-textColor text-[3rem] font-semibold">15</h2>
          <p className="text-[0.875rem] text-secondtextColor font-semibold">
            Countries Worldwide
          </p>
        </div>
        {/* review 4 */}
        <div>
          <h2 className="text-textColor text-[3rem] font-semibold">100+</h2>
          <p className="text-[0.875rem] text-secondtextColor font-semibold">
            Top Partners
          </p>
        </div>
      </div>
      {/* Video player for md and large screens */}
      <div className="hidden sm:flex justify-center mt-36 mr-4">
        <div className="relative">
          <Image
            src={"/images/bgimages/video.png"}
            alt="playButton"
            width={989}
            height={540}
            className="rounded-xl  md:w-[45rem] lg:w-[50rem] xl:w-[58rem] 2xl:w-[70rem]"
          />
          <Image
            src={"/images/bgimages/filter.png"}
            alt="playButton"
            width={989}
            height={540}
            className="absolute -top-4 rounded-xl  md:w-[45rem] lg:w-[50rem] xl:w-[58rem] 2xl:w-[70rem]"
          />
          <button
            className="w-20 h-20 rounded-full bg-primaryColor flex items-center justify-center shadow-md hover:scale-105 transition-transform absolute top-[9rem] md:top-[10.5rem] lg:top-[12rem] xl:top-[13rem] 2xl:top-[16rem] left-[17rem] md:left-[20rem] lg:left-[22rem] xl:left-[26rem] 2xl:left-[32rem]"
            aria-label="Play Video"
          >
            <Image
              src={"/images/icons/playButton.png"}
              alt="playButton"
              width={19}
              height={22}
              className="w-4 h-w-4"
            />
          </button>
        </div>
      </div>
      {/* For Small and Large Screens */}
      <div className="flex sm:hidden flex-col justify-center items-center px-4 text-center">
        {/* Text Content for All Screens */}
        <div className="mt-20 space-y-8 text-center">
          {/* Title */}
          <h1 className="text-darkbackgroundColor text-2xl font-semibold text-center">
            ABOUT US
          </h1>
          {/* Description */}
          <p className="text-[0.875rem] md:text-[1rem] text-secondtextColor mx-[4.5rem]">
            We know how large objects will act, but things on a small scale just
            do not act that way.
          </p>
          {/* Action Buttons */}
          <div className="flex flex-col justify-center space-y-4">
            {/* Get Quote Now */}
            <Button
              text="Get Quote Now"
              paddingY="11px"
              paddingL="28px"
              paddingR="28px"
              rounded="rounded-sm rounded-bl-sm"
            />
          </div>
        </div>

        {/* Image Section for All Screens */}
        <div className="relative mt-24 md:mt-0 flex justify-center">
          <Image
            src={"/images/team/blob.png"}
            alt="Blob"
            width={632}
            height={612}
            className="w-[15rem] absolute top-8 md:top-12 z-0"
          />
          <Image
            src={"/images/team/girl.png"}
            alt="Girl-image"
            width={571}
            height={668}
            className="w-[12rem] relative z-10"
          />
        </div>
      </div>
      {/* another div */}
      <div className="flex flex-col justify-center items-center sm:hidden space-y-16 mt-16">
        <div className="space-y-4 text-center">
          <p className="text-[0.875rem] text-dangerColor">Problems trying</p>
          <h3 className="text-[1.3rem] text-textColor font-semibold max-w-[15rem]">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </h3>
        </div>
        <div className="text-left mx-20">
          <p className="text-[0.875rem] text-secondtextColor">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>
      </div>
      {/* reviews for mobiles */}
      <div className="flex sm:hidden flex-col px-[0rem] justify-center items-center text-center space-y-20 mt-36">
        {/* review 1 */}
        <div>
          <h2 className="text-textColor text-[3rem] font-semibold">15K</h2>
          <p className="text-[0.875rem] text-secondtextColor font-semibold">
            Happy Customers
          </p>
        </div>
        {/* review 2 */}
        <div>
          <h2 className="text-textColor text-[3rem] font-semibold">150K</h2>
          <p className="text-[0.875rem] text-secondtextColor font-semibold">
            Monthly Visitors
          </p>
        </div>
        {/* review 3 */}
        <div>
          <h2 className="text-textColor text-[3rem] font-semibold">15</h2>
          <p className="text-[0.875rem] text-secondtextColor font-semibold">
            Countries Worldwide
          </p>
        </div>
        {/* review 4 */}
        <div>
          <h2 className="text-textColor text-[3rem] font-semibold">100+</h2>
          <p className="text-[0.875rem] text-secondtextColor font-semibold">
            Top Partners
          </p>
        </div>
      </div>
      {/* Video player for mobiles screens */}
      <div className="flex sm:hidden justify-center mt-40">
        <div className="relative">
          <Image
            src={"/images/bgimages/mobvideo.png"}
            alt="playButton"
            width={989}
            height={540}
            className="rounded-xl  w-[19rem]"
          />
          <Image
            src={"/images/bgimages/mobfilter.png"}
            alt="playButton"
            width={989}
            height={540}
            className="absolute -top-1 rounded-xl  w-[19rem]"
          />
          <button
            className="w-20 h-20 rounded-full bg-primaryColor flex items-center justify-center shadow-md hover:scale-105 transition-transform absolute top-[6.7rem] left-[7rem]"
            aria-label="Play Video"
          >
            <Image
              src={"/images/icons/playbutton.png"}
              alt="playButton"
              width={19}
              height={22}
              className="w-4 h-w-4"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
