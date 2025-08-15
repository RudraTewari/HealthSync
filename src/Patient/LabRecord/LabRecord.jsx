import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar";

const doctorsList = [
  { id: 1, name: "Dr. Aditi Sharma", specialty: "Cardiologist" },
  { id: 2, name: "Dr. Rohan Mehta", specialty: "Dermatologist" },
  { id: 3, name: "Dr. Vikram Singh", specialty: "Neurologist" },
];

const LabRecord = () => {
  const [labRecords, setLabRecords] = useState([]);
  const [form, setForm] = useState({ testName: "", doctor: "", date: "", result: "", file: null });
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [doctorDropdown, setDoctorDropdown] = useState(false);
  const [notificationDropdown, setNotificationDropdown] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("labRecords") || "[]");
    setLabRecords(saved);
  }, []);

  const addRecord = (e) => {
    e.preventDefault();
    if (!form.testName || !form.doctor || !form.date || !form.result) return;

    const fileURL = form.file ? URL.createObjectURL(form.file) : null;
    const newRecord = { id: Date.now(), ...form, fileURL };
    const updated = [...labRecords, newRecord];
    setLabRecords(updated);
    localStorage.setItem("labRecords", JSON.stringify(updated));
    setForm({ testName: "", doctor: "", date: "", result: "", file: null });
    setDoctorDropdown(false);
  };

  return (
    <div className="flex min-h-screen bg-slate-800">
      {/* Sidebar */}
      <div className="w-1/6">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="flex justify-between items-center h-20 bg-slate-900 px-6 mb-6 shadow-lg rounded-xl">
          <div className="text-3xl font-bold bg-gradient-to-r from-blue-300 to-pink-500 text-transparent bg-clip-text">
            Lab Records
          </div>

          <div className="flex items-center gap-4 relative">
            {/* Notification Icon with dropdown */}
            <div className="relative">
              <div
                className="cursor-pointer w-11 h-11 flex items-center justify-center bg-slate-900 hover:bg-gray-500 rounded-full transition"
                onClick={() => setNotificationDropdown(prev => !prev)}
              >
                <i className="fa-solid fa-bell text-white text-xl"></i>
                <span className="absolute -top-1 -right-1 bg-red-500 text-xs text-white px-1.5 py-0.5 rounded-full font-bold">
                  2
                </span>
              </div>
              {notificationDropdown && (
                <div className="absolute right-0 mt-2 bg-gray-200 text-black w-60 rounded-lg shadow-lg overflow-hidden z-50">
                  <div className="px-4 py-3 border-b border-gray-300 font-semibold">Notifications</div>
                  <div className="px-4 py-2 hover:bg-white cursor-pointer text-sm">
                    <span className="font-medium">Lab Report Uploaded:</span> Your blood test result has been added.
                  </div>
                  <div className="px-4 py-2 hover:bg-white cursor-pointer text-sm">
                    <span className="font-medium">Doctor Comment:</span> Dr. Mehta reviewed your last report.
                  </div>
                  <div className="px-4 py-2 hover:bg-white cursor-pointer text-sm text-gray-400">
                    No more notifications.
                  </div>
                </div>
              )}
            </div>

            {/* Profile Dropdown */}
            <div className="relative">
              <div
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 px-3 py-2 bg-slate-900 hover:bg-gray-500 text-gray-300 rounded-2xl cursor-pointer transition shadow-xl"
              >
                <i className="fa-solid fa-user text-white"></i>
                <span className="hidden sm:block text-white">User</span>
                <i className={`fa-solid fa-angle-${dropdownOpen ? "up" : "down"} text-white`}></i>
              </div>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 bg-gray-200 text-black w-40 rounded-lg shadow-lg overflow-hidden z-50">
                  <button className="px-4 py-2 text-left w-full hover:bg-white">My Profile</button>
                  <button className="px-4 py-2 text-left w-full hover:bg-white">Change Photo</button>
                  <button className="px-4 py-2 text-left w-full hover:bg-white">Settings</button>
                  <button className="px-4 py-2 text-left w-full hover:bg-white">Logout</button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Add Lab Record Form */}
        <div className="bg-slate-900 p-6 rounded-xl mb-6 shadow-md">
          <form className="flex flex-col md:flex-row gap-4 items-end" onSubmit={addRecord}>
            {/* Test Name */}
            <input
              type="text"
              placeholder="Test Name"
              required
              className="flex-1 p-2 rounded bg-slate-800 text-white"
              value={form.testName}
              onChange={(e) => setForm({ ...form, testName: e.target.value })}
            />

            {/* Doctor Dropdown */}
            <div className="relative flex-1">
              <button
                type="button"
                className="w-full p-2 rounded bg-slate-800 text-white text-left flex justify-between items-center"
                onClick={() => setDoctorDropdown(!doctorDropdown)}
              >
                {form.doctor || "Select Doctor"}
                <i className="fa-solid fa-angle-down text-white"></i>
              </button>
              {doctorDropdown && (
                <div className="absolute mt-1 w-full bg-slate-700 text-white rounded shadow-lg z-50">
                  {doctorsList.map((d) => (
                    <div
                      key={d.id}
                      className="px-4 py-2 hover:bg-slate-600 cursor-pointer"
                      onClick={() => { setForm({ ...form, doctor: `${d.name} (${d.specialty})` }); setDoctorDropdown(false); }}
                    >
                      {d.name} ({d.specialty})
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Date */}
            <div className="relative flex-1">
              <input
                type="date"
                required
                className="p-2 pl-4 rounded bg-slate-800 text-white w-full appearance-none"
                value={form.date}
                onChange={e => setForm({ ...form, date: e.target.value })}
              />
              <i
                className="fa-solid fa-calendar text-white absolute right-3 top-2.5 cursor-pointer"
                onClick={() => document.querySelector('input[type="date"]').showPicker()}
              ></i>
            </div>

            {/* Result */}
            <input
              type="text"
              placeholder="Result"
              required
              className="flex-1 p-2 rounded bg-slate-800 text-white"
              value={form.result}
              onChange={(e) => setForm({ ...form, result: e.target.value })}
            />

            {/* File Upload */}
            <input
              type="file"
              accept="application/pdf,image/*"
              className="text-white"
              onChange={(e) => setForm({ ...form, file: e.target.files[0] })}
            />

            <button type="submit" className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded transition">Add</button>
          </form>
        </div>

        {/* Lab Records List */}
        <div>
          <h2 className="text-xl md:text-xl font-bold text-white mb-4 flex items-center gap-3">
            My Lab Records
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {labRecords.length === 0 && <p className="text-gray-300">No lab records added.</p>}
            {labRecords.map((record) => (
              <div key={record.id} className="bg-slate-700 p-4 rounded-xl shadow-md text-white flex flex-col md:flex-row gap-4 transition hover:scale-105">
                {/* Icon */}
                <div className="w-16 h-16 flex items-center justify-center bg-slate-800 rounded-full border-2 border-pink-400">
                  <i className="fa-solid fa-vials text-white text-2xl"></i>
                </div>

                {/* Info */}
                <div className="flex-1">
                  <p className="font-bold text-lg md:text-xl">{record.testName}</p>
                  <p className="text-gray-300">Doctor: {record.doctor}</p>
                  <p><i className="fa-solid fa-calendar text-white mr-2"></i>{record.date}</p>
                  <p className="text-white">Result: {record.result}</p>
                  {record.file && (
                    <a href={record.fileURL} target="_blank" rel="noreferrer" className="text-blue-400 underline">
                      View File
                    </a>
                  )}

                  {/* Graph Placeholder */}
                  <div className="mt-2 bg-slate-800 h-24 rounded-lg flex items-center justify-center text-gray-300">
                    Graph View (Mocked)
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabRecord;
