import React from 'react';

const ConnectCards = ({ item }) => {
    return (
        <div className="bg-black text-white p-6 rounded-lg shadow-lg flex flex-col items-start ">
            <div className="h-48 w-full">
                <img src={item.src} alt="Financial Consultation" className="rounded-lg mb-4 h-full w-full object-cover" />
            </div>
            <div className='flex flex-col'>
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-2">{item.heading}</h2>
                    <hr />
                </div>
            </div>
            <p className="text-gray-400 mb-4">{item.time}</p>
            <p className="text-3xl font-bold mb-6">₹{item.charges}</p>
            <div className='flex w-[100%]'>
            <button className="bg-red-400 text-white px-4 py-2  hover:bg-red-700 transition duration-300">
                Connect
            </button>
            </div>
        </div>
    );
}

export default ConnectCards;