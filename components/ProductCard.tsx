import Image from "next/image";
import Button from "./button";

const Productcard = () => {
  const colors = {
    colors: [
      // Array of color options with a name and CSS class
      { name: "Sky Blue", colorClass: "bg-primaryColor" },
      { name: "Green", colorClass: "bg-secondColorOne" },
      { name: "Orange", colorClass: "bg-alertColor" },
      { name: "Sky Blue", colorClass: "bg-textColor" },
    ],
  };

  return (
    <section>
      {/* Main product card container */}
      <div className="w-full bg-textgrayOne mt-3 h-[60rem] sm:h-[45rem] md:h-[36rem]">
        {/* Breadcrumb navigation for user orientation */}
        <div className="container mx-auto">
          <div className="flex justify-center sm:justify-normal items-center font-semibold text-sm space-x-3 ml-[0rem] md:ml-[1rem] lg:ml-[3.5rem] xl:ml-[5.5rem] 2xl:ml-[8.5rem] mb-2 pt-7 pb-6">
            <span className="text-darkbackgroundColor">Home</span>
            <span>
              <Image
                src={"/images/icons/shoprightarrow-icon.png"}
                width={8.62}
                height={16}
                alt="Rightarrow-icon"
              />
            </span>
            <span className="text-muttedColor">Shop</span>
          </div>
        </div>

        {/* Main product content */}
        <div className="container mx-auto flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-normal">
          {/* Product image section with navigation arrows */}
          <div className="ml-[0rem] md:ml-[1rem] lg:ml-[3.5rem] xl:ml-[5.5rem] 2xl:ml-[8.5rem] relative">
            <Image
              src={"/images/productsimages/single-product-1.jpg"}
              width={506}
              height={450}
              alt="Product-one"
              className="w-[22rem] sm:w-[35rem] md:w-[45rem] lg:w-[25rem]"
            />
            {/* Left navigation arrow */}
            <Image
              src={"/images/icons/left-card-arrow.png"}
              width={24}
              height={42.47}
              alt="Product-one"
              className="absolute top-36 sm:top-48 w-[1.5rem] sm:w-[1.1rem] left-[3rem] sm:left-[1.8rem]"
            />
            {/* Right navigation arrow */}
            <Image
              src={"/images/icons/right-card-arrow.png"}
              width={24}
              height={42.47}
              alt="Product-one"
              className="absolute top-36 sm:top-48 left-[19rem] sm:left-[21.5rem] w-[1.5rem] sm:w-[1.1rem]"
            />
            {/* Thumbnail image options */}
            <div className="flex items-center gap-x-5 mt-5">
              <Image
                src={"/images/productsimages/single-product-3.jpg"}
                width={100}
                height={75}
                alt="Watch-icon"
              />
              <Image
                src={"/images/productsimages/single-product-2.jpg"}
                width={100}
                height={75}
                alt="Watch-icon"
              />
            </div>
          </div>

          {/* Product details section */}
          <div className="space-y-2 sm:ml-[2rem] md:ml-[2rem] lg:ml-[2.9rem] xl:ml-[2.9rem] 2xl:ml-[2.9rem] flex flex-col sm:flex-col items-start sm:items-start justify-center mx-[2.5rem] sm:mx-auto mt-8 sm:mt-2">
            {/* Product title */}
            <h3 className="text-[1.2rem] text-textColor">Floating Phone</h3>

            {/* Product ratings */}
            <div className="flex gap-x-2">
              <Image
                src={"/images/icons/star-1.png"}
                width={22.01}
                height={22.01}
                alt="Product-one"
                className="w-[1.3rem]"
              />
              <Image
                src={"/images/icons/star-1.png"}
                width={22.01}
                height={22.01}
                alt="Product-one"
                className="w-[1.3rem]"
              />
              <Image
                src={"/images/icons/star-1.png"}
                width={22.01}
                height={22.01}
                alt="Product-one"
                className="w-[1.3rem]"
              />
              <Image
                src={"/images/icons/star-1.png"}
                width={22.01}
                height={22.01}
                alt="Product-one"
                className="w-[1.3rem]"
              />
              <Image
                src={"/images/icons/star-2.png"}
                width={22.01}
                height={22.01}
                alt="Product-one"
                className="w-[1.3rem]"
              />
              <p className="text-secondtextColor text-[0.800rem] font-semibold">
                10 Reviews
              </p>
            </div>

            {/* Product price and availability */}
            <div className="space-x-1">
              <h2 className="font-semibold text-[1.2rem]">$1,139.33</h2>
              <span className="text-secondtextColor text-[0.800rem] font-semibold">
                Availability :
              </span>
              <span className="text-primaryColor text-[0.800rem] font-semibold">
                In Stock{" "}
              </span>
            </div>

            {/* Product description */}
            <div className="space-y-5">
              <p className="text-thirdtextColor text-[0.800rem] max-w-[27rem] pt-2">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
              <hr />
              {/* Product color options */}
              <div className="flex space-x-2 mt-2">
                {colors.colors.map((color, index) => (
                  <div
                    key={index}
                    title={color.name}
                    className={`${color.colorClass} w-[1.6rem] h-[1.6rem] rounded-full cursor-pointer border-2 border-transparent hover:border-gray-400 transition`}
                  ></div>
                ))}
              </div>

              {/* Product action buttons */}
              <div className="flex items-center">
                <div className="flex items-center mt-7 space-x-2">
                  <Button
                    text="Select Options"
                    paddingY="10px"
                    paddingL="20px"
                    paddingR="20px"
                    rounded="rounded-sm"
                  />
                  {/* Wishlist button */}
                  <div className="border border-borderColor rounded-full py-2 px-2 w-[2rem]">
                    <Image
                      src={"/images/icons/wish-icon.png"}
                      width={20}
                      height={20}
                      alt="Wish-icon"
                      className="w-[1.3rem]"
                    />
                  </div>
                  {/* Add to cart button */}
                  <div className="border border-borderColor rounded-full py-2 px-2 w-[2rem]">
                    <Image
                      src={"/images/icons/cart-two-icon.png"}
                      width={20}
                      height={20}
                      alt="cart-two-icon"
                      className="w-[1.3rem]"
                    />
                  </div>
                  {/* Watchlist button */}
                  <div className="border border-borderColor rounded-full py-2 px-2 w-[2rem]">
                    <Image
                      src={"/images/icons/watch-icon.png"}
                      width={20}
                      height={20}
                      alt="Watch-icon"
                      className="w-[1.3rem]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Productcard;
