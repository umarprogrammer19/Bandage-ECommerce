import BestSellerProducts from "@/components/BestSellerProducts";
import Footer from "@/components/Footer";
import MobileNavTwo from "@/components/MobileNavTwo";
import Nav from "@/components/Nav";
import Productcard from "@/components/ProductCard";
import ProductDescription from "@/components/ProductDescription";
import TopHeader from "@/components/TopHeader";

const Productpage = () => {
  return (
    <div>
      <TopHeader bgClass="bg-secondColorOne" />
      <Nav />
      <MobileNavTwo />
      <Productcard />
      <ProductDescription />
      <BestSellerProducts />

      <Footer topBgColor="bg-white" bottomBgColor="bg-textgrayOne" />
    </div>
  );
};

export default Productpage;
