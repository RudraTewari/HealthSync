// src/Patient/UserProfile/UserDropdown.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserDropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="relative">
      {/* User button */}
      <div
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl cursor-pointer transition-shadow shadow-lg"
      >
        <i className="fa-solid fa-user"></i>
        <span className="hidden sm:block">User</span>
        <i className={`fa-solid fa-angle-${dropdownOpen ? "up" : "down"}`}></i>
      </div>

      {/* Dropdown menu */}
      {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-slate-800 text-white rounded-xl shadow-2xl overflow-hidden z-50 border border-slate-700">
          {/* Logout */}
          <button
            onClick={handleLogout}
            className="w-full text-left px-4 py-3 transition-colors duration-200 font-semibold bg-slate-800 hover:bg-slate-700 hover:text-transparent bg-clip-text hover:bg-gradient-to-r hover:from-red-400 hover:to-red-600"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
