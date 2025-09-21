// src/User/UserProfile.jsx
import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import UserDropdown from "./UserDropdown";
import {
  FaUserAlt,
  FaEnvelope,
  FaIdBadge,
  FaLock,
  FaImage,
  FaCogs,
} from "react-icons/fa";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [settings, setSettings] = useState({
    darkMode: true,
    emailNotifications: true,
    smsAlerts: false,
  });
  const [loading, setLoading] = useState(true);

  // Fetch logged-in user
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/auth/me", {
          method: "GET",
          credentials: "include",
        });
        const data = await res.json();
        if (data.success) {
          setUser(data.user);
        } else {
          setUser(null);
        }
      } catch (err) {
        console.error("❌ Error fetching user:", err);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
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
  const handleChangePassword = () => alert("Change password clicked 🔑");
  const handleUpdateImage = () => alert("Update profile image clicked 🖼️");
  const handleEditProfile = () => alert("Edit profile clicked ✏️");
  const handleSettingChange = (key) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
    alert(`${key} toggled ⚙️`);
  };

  return (
    <div className="flex min-h-screen bg-slate-800">
      {/* Sidebar */}
      <div className="w-64 bg-slate-900 border-r border-slate-700">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Top Navbar */}
        <div className="flex justify-between items-center h-20 bg-slate-900 px-6 mb-6 shadow-lg rounded-xl">
          <div className="font-bold text-3xl bg-gradient-to-r from-blue-300 to-pink-500 text-transparent bg-clip-text flex gap-3">
            <h6>Profile</h6>
            <span className="font-bold text-gray-300">
              {loading ? "..." : user ? user.name : "Guest"}
            </span>
          </div>

          <div className="flex items-center gap-4 relative">
            {/* Notification */}
            <div className="relative cursor-pointer w-11 h-11 flex items-center justify-center bg-slate-900 hover:bg-gray-500 rounded-full transition shadow-xl">
              <i className="fa-solid fa-bell text-white text-xl"></i>
              <span className="absolute -top-1 -right-1 bg-red-500 text-xs text-white px-1.5 py-0.5 rounded-full font-bold">
                2
              </span>
            </div>

            {/* Profile Dropdown */}
            <UserDropdown />
          </div>
        </div>

        {/* Profile Section */}
        <div className="bg-slate-900 rounded-xl p-6 shadow-xl border border-slate-700">
          {user ? (
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left side - Avatar & Actions */}
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full border-4 border-cyan-400 overflow-hidden shadow-lg flex items-center justify-center bg-slate-800">
                  {user.avatar ? (
                    <img
                      src={user.avatar}
                      alt="User Avatar"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <FaUserAlt className="text-5xl text-gray-400" />
                  )}
                </div>
                <button
                  onClick={handleUpdateImage}
                  className="px-4 py-2 mt-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 font-semibold text-white hover:from-cyan-400 hover:to-blue-400 shadow-lg transition-all duration-300 flex items-center gap-2"
                >
                  <FaImage /> Change / Add Image
                </button>

                <div className="flex flex-col gap-3 mt-6 w-full">
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
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-red-600 to-red-800 font-semibold text-white hover:from-red-500 hover:to-red-700 shadow-lg transition-all duration-300"
                  >
                    Logout
                  </button>
                </div>
              </div>

              {/* Right side - Details & Settings */}
              <div>
                <h2 className="text-2xl font-bold text-gray-200 mb-4">
                  Account Details
                </h2>
                <div className="space-y-3">
                  <p className="text-gray-300 flex items-center gap-2">
                    <FaIdBadge className="text-cyan-400" />
                    <span className="font-bold">Name:</span> {user.name}
                  </p>
                  <p className="text-gray-300 flex items-center gap-2">
                    <FaEnvelope className="text-blue-400" />
                    <span className="font-bold">Email:</span> {user.email}
                  </p>
                  <p className="text-gray-300 flex items-center gap-2">
                    <FaUserAlt className="text-purple-400" />
                    <span className="font-bold">Role:</span>{" "}
                    <span className="uppercase">{user.role}</span>
                  </p>
                  <p className="text-gray-300 flex items-center gap-2">
                    <FaLock className="text-green-400" />
                    <span className="font-bold">Verified:</span>{" "}
                    {user.isAccountVerified ? (
                      <span className="text-green-500">Yes</span>
                    ) : (
                      <span className="text-red-500">No</span>
                    )}
                  </p>
                </div>

                {/* Account Settings */}
                <div className="mt-8 border-t border-slate-700 pt-6">
                  <h2 className="text-xl font-bold text-gray-300 mb-4 flex items-center gap-2">
                    <FaCogs className="text-yellow-400" /> Account Settings
                  </h2>

                  <div className="space-y-4">
                    {[
                      { key: "darkMode", label: "Dark Mode" },
                      { key: "emailNotifications", label: "Email Notifications" },
                      { key: "smsAlerts", label: "SMS Alerts" },
                    ].map((setting) => (
                      <div
                        key={setting.key}
                        className="flex justify-between items-center bg-slate-800 p-3 rounded-md shadow-md"
                      >
                        <p className="text-gray-300">{setting.label}</p>
                        <button
                          onClick={() => handleSettingChange(setting.key)}
                          className={`px-3 py-1 rounded-full text-white text-sm ${
                            settings[setting.key]
                              ? "bg-green-500 hover:bg-green-400"
                              : "bg-gray-600 hover:bg-gray-500"
                          }`}
                        >
                          {settings[setting.key] ? "ON" : "OFF"}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-gray-400">Loading profile...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
