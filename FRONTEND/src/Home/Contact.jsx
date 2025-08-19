// Contact.jsx v1
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/ChatGPT Image Jul 28, 2025, 07_48_37 PM.png";
import { Mail, Phone, MapPin, Clock } from "lucide-react"; // icons

const Contact = () => {
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

      {/* ================= HERO SECTION ================= */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-6 pb-16 bg-gradient-to-b from-slate-950 via-gray-900 to-slate-950">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 mb-6 leading-tight pb-2">
          Contact Us
        </h1>
        <p className="text-lg text-gray-300 mb-6 max-w-2xl">
          We’re here to help! Reach out to our E-Health Record office in <span className="text-yellow-300 font-semibold">Kolkata</span> for support, partnerships, or general queries.
        </p>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6 max-w-4xl mx-auto">
          {/* Address */}
          <div className="p-6 bg-gray-800 rounded-xl shadow-lg shadow-black/40 flex items-start space-x-4 hover:scale-105 transition">
            <MapPin className="text-red-400 w-8 h-8" />
            <div className="text-left">
              <h2 className="text-xl font-semibold text-red-400">Office Address</h2>
              <p className="text-gray-300 mt-1">
                12th Floor, Infinity Benchmark Tower,  
                Sector V, Salt Lake, Kolkata – 700091
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="p-6 bg-gray-800 rounded-xl shadow-lg shadow-black/40 flex items-start space-x-4 hover:scale-105 transition">
            <Phone className="text-green-400 w-8 h-8" />
            <div className="text-left">
              <h2 className="text-xl font-semibold text-green-400">Call Us</h2>
              <p className="text-gray-300 mt-1">+91 33 4000 1234</p>
              <p className="text-gray-300">+91 98765 43210</p>
            </div>
          </div>

          {/* Email */}
          <div className="p-6 bg-gray-800 rounded-xl shadow-lg shadow-black/40 flex items-start space-x-4 hover:scale-105 transition">
            <Mail className="text-cyan-400 w-8 h-8" />
            <div className="text-left">
              <h2 className="text-xl font-semibold text-cyan-400">Email</h2>
              <p className="text-gray-300 mt-1">support@ehealthkolkata.in</p>
              <p className="text-gray-300">info@ehealthrecord.org</p>
            </div>
          </div>

          {/* Working Hours */}
          <div className="p-6 bg-gray-800 rounded-xl shadow-lg shadow-black/40 flex items-start space-x-4 hover:scale-105 transition">
            <Clock className="text-purple-400 w-8 h-8" />
            <div className="text-left">
              <h2 className="text-xl font-semibold text-purple-400">Working Hours</h2>
              <p className="text-gray-300 mt-1">Mon – Fri: 9:30 AM – 6:30 PM</p>
              <p className="text-gray-300">Sat: 10:00 AM – 2:00 PM</p>
            </div>
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

export default Contact;
