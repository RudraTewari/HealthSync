import React from 'react';
import { NavLink } from 'react-router-dom';

const Body = () => {
  return (
    <>
      <div className="min-h-screen w-full bg-slate-800">
        {/* Top Navbar */}
        <div className="h-20 w-full bg-slate-900">
          <div className="font-bold text-3xl w-max bg-gradient-to-r from-blue-300 to-pink-500 text-transparent bg-clip-text ml-7 pt-5 flex gap-3">
            <h6>Welcome</h6>
            <span className="font-bold text-gray-300">User</span>
          </div>

          {/* Notification Icon */}
          <div className="w-11 h-11 ml-auto mr-40 -mt-10 bg-slate-900 hover:bg-gray-500 text-gray-300 hover:text-slate-900 flex items-center justify-center rounded-full cursor-pointer transition-all shadow-xl">
            <i className="fa-solid fa-bell text-xl"></i>
            <span className="absolute -mt-8 ml-6 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
              2
            </span>
          </div>

          {/* Profile Dropdown */}
          <div className="group ml-auto mr-4 -mt-11 flex flex-col items-end">
            <div className="flex items-center gap-2 px-3 py-2 bg-slate-900 hover:bg-gray-500 text-gray-300 hover:text-slate-900 rounded-2xl cursor-pointer transition-all shadow-xl">
              <div className="text-xl"><i className="fa-solid fa-user"></i></div>
              <div className="hidden sm:block"><p className="font-semibold leading-4">User</p></div>
              <div className="text-xl"><i className="fa-solid fa-angle-down"></i></div>
            </div>
            <div className="hidden group-hover:flex flex-col bg-gray-200 text-black mt-2 w-40 rounded-lg shadow-lg overflow-hidden z-50">
              <button className="px-4 py-2 text-left hover:bg-white">My Profile</button>
              <button className="px-4 py-2 text-left hover:bg-white">Change Photo</button>
              <button className="px-4 py-2 text-left hover:bg-white">Settings</button>
              <button className="px-4 py-2 text-left hover:bg-white">Logout</button>
            </div>
          </div>
        </div>

        {/* Overview */}
        <div className="mt-10 ml-7 mb-6">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent tracking-wide">
            Overview
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-pink-400 rounded-full mt-2"></div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-6 pb-24">
          <NavLink to="/health-records" className="transform hover:scale-105 transition">
            <div className="bg-slate-900 p-6 rounded-xl text-white border border-slate-700 hover:border-blue-400 shadow-md hover:shadow-xl transition">
              <div className="text-3xl mb-2 text-blue-400"><i className="fa-solid fa-notes-medical"></i></div>
              <h2 className="text-xl font-bold">Health Records</h2>
              <p>View and manage your health history.</p>
            </div>
          </NavLink>

          <NavLink to="/appointments" className="transform hover:scale-105 transition">
            <div className="bg-slate-900 p-6 rounded-xl text-white border border-slate-700 hover:border-pink-400 shadow-md hover:shadow-xl transition">
              <div className="text-3xl mb-2 text-pink-400"><i className="fa-solid fa-calendar-check"></i></div>
              <h2 className="text-xl font-bold">Appointments</h2>
              <p>Upcoming and past appointments.</p>
            </div>
          </NavLink>

          <NavLink to="/prescriptions" className="transform hover:scale-105 transition">
            <div className="bg-slate-900 p-6 rounded-xl text-white border border-slate-700 hover:border-green-400 shadow-md hover:shadow-xl transition">
              <div className="text-3xl mb-2 text-green-400"><i className="fa-solid fa-prescription-bottle-medical"></i></div>
              <h2 className="text-xl font-bold">Prescriptions</h2>
              <p>Track your medications.</p>
            </div>
          </NavLink>

          <NavLink to="/lab-reports" className="transform hover:scale-105 transition">
            <div className="bg-slate-900 p-6 rounded-xl text-white border border-slate-700 hover:border-yellow-400 shadow-md hover:shadow-xl transition">
              <div className="text-3xl mb-2 text-yellow-400"><i className="fa-solid fa-vials"></i></div>
              <h2 className="text-xl font-bold">Lab Reports</h2>
              <p>Lab results and medical tests.</p>
            </div>
          </NavLink>

          <NavLink to="/billing" className="transform hover:scale-105 transition">
            <div className="bg-slate-900 p-6 rounded-xl text-white border border-slate-700 hover:border-purple-400 shadow-md hover:shadow-xl transition">
              <div className="text-3xl mb-2 text-purple-400"><i className="fa-solid fa-file-invoice-dollar"></i></div>
              <h2 className="text-xl font-bold">Billing & Payment</h2>
              <p>View and manage bills.</p>
            </div>
          </NavLink>

          <NavLink to="/insurance" className="transform hover:scale-105 transition">
            <div className="bg-slate-900 p-6 rounded-xl text-white border border-slate-700 hover:border-cyan-400 shadow-md hover:shadow-xl transition">
              <div className="text-3xl mb-2 text-cyan-400"><i className="fa-solid fa-shield-heart"></i></div>
              <h2 className="text-xl font-bold">Insurance</h2>
              <p>Insurance plans and claims.</p>
            </div>
          </NavLink>
        </div>

        {/* Chatbot */}
        <div className="mt-20 flex justify-end pr-6 pb-10">
          <div className="group bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-full flex items-center gap-2 shadow-xl cursor-pointer transition-all">
            <i className="fa-solid fa-robot text-xl"></i>
            <span className="font-semibold">HealthBuddy</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
