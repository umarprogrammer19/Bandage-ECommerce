import TopHeader from "@/components/TopHeader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileNavTwo from "@/components/MobileNavTwo";
import Hero from "@/components/Hero";
import EditorsPick from "@/components/EditorsPick";
import FeaturedProducts from "@/components/FeaturedProducts";
import Vitaclassicproduct from "@/components/VitaclassicProduct";
import Neuraluniverse from "@/components/NeuralUniverse";
import FeaturedPosts from "@/components/FeaturedPosts";
const Homepage = () => {
  return (
    <section>
      <TopHeader />
      <Header />
      <MobileNavTwo />
      <Hero />
      <EditorsPick />
      <FeaturedProducts />
      <Vitaclassicproduct />
      <Neuraluniverse />
      <FeaturedPosts />
      <Footer />
    </section>
  );
};

export default Homepage;
