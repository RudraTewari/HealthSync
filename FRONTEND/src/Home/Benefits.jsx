// Benefits.jsx v2
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/ChatGPT Image Jul 28, 2025, 07_48_37 PM.png";

const Benefits = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950">
      {/* ================= NAVBAR ================= */}
      <nav className="flex items-center justify-between px-6 py-4 shadow-lg">
        {/* Logo (linked to Home) */}
        <div className="flex items-center">
          <NavLink to="/">
            <img
              src={logo}
              alt="Logo"
              className="w-25 h-25 object-contain"
            />
          </NavLink>
        </div>

        {/* Navmenu */}
        <div className="flex items-center space-x-6 bg-gray-800 px-6 py-2 rounded-full shadow-md ml-30 mr-8">
          <NavLink to="/About" className="text-cyan-300 font-medium hover:text-white">About</NavLink>
          <NavLink to="/Services" className="text-emerald-300 font-medium hover:text-white">Services</NavLink>
          <NavLink to="/Benefits" className="text-rose-300 font-medium hover:text-white">Benefits</NavLink>
          <NavLink to="/Team" className="text-indigo-300 font-medium hover:text-white">Team</NavLink>
          <NavLink to="/Testinomials" className="text-purple-300 font-medium hover:text-white">Testimonials</NavLink>
          <NavLink to="/Contact" className="text-yellow-300 font-medium hover:text-white">Contact</NavLink>
        </div>

        {/* Login / Signup */}
        <div className="flex space-x-4 items-center relative -top-[7px]">
          <NavLink to="/Login" className="px-4 py-2 text-gray-300 font-medium hover:text-white hover:bg-gray-800 rounded-lg transition">
            Login
          </NavLink>
          <NavLink to="/Signup" className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg hover:from-indigo-400 hover:to-purple-400 transition">
            Signup
          </NavLink>
        </div>
      </nav>

      {/* ================= HERO SECTION ================= */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-6 pb-16 bg-gradient-to-b from-slate-950 via-gray-900 to-slate-950">
        <h1
          className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-400 to-purple-500 mb-6 leading-tight pb-2"
        >
          Key Benefits
        </h1>
        <p className="text-lg text-gray-300 mb-6 max-w-3xl">
          Discover the advantages of our E-Health Record platform. Designed with patients, doctors, and 
          healthcare providers in mind, it ensures accessibility, security, and efficiency across the healthcare journey.
        </p>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6 max-w-5xl">
          <div className="p-6 bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition">
            <h2 className="text-xl font-semibold text-cyan-300 mb-3">Improved Accessibility</h2>
            <p className="text-gray-400">
              Access patient records anytime, anywhere, ensuring continuity of care across different healthcare facilities.
            </p>
          </div>
          <div className="p-6 bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition">
            <h2 className="text-xl font-semibold text-emerald-300 mb-3">Time Efficiency</h2>
            <p className="text-gray-400">
              Reduce paperwork and save time with streamlined digital workflows for patients and doctors alike.
            </p>
          </div>
          <div className="p-6 bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition">
            <h2 className="text-xl font-semibold text-rose-300 mb-3">Data Security</h2>
            <p className="text-gray-400">
              State-of-the-art encryption and secure protocols protect sensitive patient information at all times.
            </p>
          </div>
          <div className="p-6 bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition">
            <h2 className="text-xl font-semibold text-indigo-300 mb-3">Collaboration</h2>
            <p className="text-gray-400">
              Doctors, specialists, and labs can work together seamlessly with centralized health data access.
            </p>
          </div>
          <div className="p-6 bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition">
            <h2 className="text-xl font-semibold text-yellow-300 mb-3">Cost Savings</h2>
            <p className="text-gray-400">
              Eliminate redundant tests, minimize storage expenses, and reduce administrative overheads.
            </p>
          </div>
          <div className="p-6 bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition">
            <h2 className="text-xl font-semibold text-purple-300 mb-3">Patient Empowerment</h2>
            <p className="text-gray-400">
              Give patients control of their health data, enabling them to track progress and make informed choices.
            </p>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-slate-900 text-gray-400 py-6 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} E-Health Record Platform. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6 mt-2">
          <NavLink to="/Privacy" className="hover:text-cyan-400">Privacy Policy</NavLink>
          <NavLink to="/Terms" className="hover:text-emerald-400">Terms of Service</NavLink>
          <NavLink to="/Help" className="hover:text-rose-400">Help</NavLink>
        </div>
      </footer>
    </div>
  );
};

export default Benefits;
