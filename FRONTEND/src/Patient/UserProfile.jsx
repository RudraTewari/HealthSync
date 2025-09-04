import React, { useState } from "react";
import Sidebar from "./Sidebar";

const UserProfile = () => {
  const [editing, setEditing] = useState(false);

  const [user, setUser] = useState({
    name: "Suvam Das",
    email: "suvam@example.com",
    phone: "+91 9876543210",
    address: "Kolkata, India",
    gender: "Male",
    dob: "2003-05-14",
    bloodGroup: "B+",
    insurance: ["MediAssist Health Plan"],
    profileImage: null,
  });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUser({ ...user, profileImage: URL.createObjectURL(file) });
    }
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setEditing(false);
  };

  const handleLogout = () => {
    alert("Logged out successfully!");
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white flex">
      {/* Sidebar */}
      <div className="w-1/6 bg-slate-800 border-r border-slate-700 p-4">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="w-5/6 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-indigo-400">
            User Profile
          </h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg transition-colors"
          >
            Logout
          </button>
        </div>

        {/* Profile + Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <div className="bg-slate-800 border border-slate-700 shadow-lg rounded-2xl p-6 flex flex-col items-center text-center">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-indigo-500">
              {user.profileImage ? (
                <img
                  src={user.profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex items-center justify-center w-full h-full bg-slate-700 text-gray-400">
                  No Image
                </div>
              )}
            </div>
            <h2 className="text-2xl font-bold mt-4">{user.name}</h2>
            <p className="text-gray-400">{user.email}</p>

            <label className="mt-4">
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={handleImageUpload}
              />
              <span className="inline-block px-4 py-2 bg-emerald-500 hover:bg-emerald-600 rounded-lg cursor-pointer transition-colors">
                Change Profile Image
              </span>
            </label>
          </div>

          {/* User Details */}
          <div className="bg-slate-800 border border-slate-700 shadow-lg rounded-2xl lg:col-span-2 p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-purple-400">
                Personal Details
              </h2>
              {editing ? (
                <button
                  onClick={handleSave}
                  className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 rounded-lg transition-colors"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => setEditing(true)}
                  className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 rounded-lg transition-colors"
                >
                  Edit
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white">
              {editing ? (
                <>
                  <input
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="p-2 rounded bg-slate-700 border border-slate-600"
                  />
                  <input
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="p-2 rounded bg-slate-700 border border-slate-600"
                  />
                  <input
                    name="phone"
                    value={user.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    className="p-2 rounded bg-slate-700 border border-slate-600"
                  />
                  <input
                    name="address"
                    value={user.address}
                    onChange={handleChange}
                    placeholder="Address"
                    className="p-2 rounded bg-slate-700 border border-slate-600"
                  />
                  <input
                    name="gender"
                    value={user.gender}
                    onChange={handleChange}
                    placeholder="Gender"
                    className="p-2 rounded bg-slate-700 border border-slate-600"
                  />
                  <input
                    name="dob"
                    value={user.dob}
                    onChange={handleChange}
                    placeholder="Date of Birth"
                    className="p-2 rounded bg-slate-700 border border-slate-600"
                  />
                  <input
                    name="bloodGroup"
                    value={user.bloodGroup}
                    onChange={handleChange}
                    placeholder="Blood Group"
                    className="p-2 rounded bg-slate-700 border border-slate-600"
                  />
                </>
              ) : (
                <>
                  <p><strong>Name:</strong> {user.name}</p>
                  <p><strong>Email:</strong> {user.email}</p>
                  <p><strong>Phone:</strong> {user.phone}</p>
                  <p><strong>Address:</strong> {user.address}</p>
                  <p><strong>Gender:</strong> {user.gender}</p>
                  <p><strong>Date of Birth:</strong> {user.dob}</p>
                  <p><strong>Blood Group:</strong> {user.bloodGroup}</p>
                  <p><strong>Insurance:</strong> {user.insurance.join(", ")}</p>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Settings Section */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-800 border border-slate-700 shadow-lg rounded-2xl p-6">
            <h2 className="text-xl font-bold text-indigo-400 mb-4">
              Account Settings
            </h2>
            <ul className="space-y-3 text-white">
              <li className="hover:text-indigo-300 cursor-pointer">Change Password</li>
              <li className="hover:text-indigo-300 cursor-pointer">Notification Preferences</li>
              <li className="hover:text-indigo-300 cursor-pointer">Privacy Settings</li>
            </ul>
          </div>

          <div className="bg-slate-800 border border-slate-700 shadow-lg rounded-2xl p-6">
            <h2 className="text-xl font-bold text-purple-400 mb-4">Healthcare</h2>
            <ul className="space-y-3 text-white">
              <li className="hover:text-purple-300 cursor-pointer">Linked Insurance Plans</li>
              <li className="hover:text-purple-300 cursor-pointer">Saved Doctors</li>
              <li className="hover:text-purple-300 cursor-pointer">Saved Pharmacies</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
