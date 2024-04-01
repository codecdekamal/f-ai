import Footer from '@/customComponents/Footer'
import NavigationBar from '@/customComponents/NavigationBar'
import SubscriptionComponent from '@/customComponents/SubscriptionComponent'
import React from 'react'

const SubscriptonPage = () => {
    
    return (
        <>
            <div className='w-screen'>
                <div className='flex flex-col'>
                    <div className='w-screen'>
                        <NavigationBar />
                    </div>
                    <div className='bg-[#131517] w-screen'>
                        <SubscriptionComponent />
                    </div>
                    <div className='w-screen'>
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SubscriptonPage
