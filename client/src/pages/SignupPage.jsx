import NavigationBar from '@/customComponents/NavigationBar'
import SignUp from '@/customComponents/Signup'
import React from 'react'

const SignupPage = () => {
    return (
        <>
            <div className="flex flex-col h-screen">
                <NavigationBar className="" /> {/* Adjust height as needed */}
                <SignUp pathwise="signup" className="flex-grow" />
            </div>
        </>
    )
}

export default SignupPage
