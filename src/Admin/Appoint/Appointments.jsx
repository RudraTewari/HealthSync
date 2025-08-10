import React from 'react'
import { NavLink } from 'react-router-dom'


const Appointments = () => {
  return (
    <>
      <div className="flex-1 mx-2 my-2 bg-slate-950 rounded-md p-4">
        <div className="w-full grid grid-cols-[20%_20%_20%_10%_20%] justify-evenly border-b font-semibold border-gray-700 hover:bg-slate-600   hover:text-slate-300 transition-all duration-300 text-gray-400 text-[15px] py-4">
          <div>Patient Name</div>
          <div>Doctor Name</div>
          <div>Date & Time</div>
          <div>Status</div>
          <div>Type</div>
          
        </div>
        <div className="w-full grid grid-cols-[20%_20%_20%_10%_20%] justify-evenly border-b border-gray-800  hover:bg-slate-600 hover:text-slate-300 transition-all duration-300 py-5 text-sm text-gray-300 ">
          <div className='font-semibold'>Jane Smith</div>
          <div className='font-semibold'>Dr. Rishab Patel</div>
          <div className="flex flex-col gap-0.5 font-semibold"><p>2025-08-10</p><p> 8:00 AM</p></div>
          <div className='font-semibold'>Completed</div>
          <div className='font-semibold'>CheckUp</div>
          
        </div>
        <div className="w-full grid grid-cols-[20%_20%_20%_10%_20%] justify-evenly border-b border-gray-800  hover:bg-slate-600 hover:text-slate-300 transition-all duration-300 py-5 text-sm text-gray-300 ">
          <div className='font-semibold'>Marie Smith</div>
          <div className='font-semibold'>Dr. Rishab Patel</div>
          <div className="flex flex-col gap-0.5 font-semibold"><p>2025-08-10</p><p> 8:00 AM</p></div>
          <div className='text-semibold'>Cancelled</div>
          <div className='font-semibold'>CheckUp</div>
          
        </div>
      </div>


    </>
  )
}

export default Appointments