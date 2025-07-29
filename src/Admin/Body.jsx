import React from 'react'
import { NavLink } from 'react-router-dom'
import CustomChart from './CustomChart';
import { useState } from 'react';

const chartData = [
  { date: '2025-07-01', newPatients: 5, earnings: 1000, Revenue: 1200, Tests: 20 },
  { date: '2025-07-02', newPatients: 9, earnings: 1080, Revenue: 1250, Tests: 22 },
  { date: '2025-07-03', newPatients: 8, earnings: 1150, Revenue: 1300, Tests: 26 },
  { date: '2025-07-04', newPatients: 12, earnings: 1130, Revenue: 1330, Tests: 29 },
  { date: '2025-07-05', newPatients: 11, earnings: 1200, Revenue: 1380, Tests: 34 },
  { date: '2025-07-06', newPatients: 15, earnings: 1280, Revenue: 1430, Tests: 38 },
  { date: '2025-07-07', newPatients: 17, earnings: 1320, Revenue: 1460, Tests: 42 },
  { date: '2025-07-08', newPatients: 16, earnings: 1350, Revenue: 1500, Tests: 45 },
  { date: '2025-07-09', newPatients: 20, earnings: 1380, Revenue: 1560, Tests: 48 },
  { date: '2025-07-10', newPatients: 22, earnings: 1420, Revenue: 1600, Tests: 50 },
  { date: '2025-07-11', newPatients: 21, earnings: 1440, Revenue: 1620, Tests: 53 },
  { date: '2025-07-12', newPatients: 25, earnings: 1500, Revenue: 1670, Tests: 56 },
  { date: '2025-07-13', newPatients: 24, earnings: 1520, Revenue: 1700, Tests: 59 },
  { date: '2025-07-14', newPatients: 28, earnings: 1580, Revenue: 1760, Tests: 63 },
  { date: '2025-07-15', newPatients: 30, earnings: 1600, Revenue: 1800, Tests: 67 }
];



