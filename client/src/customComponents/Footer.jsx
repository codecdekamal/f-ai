import React from "react";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";



const Footer = () => {
  return (
    <footer>
      <div className="w-screen h-fit  bg-black/90">
        <div className="pt-20 pb-20 capitalize  justify-between px-3 lg:px-20 content-center items-center text-center mx-auto gap-14 lg:gap-8 text-xl flex lg:flex-row flex-col font-poppins leading-7 tracking-wide text-white/60 ">
          <div className="flex flex-col gap-5">
            <p>icon</p>
            <p>+91-9452701180</p>
            <p> Info@f-ai.in</p>
            <address>Bangalore, India</address>
          </div>
          <div className="flex flex-col gap-5">
            <p>services</p>
            <p>about us</p>
            <p> contact us</p>
            <address>blog</address>
            <Button variant="destructive" >Get Started</Button>
          </div>
          <div className="flex flex-col gap-5">
            <p>Subscribe to Our Newsletter</p>
            <form className="flex flex-col items-center lg:items-start gap-4">
              <label htmlFor="email" className="text-start  lg:pr-40">Email</label>
              <Input type="email" className="outline-1 outline-gray-500"></Input>
              <Button variant="mainButton" className="py-2"> submit</Button>
            </form>
          </div>
          <div className="flex flex-col justify-between content-between gap-5">
            <div className="flex flex-col">
            <p>Follow Us On:</p>
          <div className="flex flex-row gap-2"></div>
            </div>
            <p>
            © 2024 f-ai. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
