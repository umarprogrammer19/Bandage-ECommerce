import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  return (
    <header className="w-full h-auto mt-2 ml-auto md:-ml-3 xl:-ml-10">
      <div className="container mx-auto hidden sm:flex justify-around items-center">
        {/* Logo */}
        <div className="font-bold text-[1rem] xl:text-[1.3rem] text-darkbackgroundColor">
          <Link href="/">Bandage</Link>
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex items-center text-[0.700rem] xl:text-[0.875rem] gap-x-3 font-semibold text-secondtextColor ml-2 xl:-ml-40">
            {[
              { label: "Home", href: "/" },
              { label: "Shop", href: "/shop", hasDropdown: true },
              { label: "About", href: "/about" },
              { label: "Blog", href: "/" },
              { label: "Contact", href: "/contact" },
              { label: "Pages", href: "/" },
            ].map((item, index) => (
              <li
                key={index}
                className={`${
                  item.hasDropdown
                    ? "flex gap-x-1 items-center text-textColor font-medium"
                    : ""
                }`}
              >
                <Link href={item.href}>{item.label}</Link>
                {item.hasDropdown && (
                  <Image
                    src="/images/icons/dropdown-icon.png"
                    alt="Dropdown-icon"
                    width={16}
                    height={16}
                    className="w-2 h-2"
                  />
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Icons and Login/Register */}
        <div className="flex items-center text-[0.700rem] xl:text-[0.875rem] gap-x-[0.3rem] -mr-2 md:-mr-14 xl:-mr-24">
          <div className="flex items-center gap-x-1 text-primaryColor font-bold">
            <Image
              src="/images/icons/user-icon.png"
              alt="User-icon"
              width={35}
              height={35}
              className="w-3 h-3"
            />
            <p>Login / Register</p>
          </div>
          <div className="flex">
            {[
              { src: "/images/icons/search-icon.png", alt: "Search-icon" },
              { src: "/images/icons/cart-icon.png", alt: "Cart-icon" },
              { src: "/images/icons/wishlist-icon.png", alt: "Wishlist-icon" },
            ].map((icon, index) => (
              <Image
                key={index}
                src={icon.src}
                alt={icon.alt}
                width={100}
                height={100}
                className="w-12 h-11"
              />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
