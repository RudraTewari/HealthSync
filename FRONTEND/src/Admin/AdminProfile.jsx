// src/Admin/AdminProfile.jsx
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import {
  FaUserAlt,
  FaEnvelope,
  FaIdBadge,
  FaLock,
  FaImage,
  FaCogs,
} from "react-icons/fa";

const AdminProfile = () => {
  const [admin, setAdmin] = useState(null);
  const [settings, setSettings] = useState({
    darkMode: true,
    emailNotifications: true,
    systemAlerts: true,
  });

  // Fetch logged-in admin details
  useEffect(() => {
    const fetchAdmin = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/auth/me", {
          method: "GET",
          credentials: "include", // ✅ send cookies
        });
        const data = await res.json();
        if (data.success) {
          setAdmin(data.user);
        } else {
          console.error("Failed to fetch admin:", data.message);
        }
      } catch (error) {
        console.error("Error fetching admin:", error);
      }
    };

    fetchAdmin();
  }, []);

  // Logout function
  const handleLogout = async () => {
    try {
      await fetch("http://localhost:5000/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });
      localStorage.clear();
      window.location.href = "/";
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  // Dummy actions
  const handleUpdateImage = () => alert("Update admin image clicked 🖼️");
  const handleEditProfile = () => alert("Edit admin profile clicked ✏️");
  const handleChangePassword = () => alert("Change admin password clicked 🔑");

  // Toggle settings
  const handleSettingChange = (key) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
    alert(`${key} setting toggled ⚙️`);
  };

  return (
    <div className="w-full min-h-screen items-stretch">
      <div className="w-full min-h-screen grid grid-cols-12">
        {/* Sidebar */}
        <div className="col-span-2">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="col-span-10 flex flex-col bg-slate-900 min-h-screen">
          {/* Top Bar */}
          <div className="h-16 flex items-center justify-end bg-slate-950 border-b-2 rounded-[5px] px-6 space-x-4">
            <button className="text-[15px] text-gray-300 hover:scale-110">
              <i className="fas fa-bell text-gray-300"></i>
            </button>
            <button
              onClick={handleLogout}
              className="h-10 w-36 text-center border-2 rounded-xl border-red-600 hover:border-red-600 hover:bg-slate-900 hover:scale-105 duration-300 ease-in"
            >
              <h2 className="text-[16px] text-red-700 font-bold hover:text-red-600 py-2">
                Logout
              </h2>
            </button>
          </div>

          {/* Profile Info */}
          <div className="p-6 space-y-6">
            {/* Heading */}
            <h1 className="text-[30px] text-gray-400 font-bold">
              Admin Profile
            </h1>

            {/* Profile Card */}
            {admin ? (
              <div className="bg-slate-950 p-6 rounded-xl shadow-lg border border-slate-800 w-full max-w-5xl">
                {/* Avatar */}
                <div className="flex flex-col items-center gap-2 mb-6">
                  <div className="w-28 h-28 rounded-full border-4 border-cyan-400 overflow-hidden shadow-lg flex items-center justify-center bg-slate-800">
                    {admin.avatar ? (
                      <img
                        src={admin.avatar}
                        alt="Admin Avatar"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <FaUserAlt className="text-5xl text-gray-400" />
                    )}
                  </div>
                  <button
                    onClick={handleUpdateImage}
                    className="px-4 py-2 mt-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 font-semibold text-white hover:from-cyan-400 hover:to-blue-400 shadow-lg transition-all duration-300 flex items-center gap-2"
                  >
                    <FaImage /> Change / Add Image
                  </button>
                </div>

                {/* Admin Details */}
                <p className="text-gray-300 mb-3 flex items-center gap-2">
                  <FaIdBadge className="text-cyan-400" />
                  <span className="font-bold">Name:</span> {admin.name}
                </p>
                <p className="text-gray-300 mb-3 flex items-center gap-2">
                  <FaEnvelope className="text-blue-400" />
                  <span className="font-bold">Email:</span> {admin.email}
                </p>
                <p className="text-gray-300 mb-3 flex items-center gap-2">
                  <FaUserAlt className="text-purple-400" />
                  <span className="font-bold">Role:</span>{" "}
                  <span className="uppercase">{admin.role}</span>
                </p>
                <p className="text-gray-300 flex items-center gap-2">
                  <FaLock className="text-green-400" />
                  <span className="font-bold">Verified:</span>{" "}
                  {admin.isAccountVerified ? (
                    <span className="text-green-500">Yes</span>
                  ) : (
                    <span className="text-red-500">No</span>
                  )}
                </p>

                {/* Actions */}
                <div className="flex flex-col gap-3 mt-6">
                  <button
                    onClick={handleEditProfile}
                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 font-semibold text-white hover:from-purple-400 hover:to-pink-400 shadow-lg transition-all duration-300"
                  >
                    Edit Profile
                  </button>
                  <button
                    onClick={handleChangePassword}
                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 font-semibold text-white hover:from-cyan-400 hover:to-blue-400 shadow-lg transition-all duration-300"
                  >
                    Change Password
                  </button>
                </div>

                {/* Account Settings Section */}
                <div className="mt-8 border-t border-slate-700 pt-6">
                  <h2 className="text-xl font-bold text-gray-300 mb-4 flex items-center gap-2">
                    <FaCogs className="text-yellow-400" /> Admin Settings
                  </h2>

                  <div className="flex flex-col gap-4">
                    {/* Dark Mode */}
                    <div className="flex justify-between items-center bg-slate-800 p-3 rounded-md shadow-md">
                      <p className="text-gray-300">Dark Mode</p>
                      <button
                        onClick={() => handleSettingChange("darkMode")}
                        className={`px-3 py-1 rounded-full text-white text-sm ${
                          settings.darkMode
                            ? "bg-green-500 hover:bg-green-400"
                            : "bg-gray-600 hover:bg-gray-500"
                        }`}
                      >
                        {settings.darkMode ? "ON" : "OFF"}
                      </button>
                    </div>

                    {/* Email Notifications */}
                    <div className="flex justify-between items-center bg-slate-800 p-3 rounded-md shadow-md">
                      <p className="text-gray-300">Email Notifications</p>
                      <button
                        onClick={() =>
                          handleSettingChange("emailNotifications")
                        }
                        className={`px-3 py-1 rounded-full text-white text-sm ${
                          settings.emailNotifications
                            ? "bg-green-500 hover:bg-green-400"
                            : "bg-gray-600 hover:bg-gray-500"
                        }`}
                      >
                        {settings.emailNotifications ? "ON" : "OFF"}
                      </button>
                    </div>

                    {/* System Alerts */}
                    <div className="flex justify-between items-center bg-slate-800 p-3 rounded-md shadow-md">
                      <p className="text-gray-300">System Alerts</p>
                      <button
                        onClick={() => handleSettingChange("systemAlerts")}
                        className={`px-3 py-1 rounded-full text-white text-sm ${
                          settings.systemAlerts
                            ? "bg-green-500 hover:bg-green-400"
                            : "bg-gray-600 hover:bg-gray-500"
                        }`}
                      >
                        {settings.systemAlerts ? "ON" : "OFF"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-gray-400">Loading admin profile...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
