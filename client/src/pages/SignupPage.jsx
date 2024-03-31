import NavigationBar from '@/customComponents/NavigationBar'
import SignUp from '@/customComponents/Signup'
import React from 'react'
import Footer from '@/customComponents/Footer'

const SignupPage = () => {
    return (
        <>
            <div className=''>
                <NavigationBar />
            </div>
            <div className="flex flex-col">
                {/* Adjust height as needed */}
                <SignUp pathwise="signup" className="flex-grow" />

            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}

export default SignupPage
