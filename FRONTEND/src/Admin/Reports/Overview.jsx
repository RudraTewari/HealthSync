import React from 'react'
import Sidebar from '../Sidebar'
import AppointmentReports from './AppointmentReports'
import FinanceReports from './FinanceReports'
import { Calendar, LineChart } from "lucide-react";
import { NavLink } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import AdminProfile from '../AdminProfile';

const Overview = () => {
  return (
    <>
      <div className='w-full min-h-screen items-stretch'>
        <div className="w-full min-h-screen grid grid-cols-12">
          <div className="col-span-2">
            <Sidebar />
          </div>
          <div className="col-span-10 flex flex-col bg-slate-900 min-h-screen">
            <div className="h-16 flex items-center justify-end bg-slate-950 border-b-2 rounded-[5px] px-6 space-x-4">
              <button className="text-[15px] text-gray-300 hover:scale-110">
                <i className="fas fa-bell text-gray-300"></i>
              </button>
              <NavLink to="/Admin/AdminProfile" className="h-10 w-36 flex flex-wrap bg-slate-900 border-2 border-slate-900 rounded-full hover:border-amber-100 hover:scale-110 duration-300 ease-in">
                <i className="fas fa-user mr-2.5 text-white ml-2 mt-2.5"></i>
                <h2 className="text-[15px] text-white mt-2">Admin Profile</h2>
              </NavLink>
            </div>

            <div className="flex flex-col justify-start  gap-2 mt-5 ml-8">
              <span className='text-[34px] text-gray-400 font-bold '>Reports</span>
              <p className="text-[20px] text-gray-500">Access and generate detailed reports for your clinic</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-8 px-8">
              {/* Appointment Reports */}
              <div className="bg-slate-950 border border-neutral-700 rounded-2xl shadow-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="w-6 h-6 text-blue-400" />
                  <h2 className="text-xl font-semibold text-gray-400">Appointment Reports</h2>
                </div>
                <p className="text-gray-400 text-sm mb-4">
                  Track appointment metrics, trends, and patient attendance
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Total Appointments</span>
                    <span className="font-medium text-gray-400">1,248</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Completion Rate</span>
                    <span className="font-medium text-gray-400">70.2%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">No-Show Rate</span>
                    <span className="font-medium text-gray-400 ">6.8%</span>
                  </div>
                </div>
                <NavLink to="/Reports/AppointmentReports">
                  <Button className="w-full mt-6 text-gray-950  bg-amber-100 hover:text-amber-100 hover:bg-gray-500">View Report</Button>
                </NavLink>
              </div>

              {/* Financial Reports */}
              <div className="bg-slate-950 border border-neutral-700 rounded-2xl shadow-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <LineChart className="w-6 h-6 text-green-400" />
                  <h2 className="text-xl font-semibold text-gray-400">Financial Reports</h2>
                </div>
                <p className="text-gray-400 text-sm mb-4">
                  Track revenue, expenses, and financial performance
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between ">
                    <span className='text-gray-400'>Total Revenue</span>
                    <span className="font-medium text-gray-400">$128,450</span>
                  </div>
                  <div className="flex justify-between">
                    <span className='text-gray-400'>Net Profit</span>
                    <span className="font-medium text-gray-400">$41,125</span>
                  </div>
                  <div className="flex justify-between">
                    <span className='text-gray-400'>Growth</span>
                    <span className="font-medium text-gray-400">+12.8%</span>
                  </div>
                </div>
                <NavLink to="/Reports/FinanceReports">
                  <Button className="w-full mt-6 text-gray-950 bg-amber-100 hover:text-amber-100 hover:bg-gray-500">View Report</Button>
                </NavLink>
              </div>
            </div>          </div>
        </div>
      </div>
    </>
  )
}

export default Overview