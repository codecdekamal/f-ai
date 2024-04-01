import React from 'react'
import { Button } from '@/components/ui/button'
import {motion} from "framer-motion"
const Description = () => {
  return (
    <>
        <main  className="h-[60vh] md:h-screen w-screen bg-black/90 grid  md:grid-cols-6 mt-20 ">
        <div className="col-span-4 ">
          <div className="w-full h-full flex flex-col justify-between  md:py-5 md:pl-12 px-10">
            <h1 className="font-semibold font-monospace text-5xl text-rose-500 pt-10">
              f-ai
            </h1>
            <motion.div initial={{x:-300,opacity:0,scale:0.4}} animate={{opacity:1,x:0,scale:1}} transition={{duration:1.5,delay:1}} > 
              <p className="tracking-wide lg:leading-loose font-bold text-2xl md:text-4xl text-white/70">
                Next-Gen solution for Bookkeeping Accounting and Financial
                Reporting Powered by AI
              </p>
            </motion.div>
            <motion.div  initial={{x:-300,opacity:0}} animate={{opacity:1,x:0}} transition={{duration:3,delay:2}}  className="tracking-wide  leading-relaxed font-bold font-monospace text-lg  text-white/70">
              Let f-ai help you manage your financial records and reporting
              requirements with our range of financial services.
            </motion.div>
            <div></div>
          </div>
        </div>
        <div className="col-span-2 ">
          <motion.div  initial={{x:300,opacity:0}} animate={{opacity:1,x:0}} transition={{duration:3,delay:2}} className="hidden md:flex flex-row md:justify-start md:items-center md:content-center h-full">
            <Button variant="mainButton" size="lg">
              Learn More
            </Button>
          </motion.div>
          <motion.div  initial={{x:-300,opacity:0}} animate={{opacity:1,x:"30vw"}} transition={{duration:3,delay:2}} className="md:hidden">
            <Button variant="mainButton" size="lg">
              Learn More
            </Button>
          </motion.div>
        </div>
      </main>
    </>
  )
}

export default Description
