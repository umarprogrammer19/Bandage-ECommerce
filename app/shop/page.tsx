import Shop from "@/components/Shop";
import TopHeader from "@/components/TopHeader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileNavTwo from "@/components/MobileNavTwo";
import BrandLogo from "@/components/BrandLogo";
import Products from "@/components/Products";

const Shoppage = () => {
  return (
    <div>
      <TopHeader bgClass="bg-secondarycolorOne" />
      <MobileNavTwo />
      <Header />
      <Shop />

      {/* For large and medium screens: BrandLogo and Footer BEFORE Products */}
      <div className="hidden sm:block">
        <BrandLogo />
        <Footer topBgColor="bg-text-white" bottomBgColor="bg-textgrayOne" />
      </div>

      {/* Products */}
      <Products />

      {/* For small screens: BrandLogo and Footer AFTER Products */}
      <div className="block sm:hidden">
        <BrandLogo />
        <Footer topBgColor="bg-text-white" bottomBgColor="bg-textgrayOne" />
      </div>
    </div>
  );
};

export default Shoppage;
