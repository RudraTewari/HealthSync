// Team.jsx v4
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/ChatGPT Image Jul 28, 2025, 07_48_37 PM.png";
import {
  Stethoscope,
  Code2,
  LayoutDashboard,
  BarChart3,
  Database,
  ClipboardCheck,
  Palette,
  Users
} from "lucide-react"; // npm install lucide-react

const Team = () => {
  const members = [
    {
      name: "Dr. Aisha Sharma",
      role: "Chief Medical Officer",
      desc: "15+ years in clinical practice, oversees clinical workflows, ensures medical accuracy and compliance across the platform.",
      color: "text-cyan-300",
      Icon: Stethoscope,
    },
    {
      name: "Rajiv Menon",
      role: "Lead Software Engineer",
      desc: "Architect of the platform’s backend and integrations — focuses on reliability, performance, and secure APIs.",
      color: "text-emerald-300",
      Icon: Code2,
    },
    {
      name: "Sana Patel",
      role: "Head of Product & UX",
      desc: "Leads product strategy and user experience design to ensure the platform is intuitive for patients and providers.",
      color: "text-rose-300",
      Icon: LayoutDashboard,
    },
    {
      name: "Vikram Das",
      role: "Data Scientist",
      desc: "Builds analytics models and dashboards to extract actionable insights from health data.",
      color: "text-indigo-300",
      Icon: BarChart3,
    },
    {
      name: "Priya Nair",
      role: "Clinical Integration Lead",
      desc: "Manages integrations with hospitals and labs, ensuring smooth data exchange and interoperability.",
      color: "text-yellow-300",
      Icon: Database,
    },
    {
      name: "Arjun Kumar",
      role: "Project Manager",
      desc: "Coordinates product delivery, timelines, and cross-functional teams to keep projects on track.",
      color: "text-purple-300",
      Icon: ClipboardCheck,
    },
    {
      name: "Neha Verma",
      role: "UI/UX Designer",
      desc: "Specializes in creating accessible and visually appealing user interfaces for healthcare professionals and patients.",
      color: "text-pink-300",
      Icon: Palette,
    },
    {
      name: "Dr. Rohan Gupta",
      role: "Public Health Advisor",
      desc: "Provides expertise on healthcare policy and public health practices to align the platform with real-world needs.",
      color: "text-green-300",
      Icon: Users,
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

      {/* ================= HERO SECTION ================= */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-6 pb-16 bg-gradient-to-b from-slate-950 via-gray-900 to-slate-950">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-400 to-purple-500 mb-6 leading-tight pb-2">
          Our Team
        </h1>
        <p className="text-lg text-gray-300 mb-6 max-w-3xl">
          Meet the professionals behind E-Health Record — a multidisciplinary team of clinicians, engineers, designers, and analysts committed to building secure and usable healthcare software.
        </p>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6 max-w-6xl mx-auto">
          {members.map(({ name, role, desc, color, Icon }, i) => (
            <div
              key={i}
              className="p-6 bg-gray-800 rounded-xl shadow-lg shadow-black/40 hover:shadow-cyan-500/20 hover:scale-105 transition flex flex-col items-center text-center"
            >
              <Icon className={`${color} w-8 h-8 mb-3`} />
              <h2 className={`text-xl font-semibold ${color} mb-1`}>{name}</h2>
              <p className="text-gray-300 mb-3 font-medium">{role}</p>
              <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
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

export default Team;
