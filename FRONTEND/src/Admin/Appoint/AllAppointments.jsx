import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Sidebar from '../Sidebar'
import Completed from './Completed'
import Cancelled from './Cancelled'
import Appointments from './Appointments'
import AdminProfile from '../AdminProfile'

const AllAppointments = () => {
  const [appointments, setAppointments] = useState([])
  const [activeTab, setActiveTab] = useState('allAppoint')

  // Fetch appointments from backend
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/appointments") // change URL as per your backend
        const data = await response.json()
        setAppointments(data)
      } catch (error) {
        console.error("Error fetching appointments:", error)
      }
    }

    fetchAppointments()
  }, [])

  return (
    <div className='w-full min-h-screen items-stretch'>
      <div className="w-full min-h-screen grid grid-cols-12">
        {/* Sidebar */}
        <div className="col-span-2">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="col-span-10 flex flex-col bg-slate-900 min-h-screen">
          {/* Top Bar */}
          <div className="h-16 flex items-center justify-end bg-slate-950 border-b-2 rounded-[5px] px-6 space-x-4">
            <button className="text-[15px] text-gray-300 hover:scale-110">
              <i className="fas fa-bell text-gray-300"></i>
            </button>
            <NavLink to="/Admin/AdminProfile" className="h-10 w-36 flex flex-wrap bg-slate-900 border-2 border-slate-900 rounded-full hover:border-amber-100 hover:scale-110 duration-300 ease-in">
              <i className="fas fa-user mr-2.5 text-white ml-2 mt-2.5"></i>
              <h2 className="text-[15px] text-white mt-2">Admin Profile</h2>
            </NavLink>
          </div>

          {/* Header */}
          <div className="flex flex-col justify-start gap-2 mt-5 ml-8">
            <span className='text-[34px] text-gray-400 font-bold '>Appointments</span>
            <p className="text-[20px] text-gray-500">Manage your clinic's appointments and schedules. </p>
          </div>

          {/* Tabs + Add Button */}
          <div className="flex-1 mx-2 my-2 bg-slate-950 rounded-md p-4 mt-5">
            <div className="flex justify-between items-center mb-6">
              <div className="flex space-x-6">
                <button
                  onClick={() => setActiveTab('allAppoint')}
                  className={`px-4 py-2 rounded-full ${activeTab === 'allAppoint' ? 'bg-white text-black' : 'bg-gray-800 text-gray-400 hover:bg-gray-400 hover:text-black'}`}
                >
                  All Appointments
                </button>
              </div>

              <NavLink to='/Appoint/AddAppointments'>
                <button className='w-52 h-10 flex items-center justify-center gap-2 bg-amber-50 rounded'>
                  <i className='fas fa-plus text-[12px] text-black font-semibold'></i>
                  <span className='text-[17px] text-black font-semibold'>Add Appointments</span>
                </button>
              </NavLink>
            </div>

            {/* Tab Content */}
            {activeTab === 'allAppoint' && <Appointments appointments={appointments} />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllAppointments