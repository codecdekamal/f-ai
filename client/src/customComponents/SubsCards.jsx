import React from 'react'

const SubsCards = ({ item, flag }) => {

    if(flag !== 'allpg'){
        return (
            <div className='text-center'>
                <h1>No Data Available</h1>
            </div>
        )
    }





    return (
        <div className="bg-black  p-6 rounded-lg shadow-lg flex flex-col items-start">
            <div className="h-48 w-full">
                <img src={item.imgSrc} alt="Financial Consultation" className="rounded-lg mb-4 h-full w-full object-cover" />
            </div>
            <div className='flex flex-col'>
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-white mb-2">{item.heading}</h2>
                    <hr />
                </div>
            </div>
            <p className="text-gray-400 mb-4">{item.plan}</p>
            <p className="text-xl font-bold mb-6">₹{item.charges}</p>
            <div className='flex w-[100%]'>
                <button className="bg-red-400 text-black px-4 py-2  hover:bg-red-700 transition duration-300">
                    Connect
                </button>
            </div>
        </div>
    )
}

export default SubsCards
