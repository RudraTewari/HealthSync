// Terms.jsx v2 (Animated Background + Card Hover)
import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/ChatGPT Image Jul 28, 2025, 07_48_37 PM.png";

const Terms = () => {
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

        {/* Background animated shapes */}
        <motion.div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <motion.div
            className="absolute bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full opacity-20 w-72 h-72 top-[-15%] left-[-10%]"
            animate={{ x: [0, 150, -80, 0], y: [0, 100, -50, 0] }}
            transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-15 w-96 h-96 bottom-[-30%] right-[-20%]"
            animate={{ x: [-50, 120, -90, 0], y: [0, -80, 50, 0] }}
            transition={{ repeat: Infinity, duration: 30, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-10 w-80 h-80 top-[30%] left-[60%]"
            animate={{ x: [-40, 70, -50, 0], y: [0, 50, -30, 0] }}
            transition={{ repeat: Infinity, duration: 28, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Title */}
        <motion.div
          className="flex flex-col items-center mb-6 z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-teal-500 leading-tight pb-2">
            Terms of Service
          </h1>
        </motion.div>

        {/* Description */}
        <p className="text-lg text-gray-300 mb-10 max-w-3xl z-10">
          By using our E-Health Record Platform, you agree to these terms of service. 
          Please read them carefully to understand your rights, responsibilities, 
          and our commitments to protecting your privacy, security, and data integrity.
        </p>

        {/* Terms Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto z-10">
          {[
            {
              title: "User Responsibilities",
              desc: "Users must provide accurate information, maintain confidentiality of login details, and use the platform ethically.",
              gradient: "from-cyan-300 to-blue-400"
            },
            {
              title: "Data Usage",
              desc: "We collect and process data solely for improving healthcare access, ensuring security, and enhancing platform performance.",
              gradient: "from-purple-300 to-pink-400"
            },
            {
              title: "Limitations",
              desc: "The platform is provided as-is. While we ensure best efforts for uptime, we are not liable for interruptions beyond control.",
              gradient: "from-emerald-300 to-teal-400"
            }
          ].map(({ title, desc, gradient }, idx) => (
            <motion.div
              key={idx}
              className="p-6 bg-gray-800 rounded-xl shadow-lg flex flex-col items-center text-center transition-all hover:shadow-xl"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className={`text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${gradient} mb-2`}>
                {title}
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>

      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-slate-900 text-gray-400 py-6 z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-3 items-center">
          <div className="text-sm">© {new Date().getFullYear()} E-Health Record Platform. All rights reserved.</div>
          <div className="flex justify-center space-x-6 px-6">
            <NavLink to="/Privacy" className="hover:text-cyan-400 transition-colors duration-300 ease-in-out">Privacy Policy</NavLink>
            <NavLink to="/Terms" className="hover:text-emerald-400 transition-colors duration-300 ease-in-out">Terms of Service</NavLink>
            <NavLink to="/Help" className="hover:text-rose-400 transition-colors duration-300 ease-in-out">Help</NavLink>
          </div>
          <div className="text-sm text-gray-500 italic text-center">Created by <span className="text-cyan-400 font-medium">DEVANTIX</span></div>
        </div>
      </footer>

    </div>
  );
};

export default Terms;
