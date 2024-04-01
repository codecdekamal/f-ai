import React from 'react'
import MainCard from './MainCard';
import {motion} from "framer-motion"
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
const DescriptionTwo = () => {
  return (
    <>
      <section>
        <div className="lg:min-h-fit w-full bg-black/90 relative  px-16 py-10 md:pt-20">
          <div className="md:border md:border-gray-600 h-full w-full grid md:grid-cols-5">
            <div className="col-span-2 h-3/4 ">
              <article className="flex flex-col gap-5 lg:px-28 pt-16 text-white px-10 text-balance">
                <motion.div className='' initial={{scale:0.5,opacity:0.5, textAlign:"initial"}} whileInView={{opacity:1,textAlign:"center",scale:1}} transition={{duration:1.5}}>
                  <h1 className="font-roboto tracking-wide font-medium text-3xl capitalize">
                    Expert Financial Guidance for Your Business
                  </h1>
                </motion.div>
                <motion.div initial={{scale:0.5,opacity:0.5,  textAlign:"initial"}} whileInView={{opacity:1,textAlign:"center",scale:1}} transition={{duration:1.5}}>
                  <p className="font-poppins leading-7 tracking-wide text-white/60 ">
                    At f-ai, we specialize in providing finance accounting,
                    bookkeeping, and financial reporting services to help
                    businesses like yours thrive. Our AI tool simplifies the
                    bookkeeping ,accounting and financial reporting process.
                    With Real time data visualization you get an MIS dashboard
                    for making Informed decisions. Our Team is dedicated to
                    providing you with the best financial guidance available.
                  </p>
                </motion.div>
              </article>
            </div>
            <div className="relative col-span-3 lg:px-20 h-full md:border-l border-gray-600 ">
              <div className=" grid gap-1 py-3 px-4 md:grid-cols-2 items-center gap-x-3 gap-y-4">
                <div className="grid col-span-1 gap-5">
                  <div className="relative md:bottom-10 mt-36 md:mt-0">
                    {CardInfo.map((items, index) => {
                      if (index >= 2) {
                        return;
                      }
                      return (
                        <div
                          className={`relative  ${items.classname} md:bottom-16`}
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
    </>
  )
}

export default DescriptionTwo
