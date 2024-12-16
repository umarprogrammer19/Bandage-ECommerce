import Link from "next/link";
import Image from "next/image";

const MobileNavOne = () => {
  return (
    <header className="w-full h-auto -mt-3 pt-6 bg-textgrayOne sm:bg-white">
      <div className="container mx-auto sm:hidden justify-around items-center">
        <div className="flex items-center space-x-44 justify-center">
          {/* Logo */}
          <div className="font-bold text-[1rem] xl:text-[1.5rem]">
            <Link href="/">Bandage</Link>
          </div>
          {/* Image */}
          <div className="flex space-x-5">
            <Image
              src={"/images/icons/mob-search-icon.png"}
              alt="Mobile-icon"
              width={20}
              height={20}
            />
            <Image
              src={"/images/icons/mob-cart-icon.png"}
              alt="Menu-icon"
              width={20}
              height={20}
            />
            <Image
              src={"/images/icons/menu-icon.png"}
              alt="Menu-icon"
              width={20}
              height={20}
            />
          </div>
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex items-center flex-col text-[1.400rem] mt-14 gap-y-5 font-medium text-secondtextColor">
            {[
              { label: "Home", href: "/" },
              { label: "Product", href: "/product", hasDropdown: false },
              { label: "Pricing", href: "/pricing" },
              { label: "Team", href: "/team" },
              { label: "Contact", href: "/contact" },
            ].map((item, index) => (
              <li
                key={index}
                className={`${
                  item.hasDropdown
                    ? "flex gap-x-1 items-center text-textColor font-medium"
                    : ""
                } ${item.label === "Home" ? "text-textColor" : ""}`}
              >
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default MobileNavOne;
