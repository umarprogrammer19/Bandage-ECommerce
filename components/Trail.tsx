import Image from "next/image";
import Button from "./button";

const Trail = () => {
  return (
    <section className="container mx-auto">
      <div className="mt-24 sm:mt-28">
        <div className="space-y-5 text-center">
          {/* Heading */}
          <h3 className="text-textColor font-semibold text-[2.3rem] flex sm:hidden justify-center">
            Start your <br /> 14 days free trial
          </h3>
          <h3 className="text-textColor font-semibold text-[2.3rem] justify-center hidden sm:flex">
            Start your 14 days free trial
          </h3>
          <p className="hidden sm:flex text-secondtextColor justify-center text-[0.875rem]">
            Met minim Mollie non desert Alamo est sit cliquey dolor <br /> do
            met sent. RELIT official consequent.
          </p>
          <p className="flex sm:hidden text-secondtextColor  text-[0.875rem] mx-[3.4rem] sm:mx-auto">
            We focus on ergonomics and meeting you where you work. It's only a
            keystroke away.
          </p>
          <Button
            text="Try it free now"
            paddingL="2.5rem"
            paddingR="2.5rem"
            paddingY="1rem"
            rounded="rounded-sm"
          />
          <div className="flex justify-center gap-x-4 pt-3">
            <Image
              src={"/images/icons/twitter-mob.png"}
              alt="Twitter-icon"
              width={23}
              height={23}
            />
            <Image
              src={"/images/icons/facebook-pricing.png"}
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
              src={"/images/icons/linkedin.png"}
              alt="Linkedin-icon"
              width={23}
              height={23}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trail;
