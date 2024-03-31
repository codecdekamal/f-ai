import React from 'react'
// vision description Layout
const VisDisLayout = ({para,span1,span2,heading, Tasks}) => {
  return (
    <>
 <div className=" relative  px-16 ">
          <div className="h-fit border border-gray-600 grid grid-cols-5">
            <div className="col-span-2  ">
              <article className="h-full flex flex-col gap-5 lg:px-28  text-white  text-balance justify-center items-center">
                <div className='text-center'>
                  <h1 className="tracking-wider font-roboto  font-medium text-4xl md:text-5xl capitalize">
                    {heading}
                  </h1>
                </div>
              </article>
            </div>
            <div className={`py-14 relative col-span-3 lg:px-20 h-full border-l border-gray-600`}>
            <ul className=" leading-8 font-medium list-decimal text-white/70 flex flex-col justify-center items-center">
             {Tasks.map((li)=>{
               return <li className="">{li}</li>
             })}
            </ul>
            </div>
          </div>
        </div>
    </>
  )
}

export default VisDisLayout