import React from 'react'
import { Button } from '@/components/ui/button'

const DescriptionThree = () => {
  return (
    <>
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
  )
}

export default DescriptionThree
