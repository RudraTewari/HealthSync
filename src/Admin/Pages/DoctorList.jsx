import React from 'react'
import { NavLink } from 'react-router-dom'
import AddDoctor from './AddDoctor'
import Sidebar from '../Sidebar'
// import AddDoctor from './AddDoctor'

const DoctorDashboard = () => {
  return (
    <>

      <div className="w-full h-screen grid grid-cols-12">

        <div className="col-span-2 h-full">
          <Sidebar />
        </div>


        <div className="col-span-10 bg-slate-900 h-full flex flex-col">

          <div className="h-16 flex items-center justify-end bg-slate-950 border-b-2 rounded-[5px] px-6 space-x-4">
            <button className="text-[15px] text-gray-300 hover:scale-110">
              <i className="fas fa-bell text-gray-300"></i>
            </button>
            <button className="h-10 w-36 text-[15px] text-amber-100 font-semibold bg-slate-900 border-2 border-slate-900 rounded-full hover:border-amber-100 hover:scale-110 duration-300 ease-in">
              <i className="fas fa-user mr-2.5"></i>User Profile
            </button>
          </div>


          <div className="flex justify-between items-center px-7 pt-4 text-gray-300 font-semibold">

            
            <div className="flex items-center gap-2 text-[30px] ">
              <i className="fas fa-home"></i> <span>Dashboard</span>
              <i className="fas fa-angle-right"></i>
              <i className="fas fa-user-md"></i> <span>Doctors</span>
              <i className="fas fa-angle-right"></i>
              <span>Doctor List</span>
            </div>

            
            <NavLink to='/Pages/AddDoctor'>
              <button className='w-36 h-10 flex items-center justify-center gap-2 bg-amber-50 rounded'>
                <i className='fas fa-plus text-[12px] text-black'></i>
                <span className='text-[17px] text-black'>Add Doctors</span>
              </button>
            </NavLink>

          </div>


          <div className="flex-1 mx-2 my-2 bg-slate-950 rounded-md p-4">
            <div className="w-full grid grid-cols-[20%_15%_10%_10%_10%_25%] justify-evenly border-b font-semibold border-gray-700 text-gray-400 text-[15px]">
              <div>Name</div>
              <div>Specialty</div>
              <div>Status</div>
              <div>Patients</div>
              <div>Experience</div>
              <div>Contact</div>
            </div>
            <div className="w-full grid grid-cols-[20%_15%_10%_10%_10%_25%] justify-evenly border-b border-gray-800 py-3 text-sm text-gray-200">
              <div>Dr. Jane Smith</div>
              <div>Dermatology</div>
              <div>Active</div>
              <div>80</div>
              <div>5 yrs</div>
              <div>jane@example.com</div>
            </div>
          </div>
        </div>
      </div>


    </>

  )
}

export default DoctorDashboard