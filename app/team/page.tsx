import Footer from "@/components/Footer";
import InnovationTailored from "@/components/InnovationTailored";
import MobileNavOne from "@/components/MobileNavOne";
import NavTwo from "@/components/NavTwo";
import Trail from "@/components/Trail";
import React from "react";

const Teampage = () => {
  return (
    <div>
      <NavTwo />
      <MobileNavOne />
      <InnovationTailored />
      <Trail />
      <Footer topBgColor="bg-text-white" />
    </div>
  );
};

export default Teampage;
