import SignUp from '@/customComponents/Signup'
import React from 'react'
import NavigationBar from '@/customComponents/NavigationBar'
import Footer from '@/customComponents/Footer'

const SigninPage = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen text-white bg-black/90 w-screen">
                <div className=''>
                    <NavigationBar />
                </div>
                <div className="flex flex-col">
                    {/* Adjust height as needed */}
                    <SignUp pathwise="signin" className="flex-grow" />

                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default SigninPage
