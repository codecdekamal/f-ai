import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const MainCard = ({ items }) => {
  console.log()
  return (
    <>
      <Card className="max-w-64 bg-black/75 lg:mb-10 shadow-lg">
        <CardHeader className="text-blue-500">
          <CardTitle className="md:mb-10 text-blue-500">Icon</CardTitle>
          <CardTitle>{items.title}</CardTitle>
        </CardHeader>
        <CardContent className="text-gray-600 text-balance">
          {items.desc}
        </CardContent>
        <CardFooter>
          <div className="border-2 border-gray-500 w-full px-6">

          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default MainCard;
