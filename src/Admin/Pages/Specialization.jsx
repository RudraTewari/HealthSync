import React from 'react'
import Sidebar from '../Sidebar'
import { NavLink } from 'react-router-dom'
import AddSpecialization from './AddSpecialization'

const Specialization = () => {
  return (
    <>
      <div className='w-full min-h-screen items-stretch'>
        <div className=" w-full min-h-screen grid grid-cols-12">
          <div className="col-span-2 ">
            <Sidebar />
          </div>
          <div className="col-span-10 flex flex-col bg-slate-900 min-h-screen">

            <div className="h-16 flex items-center justify-end bg-slate-950 border-b-2 rounded-[5px] px-6 space-x-4">
              <button className="text-[15px] text-gray-300 hover:scale-110">
                <i className="fas fa-bell text-gray-300"></i>
              </button>
              <button className="h-10 w-36 text-[15px] text-amber-100 font-semibold bg-slate-900 border-2 border-slate-900 rounded-full hover:border-amber-100 hover:scale-110 duration-300 ease-in">
                <i className="fas fa-user mr-2.5"></i>User Profile
              </button>
            </div>


            <div className="flex justify-between items-center px-7 pt-4 text-gray-300 font-semibold">


              <div className="flex flex-col justify-start gap-2 mt-3 ml-4">
                <span className='text-[34px] text-gray-400 font-bold '>Specializations</span>
                <p className="text-[20px] text-gray-500">Manage medical specializations in your clinic. </p>

              </div>

              <NavLink to='/Pages/AddSpecialization'>
                <button className='w-52  h-10 flex items-center justify-center gap-2 bg-amber-50 rounded'>
                  <i className='fas fa-plus text-[12px] text-black'></i>
                  <span className='text-[17px] text-black'>Add Specialization</span>
                </button>
              </NavLink>

            </div>


            <div className="flex-1 mx-2 my-2 bg-slate-950 rounded-md p-4">
              <div className="w-full grid grid-cols-[20%_15%_10%_10%] justify-evenly border-b font-semibold border-gray-700 hover:bg-slate-600   hover:text-slate-300 transition-all duration-300 text-gray-400 text-[15px] py-4">
                <div>Name</div>
                <div>Doctors</div>
                <div>Department</div>
                <div>Status</div>

              </div>
              <div className="w-full grid grid-cols-[20%_15%_10%_10%] justify-evenly border-b border-gray-800 hover:bg-slate-600   hover:text-slate-300 transition-all duration-300  py-4 text-sm text-gray-300 ">
                <div>Cardiology</div>
                <div>5</div>
                <div>Internal Medicine</div>
                <div>Active</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Specialization