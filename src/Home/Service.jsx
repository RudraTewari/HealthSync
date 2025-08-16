// Services.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/ChatGPT Image Jul 28, 2025, 07_48_37 PM.png";

const Services = () => {
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
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-500 mb-6">
          Our Services
        </h1>
        <p className="text-lg text-gray-300 mb-6 max-w-3xl">
          At E-Health Record, we provide comprehensive digital solutions to manage patient data seamlessly, securely, and efficiently. 
          Our services are designed to empower hospitals, doctors, and patients with easy access to critical health information.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6 max-w-5xl">
          <div className="p-6 bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition">
            <h2 className="text-xl font-semibold text-cyan-300 mb-3">Patient Record Management</h2>
            <p className="text-gray-400">
              Secure storage and quick access to patient medical history, prescriptions, and reports at your fingertips.
            </p>
          </div>
          <div className="p-6 bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition">
            <h2 className="text-xl font-semibold text-emerald-300 mb-3">Doctor & Admin Dashboard</h2>
            <p className="text-gray-400">
              Streamlined dashboards for doctors and administrators to monitor patients, update records, and ensure smooth workflows.
            </p>
          </div>
          <div className="p-6 bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition">
            <h2 className="text-xl font-semibold text-rose-300 mb-3">Appointment Scheduling</h2>
            <p className="text-gray-400">
              Integrated scheduling system for patients to book appointments easily and receive timely notifications.
            </p>
          </div>
          <div className="p-6 bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition">
            <h2 className="text-xl font-semibold text-indigo-300 mb-3">Data Security</h2>
            <p className="text-gray-400">
              Advanced encryption and privacy measures to protect sensitive medical information against unauthorized access.
            </p>
          </div>
          <div className="p-6 bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition">
            <h2 className="text-xl font-semibold text-yellow-300 mb-3">Analytics & Reports</h2>
            <p className="text-gray-400">
              Generate detailed reports and insights to improve healthcare outcomes and optimize decision-making.
            </p>
          </div>
          <div className="p-6 bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition">
            <h2 className="text-xl font-semibold text-purple-300 mb-3">24/7 Support</h2>
            <p className="text-gray-400">
              Dedicated support team available around the clock to assist users and ensure uninterrupted service.
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

export default Services;
