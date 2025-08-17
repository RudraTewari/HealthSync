import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar'
import { NavLink } from 'react-router-dom'

const Specialization = () => {
  // dummy data for now, later will be fetched from backend
  const [specializations, setSpecializations] = useState([
    { id: 1, name: "Cardiology", doctors: 5, department: "Internal Medicine", status: "Active" },
    { id: 2, name: "Neurology", doctors: 3, department: "Neuroscience", status: "Active" },
    { id: 3, name: "Dermatology", doctors: 2, department: "Skin Care", status: "Inactive" },
  ]);

  // future use: fetch data from backend
  useEffect(() => {
    // Example for later:
    // fetch("http://localhost:5000/api/specializations")
    //   .then(res => res.json())
    //   .then(data => setSpecializations(data))
    //   .catch(err => console.error(err));
  }, []);

  return (
    <>
      <div className='w-full min-h-screen items-stretch'>
        <div className="w-full min-h-screen grid grid-cols-12">
          <div className="col-span-2">
            <Sidebar />
          </div>
          <div className="col-span-10 flex flex-col bg-slate-900 min-h-screen">

            {/* top navbar */}
            <div className="h-16 flex items-center justify-end bg-slate-950 border-b-2 rounded-[5px] px-6 space-x-4">
              <button className="text-[15px] text-gray-300 hover:scale-110">
                <i className="fas fa-bell text-gray-300"></i>
              </button>
              <button className="h-10 w-36 text-[15px] text-amber-100 font-semibold bg-slate-900 border-2 border-slate-900 rounded-full hover:border-amber-100 hover:scale-110 duration-300 ease-in">
                <i className="fas fa-user mr-2.5"></i>User Profile
              </button>
            </div>

            {/* heading + button */}
            <div className="flex justify-between items-center px-7 pt-4 text-gray-300 font-semibold">
              <div className="flex flex-col justify-start gap-2 mt-3 ml-4">
                <span className='text-[34px] text-gray-400 font-bold'>Specializations</span>
                <p className="text-[20px] text-gray-500">Manage medical specializations in your clinic.</p>
              </div>

              <NavLink to='/Pages/AddSpecialization'>
                <button className='w-52 h-10 flex items-center justify-center gap-2 bg-amber-50 rounded'>
                  <i className='fas fa-plus text-[12px] text-black'></i>
                  <span className='text-[17px] text-black'>Add Specialization</span>
                </button>
              </NavLink>
            </div>

            {/* table */}
            <div className="flex-1 mx-2 my-2 bg-slate-950 rounded-md p-4">
              {/* table header */}
              <div className="w-full grid grid-cols-[20%_15%_20%_10%] justify-evenly border-b font-semibold border-gray-700 text-gray-400 text-[15px] py-4">
                <div>Name</div>
                <div>Doctors</div>
                <div>Department</div>
                <div>Status</div>
              </div>

              {/* table rows */}
              {specializations.map((item) => (
                <div key={item.id} className="w-full grid grid-cols-[20%_15%_20%_10%] justify-evenly border-b border-gray-800 py-4 text-sm text-gray-300 hover:bg-slate-600 hover:text-slate-300 transition-all duration-300">
                  <div>{item.name}</div>
                  <div>{item.doctors}</div>
                  <div>{item.department}</div>
                  <div>{item.status}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Specialization
