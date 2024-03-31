import React from "react";
const descVal = [
  {
    title: "100+hrs",
    desc: "Saves Time",
  },
  {
    title: "$1000",
    desc: "Save Cost",
  },
  {
    title: "One Click",
    desc: "Real time Data",
  },
  {
    title: "100+",
    desc: "Industry-Leading Reports / Interactive Dashboards",
  },
  {
    title: "24/7",
    desc: "Dedicated Support",
  },
];
const CostDescription = () => {
  return (
    <div className="w-full h-fit py-14 bg-black/90">
      <div className="p-16 ">
        <p className="text-white text-center font-poppins text-4xl">Why Choose f-ai</p>
      </div>
      <div className="text-rose-600 grid md:grid-cols-5 grid-row-5 px-14 place-content-center">
        {descVal.map((item) => {
          return <div className="flex flex-col gap-4 justify-between items-center ">
                <h1 className="text-4xl text-center">{item.title}</h1>
                <p className="font-medium font-lg text-white ">{item.desc}</p>
                <div className="border-2 border-gray-500 px-10"></div>
          </div>;
        })}
      </div>
    </div>
  );
};

export default CostDescription;
