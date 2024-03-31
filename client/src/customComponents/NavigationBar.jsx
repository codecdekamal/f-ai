import React, { useState } from 'react'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { IoMdContact } from "react-icons/io";
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react';

const NavigationBar = () => {
  const { user, logout, isAuthenticated } = useAuth0()
  console.log(user)

  const handleLogout = async () => {
    await logout()
  }

  return (
    <>
      <header className='relative'>
        <nav className="fixed top-0 z-50 h-20 w-full bg-[#131517] flex flex-row justify-between items-center text-gray-500 px-6 ">
          <div className="lg:w-1/3 hover:text-rose-500 text-4xl font-roboto font-semibold text-rose-500">
            f-ai
          </div>
          <div className="hidden lg:flex flex-row justify-between items-center gap-3 lg:gap-10 text-sm">
            <Link to='/'>
              <div className="hover:text-rose-600 cursor-pointer">Home</div>
            </Link>
            <Link to='/vision'>
              <div className="hover:text-rose-600 cursor-pointer">Vision</div>
            </Link>
            <Link to='/solutions'>
              <div className="hover:text-rose-600 cursor-pointer">Solutions</div>
            </Link>
            <Link to='/subscription'>
              <div className="hover:text-rose-600 cursor-pointer">Subscription</div>
            </Link>
            <Link to='/connect'>
              <div className="hover:text-rose-600 cursor-pointer">Connect</div>
            </Link>
            <Link to='/plans-prices'>
              <div className="hover:text-rose-600 cursor-pointer">Plans and pricing</div>
            </Link>
            {!isAuthenticated ? (
              <Link to='/signin'>
                <div className="hover:text-rose-600 flex flex-row gap-1 hover:cursor-pointer">
                  <div className="text-2xl">
                    <IoMdContact />
                  </div>
                  <div>login</div>
                </div>
              </Link>
            ) : (
              <div
                className="hover:text-rose-600 flex flex-row gap-1 hover:cursor-pointer"
                onClick={handleLogout}
              >
                <div className="text-2xl">
                  <IoMdContact />
                </div>
                <div>logout</div>
              </div>
            )}
            <div>
              <Button variant="outline">get started</Button>
            </div>
            <div className="hover:text-rose-600">icon</div>
          </div>
          <div className='md:hidden lg:hidden'>
            <Sheet>
              <SheetTrigger>
                <Button variant="link">
                  <div className="lg:hidden flex flex-col justify-center content-center ">
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
                  <div>{isAuthenticated ? 'logout' : 'login'}</div>
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