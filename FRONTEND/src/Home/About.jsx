import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/ChatGPT Image Jul 28, 2025, 07_48_37 PM.png";
import { motion } from "framer-motion";

const AboutPage = () => {
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
      <section className="flex-1 flex flex-col items-center justify-center text-center px-6 py-16 bg-gradient-to-b from-slate-950 via-gray-900 to-slate-950 relative overflow-hidden">

        {/* Animated background shapes */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="absolute bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full opacity-20 w-64 h-64 top-[-10%] left-[-10%]"
            animate={{ x: [0, 180, 0], y: [0, 120, 0], rotate: [0, 360, 0] }}
            transition={{ repeat: Infinity, duration: 22, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 w-80 h-80 bottom-[-20%] right-[-15%]"
            animate={{ x: [-50, 120, -50], y: [0, -80, 0], rotate: [0, -360, 0] }}
            transition={{ repeat: Infinity, duration: 28, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bg-gradient-to-r from-yellow-400 to-rose-400 rounded-full opacity-15 w-72 h-72 top-[20%] right-[-15%]"
            animate={{ x: [-80, 60, -80], y: [0, 100, 0], rotate: [0, 180, 0] }}
            transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-indigo-500 mb-6 z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Our Platform
        </motion.h1>

        {/* Intro */}
        <motion.p
          className="text-lg text-gray-300 mb-12 max-w-3xl z-10 leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          E-Health Record is built to transform the healthcare experience by offering secure, reliable, 
          and user-friendly digital record management. We connect patients, doctors, and healthcare 
          administrators seamlessly to improve outcomes and efficiency.
        </motion.p>

        {/* Mission - Vision - Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full z-10">
          {[
            {
              title: "Our Mission",
              desc: "To provide a digital healthcare solution that empowers patients, supports doctors, and simplifies administration with secure, real-time data access.",
              gradient: "from-cyan-300 to-blue-400"
            },
            {
              title: "Our Vision",
              desc: "To become the most trusted e-health record platform, making healthcare accessible, transparent, and patient-centered across all regions.",
              gradient: "from-emerald-300 to-teal-400"
            },
            {
              title: "Our Values",
              desc: "We value innovation, security, and integrity. Our platform is built with compassion for patients and dedication to healthcare professionals worldwide.",
              gradient: "from-indigo-300 to-purple-400"
            }
          ].map(({ title, desc, gradient }, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition flex flex-col items-center text-center relative overflow-hidden"
            >
              <motion.div
                className="absolute w-32 h-32 rounded-full opacity-10 top-[-10%] left-[-10%] bg-gradient-to-r from-white to-transparent"
                animate={{ rotate: [0, 360] }}
                transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
              />
              <h2 className={`text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${gradient} mb-4 z-10`}>
                {title}
              </h2>
              <p className="text-gray-300 text-base leading-relaxed z-10">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-slate-900 text-gray-400 py-6 z-10 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-3 items-center"> 
          <div className="text-sm">
            © {new Date().getFullYear()} E-Health Record Platform. All rights reserved.
          </div>
          <div className="flex justify-center space-x-6 px-6">
            <NavLink to="/Privacy" className="hover:text-cyan-400">Privacy Policy</NavLink>
            <NavLink to="/Terms" className="hover:text-emerald-400">Terms of Service</NavLink>
            <NavLink to="/Help" className="hover:text-rose-400">Help</NavLink>
          </div>
          <div className="text-sm text-gray-500 italic text-right px-6">
            Created by <span className="text-cyan-400 font-medium">DEVANTIX</span>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default AboutPage;
