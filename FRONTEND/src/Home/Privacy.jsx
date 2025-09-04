import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/ChatGPT Image Jul 28, 2025, 07_48_37 PM.png";
import { motion } from "framer-motion";

const Privacy = () => {
  const cards = [
    {
      title: "Data Protection",
      desc: "We use advanced encryption and security practices to keep your health records safe and confidential.",
      gradient: "from-cyan-300 to-blue-400"
    },
    {
      title: "Transparency",
      desc: "Our policies are clear and straightforward so you always know how your data is used and stored.",
      gradient: "from-purple-300 to-pink-400"
    },
    {
      title: "User Control",
      desc: "You have the right to access, update, or delete your data, giving you full control over your records.",
      gradient: "from-emerald-300 to-teal-400"
    },
  ];

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
      <section className="flex-1 flex flex-col items-center text-center px-6 py-20 bg-gradient-to-b from-slate-950 via-gray-900 to-slate-950 relative overflow-hidden">
        
        {/* Dynamic animated shapes */}
        <motion.div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <motion.div
            className="absolute w-96 h-96 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-20 top-[-20%] left-[-15%]"
            animate={{ rotate: [0, 360] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          />
          <motion.div
            className="absolute w-40 h-40 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-15 top-[40%] left-[70%]"
            animate={{ x: [-20, 20, -20], y: [0, 30, 0] }}
            transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute w-24 h-24 bg-gradient-to-tr from-cyan-300 to-blue-400 opacity-10 rotate-12 top-[10%] right-[15%]"
            animate={{ x: [0, -50, 0], y: [0, 50, 0], rotate: [0, 180, 0] }}
            transition={{ repeat: Infinity, duration: 22, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-teal-500 leading-tight pb-4 z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Privacy Policy
        </motion.h1>

        {/* Intro */}
        <motion.p
          className="text-lg text-gray-300 max-w-3xl leading-relaxed mb-12 z-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          Your privacy is our top priority. This page outlines how we collect, 
          store, and safeguard your personal data while ensuring transparency 
          and trust in every interaction with our E-Health Record Platform.
        </motion.p>

        {/* Privacy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto z-10">
          {cards.map(({ title, desc, gradient }, idx) => (
            <motion.div
              key={idx}
              className="p-6 bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition flex flex-col items-center text-center relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }} // <-- removed rotation
            >
              {/* Unique card animations */}
              <motion.div
                className={`absolute w-36 h-36 rounded-full opacity-10 top-[-15%] right-[-10%] bg-gradient-to-r ${gradient}`}
                animate={{ rotate: [0, 360] }}
                transition={{ repeat: Infinity, duration: 20 + idx * 5, ease: "linear" }}
              />
              <h3 className={`text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${gradient} mb-2 z-10`}>
                {title}
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed z-10">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-slate-900 text-gray-400 py-6">
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

export default Privacy;
