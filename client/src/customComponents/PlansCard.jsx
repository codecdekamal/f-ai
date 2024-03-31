import React from 'react'

const PlansCard = ({
    header,
    price,
    setupCost,
    planDuration,
    invoice,
    validity,
    button,
    
}) => {
    return (
        <div className="bg-black rounded-lg shadow-lg p-6">
            <div className='h-3/4'>
                <h3 className="text-xl font-bold mb-4">{header}</h3>
                <p className="text-5xl font-bold mb-4">₹{price}</p>
                <p className="text-gray-400 mb-4">{planDuration}</p>
                <p className="text-gray-400 mb-4">{setupCost}</p>
                <p className="text-gray-400 mb-4">{invoice}</p>
                <p className="text-gray-400 mb-4">{validity}</p>
            </div>
            <button className="bg-red-500 text-black mt-[10px] w-[75%] text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-300">
                {button}
            </button>
        </div>
    )
}

export default PlansCard