import Image from "next/image";
import BrandLogo from "@/components/BrandLogo";

const BestSellerProducts = () => {
  // Define product data with individual colors
  const products = [
    {
      id: 1,
      name: "Graphic Design",
      department: "English Department",
      price: "$16.48",
      pricetwo: "$6.48",
      image: "/images/productsimages/bestseller-product-1.png",
    },
    {
      id: 2,
      name: "Graphic Design",
      department: "English Department",
      price: "$16.48",
      pricetwo: "$6.48",
      image: "/images/productsimages/bestseller-product-2.png",
    },
    {
      id: 3,
      name: "Graphic Design",
      department: "English Department",
      price: "$16.48",
      pricetwo: "$6.48",
      image: "/images/productsimages/bestseller-product-3.png",
    },
    {
      id: 4,
      name: "Graphic Design",
      department: "English Department",
      price: "$16.48",
      pricetwo: "$6.48",
      image: "/images/productsimages/bestseller-product-4.png",
    },
    {
      id: 5,
      name: "Graphic Design",
      department: "English Department",
      price: "$16.48",
      pricetwo: "$6.48",
      image: "/images/productsimages/bestseller-product-5.png",
    },
    {
      id: 6,
      name: "Graphic Design",
      department: "English Department",
      price: "$16.48",
      pricetwo: "$6.48",
      image: "/images/productsimages/bestseller-product-6.png",
    },
    {
      id: 7,
      name: "Graphic Design",
      department: "English Department",
      price: "$16.48",
      pricetwo: "$6.48",
      image: "/images/productsimages/bestseller-product-7.png",
    },
    {
      id: 8,
      name: "Graphic Design",
      department: "English Department",
      price: "$16.48",
      pricetwo: "$6.48",
      image: "/images/productsimages/bestseller-product-8.png",
    },
  ];

  return (
    <section className="w-full bg-textgrayOne h-auto mt-8">
      <div className="container mx-auto px-4 w-full md:px-[5rem] lg:px-[10rem]">
        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 gap-y-14 sm:gap-y-9">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col items-start space-y-6 pb-7 space-x-4 bg-white"
            >
              {/* Product Image */}
              <Image
                src={product.image}
                width={239}
                height={280}
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
                <span className="text-secondColorOne">{product.pricetwo}</span>
              </div>
            </div>
          ))}
        </div>
        <BrandLogo />
      </div>
    </section>
  );
};

export default BestSellerProducts;
