import React from "react";
import Link from "next/link";
import Image from "next/image";

interface FooterProps {
  topBgColor?: string;
  bottomBgColor?: string;
}

const Footer: React.FC<FooterProps> = ({
  topBgColor = "bg-textgrayOne",
  bottomBgColor = "bg-darkgray",
}) => {
  return (
    <footer className="mt-24">
      {/* Top Section: Logo and Social Media Icons */}
      <div className={`${topBgColor} h-[7.9rem] py-11`}>
        <div className="container mx-auto px-4 sm:px-36 flex flex-col sm:flex-row justify-between items-start sm:items-center">
          {/* Brand Section */}
          <div className="font-bold text-[1.4rem] mb-4 lg:mb-0 text-darkbackgroundColor">
            <Link href="/">Bandage</Link>
          </div>
          {/* Social Media Icons */}
          <div className="flex items-center space-x-4 mr-0 sm:mr-20">
            <Image
              src="/images/icons/facebookfooter-icon.png"
              alt="Facebook-footer"
              height={24}
              width={24}
              className="w-4 h-4"
            />
            <Image
              src="/images/icons/instagramfooter-icon.png"
              alt="Instagram-footer"
              height={24}
              width={24}
              className="w-4 h-4"
            />
            <Image
              src="/images/icons/twitterfooter-icon.png"
              alt="Twitter-footer"
              height={24}
              width={24}
              className="w-4 h-4"
            />
          </div>
        </div>
        <div className="w-[80vw] pt-11 pl-7 pr-14 mx-auto">
          <hr className="hidden sm:flex" />
        </div>
      </div>

      {/* Middle Section: Links and Subscribe Form */}
      <div className="py-12">
        <div className="container mx-auto px-6 lg:px-36">
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8 text-left">
            {/* Links */}
            <div>
              <h3 className="font-bold mb-4 text-textColor">Company Info</h3>
              <ul className="space-y-2 text-secondtextColor font-semibold font text-sm">
                <li>
                  <Link href="/">About Us</Link>
                </li>
                <li>
                  <Link href="/">Carrier</Link>
                </li>
                <li>
                  <Link href="/">We are hiring</Link>
                </li>
                <li>
                  <Link href="/">Blog</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-textColor">Legal</h3>
              <ul className="space-y-2 text-secondtextColor font-semibold font text-sm">
                <li>
                  <Link href="/">About Us</Link>
                </li>
                <li>
                  <Link href="/">Carrier</Link>
                </li>
                <li>
                  <Link href="/">We are hiring</Link>
                </li>
                <li>
                  <Link href="/">Blog</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-textColor">Features</h3>
              <ul className="space-y-2 text-secondtextColor font-semibold font text-sm">
                <li>
                  <Link href="/">Business Marketing</Link>
                </li>
                <li>
                  <Link href="/">User Analytic</Link>
                </li>
                <li>
                  <Link href="/">Live Chat</Link>
                </li>
                <li>
                  <Link href="/">Unlimited Support</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-textColor">Resources</h3>
              <ul className="space-y-2 text-secondtextColor font-semibold font text-sm">
                <li>
                  <Link href="/">iOS & Android</Link>
                </li>
                <li>
                  <Link href="/">Watch a Demo</Link>
                </li>
                <li>
                  <Link href="/">Customers</Link>
                </li>
                <li>
                  <Link href="/">API</Link>
                </li>
              </ul>
            </div>
            {/* Subscribe Form */}
            <div>
              <h3 className="font-bold mb-4 text-textColor">Get In Touch</h3>
              <form className="flex flex-col space-y-3">
                <div className="flex flex-row md:flex-col xl:flex-row">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="border border-outlineColor text-[0.875rem] pl-5 text-left rounded-md p-1 bg-lightbgColor"
                  />
                  <button className="bg-primaryColor text-white rounded-md px-2 py-4">
                    Subscribe
                  </button>
                </div>
                <p className="text-secondtextColor text-[0.75rem]">
                  Lore imp sum dolor Amit
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className={`${bottomBgColor} py-6`}>
        <div className="container mx-auto text-center sm:text-left">
          <p className="text-secondtextColor text-sm mx-[5.8rem] sm:mx-36">
            Made With Love By Finland All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
