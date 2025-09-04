// Team.jsx v11 (Dynamic Animated Background + Scale Hover)
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/ChatGPT Image Jul 28, 2025, 07_48_37 PM.png";
import { Code2 } from "lucide-react";
import { motion } from "framer-motion";

const Team = () => {
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
      <section className="flex-1 flex flex-col items-center text-center px-6 pb-16 bg-gradient-to-b from-slate-950 via-gray-900 to-slate-950 relative overflow-hidden">

        {/* Dynamic Background Shapes */}
        <motion.div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          {/* Large Cyan Shape */}
          <motion.div
            className="absolute bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full opacity-25 w-80 h-80 top-[-15%] left-[-10%]"
            animate={{ x: [0, 200, -100, 0], y: [0, 150, -80, 0] }}
            transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
          />
          {/* Purple Shape */}
          <motion.div
            className="absolute bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-15 w-96 h-96 bottom-[-30%] right-[-25%]"
            animate={{ x: [-50, 120, -90, 0], y: [0, -100, 50, 0] }}
            transition={{ repeat: Infinity, duration: 30, ease: "easeInOut" }}
          />
          {/* Floating Yellow Shape */}
          <motion.div
            className="absolute bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-10 w-72 h-72 top-[25%] left-[65%]"
            animate={{ x: [-30, 80, -60, 0], y: [0, 70, -40, 0] }}
            transition={{ repeat: Infinity, duration: 28, ease: "easeInOut" }}
          />
          {/* Small Floating Teal Shape */}
          <motion.div
            className="absolute bg-gradient-to-r from-teal-300 to-cyan-300 rounded-full opacity-20 w-40 h-40 top-[60%] left-[20%]"
            animate={{ x: [0, 50, -50, 0], y: [0, -30, 40, 0] }}
            transition={{ repeat: Infinity, duration: 22, ease: "easeInOut" }}
          />
        </motion.div>

        <div className="flex flex-col items-center mb-6 z-10">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-teal-500 leading-tight pb-2">
            Meet Our Healthcare Team
          </h1>
        </div>

        <p className="text-lg text-gray-300 mb-10 max-w-3xl z-10">
          We are a group of passionate students collaborating to develop this
          E-Health Record platform. Our focus is on building a system that
          ensures privacy, security, and ease of use while aligning with real
          healthcare workflows.
        </p>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto z-10">
          {[{
            name: "Rudra Tewari",
            role: "Co-founder • Student Developer",
            desc: "Specializes in backend architecture and system design for a secure and scalable platform.",
            Icon: Code2,
          }, {
            name: "Arnab Roy",
            role: "Co-founder • Student Developer",
            desc: "Handles frontend and backend, improving usability and performance across the platform.",
            Icon: Code2,
          }, {
            name: "Suvam Das",
            role: "Co-founder • Student Developer",
            desc: "Works on frontend and integration, ensuring smooth deployment and a stable platform.",
            Icon: Code2,
          }].map(({ name, role, desc, Icon }, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-gray-800 rounded-xl shadow-lg transition flex flex-col items-center text-center"
            >
              <div className="p-4 bg-slate-900 rounded-full mb-4">
                <Icon className="h-8 w-8 text-cyan-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-100">{name}</h3>
              <p className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-emerald-300 mb-2">{role}</p>
              <p className="text-sm text-gray-300 leading-relaxed">{desc}</p>
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
          <div className="text-sm text-gray-500 italic text-center">Created by <span className="text-cyan-400 font-medium">DEVANTIX</span></div>
        </div>
      </footer>

    </div>
  );
};

export default Team;
