import React from 'react'

const PlansCard = ({ header, description }) => {
    return (
        <div className="bg-black text-[#808080] p-6 rounded-lg shadow-lg max-w-sm mx-auto text-center bg-[#0E0C0A] 
        ]">
            <h2 className="text-2xl font-bold mb-4 text-center">Bronze</h2>
            <p className="text-5xl font-bold mb-4 text-center">₹10,000</p>
            <p className="text-gray-400 mb-2">Every month</p>
            <p className="text-gray-400 mb-4">+₹50,000 Setup Cost</p>
            <p className="text-gray-400 mb-4">With Invoices upto 300</p>
            <p className="text-gray-400 mb-6">Valid for 12 months</p>
            <button className="bg-red-600 w-1/2 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-300">
                Select
            </button>
        </div>
    )
}

export default PlansCard
