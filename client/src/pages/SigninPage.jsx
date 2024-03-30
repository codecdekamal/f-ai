import SignUp from '@/customComponents/Signup'
import React from 'react'
import NavigationBar from '@/customComponents/NavigationBar'

const SigninPage = () => {
    return (
        <div className="flex flex-col h-screen">
            <NavigationBar className="" />
            <SignUp pathwise="sigin" className="flex-grow" />
        </div>
    )
}

export default SigninPage
