import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { IoMdContact } from "react-icons/io";
import { Button } from '@/components/ui/button';
const NavigationBar = () => {
  return (
    <>
      <header>
        <nav className="h-20 w-full bg-[#131517] flex flex-row justify-between items-center text-gray-500 px-6 ">
          <div className="lg:w-1/3 hover:text-rose-500 text-4xl font-roboto font-semibold text-rose-500">
            f-ai
          </div>
          <div className="hidden  lg:flex flex-row justify-between items-center gap-3 lg:gap-10">
            <div className="hover:text-rose-600">Home</div>
            <div className="hover:text-rose-600">Vision</div>
            <div className="hover:text-rose-600">Solutions</div>
            <div className="hover:text-rose-600">Plans and prices</div>
            <div className="hover:text-rose-600 flex flex-row gap-1">
              <div className="text-2xl">
                <IoMdContact />
              </div>
              <div>login</div>
            </div>
            <div>
              <Button variant="outline">get started</Button>
            </div>
            <div className="hover:text-rose-600">icon</div>
          </div>
          <div className='md:hidden lg:hidden'>
          <Sheet>
            <SheetTrigger>
              <Button variant="link">
                <div className="lg:hidden flex flex-col justify-center content-center  ">
                  <div className="border border-gray-500 w-8 mb-2"></div>
                  <div className="border border-gray-500 w-8 mb-2"></div>
                  <div className="border border-gray-500 w-8 mb-1"></div>
                </div>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col justify-start items-start gap-8 text-xl">
                <div>Home</div>
                <div>Vision</div>
                <div>Solutions</div>
                <div>Plans and prices</div>
                <div> login</div>
                <div>
                  <Button variant="outline">get started</Button>
                </div>
                <div>icon</div>
              </div>
            </SheetContent>
          </Sheet>
          </div>

        </nav>
      </header>

    </>
  )
}

export default NavigationBar
