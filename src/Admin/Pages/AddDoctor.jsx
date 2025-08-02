import React from 'react'
import Sidebar from '../Sidebar'

const AddDoctor = () => {
  return (
    <>
      <div className='w-full min-h-screen items-stretch'>
        <div className=" grid grid-cols-12 p-0 m-0">
          <div className="col-span-2 p-0 m-0">
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

            <div className="flex items-center gap-2 text-[30px] text-gray-400 mt-5 ml-3">
              <i className="fas fa-home"></i> <span>Dashboard</span>
              <i className="fas fa-angle-right"></i>
              <i className="fas fa-user-md"></i> <span>Doctors</span>
              <i className="fas fa-angle-right"></i>
              <span>Add Doctor</span>
             
            </div>

            <div className="flex-1 mx-2 my-2 bg-slate-950 rounded-md p-4 mt-5">
              

            </div>
          </div>
        </div>




      </div>

    
    </>
  )
}

export default AddDoctor