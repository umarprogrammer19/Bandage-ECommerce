import Image from "next/image";

const FeaturedProducts = () => {
  // Define product data with individual colors
  const products = [
    {
      // Each product has unique attributes: id, name, department, price, image, and colors
      id: 1,
      name: "Graphic Design",
      department: "English Department",
      price: "$16.48",
      image: "/images/productsimages/product-1.png",
      colors: [
        // Array of color options with a name and CSS class
        { name: "Sky Blue", colorClass: "bg-primaryColor" },
        { name: "Green", colorClass: "bg-secondColorOne" },
        { name: "Orange", colorClass: "bg-alertColor" },
        { name: "Sky Blue", colorClass: "bg-textColor" },
      ],
    },
    {
      // Each product has unique attributes: id, name, department, price, image, and colors
      id: 2,
      name: "Graphic Design",
      department: "English Department",
      price: "$16.48",
      image: "/images/productsimages/product-2.png",
      colors: [
        // Array of color options with a name and CSS class
        { name: "Sky Blue", colorClass: "bg-primaryColor" },
        { name: "Green", colorClass: "bg-secondColorOne" },
        { name: "Orange", colorClass: "bg-alertColor" },
        { name: "Sky Blue", colorClass: "bg-textColor" },
      ],
    },
    {
      // Each product has unique attributes: id, name, department, price, image, and colors
      id: 3,
      name: "Graphic Design",
      department: "English Department",
      price: "$16.48",
      image: "/images/productsimages/product-3.png",
      colors: [
        // Array of color options with a name and CSS class
        { name: "Sky Blue", colorClass: "bg-primaryColor" },
        { name: "Green", colorClass: "bg-secondColorOne" },
        { name: "Orange", colorClass: "bg-alertColor" },
        { name: "Sky Blue", colorClass: "bg-textColor" },
      ],
    },
    {
      // Each product has unique attributes: id, name, department, price, image, and colors
      id: 4,
      name: "Graphic Design",
      department: "English Department",
      price: "$16.48",
      image: "/images/productsimages/product-4.png",
      colors: [
        // Array of color options with a name and CSS class
        { name: "Sky Blue", colorClass: "bg-primaryColor" },
        { name: "Green", colorClass: "bg-secondColorOne" },
        { name: "Orange", colorClass: "bg-alertColor" },
        { name: "Sky Blue", colorClass: "bg-textColor" },
      ],
    },
    {
      // Each product has unique attributes: id, name, department, price, image, and colors
      id: 5,
      name: "Graphic Design",
      department: "English Department",
      price: "$16.48",
      image: "/images/productsimages/product-5.png",
      colors: [
        // Array of color options with a name and CSS class
        { name: "Sky Blue", colorClass: "bg-primaryColor" },
        { name: "Green", colorClass: "bg-secondColorOne" },
        { name: "Orange", colorClass: "bg-alertColor" },
        { name: "Sky Blue", colorClass: "bg-textColor" },
      ],
    },
    {
      // Each product has unique attributes: id, name, department, price, image, and colors
      id: 6,
      name: "Graphic Design",
      department: "English Department",
      price: "$16.48",
      image: "/images/productsimages/product-6.png",
      colors: [
        // Array of color options with a name and CSS class
        { name: "Sky Blue", colorClass: "bg-primaryColor" },
        { name: "Green", colorClass: "bg-secondColorOne" },
        { name: "Orange", colorClass: "bg-alertColor" },
        { name: "Sky Blue", colorClass: "bg-textColor" },
      ],
    },
    {
      // Each product has unique attributes: id, name, department, price, image, and colors
      id: 7,
      name: "Graphic Design",
      department: "English Department",
      price: "$16.48",
      image: "/images/productsimages/product-7.png",
      colors: [
        // Array of color options with a name and CSS class
        { name: "Sky Blue", colorClass: "bg-primaryColor" },
        { name: "Green", colorClass: "bg-secondColorOne" },
        { name: "Orange", colorClass: "bg-alertColor" },
        { name: "Sky Blue", colorClass: "bg-textColor" },
      ],
    },
    {
      // Each product has unique attributes: id, name, department, price, image, and colors
      id: 8,
      name: "Graphic Design",
      department: "English Department",
      price: "$16.48",
      image: "/images/productsimages/product-8.png",
      colors: [
        // Array of color options with a name and CSS class
        { name: "Sky Blue", colorClass: "bg-primaryColor" },
        { name: "Green", colorClass: "bg-secondColorOne" },
        { name: "Orange", colorClass: "bg-alertColor" },
        { name: "Sky Blue", colorClass: "bg-textColor" },
      ],
    },
    // Additional product objects follow the same structure
  ];

  return (
    <section className="w-full h-auto">
      {/* Main container for the component */}
      <div className="container mx-auto px-4 md:px-[5rem] lg:px-[10rem]">
        {/* Header section */}
        <div className="flex flex-col items-center justify-center space-y-[0.3rem] mb-8 mx-20 text-center">
          <p className="text-secondtextColor font-normal text-[0.950rem]">
            Featured Products
          </p>
          <h2 className="font-bold text-textColor text-[1.1rem]">
            BESTSELLER PRODUCTS
          </h2>
          <p className="text-secondtextColor text-[0.950rem] font-normal">
            Problems trying to resolve the conflict between{" "}
          </p>
        </div>
        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 gap-y-14 sm:gap-y-9">
          {products.map((product) => (
            // Each product card
            <div
              key={product.id}
              className="flex flex-col items-center space-y-4"
            >
              {/* Product Image */}
              <Image
                src={product.image}
                width={239}
                height={437}
                alt={product.name}
                className="w-80"
              />
              {/* Product Name */}
              <p className="text-[1rem] font-semibold text-textColor">
                {product.name}
              </p>
              {/* Department Name */}
              <p className="text-secondtextColor font-semibold text-[0.875rem]">
                {product.department}
              </p>
              {/* Pricing Section */}
              <div className="font-semibold text-[1rem] space-x-3">
                <span className="text-muttedColor">{product.price}</span>
                <span className="text-secondColorOne">{product.price}</span>
              </div>
              {/* Product Colors */}
              <div className="flex space-x-3 mt-2">
                {product.colors.map((color, index) => (
                  // Color indicator circles
                  <div
                    key={index}
                    title={color.name}
                    className={`${color.colorClass} w-5 h-5 rounded-full cursor-pointer border-2 border-transparent hover:border-gray-400 transition`}
                  ></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
