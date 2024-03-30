import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import MainCard from "@/customComponents/MainCard";
import NavigationBar from "@/customComponents/NavigationBar";
import Description from "@/customComponents/DescriptionOne";
import DescriptionTwo from "@/customComponents/DescriptionTwo";
import DescriptionThree from "@/customComponents/DescriptionThree";
import Layout from "@/customComponents/Layout";
import CostDescription from "@/customComponents/CostDescription";
import DescriptionFour from "@/customComponents/DescriptionFour";
import Footer from "@/customComponents/Footer";
const HomePage = () => {
  return (
    <>
      <NavigationBar></NavigationBar>
      <Description />
      <DescriptionTwo />
      <DescriptionThree />
      <CostDescription />
      <DescriptionFour />
      <Footer/>
    </>
  );
};

export default HomePage;
