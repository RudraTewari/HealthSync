// HomePage.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/ChatGPT Image Jul 28, 2025, 07_48_37 PM.png";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 relative overflow-hidden">

      {/* ================= NAVBAR ================= */}
      <nav className="flex items-center justify-between px-6 py-4 shadow-lg z-10 relative">
        <div className="flex items-center">
          <NavLink to="/">
            <img src={logo} alt="Logo" className="w-25 h-25 object-contain" />
          </NavLink>
        </div>
        <div className="flex items-center space-x-6 bg-gray-800 px-6 py-2 rounded-full shadow-md mr-8 ml-13.5">
          <NavLink to="/About" className="text-cyan-300 font-medium hover:text-white">About</NavLink>
          <NavLink to="/Services" className="text-emerald-300 font-medium hover:text-white">Services</NavLink>
          <NavLink to="/Benefits" className="text-rose-300 font-medium hover:text-white">Benefits</NavLink>
          <NavLink to="/Team" className="text-indigo-300 font-medium hover:text-white">Team</NavLink>
          <NavLink to="/Testinomials" className="text-purple-300 font-medium hover:text-white">Testimonials</NavLink>
          <NavLink to="/Contact" className="text-yellow-300 font-medium hover:text-white">Contact</NavLink>
        </div>
        <div className="w-[120px]"></div>
      </nav>

      {/* ================= HERO ================= */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-6 z-10 relative">

        {/* Floating Shapes */}
        <motion.div className="absolute w-4 h-4 bg-cyan-400 rounded-full top-10 left-10 opacity-40"
          animate={{ x: [0, 200, 0], y: [0, 100, 0] }}
          transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
        />
        <motion.div className="absolute w-6 h-6 bg-pink-400 rounded-lg top-1/3 left-1/2 opacity-30"
          animate={{ x: [-100, 150, -100], y: [0, 50, 0] }}
          transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
        />
        <motion.div className="absolute w-5 h-5 bg-emerald-400 rounded-full top-2/3 right-20 opacity-20"
          animate={{ x: [0, -150, 0], y: [0, 80, 0] }}
          transition={{ repeat: Infinity, duration: 22, ease: "easeInOut" }}
        />

        {/* Welcome Text */}
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-indigo-500 mb-4 z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to E-Health Record
        </motion.h1>

        <motion.p
          className="text-lg text-gray-300 mb-6 max-w-2xl z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Manage patient records efficiently and securely. Choose your role below to get started with our platform.
        </motion.p>

        <div className="flex space-x-6 z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <NavLink
              to="/user"
              className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-6 py-3 rounded-lg shadow-lg hover:from-emerald-400 hover:to-cyan-400 transition-transform transform hover:scale-105"
            >
              Patient Section
            </NavLink>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <NavLink
              to="/Admin"
              className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-6 py-3 rounded-lg shadow-lg hover:from-rose-400 hover:to-pink-400 transition-transform transform hover:scale-105"
            >
              Admin Section
            </NavLink>
          </motion.div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-slate-900 text-gray-400 py-6 z-10 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-3 items-center">
          <div className="text-sm">© {new Date().getFullYear()} E-Health Record Platform. All rights reserved.</div>
          <div className="flex justify-center space-x-6 px-6">
            <NavLink to="/Privacy" className="hover:text-cyan-400">Privacy Policy</NavLink>
            <NavLink to="/Terms" className="hover:text-emerald-400">Terms of Service</NavLink>
            <NavLink to="/Help" className="hover:text-rose-400">Help</NavLink>
          </div>
          <div className="text-sm text-gray-500 italic text-right px-6">Created by <span className="text-cyan-400 font-medium">DEVANTIX</span></div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
