import React from "react";
import {motion} from "framer-motion"

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
      <Card className="max-w-64 bg-black/80 lg:mb-10 shadow-lg">
        <CardHeader className="text-blue-500">
          <CardTitle className="md:mb-10 text-blue-500">
            <motion.div initial={{scale:0.5,opacity:0.5, x:-50}} whileInView={{opacity:1,x:0,scale:1}} transition={{duration:1.5}}>
            Icon
            </motion.div>
            </CardTitle>
          <CardTitle>
            <motion.div initial={{scale:0.5,opacity:0.5, x:-50}} whileInView={{opacity:1,x:0,scale:1}} transition={{duration:1.5}}>
            {items.title}
            </motion.div>
            </CardTitle>
        </CardHeader>
        <CardContent className="text-gray-600 text-balance">
          <motion.div initial={{scale:0.5,opacity:0.5, x:-50}} whileInView={{opacity:1,x:0,scale:1}} transition={{duration:1.5}}>
          {items.desc}

          </motion.div>
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
