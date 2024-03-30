import React from 'react'
import { Button } from '@/components/ui/button'
const Description = () => {
  return (
    <>
        <main className="h-[80vh] w-screen bg-black/90 grid grid-cols-6 ">
        <div className="col-span-4 ">
          <div className="w-full h-full  flex flex-col justify-between py-5 pl-12">
            <h1 className="font-bold font-monospace text-6xl text-rose-500">
              f-ai
            </h1>
            <div>
              <p className="tracking-wide lg:leading-loose font-bold text-4xl text-white/70">
                Next-Gen solution for Bookkeeping Accounting and Financial
                Reporting <i>Powered by AI</i> 
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
    </>
  )
}

export default Description
