import NavigationBar from '@/customComponents/NavigationBar'
import PlansCard from '@/customComponents/PlansCard'
import React from 'react'

const PlansAndPricingPage = () => {
    const planCards = [
        {
            header: 'Bronze',
            price: 10000,
            setupCost : '+50,000 setup cost',
            planDuration: 'Every Month',
            invoice: 'With invoices upto 300',
            validity: 'Valid for 12 Months'
        },
        
        {
            header : 'Silver', 
            price : 15000, 
            setupCost : '+1,00,000 setup fee',
            planDuration : 'Every Month', 
            invoice : 'Invoices upto 1000', 
            validity: 'Valid for 12 Months'
        },
        {
            header : 'Gold', 
            price : 20000, 
            setupCost : '+3,00,000 setup fee',
            planDuration : 'Every Month', 
            invoice : 'With Invoices upto 3000/ month', 
            validity: 'Valid for 12 Months'
        },
        {
            header : 'Platinum', 
            price : 60000,
            setupCost : '&7,50,000 setup cost', 
            planDuration : 'Every Month', 
            invoice : 'Enterprise level solution 7k per month invoices will be processed', 
            validity: 'Valid for 12 Months + 7 days free trial'
        },


    ]
    return (
        <div>
            <NavigationBar />
            <div className='bg-black/90'>
                <PlansCard />
            </div>
        </div>
    )
}

export default PlansAndPricingPage
