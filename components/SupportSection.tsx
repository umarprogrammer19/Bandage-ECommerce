import Image from "next/image";
import Button from "./button";

const SupportSection = () => {
  return (
    <section>
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 my-12 px-4 bg-textgrayOne sm:bg-white">
        {/* Card 1 */}
        <div className="flex flex-col items-center text-center space-y-4 p-6 bg-white">
          {/* Icon */}
          <Image
            src="/images/icons/call-icon-office.png"
            alt="Phone Icon"
            width={60}
            height={60}
          />
          {/* Email */}
          <div className="text-textColor">
            <p className="text-[0.875rem] font-semibold">
              georgia.young@example.com
            </p>
            <p className="text-[0.875rem] font-semibold">
              georgia.young@ple.com
            </p>
          </div>
          {/* Heading */}
          <h3 className="font-bold text-[1rem]">Get Support</h3>
          {/* Button */}
          <Button
            text="Submit Request"
            paddingL="2.2rem"
            paddingR="2.2rem"
            paddingY="1rem"
            rounded="rounded-full"
            backgroundColor="bg-white"
            textColor="text-primaryColor"
            borderColor="border-primaryColor" // Apply border color
            outline={true} // Ensure border is visible
          />
        </div>

        {/* Card 2 */}
        <div className="bg-darkbackgroundColor flex flex-col items-center text-center space-y-4 py-[4.2rem] px-10 w-full md:w-auto">
          {/* Icon */}
          <Image
            src="/images/icons/location-icon-office.png"
            alt="Location Icon"
            width={65}
            height={65}
          />
          {/* Email */}
          <div className="text-white">
            <p className="text-[0.875rem] font-semibold">
              georgia.young@example.com
            </p>
            <p className="text-[0.875rem] font-semibold">
              georgia.young@ple.com
            </p>
          </div>
          {/* Heading */}
          <h3 className="font-bold text-[1rem] text-white">Get Support</h3>
          {/* Button */}
          <Button
            text="Submit Request"
            paddingL="2.2rem"
            paddingR="2.2rem"
            paddingY="1rem"
            rounded="rounded-full"
            backgroundColor="bg-transparent"
            textColor="text-primaryColor"
            borderColor="border-primaryColor" // Apply border color
            outline={true} // Ensure border is visible
          />
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center text-center space-y-4 p-6 bg-white">
          {/* Icon */}
          <Image
            src="/images/icons/mail-icon-office.png"
            alt="Mail Icon"
            width={60}
            height={60}
          />
          {/* Email */}
          <div className="text-textColor">
            <p className="text-[0.875rem] font-semibold">
              georgia.young@example.com
            </p>
            <p className="text-[0.875rem] font-semibold">
              georgia.young@ple.com
            </p>
          </div>
          {/* Heading */}
          <h3 className="font-bold text-[1rem]">Get Support</h3>
          {/* Button */}
          <Button
            text="Submit Request"
            paddingL="2.2rem"
            paddingR="2.2rem"
            paddingY="1rem"
            rounded="rounded-full"
            backgroundColor="bg-white"
            textColor="text-primaryColor"
            borderColor="border-primaryColor" // Apply border color
            outline={true} // Ensure border is visible
          />
        </div>
      </div>
      <div className="flex justify-center flex-col items-center gap-y-2">
        <div className="w-12 h-12 mb-2">
          <Image
            src="/images/icons/Arrow-2.png"
            alt="Mail Icon"
            width={72.56}
            height={21.84}
          />
        </div>

        {/* Text */}
        <p className="text-[0.8rem] font-semibold text-textColor uppercase tracking-wider text-center">
          WE CAN'T WAIT TO MEET YOU
        </p>

        {/* Title */}
        <h1 className="text-[3rem] font-bold text-center text-gray-900">
          Let’s Talk
        </h1>

        {/* Button */}
        <Button
          text="Try for free now"
          paddingL="1.9rem"
          paddingR="1.9rem"
          paddingY="0.9rem"
          rounded="rounded-sm"
        />
      </div>
    </section>
  );
};

export default SupportSection;
