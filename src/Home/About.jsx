import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/ChatGPT Image Jul 28, 2025, 07_48_37 PM.png";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950">
      {/* ================= NAVBAR (same as v7) ================= */}
      <nav className="flex items-center justify-between px-6 py-4 shadow-lg">
        {/* Logo */}
        <NavLink to="/">
          <img
            src={logo}
            alt="Logo"
            className="w-25 h-25 object-contain"
          />
        </NavLink>

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
          <NavLink to="/Login" className="px-4 py-2 text-gray-300 font-medium hover:text-white hover:bg-gray-800 rounded-lg transition">Login</NavLink>
          <NavLink to="/Signup" className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg hover:from-indigo-400 hover:to-purple-400 transition">Signup</NavLink>
        </div>
      </nav>

      {/* ================= HERO SECTION (Expanded) ================= */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-6 py-16 bg-gradient-to-b from-slate-950 via-gray-900 to-slate-950">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-indigo-500 mb-6">
          About Our Platform
        </h1>
        <p className="text-lg text-gray-300 mb-12 max-w-3xl">
          E-Health Record is built to transform the healthcare experience by offering secure, reliable, 
          and user-friendly digital record management. We connect patients, doctors, and healthcare 
          administrators seamlessly to improve outcomes and efficiency.
        </p>

        {/* Mission - Vision - Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
          {/* Mission */}
          <div className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">Our Mission</h2>
            <p className="text-gray-300 text-base leading-relaxed">
              To provide a digital healthcare solution that empowers patients, supports doctors, and 
              simplifies administration with secure, real-time data access.
            </p>
          </div>

          {/* Vision */}
          <div className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h2 className="text-2xl font-bold text-emerald-400 mb-4">Our Vision</h2>
            <p className="text-gray-300 text-base leading-relaxed">
              To become the most trusted e-health record platform, making healthcare accessible, 
              transparent, and patient-centered across all regions.
            </p>
          </div>

          {/* Values */}
          <div className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h2 className="text-2xl font-bold text-indigo-400 mb-4">Our Values</h2>
            <p className="text-gray-300 text-base leading-relaxed">
              We value innovation, security, and integrity. Our platform is built with compassion 
              for patients and dedication to healthcare professionals worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* ================= FOOTER (same as v7) ================= */}
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

export default AboutPage;
