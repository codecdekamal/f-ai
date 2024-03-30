import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const NavigationBar = () => {
  return (
    <>
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
    </>
  )
}

export default NavigationBar
