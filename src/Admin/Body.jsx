import React from 'react'
import { NavLink } from 'react-router-dom'


const Body = () => {
  return (
    <>
      <div className='w-full min-h-screen bg-[#393E46]'>

      {/* HEADER PART */}
        <div className='w-full h-20 flex justify-end bg-[#222831] shadow-lg shadow-gray-900 border-0 border-[#222831] hover:scale-y-105 rounded-b-[10px] transition-all duration-300 ease-in gap-3'>

          {/* <NavLink to={''} className=' h-7  text-[15px] text-gray-300 mt-5 my-3 mr-10 px-4 pt-1 border-0 border-[#222831] rounded-full shadow-lg shadow-gray-900'><i className='fas fa-bell mr-2 text-gray-300'></i> Notifications</NavLink>
          <NavLink to={''} className=' h-7  text-[15px] text-gray-300 mt-5 my-3 mr-30 px-4 pt-1 border-0 border-[#222831] rounded-full shadow-lg shadow-gray-900'><i className='fas fa-user mr-2 text-gray-300'></i> User Profile</NavLink> */}
          <button  className='h-7  text-[15px] text-gray-300 mt-5 my-3 mr-10 px-4 pt-1 border-0 border-[#222831] rounded-full shadow-lg shadow-gray-900 hover:bg-[#17313E] hover:scale-110 hover:border-2 hover:border-amber-50 transition-all duration-300 ease-in'><i className='fas fa-bell mr-2 text-gray-300'></i> Notifications</button>
          <button className='h-7  text-[15px] text-gray-300 mt-5 my-3 mr-30 px-4 pt-1 border-0 border-[#222831] rounded-full shadow-lg shadow-gray-900 hover:bg-[#17313E] hover:scale-110 hover:border-2 hover:border-amber-50 transition-all duration-300 ease-in'><i className='fas fa-user mr-2 text-gray-300'></i> User Profile</button>
        </div>

        <h1 className='text-[30px] text-gray-300 mt-10 mx-7'><i className='fas fa-home mr-2'></i> Dashboard</h1>

        {/* BODY PART */}

        <div className='grid grid-cols-12 m-0 p-0 gap-5'>

          <div className='col-span-4 h-48 bg-[#222831] shadow-lg shadow-gray-900 mt-15 ml-5 border-0 border-[#222831]  rounded-[8px] rounded-bl-none hover:scale-105 transition-all duration-300 ease-in'>
            <p className=' text-right text-gray-300 mt-4 mr-4 text-[18px]'>Total Patients</p>

          </div>
          <div className='col-span-4 h-48 bg-[#222831] shadow-lg shadow-gray-900 mt-15 border-0 border-[#222831]  rounded-[8px] rounded-bl-none hover:scale-105 transition-all duration-300 ease-in'>
            <p className=' text-right text-gray-300 mt-4 mr-4 text-[18px]'>New Patients</p>

          </div>
          <div className='col-span-4 h-48 bg-[#222831] shadow-lg shadow-gray-900 mt-15 mr-5 border-0 border-[#222831]  rounded-[8px] rounded-bl-none hover:scale-105 transition-all duration-300 ease-in'>
            <p className=' text-right text-gray-300 mt-4 mr-4 text-[18px]'>Earnings</p>

          </div>
        </div>


        <div className=' grid grid-cols-12 p-0 m-0 gap-4'>
          <div className='col-span-6 h-80 bg-[#222831] shadow-lg shadow-gray-900 ml-5 mr-2 mt-12 border-0 rounded-[8px] hover:scale-105 transition-all duration-300 ease-in'>
            <p className=' text-gray-300 mt-4 ml-4 text-[18px]'>Doctor Status</p>
          </div>

          <div className='col-span-6 h-80 bg-[#222831] shadow-lg shadow-gray-900 mt-12 mr-5 border-0 rounded-[8px] hover:scale-105 transition-all duration-300 ease-in'>
            <p className='  text-gray-300 mt-4 ml-4 text-[18px]'>Revenue</p>
          </div>
        </div>

        <div className='grid grid-cols-12 p-0 m-0 gap-4'>

            <div className='col-span-8 h-96 bg-[#222831] shadow-lg shadow-gray-900 ml-5 mt-12 mb-10 mr-3 border-0 rounded-[8px] hover:scale-105 transition-all duration-300 ease-in'>
              <p className='text-[18px] text-gray-300 ml-4 mt-4 '>Appointment List</p>
            </div>

            <div className='col-span-4 h-96 bg-[#222831] shadow-lg shadow-gray-900 mr-5 mt-12 mb-10  border-0 rounded-[8px] hover:scale-105 transition-all duration-300 ease-in'>
              <p className='text-[18px] text-gray-300 ml-4 mt-4'>Lab & Analytics</p>
            </div>
        </div>





      </div>
    </>
  )
}

export default Body