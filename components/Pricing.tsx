"use client";
import Image from "next/image";
import { useState } from "react";
import PricingCards from "./PricingCards";
import BrandLogo from "./BrandLogo";
import Button from "./button";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="w-full container mx-auto ">
      <div className="flex flex-col justify-center items-center mt-8">
        {/* Title Section */}
        <div className="space-y-2 text-center">
          {/* Subtitle */}
          <p className="text-secondtextColor font-semibold  text-[0.875rem] mx-16 sm:mx-auto">
            PRICING
          </p>
          {/* Heading */}
          <h3 className="text-textColor font-semibold text-[3rem] sm:text-[3.2rem]">
            Simple Pricing
          </h3>
          {/* Breadcrumb navigation */}
          <div className="flex items-center justify-center text-[0.875rem] space-x-3">
            <span className="text-darkbackgroundColor font-semibold">Home</span>
            <span>
              <Image
                src={"/images/icons/shoprightarrow-icon.png"}
                width={8.62}
                height={16}
                alt="Rightarrow-icon"
              />
            </span>
            <span className="text-muttedColor font-semibold">Pricing</span>
          </div>
        </div>
      </div>
      {/* Pricing Section */}
      <div className="bg-textgrayOne mt-11 pt-16 pb-40">
        <div className="space-y-2 text-center">
          {/* Heading */}
          <h3 className="text-textColor font-semibold text-[2.3rem]">
            Pricing
          </h3>
          <p className="text-secondtextColor  text-[0.875rem] mx-16 sm:mx-auto">
            Problems trying to resolve the conflict between <br />
            the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className="flex items-center justify-center gap-2 my-10">
          {/* Monthly Text */}
          <span
            className={`text-[1rem] font-semibold ${
              !isYearly ? "text-textColor" : "text-textColor"
            }`}
          >
            Monthly
          </span>

          {/* Toggle Switch */}
          <div
            onClick={() => setIsYearly(!isYearly)}
            className={`w-[3.3rem] h-7 flex items-center rounded-full p-1 cursor-pointer transition-all duration-300 border-[0.1rem] border-primaryColor ${
              isYearly ? "bg-primaryColor" : "bg-white"
            }`}
          >
            <div
              className={`h-5 w-5 rounded-full border-[0.1rem] border-roundedOutline bg-roundedBg shadow-md transform duration-300 ${
                isYearly ? "translate-x-6" : "translate-x-0"
              }`}
            ></div>
          </div>

          {/* Yearly Text */}
          <span
            className={`text-[1rem] font-semibold ${
              isYearly ? "text-textColor" : "text-textColor"
            }`}
          >
            Yearly
          </span>

          {/* Save 25% Badge */}
          {isYearly && (
            <span className="bg-fadedPrimaryColor text-primaryColor text-[0.875rem] font-semibold px-[1rem] py-[0.7rem] rounded-full">
              Save 25%
            </span>
          )}
        </div>
        <div>
          <PricingCards />
        </div>
        <div className="text-textColor text-center text-[1rem] mt-32">
          <p className="mx-24 sm:mx-auto pb-4">
            Trusted By Over 4000 Big Companies
          </p>
          <div className="-mt-9">
            <BrandLogo />
          </div>
        </div>
      </div>
      {/* Pricing FAQS */}
      <div className="mt-20">
        <div className="space-y-2 text-center">
          {/* Heading */}
          <h3 className="text-textColor font-semibold text-[2.3rem]">
            Pricing FAQs
          </h3>
          <p className="hidden sm:flex text-secondtextColor justify-center text-[0.875rem]">
            Problems trying to resolve the conflict between <br />
            the two major realms of Classical physics
          </p>
          <p className="flex sm:hidden text-secondtextColor  text-[0.875rem] mx-[3.4rem] sm:mx-auto">
            We focus on ergonomics and meeting you where you work. It's only a
            keystroke away.
          </p>
        </div>
        {/* Quick Fox Jumps Section */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-2 place-content-center place-items-center px-6 md:px-20 lg:px-40 mt-16">
          {/* First Jump Section */}
          <div>
            <div className="flex space-x-3">
              <Image
                src={"/images/icons/rightarrow-icon.png"}
                width={9}
                height={16}
                alt="Rightarrow-icon"
                className="w-[0.7rem] h-[0.7rem] hidden sm:block"
              />
              <h4 className="flex sm:hidden text-[1rem] font-semibold text-textColor">
                Work better together
              </h4>
              <h4 className="hidden sm:flex text-[1rem] font-semibold text-textColor">
                the quick fox jumps over the lazy dog
              </h4>
            </div>
            <p className="text-secondtextColor text-[0.875rem] max-w-[20rem] sm:max-w-[25rem] md:max-w-[25rem] pl-3 sm:pl-5 pb-16 pt-9 sm:pt-1">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
          </div>

          {/* Second Jump Section */}
          <div>
            <div className="flex space-x-3">
              <Image
                src={"/images/icons/rightarrow-icon.png"}
                width={9}
                height={16}
                alt="Rightarrow-icon"
                className="w-[0.7rem] h-[0.7rem] hidden sm:block"
              />
              <h4 className="flex sm:hidden text-[1rem] font-semibold text-textColor">
                OpenType features and Variable fonts
              </h4>
              <h4 className="hidden sm:flex text-[1rem] font-semibold text-textColor">
                the quick fox jumps over the lazy dog
              </h4>
            </div>
            <p className="text-secondtextColor text-[0.875rem] max-w-[20rem] sm:max-w-[25rem] md:max-w-[28rem] pl-3 sm:pl-5 pb-16 pt-9 sm:pt-1 ">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
          </div>

          {/* Third Jump Section */}
          <div className="ml-3 sm:ml-0">
            <div className="flex space-x-3">
              <Image
                src={"/images/icons/rightarrow-icon.png"}
                width={9}
                height={16}
                alt="Rightarrow-icon"
                className="w-[0.7rem] h-[0.7rem] hidden sm:block"
              />
              <h4 className="flex sm:hidden text-[1rem] font-semibold text-textColor">
                Start working faster today
              </h4>
              <h4 className="hidden sm:flex text-[1rem] font-semibold text-textColor">
                the quick fox jumps over the lazy dog
              </h4>
            </div>
            <p className="text-secondtextColor text-[0.875rem] max-w-[20rem] sm:max-w-[25rem] md:max-w-[25rem] pl-3 sm:pl-5 pb-16 pt-9 sm:pt-1 ">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
          </div>

          {/* Fourth Jump Section */}
          <div className="ml-3 sm:ml-0">
            <div className="flex space-x-3">
              <Image
                src={"/images/icons/rightarrow-icon.png"}
                width={9}
                height={16}
                alt="Rightarrow-icon"
                className="w-[0.7rem] h-[0.7rem] hidden sm:block"
              />
              <h4 className="flex sm:hidden text-[1rem] font-semibold text-textColor">
                Work at the speed of thought.
              </h4>
              <h4 className="hidden sm:flex text-[1rem] font-semibold text-textColor">
                the quick fox jumps over the lazy dog
              </h4>
            </div>
            <p className="text-secondtextColor text-[0.875rem] max-w-[20rem] sm:max-w-[25rem] md:max-w-[28rem] pl-3 sm:pl-5 pb-16 pt-9 sm:pt-1 ">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
          </div>

          {/* Fifth Jump Section */}
          <div className="ml-3 sm:ml-0">
            <div className="flex space-x-3">
              <Image
                src={"/images/icons/rightarrow-icon.png"}
                width={9}
                height={16}
                alt="Rightarrow-icon"
                className="w-[0.7rem] h-[0.7rem] hidden sm:block"
              />
              <h4 className="flex sm:hidden text-[1rem] font-semibold text-textColor">
                The Fastest way to organize
              </h4>
              <h4 className="hidden sm:flex text-[1rem] font-semibold text-textColor">
                the quick fox jumps over the lazy dog
              </h4>
            </div>
            <p className="text-secondtextColor text-[0.875rem] max-w-[20rem] sm:max-w-[25rem] md:max-w-[25rem] pl-3 sm:pl-5 pb-16 pt-9 sm:pt-1 ">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
          </div>

          {/* Sixth Jump Section */}
          <div className="ml-3 sm:ml-0">
            <div className="flex space-x-3">
              <Image
                src={"/images/icons/rightarrow-icon.png"}
                width={9}
                height={16}
                alt="Rightarrow-icon"
                className="w-[0.7rem] h-[0.7rem] hidden sm:block"
              />
              <h4 className="flex sm:hidden text-[1rem] font-semibold text-textColor">
                The Fastest way to navigate
              </h4>
              <h4 className="hidden sm:flex text-[1rem] font-semibold text-textColor">
                the quick fox jumps over the lazy dog
              </h4>
            </div>
            <p className="text-secondtextColor text-[0.875rem] max-w-[20rem] sm:max-w-[25rem] md:max-w-[28rem] pl-3 sm:pl-5 pb-16 pt-9 sm:pt-1 ">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
          </div>
        </div>
        <p className="text-center text-[1rem] text-secondtextColor mx-14">
          Haven’t got your answer? Contact our support
        </p>
      </div>
    </section>
  );
};

export default Pricing;
