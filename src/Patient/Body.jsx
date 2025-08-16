import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Sidebar from './Sidebar';

const Body = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Mock summary data for preview in dashboard cards
  const [upcomingAppointments, setUpcomingAppointments] = useState([
    { id: 1, doctor: "Dr. Vikram Singh", date: "2025-08-20", time: "11:00 AM" },
  ]);
  const [latestPrescription, setLatestPrescription] = useState({
    medicine: "Paracetamol 500mg",
    prescribedBy: "Dr. Rohan Mehta",
    date: "2025-07-30",
  });
  const [latestLabReport, setLatestLabReport] = useState({
    testName: "Blood Sugar",
    resultDate: "2025-07-25",
    status: "Normal",
  });
  const [pendingBillsCount, setPendingBillsCount] = useState(2);
  const [activeInsurancePlansCount, setActiveInsurancePlansCount] = useState(1);

  return (
    <div className="flex min-h-screen bg-slate-800  ">
      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Top Navbar */}
        <div className="flex justify-between items-center h-20 bg-slate-900 px-6 mb-6 shadow-lg rounded-xl">
          <div className="font-bold text-3xl bg-gradient-to-r from-blue-300 to-pink-500 text-transparent bg-clip-text flex gap-3">
            <h6>Welcome</h6>
            <span className="font-bold text-gray-300">User</span>
          </div>

          <div className="flex items-center gap-4 relative">
            {/* Notification */}
            <div className="relative cursor-pointer w-11 h-11 flex items-center justify-center bg-slate-900 hover:bg-gray-500 rounded-full transition shadow-xl">
              <i className="fa-solid fa-bell text-white text-xl"></i>
              <span className="absolute -top-1 -right-1 bg-red-500 text-xs text-white px-1.5 py-0.5 rounded-full font-bold">
                2
              </span>
            </div>

            {/* Profile Dropdown */}
            <div className="relative">
              <div
                className="flex items-center gap-2 px-3 py-2 bg-slate-900 hover:bg-gray-500 text-gray-300 rounded-2xl cursor-pointer transition shadow-xl"
                onClick={() => setDropdownOpen(prev => !prev)}
              >
                <i className="fa-solid fa-user text-white"></i>
                <span className="hidden sm:block text-white">User</span>
                <i className={`fa-solid fa-angle-${dropdownOpen ? "up" : "down"} text-white`}></i>
              </div>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 flex flex-col bg-gray-200 text-black w-40 rounded-lg shadow-lg overflow-hidden z-50">
                  <button className="px-4 py-2 text-left w-full hover:bg-white">My Profile</button>
                  <button className="px-4 py-2 text-left w-full hover:bg-white">Change Photo</button>
                  <button className="px-4 py-2 text-left w-full hover:bg-white">Settings</button>
                  <button className="px-4 py-2 text-left w-full hover:bg-white">Logout</button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Overview */}
        <div className="mt-6 mb-6">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent tracking-wide">
            Overview
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-pink-400 rounded-full mt-2"></div>
        </div>

        {/* Dashboard Cards with previews */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-24">
          {/* Appointments */}
          <NavLink to="/user/Appointment" className="transform hover:scale-105 transition">
            <div className="bg-slate-900 p-6 rounded-xl text-white border border-slate-700 hover:border-pink-400 shadow-md hover:shadow-xl transition">
              <div className="text-3xl mb-2 text-pink-400">
                <i className="fa-solid fa-calendar-check"></i>
              </div>
              <h2 className="text-xl font-bold">Appointments</h2>
              {upcomingAppointments.length > 0 ? (
                <p className="mt-2 text-sm">
                  Next: {upcomingAppointments[0].date} at {upcomingAppointments.time} with {upcomingAppointments.doctor}
                </p>
              ) : (
                <p className="mt-2 text-sm text-gray-400">No upcoming appointments</p>
              )}
            </div>
          </NavLink>

          {/* Prescriptions */}
          <NavLink to="/user/Prescription" className="transform hover:scale-105 transition">
            <div className="bg-slate-900 p-6 rounded-xl text-white border border-slate-700 hover:border-green-400 shadow-md hover:shadow-xl transition">
              <div className="text-3xl mb-2 text-green-400">
                <i className="fa-solid fa-prescription-bottle-medical"></i>
              </div>
              <h2 className="text-xl font-bold">Prescriptions</h2>
              {latestPrescription ? (
                <p className="mt-2 text-sm">
                  Latest: {latestPrescription.medicine} prescribed by {latestPrescription.prescribedBy} on {latestPrescription.date}
                </p>
              ) : (
                <p className="mt-2 text-sm text-gray-400">No prescriptions</p>
              )}
            </div>
          </NavLink>

          {/* Lab Records */}
          <NavLink to="/user/LabReport" className="transform hover:scale-105 transition">
            <div className="bg-slate-900 p-6 rounded-xl text-white border border-slate-700 hover:border-yellow-400 shadow-md hover:shadow-xl transition">
              <div className="text-3xl mb-2 text-yellow-400">
                <i className="fa-solid fa-vials"></i>
              </div>
              <h2 className="text-xl font-bold">Lab Records</h2>
              {latestLabReport ? (
                <p className="mt-2 text-sm">
                  Last test: {latestLabReport.testName} - {latestLabReport.status} ({latestLabReport.resultDate})
                </p>
              ) : (
                <p className="mt-2 text-sm text-gray-400">No recent lab records</p>
              )}
            </div>
          </NavLink>

          {/* Billing & Payment */}
          <NavLink to="/user/BillingPayment" className="transform hover:scale-105 transition">
            <div className="bg-slate-900 p-6 rounded-xl text-white border border-slate-700 hover:border-purple-400 shadow-md hover:shadow-xl transition">
              <div className="text-3xl mb-2 text-purple-400">
                <i className="fa-solid fa-file-invoice-dollar"></i>
              </div>
              <h2 className="text-xl font-bold">Billing & Payment</h2>
              <p className="mt-2 text-sm">{pendingBillsCount} pending bill{pendingBillsCount !== 1 ? "s" : ""}</p>
            </div>
          </NavLink>

          {/* Insurance */}
          <NavLink to="/user/Insurance" className="transform hover:scale-105 transition">
            <div className="bg-slate-900 p-6 rounded-xl text-white border border-slate-700 hover:border-cyan-400 shadow-md hover:shadow-xl transition">
              <div className="text-3xl mb-2 text-cyan-400">
                <i className="fa-solid fa-shield-heart"></i>
              </div>
              <h2 className="text-xl font-bold">Insurance</h2>
              <p className="mt-2 text-sm">{activeInsurancePlansCount} active plan{activeInsurancePlansCount !== 1 ? "s" : ""}</p>
            </div>
          </NavLink>
        </div>

        {/* Floating Chatbot */}
        <div className="fixed bottom-6 right-6 z-50">
          <div className="group bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-full flex items-center gap-2 shadow-xl cursor-pointer transition-all">
            <i className="fa-solid fa-robot text-xl"></i>
            <span className="font-semibold">HealthBuddy</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
