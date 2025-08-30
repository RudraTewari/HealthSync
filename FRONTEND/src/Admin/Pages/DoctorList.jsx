import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Sidebar from '../Sidebar'

const DoctorDashboard = () => {
  const [doctors, setDoctors] = useState([])

  // Fetch doctors from backend API
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/doctors") // change URL to your backend route
        const data = await response.json()
        setDoctors(data)
      } catch (error) {
        console.error("Error fetching doctors:", error)
      }
    }

    fetchDoctors()
  }, [])

  return (
    <div className="w-full h-screen grid grid-cols-12">
      {/* Sidebar */}
      <div className="col-span-2 h-full">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="col-span-10 bg-slate-900 h-full flex flex-col">
        {/* Top Bar */}
        <div className="h-16 flex items-center justify-end bg-slate-950 border-b-2 rounded-[5px] px-6 space-x-4">
          <button className="text-[15px] text-gray-300 hover:scale-110">
            <i className="fas fa-bell text-gray-300"></i>
          </button>
          <button className="h-10 w-36 text-[15px] text-amber-100 font-semibold bg-slate-900 border-2 border-slate-900 rounded-full hover:border-amber-100 hover:scale-110 duration-300 ease-in">
            <i className="fas fa-user mr-2.5"></i>User Profile
          </button>
        </div>

        {/* Header */}
        <div className="flex justify-between items-center px-7 pt-4 text-gray-300 font-semibold">
          <div className="flex flex-col justify-start gap-2 text-[30px] mt-3 ml-4">
            <span className="text-[34px] text-gray-400 font-bold">Doctors</span>
            <p className="text-[20px] text-gray-500 pb-2">
              Manage your medical staff and their information.
            </p>
          </div>

          <NavLink to="/Pages/AddDoctor">
            <button className="w-36 h-10 flex items-center justify-center gap-2 bg-amber-50 rounded">
              <i className="fas fa-plus text-[12px] text-black"></i>
              <span className="text-[17px] text-black">Add Doctors</span>
            </button>
          </NavLink>
        </div>

        {/* Doctors Table */}
        <div className="flex-1 mx-2 my-2 bg-slate-950 rounded-md p-4">
          {/* Table Header */}
          <div className="w-full grid grid-cols-[20%_20%_15%_15%_30%] border-b font-semibold border-gray-700 text-gray-400 text-[15px] py-4">
            <div className="px-4 text-left">Name</div>
            <div className="px-4 text-left">Specialty</div>
            <div className="px-4 text-left">Position</div>
            <div className="px-4 text-left">Experience</div>
            <div className="px-4 text-left">Contact</div>
          </div>

          {/* Doctor Rows */}
          {doctors.length > 0 ? (
            doctors.map((doc) => (
              <div
                key={doc.id}
                className="w-full grid grid-cols-[20%_20%_15%_15%_30%] border-b border-gray-800 py-4 text-sm text-gray-300 hover:bg-slate-800 transition-all duration-300"
              >
                <div className="px-4 text-left">{doc.name}</div>
                <div className="px-4 text-left">{doc.specialty}</div>
                <div className="px-4 text-left">{doc.position}</div>
                <div className="px-4 text-left">{doc.experience} yrs</div>
                <div className="px-4 text-left">{doc.contact}</div>
              </div>
            ))
          ) : (
            <div className="text-gray-500 text-center py-6">
              No doctors found.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default DoctorDashboard
