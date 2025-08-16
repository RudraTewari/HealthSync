import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/ChatGPT Image Jul 28, 2025, 07_48_37 PM.png' 

const Sidebar = () => {
  const baseClasses ="block text-[18px] font-[400] font-sans text-center cursor-pointer px-4 py-3 rounded-lg transition-transform duration-200 text-shadow-5xs hover:text-shadow-2xs";
  const activeClasses = "bg-emerald-300 text-amber-950 scale-110";
  const inactiveClasses = "text-zinc-200 hover:bg-emerald-300 hover:text-amber-950 hover:scale-110";

  return (
    <div className="fixed top-0 left-0 h-screen w-1/6 bg-slate-950 px-10 py-4 flex-col">

      <NavLink to="/">
        <div className="flex justify-center mt-4  mb-2">
          <img src={logo} alt="HealthSync Logo" className="w-40 h-auto cursor-pointer hover:scale-104 transition-transform duration-200" />
        </div>
      </NavLink>
      <ul className='space-y-2'>
        <li><NavLink to="/user" end className={({ isActive }) => `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}>Dashboard</NavLink></li>
        <li><NavLink to="/user/Appointment" className={({ isActive }) => `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}>Appointments</NavLink></li>
        <li><NavLink to="/user/Prescription" className={({ isActive }) => `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}>Prescriptions</NavLink></li>
        <li><NavLink to="/user/LabReport" className={({ isActive }) => `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}>Lab Records</NavLink></li>
        <li><NavLink to="/user/BillingPayment" className={({ isActive }) => `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}>Billing & Payment</NavLink></li>
        <li><NavLink to="/user/Insurance" className={({ isActive }) => `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}>Insurance</NavLink></li>  
      </ul>
    </div>
  )
}

export default Sidebar
