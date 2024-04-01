import ConnectCards from '@/customComponents/ConnectCards'
import Footer from '@/customComponents/Footer'
import NavigationBar from '@/customComponents/NavigationBar'
import React from 'react'
import f1 from '../assets/f1.jpg'
import acb from '../assets/acb.jpg'
import tax from '../assets/tax.jpg'
import payroll from '../assets/payroll.jpg'
import audit from '../assets/audit.jpg'
import due from '../assets/due.jpg'

const ConnectPage = () => {
  const cardsData = [
    { heading: 'Financial Consultation', time: '1hr', charges: '1000', src: f1 },
    { heading: 'Accounting & Bookkeeping', time: '1hr', charges: '1000', src: acb },
    { heading: 'Tax Preparation', time: '1hr', charges: '1000', src: tax },
    { heading: 'Payroll Service ', time: '1hr', charges: '1000', src: payroll },
    { heading: 'Audit ', time: '1hr', charges: '1000', src: audit },
    { heading: 'Due Diligence and Compliances', time: '1hr', charges: '1000', src: due }
  ]

  return (
    <div className="flex flex-col min-h-screen bg-[#131517]">
      <NavigationBar />
      <div className="flex flex-col items-center w-full mt-[10vh] text-[#808080]">
        <h1 className="text-3xl md:text-4xl font-bold  py-8">Our Services</h1>
        <div className="max-w-6xl w-full px-4 py-8 text-[#808080]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 bg-[#131517]">
            {cardsData.map((item, index) => (
              <ConnectCards key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ConnectPage