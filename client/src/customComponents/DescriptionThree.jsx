import React from 'react'
import { Button } from '@/components/ui/button'
import {motion} from "framer-motion"

const DescriptionThree = () => {
  return (
    <>
     <section>
        <div className="lg:min-h-fit w-full bg-black/90 relative box-border px-16 md:py-10">
          <div className=" md:border  border-gray-600 md:h-screen w-full grid md:grid-cols-5">
            <div className="col-span-2  md:border-r border-gray-600">
              <article className="flex flex-col gap-5  lg:px-28 pt-16 text-white px-10 text-center">
              <motion.div initial={{scale:0.5,opacity:0.5, x:-50}} whileInView={{opacity:1,x:0,scale:1}} transition={{duration:1.5}}>
                  <h1 className="font-roboto font-monospace  tracking-wider font-medium text-3xl capitalize ">
                    Comprehensive Financial Solutions for Your Business
                  </h1>
                </motion.div>
                <div></div>
              </article>
            </div>
            <div className="relative col-span-3 lg:px-20 md:h-full md:mt-16 ">
              <motion.div  initial={{scale:0.5,opacity:0.4, textAlign:"initial"}} whileInView={{opacity:1,textAlign:"center",scale:1}} transition={{duration:1.5}} className=" grid gap-1 py-3 px-4  items-center gap-x-3 gap-y-4 ">
                <p className="font-poppins leading-7 tracking-wide text-white/60 text-center text-balance md:px-14">
                  At F-ai, we offer a range of financial services to help you
                  manage your financial records and reporting requirements. From
                  bookkeeping to financial planning, we have you covered. Let us
                  help you take your business to the next level.
                </p>
                <div className="lg:px-24 mt-20 md:mt-0 mx-auto">
                  <Button variant="mainButton" size="lg">
                    Learn More
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default DescriptionThree
