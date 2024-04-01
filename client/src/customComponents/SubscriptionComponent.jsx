import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import SubsCards from './SubsCards'
import start from '@/assets/start.jpg'
import sme from '@/assets/sme.jpg'
import ent from '@/assets/ent.jpg'

const SubscriptionComponent = () => {
    const [activeLink, setActiveLink] = useState('allpg')
    const cardData = [
        {
            imgSrc: start,
            heading: 'Startups and Small Business',
            plan: '2 plans available',
            category: 'allpg'

        },
        {
            imgSrc: sme,
            heading: 'Small to Medium Business',
            plan: 'Gold',
            category: 'allpg',
        },
        {
            imgSrc: ent,
            heading: 'Enterprise Level',
            plan: 'Platinum',
            category: 'allpg'
        }
    ]
    return (
        <>
            <div className='container mt-[20vh] text-white mb-4 '>
                <h1 className='text-5xl leading-[84px]'>Bookkeeping</h1>
                <h1 className='text-5xl leading-[84px]'>Accounting</h1>
                <h1 className='text-5xl leading-[84px]'> Financial Reporting</h1>
            </div>
            <div className='container mb-[2vh] text-white'>
                <h1 className='text-3xl'>
                    Tax, Audit, Compliances and Due Deligence</h1>
            </div>
            <div className='flex flex-col flex-grow mt-[10vh] justify-center'>
                <div className=' flex justify-center text-[#808080] p-2'>
                    <ul className='flex text-xl border-b-[1px] border-[#808080] text-center '>
                        <li onClick={() => { setActiveLink('allpg') }} className= {`m-2 p-2 mb-0 hover:border-b-2 border-rose-500 ${activeLink === 'allpg' ? 'border-b-2 border-rose-500' : ''}`}>All Programs</li>
                        <li onClick={() => { setActiveLink('medsc') }} className={`m-2 p-2 mb-0 hover:border-b-2 border-rose-500 ${activeLink === 'medsc' ? 'border-b-2 border-rose-500' : ''}`}>Medium Scale</li>
                        <li onClick={() => { setActiveLink('entp') }} className={`m-2 p-2 mb-0 hover:border-b-2 border-rose-500 ${activeLink === 'entp' ? 'border-b-2 border-rose-500' : ''}`}>Enterprise</li>
                        <li onClick={() => { setActiveLink('star') }} className={`m-2 p-2 mb-0 hover:border-b-2 border-rose-500 ${activeLink === 'star' ? 'border-b-2 border-rose-500' : ''}`}>Startups</li>
                        <li onClick={() => { setActiveLink('smbus') }} className={`m-2 p-2 mb-0 hover:border-b-2 border-rose-500 ${activeLink === 'smbus' ? 'border-b-2 border-rose-500' : ''}`}>Small Business</li>
                        <li onClick={() => { setActiveLink('dash') }} className={`m-2 p-2 mb-0 hover:border-b-2 border-rose-500 ${activeLink === 'dash' ? 'border-b-2 border-rose-500' : ''}`}>3 Dashboards</li>
                    </ul>
                </div>
                <div className='flex flex-wrap justify-center '>

                    {
                        activeLink === 'allpg' ? cardData.map((item, index) => {
                            return (
                                <div className='m-2'>
                                    <SubsCards key={index} item={item} flag='allpg' />
                                </div>
                            )
                        }) : 
                        (
                            <div className='flex h-[40vh] items-center justify-center text-[#808080]'>
                                <h1>No Data Available</h1>
                            </div>
                        )
                    }

                </div>
            </div>

        </>
    )
}

export default SubscriptionComponent