const Body = () => {

  const[completedCount,setCompletedCount]=useState(100)
  const[pendingCount,setPendingCount]=useState(0)

  return (
    <>
      <div className='w-full min-h-screen bg-slate-900'>

        {/* HEADER PART */}
        <div className='w-full h-20 flex justify-end bg-[#222831] shadow-lg shadow-gray-900 border-0 border-[#222831] hover:scale-y-105 rounded-b-[10px] transition-all duration-300 ease-in'>

          {/* <NavLink to={''} className=' h-7  text-[15px] text-gray-300 mt-5 my-3 mr-10 px-4 pt-1 border-0 border-[#222831] rounded-full shadow-lg shadow-gray-900'><i className='fas fa-bell mr-2 text-gray-300'></i> Notifications</NavLink>
          <NavLink to={''} className=' h-7  text-[15px] text-gray-300 mt-5 my-3 mr-30 px-4 pt-1 border-0 border-[#222831] rounded-full shadow-lg shadow-gray-900'><i className='fas fa-user mr-2 text-gray-300'></i> User Profile</NavLink> */}
          <button className='h-7  text-[15px] text-gray-300 mt-5 my-3 mr-5 px-4 pt-1 hover:scale-110'><i className='fas fa-bell mr-2 text-gray-300'></i></button>
          <button className='h-7  text-[15px] text-gray-300 mt-5 my-3 mr-30 pl-4 pr-4 pb-1 pt-1 bg-slate-900 rounded-full border-2 border-slate-900 hover:border-white '><i className='fas fa-user mr-2 text-gray-300'></i> User Profile</button>
        </div>

        <h1 className='text-[30px] text-gray-300 mt-10 mx-7 font-semibold'><i className='fas fa-home mr-2'></i> Dashboard</h1>

        {/* BODY PART */}

        <div className='grid grid-cols-12 m-0 p-0 gap-5'>

          <div className='col-span-4 h-48 bg-[#222831] shadow-lg shadow-amber-300 mt-15 ml-5 border-2 border-[#222831]  rounded-[8px] rounded-bl-none hover:border-amber-300 hover:scale-105 transition-all duration-300 ease-in'>
            <p className=' text-left text-yellow-500 mt-4 ml-4 text-[18px] font-semibold'>Total Patients : {completedCount}</p>

          </div>
          <div className='col-span-4 h-48 flex flex-col bg-[#222831] shadow-lg shadow-purple-600 mt-15 border-2 border-[#222831]  rounded-[8px] rounded-bl-none hover:scale-105 hover:border-purple-500 transition-all duration-300 ease-in'>
            <p className=' text-left text-purple-500 mt-4 ml-4 text-[18px]'>New Patients</p>

            <div className="flex-1"> {/* Adjust this value as needed */}
              <CustomChart
                data={chartData}
                areaKey="newPatients"
                areaColor="#9929EA"
                xkey="date"
                ylabel="New Patients"
              />
            </div>
          </div>
          <div className='col-span-4 h-48 flex flex-col bg-[#222831] shadow-lg shadow-green-700 mt-15 mr-5 border-2 border-[#222831]  rounded-[8px] rounded-bl-none hover:scale-105 hover:border-green-400 transition-all duration-300 ease-in'>
            <p className=' text-left text-green-400 mt-2 ml-4 text-[18px]'>Earnings</p>
            <div className="flex-1">
              <CustomChart
                data={chartData}
                areaKey="earnings"
                areaColor='#78C841'
                xkey="date"
                ylabel="Earnings"
              />
            </div>

          </div>
        </div>


        <div className=' grid grid-cols-12 p-0 m-0 gap-4'>
          <div className='col-span-6 h-80 bg-[#222831] shadow-lg shadow-cyan-500 ml-5 mr-2 mt-12 border-2 border-[#222831] rounded-[8px] hover:scale-105 hover:border-cyan-500 transition-all duration-300 ease-in'>
            <p className=' text-cyan-300 mt-4 ml-4 text-[18px]'>Doctor Status</p>
          </div>

          <div className='col-span-6 h-80 flex flex-col bg-[#222831] shadow-lg shadow-[#FF7D29] mt-12 mr-5 border-2 border-[#222831] rounded-[8px] hover:scale-105 hover:border-[#FF7D29] transition-all duration-300 ease-in'>
            <p className='  text-orange-400 mt-4 ml-4 text-[18px]'>Revenue</p>
            <div className="flex-1">

            </div>
            <CustomChart
              data={chartData}
              areaKey='Revenue'
              areaColor='#F97A00'
              xkey="date"
              ylabel="Revenue"
            />


          </div>
        </div>

        <div className='grid grid-cols-12 p-0 m-0 gap-4'>

          <div className='col-span-8 h-96 bg-[#222831] shadow-lg shadow-[#DC2525] ml-5 mt-12 mb-10 mr-3 border-2 border-[#222831] rounded-[8px] hover:scale-105 hover:border-[#DC2525] transition-all duration-300 ease-in'>
            <p className='text-[18px] text-[#FF3F33] ml-4 mt-4 '>Appointment List</p>
          </div>

          <div className='col-span-4 h-96 flex flex-col bg-[#222831] shadow-lg shadow-[#FFF9AF] mr-5 mt-12 mb-10  border-2 border-[#222831] rounded-[8px] hover:scale-105 hover:border-[#FFFDB7] transition-all duration-300 ease-in'>
            <p className='text-[18px] text-[#F6F6F6] ml-4 mt-4'>Lab & Analytics</p>
            <div className="flex-1">
              <CustomChart
                data={chartData}
                areaKey="Tests"
                areaColor='#483AA0'
                xkey="date"
                ylabel="Lab Analytics"
              />
            </div>

          </div>
        </div>

      </div>
    </>
  )
}

export default Body