import About from "@/components/About";
import BigCompanies from "@/components/BigCompanies";
import Footer from "@/components/Footer";
import MobileNavOne from "@/components/MobileNavOne";
import NavTwo from "@/components/NavTwo";
import Team from "@/components/Team";
import React from "react";

const Aboutpage = () => {
  return (
    <div>
      <NavTwo />
      <MobileNavOne />
      <About />
      <Team />
      <BigCompanies />
      <Footer topBgColor="bg-text-white" />
    </div>
  );
};

export default Aboutpage;
