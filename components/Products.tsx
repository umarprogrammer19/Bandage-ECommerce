import Image from "next/image";
import Pagination from "./Pagination";

const Products = () => {
  // Define product data with individual colors
  const products = [
    {
      id: 1,
      name: "Graphic Design",
      department: "English Department",
      price: "$16.48",
      image: "/images/productsimages/product-six.png",
      colors: [
        { name: "Sky Blue", colorClass: "bg-primaryColor" },
        { name: "Green", colorClass: "bg-secondColorOne" },
        { name: "Orange", colorClass: "bg-alertColor" },
        { name: "Sky Blue", colorClass: "bg-textColor" },
      ],
    },
    {
      id: 2,
      name: "Graphic Design",
      department: "English Department",
      price: "$16.48",
      pricetwo: "$16.48",
      image: "/images/productsimages/product-seven.png",
      colors: [
        { name: "Sky Blue", colorClass: "bg-primaryColor" },
        { name: "Green", colorClass: "bg-secondColorOne" },
        { name: "Orange", colorClass: "bg-alertColor" },
        { name: "Sky Blue", colorClass: "bg-textColor" },
      ],
    },
    {
      id: 3,
      name: "Graphic Design",
      department: "English Department",
      price: "$16.48",
      pricetwo: "$16.48",
      image: "/images/productsimages/product-one.png",
      colors: [
        { name: "Sky Blue", colorClass: "bg-primaryColor" },
        { name: "Green", colorClass: "bg-secondColorOne" },
        { name: "Orange", colorClass: "bg-alertColor" },
        { name: "Sky Blue", colorClass: "bg-textColor" },
      ],
    },
    {
      id: 4,
      name: "Graphic Design",
      department: "English Department",
      price: "$16.48",
      pricetwo: "$16.48",
      image: "/images/productsimages/product.png",
      colors: [
        { name: "Sky Blue", colorClass: "bg-primaryColor" },
        { name: "Green", colorClass: "bg-secondColorOne" },
        { name: "Orange", colorClass: "bg-alertColor" },
        { name: "Sky Blue", colorClass: "bg-textColor" },
      ],
    },
    {
      id: 5,
      name: "Graphic Design",
      department: "English Department",
      price: "$16.48",
      pricetwo: "$16.48",
      image: "/images/productsimages/product-two.png",
      colors: [
        { name: "Sky Blue", colorClass: "bg-primaryColor" },
        { name: "Green", colorClass: "bg-secondColorOne" },
        { name: "Orange", colorClass: "bg-alertColor" },
        { name: "Sky Blue", colorClass: "bg-textColor" },
      ],
    },
    {
      id: 6,
      name: "Graphic Design",
      department: "English Department",
      price: "$16.48",
      pricetwo: "$16.48",
      image: "/images/productsimages/product-three.png",
      colors: [
        { name: "Sky Blue", colorClass: "bg-primaryColor" },
        { name: "Green", colorClass: "bg-secondColorOne" },
        { name: "Orange", colorClass: "bg-alertColor" },
        { name: "Sky Blue", colorClass: "bg-textColor" },
      ],
    },
    {
      id: 7,
      name: "Graphic Design",
      department: "English Department",
      price: "$16.48",
      pricetwo: "$16.48",
      image: "/images/productsimages/product-four.png",
      colors: [
        { name: "Sky Blue", colorClass: "bg-primaryColor" },
        { name: "Green", colorClass: "bg-secondColorOne" },
        { name: "Orange", colorClass: "bg-alertColor" },
        { name: "Sky Blue", colorClass: "bg-textColor" },
      ],
    },
    {
      id: 8,
      name: "Graphic Design",
      department: "English Department",
      price: "$16.48",
      pricetwo: "$16.48",
      image: "/images/productsimages/product-eight.png",
      colors: [
        { name: "Sky Blue", colorClass: "bg-primaryColor" },
        { name: "Green", colorClass: "bg-secondColorOne" },
        { name: "Orange", colorClass: "bg-alertColor" },
        { name: "Sky Blue", colorClass: "bg-textColor" },
      ],
    },
    {
      id: 9,
      name: "Graphic Design",
      department: "English Department",
      price: "$16.48",
      pricetwo: "$16.48",
      image: "/images/productsimages/product-nine.png",
      colors: [
        { name: "Sky Blue", colorClass: "bg-primaryColor" },
        { name: "Green", colorClass: "bg-secondColorOne" },
        { name: "Orange", colorClass: "bg-alertColor" },
        { name: "Sky Blue", colorClass: "bg-textColor" },
      ],
    },
    {
      id: 10,
      name: "Graphic Design",
      department: "English Department",
      price: "$16.48",
      pricetwo: "$16.48",
      image: "/images/productsimages/product-ten.png",
      colors: [
        { name: "Sky Blue", colorClass: "bg-primaryColor" },
        { name: "Green", colorClass: "bg-secondColorOne" },
        { name: "Orange", colorClass: "bg-alertColor" },
        { name: "Sky Blue", colorClass: "bg-textColor" },
      ],
    },
    {
      id: 11,
      name: "Graphic Design",
      department: "English Department",
      price: "$16.48",
      pricetwo: "$16.48",
      image: "/images/productsimages/product-eleven.png",
      colors: [
        { name: "Sky Blue", colorClass: "bg-primaryColor" },
        { name: "Green", colorClass: "bg-secondColorOne" },
        { name: "Orange", colorClass: "bg-alertColor" },
        { name: "Sky Blue", colorClass: "bg-textColor" },
      ],
    },
    {
      id: 12,
      name: "Graphic Design",
      department: "English Department",
      price: "$16.48",
      pricetwo: "$16.48",
      image: "/images/productsimages/product-twelve.png",
      colors: [
        { name: "Sky Blue", colorClass: "bg-primaryColor" },
        { name: "Green", colorClass: "bg-secondColorOne" },
        { name: "Orange", colorClass: "bg-alertColor" },
        { name: "Sky Blue", colorClass: "bg-textColor" },
      ],
    },
  ];

  return (
    <section className="w-full h-auto mt-8">
      <div className="container mx-auto px-4 md:px-[5rem] lg:px-[10rem]">
        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 gap-y-14 sm:gap-y-9">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col items-center space-y-4"
            >
              {/* Product Image */}
              <Image
                src={product.image}
                width={240}
                height={300}
                alt={product.name}
                className="w-80"
              />
              {/* Product Info */}
              <p className="text-[1rem] font-semibold text-textColor">
                {product.name}
              </p>
              <p className="text-secondtextColor font-semibold text-[0.875rem]">
                {product.department}
              </p>
              <div className="font-semibold text-[1rem] space-x-3">
                <span className="text-muttedColor">{product.price}</span>
                <span className="text-secondColorOne">{product.price}</span>
              </div>
              {/* Product Colors */}
              <div className="flex space-x-3 mt-2">
                {product.colors.map((color, index) => (
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
        <Pagination />
      </div>
    </section>
  );
};

export default Products;
