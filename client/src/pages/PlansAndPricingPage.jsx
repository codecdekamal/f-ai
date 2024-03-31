import Footer from '@/customComponents/Footer'
import NavigationBar from '@/customComponents/NavigationBar'
import PlansCard from '@/customComponents/PlansCard'
import React from 'react'

const PlansAndPricingPage = () => {
    const planCards = [
        {
            header: 'Bronze',
            price: 10000,
            setupCost: '+₹50,000 Setup Cost',
            planDuration: 'Every month',
            invoice: 'With Invoices upto 300',
            validity: 'Valid for 12 months',
            button: 'Select'
        },
        {
            header: 'Silver',
            price: 15000,
            setupCost: '+₹1,00,000 Setup fee',
            planDuration: 'Every month',
            invoice: 'Invoices upto 1000',
            validity: 'Valid for 12 months',
            button: 'Select'
        },
        {
            header: 'Gold',
            price: 20000,
            setupCost: '+₹3,00,000 Setup fee',
            planDuration: 'Every month',
            invoice: 'With Invoices upto 3000/month',
            validity: 'Valid for 12 months + 7 day free trial',
            button: 'Start Free Trial',
            
        },
        {
            header: 'Platinum',
            price: 60000,
            setupCost: '+₹7,50,000 Setup cost',
            planDuration: 'Every month',
            invoice: 'Enterprise level solution 7k per month invoices will be processed',
            validity: 'Valid for 12 months ',
            button: 'Contact Us'
        }
    ]

    return (
        <div className="flex flex-col min-h-screen text-white bg-black/90 w-screen">
            <div className='flex flex-col mb-[10vh]'>
                <NavigationBar />
            </div>
            <div className="flex-grow flex flex-col justify-center items-center mt-[4rem] text-center text-[#808080]">
                <h1 className="text-4xl font-bold text-center">Choose your pricing plan</h1>
                <div className="max-w-6xl w-full px-4 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {planCards.map((card, index) => (
                            <PlansCard
                                key={index}
                                header={card.header}
                                price={card.price}
                                setupCost={card.setupCost}
                                planDuration={card.planDuration}
                                invoice={card.invoice}
                                validity={card.validity}
                                button={card.button}
                                
                            />
                        ))}

                    </div>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default PlansAndPricingPage