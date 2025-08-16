import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/ChatGPT Image Jul 28, 2025, 07_48_37 PM.png";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950">
      {/* ================= NAVBAR (with NavLinks) ================= */}
      <nav className="flex items-center justify-between px-6 py-4 shadow-lg">
        {/* Logo */}
        <div className="flex items-center">
          <NavLink to="/">
            <img
              src={logo}
              alt="Logo"
              className="w-25 h-25 object-contain"
            />
          </NavLink>
        </div>

        {/* Navmenu (grouped, NavLink instead of <a>) */}
        <div className="flex items-center space-x-6 bg-gray-800 px-6 py-2 rounded-full shadow-md ml-30 mr-8">
          <NavLink
            to="/About"
            className="text-cyan-300 font-medium hover:text-white"
          >
            About
          </NavLink>
          <NavLink
            to="/Services"
            className="text-emerald-300 font-medium hover:text-white"
          >
            Services
          </NavLink>
          <NavLink
            to="/Benefits"
            className="text-rose-300 font-medium hover:text-white"
          >
            Benefits
          </NavLink>
          <NavLink
            to="/Team"
            className="text-indigo-300 font-medium hover:text-white"
          >
            Team
          </NavLink>
          <NavLink
            to="/Testinomials"
            className="text-purple-300 font-medium hover:text-white"
          >
            Testimonials
          </NavLink>
          <NavLink
            to="/Contact"
            className="text-yellow-300 font-medium hover:text-white"
          >
            Contact
          </NavLink>
        </div>


        {/* Login / Signup Section */}
        <div className="flex space-x-4 items-center relative -top-[7px]">
          <NavLink
            to="/Login"
            className="px-4 py-2 text-gray-300 font-medium hover:text-white hover:bg-gray-800 rounded-lg transition"
          >
            Login
          </NavLink>
          <NavLink
            to="/Signup"
            className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg hover:from-indigo-400 hover:to-purple-400 transition"
          >
            Signup
          </NavLink>
        </div>
      </nav>

      {/* ================= HERO SECTION (unchanged) ================= */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-slate-950 via-gray-900 to-slate-950">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-indigo-500 mb-4">
          Welcome to E-Health Record
        </h1>
        <p className="text-lg text-gray-300 mb-6 max-w-2xl">
          Manage patient records efficiently and securely. Choose your role below
          to get started with our platform.
        </p>
        <div className="flex space-x-6">
          <NavLink
            to="/user"
            className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-6 py-3 rounded-lg shadow-lg hover:from-emerald-400 hover:to-cyan-400"
          >
            Patient Section
          </NavLink>
          <NavLink
            to="/Admin"
            className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-6 py-3 rounded-lg shadow-lg hover:from-rose-400 hover:to-pink-400"
          >
            Admin Section
          </NavLink>
        </div>
      </section>

      {/* ================= FOOTER (unchanged) ================= */}
      <footer className="bg-slate-900 text-gray-400 py-6 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} E-Health Record Platform. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6 mt-2">
          <NavLink to="/Privacy" className="hover:text-cyan-400">
            Privacy Policy
          </NavLink>
          <NavLink to="/Terms" className="hover:text-emerald-400">
            Terms of Service
          </NavLink>
          <NavLink to="/Help" className="hover:text-rose-400">
            Help
          </NavLink>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
