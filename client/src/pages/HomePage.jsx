import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { IoMdContact } from "react-icons/io";
import MainCard from "@/customComponents/MainCard";
import NavigationBar from "@/customComponents/NavigationBar";
const CardInfo = [
  {
    title: "Cloud-Based Financial Solutions",
    desc: "Our cloud-based financial solutions provide easy access to your financial data from anywhere, at any time.",
  },
  {
    title: "Industry-Leading Financial Reporting",
    desc: "Our financial reporting services are designed to provide you with industry-leading insights and analytics. Let us help you make informed financial decisions for your business",
  },
  {
    title: "A Range of Financial Services",
    desc: "We offer a range of financial services to help businesses manage their financial records and reporting requirements. From bookkeeping to financial planning, we have you covered.",
  },
  {
    title: "Dedicated Customer Support",
    desc: "At F-ai, we pride ourselves on providing dedicated customer support to all of our clients. We are here to help you every step of the way.",
  },
];
const HomePage = () => {
  return (
    <>
     <NavigationBar></NavigationBar>
      <main className="h-[80vh] w-screen bg-black/90 grid grid-cols-6 ">
        <div className="col-span-4 ">
          <div className="w-full h-full  flex flex-col justify-between py-5 pl-12">
            <h1 className="font-bold font-monospace text-6xl text-rose-500">
              f-ai
            </h1>
            <div>
              <p className="tracking-wide lg:leading-loose font-bold text-4xl text-white/70">
                Next-Gen solution for Bookkeeping Accounting and Financial
                Reporting Powered by AI
              </p>
            </div>
            <div className="tracking-wide leading-relaxed font-bold font-monospace text-lg  text-white/70">
              Let f-ai help you manage your financial records and reporting
              requirements with our range of financial services.
            </div>
            <div></div>
          </div>
        </div>
        <div className="col-span-2 ">
          <div className="flex flex-row justify-start items-center content-center h-full">
            <Button variant="mainButton" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </main>
      <section>
        <div className="lg:min-h-fit w-full bg-black/90 relative box-border px-16 py-10">
          <div className=" border  border-gray-600 h-full w-full grid grid-cols-5">
            <div className="col-span-2 h-3/4 ">
              <article className="flex flex-col gap-5 lg:px-28 pt-16 text-white px-10 text-balance">
                <div>
                  <h1 className="font-roboto tracking-wide font-medium text-3xl capitalize">
                    Expert Financial Guidance for Your Business
                  </h1>
                </div>
                <div>
                  <p className="font-poppins leading-7 tracking-wide text-white/60">
                    At f-ai, we specialize in providing finance accounting,
                    bookkeeping, and financial reporting services to help
                    businesses like yours thrive. Our AI tool simplifies the
                    bookkeeping ,accounting and financial reporting process.
                    With Real time data visualization you get an MIS dashboard
                    for making Informed decisions. Our Team is dedicated to
                    providing you with the best financial guidance available.
                  </p>
                </div>
              </article>
            </div>
            <div className="relative col-span-3 lg:px-20 h-full border-l border-gray-600">
              <div className=" grid gap-1 py-3 px-4 grid-cols-2 items-center gap-x-3 gap-y-4">
                <div className="grid col-span-1 gap-5">
                  <div className="relative bottom-10 ">
                    {CardInfo.map((items, index) => {
                      if (index >= 2) {
                        return;
                      }
                      return (
                        <div
                          className={`relative  ${items.classname} bottom-16`}
                        >
                          <MainCard items={items}></MainCard>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="grid col-span-1 gap-5">
                  <div className="relative top-8">
                    {CardInfo.map((items, index) => {
                      if (index < 2) {
                        return;
                      }
                      return (
                        <div className={`relative  ${items.classname} `}>
                          <MainCard items={items}></MainCard>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="lg:min-h-fit w-full bg-black/90 relative box-border px-16 py-10">
          <div className=" border  border-gray-600 h-screen w-full grid grid-cols-5">
            <div className="col-span-2  border-r border-gray-600">
              <article className="flex flex-col gap-5  lg:px-28 pt-16 text-white px-10 text-center">
                <div>
                  <h1 className="font-roboto font-monospace  tracking-wider font-medium text-3xl capitalize ">
                    Comprehensive Financial Solutions for Your Business
                  </h1>
                </div>
                <div></div>
              </article>
            </div>
            <div className="relative col-span-3 lg:px-20 h-full border-l border-gray-600 mt-16 ">
              <div className=" grid gap-1 py-3 px-4  items-center gap-x-3 gap-y-4 ">
                <p className="font-poppins leading-7 tracking-wide text-white/60 text-center text-balance md:px-14">
                  At F-ai, we offer a range of financial services to help you
                  manage your financial records and reporting requirements. From
                  bookkeeping to financial planning, we have you covered. Let us
                  help you take your business to the next level.
                </p>
                <div className="lg:px-24">
                  <Button variant="mainButton" size="lg">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
