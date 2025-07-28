import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/ChatGPT Image Jul 28, 2025, 07_48_37 PM.png' 

const Sidebar = () => {
  return (
    <div className="bg-slate-950 w-full px-10 py-4 h-full flex-col">

      
      <div className="flex justify-center mt-4  mb-2">
        <img src={logo} alt="HealthSync Logo" className="w-40 h-auto cursor-pointer hover:scale-104 transition-transform duration-200" />
      </div>

      <ul className='space-y-2'>
        <li className="text-zinc-200  hover:bg-emerald-300 hover:text-amber-950 text-[18px] text-shadow-5xs hover:text-shadow-2xs font-medium text-center cursor-pointer px-4 py-3 rounded-lg hover:scale-110 transition-transform duration-200">Dashboard</li>
        <li className="text-zinc-200  hover:bg-emerald-300 hover:text-amber-950 text-[18px] text-shadow-5xs hover:text-shadow-2xs font-medium text-center cursor-pointer px-4 py-3 rounded-lg hover:scale-110 transition-transform duration-200">My Profile</li>
        <li className="text-zinc-200  hover:bg-emerald-300 hover:text-amber-950 text-[18px] text-shadow-5xs hover:text-shadow-2xs font-medium text-center cursor-pointer px-4 py-3 rounded-lg hover:scale-110 transition-transform duration-200">Appointments</li>
        <li className="text-zinc-200  hover:bg-emerald-300 hover:text-amber-950 text-[18px] text-shadow-5xs hover:text-shadow-2xs font-medium text-center cursor-pointer px-4 py-3 rounded-lg hover:scale-110 transition-transform duration-200">Prescriptions</li>
        <li className="text-zinc-200  hover:bg-emerald-300 hover:text-amber-950 text-[18px] text-shadow-5xs hover:text-shadow-2xs font-medium text-center cursor-pointer px-4 py-3 rounded-lg hover:scale-110 transition-transform duration-200">Lab Records</li>
        <li className="text-zinc-200  hover:bg-emerald-300 hover:text-amber-950 text-[18px] text-shadow-5xs hover:text-shadow-2xs font-medium text-center cursor-pointer px-4 py-3 rounded-lg hover:scale-110 transition-transform duration-200">Messages</li>
        <li className="text-zinc-200  hover:bg-emerald-300 hover:text-amber-950 text-[18px] text-shadow-5xs hover:text-shadow-2xs font-medium text-center cursor-pointer px-4 py-3 rounded-lg hover:scale-110 transition-transform duration-200">Billing & Insurance</li>
        <li className="text-zinc-200  hover:bg-emerald-300 hover:text-amber-950 text-[18px] text-shadow-5xs hover:text-shadow-2xs font-medium text-center cursor-pointer px-4 py-3 rounded-lg hover:scale-110 transition-transform duration-200">Notifications</li>
      </ul>
    </div>
  )
}

export default Sidebar
