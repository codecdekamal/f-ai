import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import MainCard from "@/customComponents/MainCard";
import NavigationBar from "@/customComponents/NavigationBar";
import Description from "@/customComponents/DescriptionOne";
import DescriptionTwo from "@/customComponents/DescriptionTwo";
import DescriptionThree from "@/customComponents/DescriptionThree";
const HomePage = () => {
  return (
    <>
     <NavigationBar></NavigationBar>
     <Description/>
    <DescriptionTwo/>
    <DescriptionThree/>
    </>
  );
};

export default HomePage;
