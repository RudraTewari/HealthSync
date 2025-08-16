// Testimonials.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/ChatGPT Image Jul 28, 2025, 07_48_37 PM.png";
import { Quote } from "lucide-react"; // icon for testimonial quotes

const Testimonials = () => {
  const feedbacks = [
    {
      name: "Ananya Sen",
      role: "Patient",
      quote:
        "E-Health Record has made managing my health so easy. I can access my reports anytime and share them instantly with my doctor.",
    },
    {
      name: "Dr. Rajesh Malhotra",
      role: "Cardiologist",
      quote:
        "The platform saves me hours every week. Seamless access to patient history means I can make decisions faster and with more confidence.",
    },
    {
      name: "Kavita R.",
      role: "Caregiver",
      quote:
        "Handling my mother’s medical records used to be overwhelming. Now everything is organized, secure, and accessible in one place.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-950">
      {/* ================= NAVBAR ================= */}
      <nav className="flex items-center justify-between px-6 py-4 shadow-lg">
        <div className="flex items-center">
          <NavLink to="/">
            <img src={logo} alt="Logo" className="w-25 h-25 object-contain" />
          </NavLink>
        </div>

        <div className="flex items-center space-x-6 bg-gray-800 px-6 py-2 rounded-full shadow-md ml-30 mr-8">
          <NavLink to="/About" className="text-cyan-300 font-medium hover:text-white">About</NavLink>
          <NavLink to="/Services" className="text-emerald-300 font-medium hover:text-white">Services</NavLink>
          <NavLink to="/Benefits" className="text-rose-300 font-medium hover:text-white">Benefits</NavLink>
          <NavLink to="/Team" className="text-indigo-300 font-medium hover:text-white">Team</NavLink>
          <NavLink to="/Testinomials" className="text-purple-300 font-medium hover:text-white">Testimonials</NavLink>
          <NavLink to="/Contact" className="text-yellow-300 font-medium hover:text-white">Contact</NavLink>
        </div>

        <div className="flex space-x-4 items-center relative -top-[7px]">
          <NavLink to="/Login" className="px-4 py-2 text-gray-300 font-medium hover:text-white hover:bg-gray-800 rounded-lg transition">
            Login
          </NavLink>
          <NavLink to="/Signup" className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg hover:from-indigo-400 hover:to-purple-400 transition">
            Signup
          </NavLink>
        </div>
      </nav>

      {/* ================= HERO SECTION (Testimonials) ================= */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-6 pb-16 bg-gradient-to-b from-slate-950 via-gray-900 to-slate-950">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-rose-500 mb-6 leading-tight pb-2">
          What People Say
        </h1>
        <p className="text-lg text-gray-300 mb-10 max-w-3xl">
          Hear from patients, doctors, and caregivers who rely on E-Health Record to simplify healthcare and improve everyday lives.
        </p>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {feedbacks.map(({ name, role, quote }, i) => (
            <div
              key={i}
              className="p-6 bg-gray-800 rounded-xl shadow-lg shadow-black/40 hover:shadow-purple-500/20 hover:scale-105 transition flex flex-col"
            >
              <Quote className="text-purple-400 w-8 h-8 mb-3" />
              <p className="text-gray-300 italic mb-4">“{quote}”</p>
              <h2 className="text-lg font-semibold text-purple-300">{name}</h2>
              <p className="text-sm text-gray-400">{role}</p>
            </div>
          ))}
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

export default Testimonials;
