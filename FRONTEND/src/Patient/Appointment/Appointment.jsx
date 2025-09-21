import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Sidebar from "../Sidebar";
import UserDropdown from "../UserProfile/UserDropdown";

const Appointments = () => {
  const [form, setForm] = useState({
    patientName: "",
    date: "",
    time: "",
    symptoms: "",
  });

  const [userDropdown, setUserDropdown] = useState(false);
  const [notificationDropdown, setNotificationDropdown] = useState(false);

  // ✅ new states for fetching appointments
  const [searchName, setSearchName] = useState("");
  const [appointments, setAppointments] = useState([]);

  // Book appointment
  const handleBook = async (e) => {
    e.preventDefault();

    if (!form.date || !form.time) {
      alert("Please select date and time.");
      return;
    }

    const appointDate = `${form.date}T${form.time}:00`;

    const newAppt = {
      patientName: form.patientName,
      appointDate,
      appointTime: form.time,
      symptoms: form.symptoms,
    };

    await fetch("http://localhost:5000/api/patient/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newAppt),
    });

    setForm({ ...form, date: "", time: "", symptoms: "" });
    alert("Appointment booked successfully ✅");
  };

  // ✅ Fetch appointments by patientName directly from admin backend
  const handleFetchAppointments = async () => {
    if (!searchName.trim()) {
      alert("Enter a patient name first.");
      return;
    }

    try {
      const res = await fetch(
        `http://localhost:5000/api/appointments?patientName=${encodeURIComponent(
          searchName
        )}`
      );
      const data = await res.json();

      // ✅ Ensure only the needed fields are stored
      const filteredData = data.map((app) => ({
        doctor: app.doctor,
        date: app.date,
        time: app.time,
        symptoms: app.symptoms,
        status: app.status,
      }));

      setAppointments(filteredData);
    } catch (err) {
      console.error("Error fetching appointments:", err);
    }
  };

  function toggleUserDropdown() {
    setUserDropdown((prev) => !prev);
  }
  const toggleNotificationDropdown = () =>
    setNotificationDropdown((prev) => !prev);

  return (
    <div className="flex min-h-screen bg-slate-800">
      {/* Sidebar */}
      <div className="w-1/6">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="w-5/6 p-6">
        {/* Header */}
        <div className="flex justify-between items-center h-20 bg-slate-900 px-6 mb-6 shadow-lg rounded-xl">
          <div className="text-3xl font-bold bg-gradient-to-r from-blue-300 to-pink-500 text-transparent bg-clip-text">
            Appointments
          </div>
          <div className="flex items-center gap-4 relative">
            {/* Notifications */}
            <div className="relative">
              <div
                className="cursor-pointer w-11 h-11 flex items-center justify-center bg-slate-900 hover:bg-gray-500 rounded-full transition"
                onClick={toggleNotificationDropdown}
              >
                <i className="fa-solid fa-bell text-white text-xl"></i>
                <span className="absolute -top-1 -right-1 bg-red-500 text-xs text-white px-1.5 py-0.5 rounded-full font-bold">
                  2
                </span>
              </div>
              {notificationDropdown && (
                <div className="absolute right-0 mt-2 bg-gray-200 text-black w-60 rounded-lg shadow-lg overflow-hidden z-50">
                  <div className="px-4 py-3 border-b border-gray-300 font-semibold">
                    Notifications
                  </div>
                  <div className="px-4 py-2 hover:bg-white cursor-pointer text-sm">
                    <span className="font-medium">Appointment Reminder:</span>{" "}
                    You have an appointment tomorrow.
                  </div>
                  <div className="px-4 py-2 hover:bg-white cursor-pointer text-sm">
                    <span className="font-medium">Lab Report Ready:</span> Your
                    recent lab test result is available.
                  </div>
                  <div className="px-4 py-2 hover:bg-white cursor-pointer text-sm text-gray-400">
                    No more notifications.
                  </div>
                </div>
              )}
            </div>

            {/* Profile Dropdown */}
            <UserDropdown />
          </div>
        </div>

        {/* Book Appointment Form */}
        <div className="bg-slate-900 p-6 rounded-xl shadow-md mb-8">
          <h2 className="text-xl font-bold text-white mb-4">
            Book an Appointment
          </h2>
          <form
            onSubmit={handleBook}
            className="flex flex-col md:flex-row gap-4 items-center"
          >
            <input
              type="text"
              required
              placeholder="Patient Name"
              value={form.patientName}
              onChange={(e) =>
                setForm({ ...form, patientName: e.target.value })
              }
              className="p-2 rounded bg-slate-800 text-white flex-1"
            />

            <div className="relative flex-1">
              <input
                type="date"
                required
                className="p-2 pl-4 rounded bg-slate-800 text-white w-full"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
              />
              <i
                className="fa-solid fa-calendar text-white absolute right-3 top-2.5 cursor-pointer"
                onClick={() =>
                  document.querySelector('input[type="date"]').showPicker()
                }
              ></i>
            </div>

            <div className="relative flex-1">
              <select
                required
                className="p-2 rounded bg-slate-800 text-white w-full"
                value={form.time}
                onChange={(e) => setForm({ ...form, time: e.target.value })}
              >
                <option value="">Select Time</option>
                <option value="10:00">10:00 AM</option>
                <option value="11:00">11:00 AM</option>
                <option value="12:00">12:00 PM</option>
                <option value="15:00">3:00 PM</option>
                <option value="17:00">5:00 PM</option>
                <option value="18:00">6:00 PM</option>
              </select>
            </div>

            <input
              type="text"
              required
              placeholder="Enter symptoms"
              value={form.symptoms}
              onChange={(e) => setForm({ ...form, symptoms: e.target.value })}
              className="p-2 rounded bg-slate-800 text-white flex-1"
            />

            <button
              type="submit"
              className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded transition"
            >
              Book
            </button>
          </form>
        </div>

        {/* ✅ Show Appointments Section */}
        <div className="bg-slate-900 p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-bold text-white mb-4">Show Appointments</h2>

          {/* Search bar */}
          <div className="flex gap-4 mb-4">
            <input
              type="text"
              placeholder="Enter Patient Name"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
              className="p-2 rounded bg-slate-800 text-white flex-1"
            />
            <button
              onClick={handleFetchAppointments}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition"
            >
              Show
            </button>
          </div>

          {/* Table of appointments */}
          {appointments.length > 0 ? (
            <table className="table-auto w-full text-gray-300">
              <thead>
                <tr>
                  <th className="px-4 py-2">Doctor</th>
                  <th className="px-4 py-2">Date</th>
                  <th className="px-4 py-2">Time</th>
                  <th className="px-4 py-2">Symptoms</th>
                  <th className="px-4 py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((app, index) => (
                  <tr key={index} className="text-center">
                    <td className="px-4 py-2">{app.doctor}</td>
                    <td className="px-4 py-2">{app.date}</td>
                    <td className="px-4 py-2">{app.time}</td>
                    <td className="px-4 py-2">{app.symptoms}</td>
                    <td
                      className={`px-4 py-2 font-semibold ${
                        app.status === "Confirmed"
                          ? "text-green-400"
                          : "text-yellow-400"
                      }`}
                    >
                      {app.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-gray-400">No appointments found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Appointments;
