import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/ChatGPT Image Jul 28, 2025, 07_48_37 PM.png";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 relative overflow-hidden">

      {/* ================= NAVBAR ================= */}
      <nav className="flex items-center justify-between px-6 py-4 shadow-lg z-10 relative">
        <div className="flex items-center">
          <NavLink to="/">
            <img src={logo} alt="Logo" className="w-25 h-25 object-contain" />
          </NavLink>
        </div>

        <div className="flex items-center space-x-6 bg-gray-800 px-6 py-2 rounded-full shadow-md mr-8 ml-17.5">
          <NavLink to="/About" className="text-cyan-300 font-medium hover:text-white">About</NavLink>
          <NavLink to="/Services" className="text-emerald-300 font-medium hover:text-white">Services</NavLink>
          <NavLink to="/Benefits" className="text-rose-300 font-medium hover:text-white">Benefits</NavLink>
          <NavLink to="/Team" className="text-indigo-300 font-medium hover:text-white">Team</NavLink>
          <NavLink to="/Testinomials" className="text-purple-300 font-medium hover:text-white">Testimonials</NavLink>
          <NavLink to="/Contact" className="text-yellow-300 font-medium hover:text-white">Contact</NavLink>
        </div>

        <div className="w-[120px]"></div>
      </nav>

      {/* ================= HERO SECTION ================= */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-6 py-20 bg-gradient-to-b from-slate-950 via-gray-900 to-slate-950 relative overflow-hidden">

        {/* Animated shapes */}
        <motion.div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <motion.div
            className="absolute bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full opacity-20 w-72 h-72 top-[-10%] left-[-10%]"
            animate={{ x: [0, 180, 0], y: [0, 120, 0] }}
            transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-15 w-96 h-96 bottom-[-25%] right-[-20%]"
            animate={{ x: [-70, 120, -70], y: [0, -80, 0] }}
            transition={{ repeat: Infinity, duration: 28, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-10 w-80 h-80 top-[30%] left-[60%]"
            animate={{ x: [-50, 70, -50], y: [0, 50, 0] }}
            transition={{ repeat: Infinity, duration: 24, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bg-gradient-to-r from-rose-300 to-rose-400 rounded-full opacity-10 w-60 h-60 top-[50%] left-[20%]"
            animate={{ rotate: [0, 360] }}
            transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
          />
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-500 mb-6 z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Services
        </motion.h1>

        {/* Intro */}
        <motion.p
          className="text-lg text-gray-300 mb-6 max-w-3xl z-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          At E-Health Record, we provide comprehensive digital solutions to manage patient data seamlessly, securely, and efficiently. 
          Our services empower hospitals, doctors, and patients with easy access to critical health information.
        </motion.p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6 max-w-5xl z-10">
          {[
            { title: "Patient Record Management", desc: "Secure storage and quick access to patient medical history, prescriptions, and reports.", color: "text-cyan-300" },
            { title: "Doctor & Admin Dashboard", desc: "Streamlined dashboards for doctors and administrators to monitor patients, update records, and ensure smooth workflows.", color: "text-emerald-300" },
            { title: "Appointment Scheduling", desc: "Integrated system for patients to book appointments easily and receive timely notifications.", color: "text-rose-300" },
            { title: "Data Security", desc: "Advanced encryption and privacy measures to protect sensitive medical information.", color: "text-indigo-300" },
            { title: "Analytics & Reports", desc: "Generate detailed reports and insights to improve healthcare outcomes and optimize decision-making.", color: "text-yellow-300" },
            { title: "24/7 Support", desc: "Dedicated support team available around the clock to assist users and ensure uninterrupted service.", color: "text-purple-300" },
          ].map(({ title, desc, color }, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-gray-800 rounded-xl shadow-lg transition flex flex-col items-center text-center"
            >
              <h2 className={`text-xl font-semibold mb-3 ${color}`}>{title}</h2>
              <p className="text-gray-400">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-slate-900 text-gray-400 py-6">
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

export default Services;
