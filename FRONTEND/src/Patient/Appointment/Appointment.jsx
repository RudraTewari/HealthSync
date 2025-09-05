import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Sidebar from "../Sidebar";

const Appointments = () => {
  const [pendingAppointments, setPendingAppointments] = useState([]);
  const [confirmedAppointments, setConfirmedAppointments] = useState([]);
  const [form, setForm] = useState({
    patientName: "",
    date: "",
    time: "",
    symptoms: "",
  });
  const [userDropdown, setUserDropdown] = useState(false);
  const [notificationDropdown, setNotificationDropdown] = useState(false);

  // Utility: fetch appointments by status for this patient
  const fetchByStatus = async (status, setter) => {
    if (!form.patientName) return; // only fetch if patient name is filled
    try {
      const res = await fetch(
        `http://localhost:5000/api/appointments?status=${status}&patientName=${form.patientName}`
      );
      const data = await res.json();
      setter(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Error fetching appointments:", err);
    }
  };

  // Fetch appointments whenever patientName changes
  useEffect(() => {
    if (form.patientName) {
      fetchByStatus("Pending", setPendingAppointments);
      fetchByStatus("Confirmed", setConfirmedAppointments);
    }
  }, [form.patientName]);

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

    await fetch("http://localhost:5000/api/addappointments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newAppt),
    });

    setForm({ ...form, date: "", time: "", symptoms: "" });

    // Refresh both lists
    fetchByStatus("Pending", setPendingAppointments);
    fetchByStatus("Confirmed", setConfirmedAppointments);
  };

  function toggleUserDropdown() {
    setUserDropdown((prev) => !prev);
  }
  const toggleNotificationDropdown = () => setNotificationDropdown((prev) => !prev);

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

            {/* User Profile */}
            <div className="relative">
              <div
                onClick={toggleUserDropdown}
                className="flex items-center gap-2 px-3 py-2 bg-slate-900 hover:bg-gray-500 text-gray-300 rounded-2xl cursor-pointer transition shadow-xl"
              >
                <i className="fa-solid fa-user text-white"></i>
                <span className="hidden sm:block text-white">User</span>
                <i
                  className={`fa-solid fa-angle-${userDropdown ? "up" : "down"} text-white`}
                ></i>
              </div>
              {userDropdown && (
                <div className="absolute right-0 mt-2 bg-gray-200 text-black w-44 rounded-lg shadow-lg overflow-hidden z-50">
                  <button className="px-4 py-2 text-left w-full hover:bg-white">
                    <NavLink to="/user/UserProfile">My Profile</NavLink>
                  </button>
                  <button className="px-4 py-2 text-left w-full hover:bg-white">
                    Logout
                  </button>
                </div>
              )}
            </div>
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
              onChange={(e) => setForm({ ...form, patientName: e.target.value })}
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
              className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded transition"
            >
              Book
            </button>
          </form>
        </div>

        {/* Pending Appointments */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-pink-300 mb-4">
            Pending Appointments
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pendingAppointments.length === 0 && (
              <p className="text-gray-300">No pending appointments.</p>
            )}
            {pendingAppointments.map((a) => (
              <div
                key={a._id}
                className="bg-slate-700 p-4 rounded-xl shadow-md text-white flex items-center gap-4 transition hover:scale-105"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-slate-800 rounded-full border-2 border-pink-400">
                  <i className="fa-solid fa-user-doctor text-white text-2xl"></i>
                </div>
                <div>
                  <p className="font-semibold">Patient: {a.patientName}</p>
                  <p>Symptoms: {a.symptoms}</p>
                  <p>
                    <i className="fa-solid fa-calendar text-white mr-2"></i>
                    Date: {new Date(a.appointDate).toLocaleDateString()}
                  </p>
                  <p>
                    <i className="fa-solid fa-clock text-white mr-2"></i>
                    Time:{" "}
                    {new Date(a.appointDate).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Confirmed Appointments */}
        <div>
          <h2 className="text-xl font-bold text-pink-300 mb-4">
            Confirmed Appointments
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {confirmedAppointments.length === 0 && (
              <p className="text-gray-300">No confirmed appointments.</p>
            )}
            {confirmedAppointments.map((a) => (
              <div
                key={a._id}
                className="bg-slate-700 p-4 rounded-xl shadow-md text-white flex items-center gap-4 transition hover:scale-105"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-slate-800 rounded-full border-2 border-pink-400">
                  <i className="fa-solid fa-user-doctor text-white text-2xl"></i>
                </div>
                <div>
                  <p className="font-semibold">Patient: {a.patientName}</p>
                  <p>Symptoms: {a.symptoms}</p>
                  <p>
                    <i className="fa-solid fa-calendar text-white mr-2"></i>
                    Date: {new Date(a.appointDate).toLocaleDateString()}
                  </p>
                  <p>
                    <i className="fa-solid fa-clock text-white mr-2"></i>
                    Time:{" "}
                    {new Date(a.appointDate).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                  <p className="text-pink-300">
                    Assigned Doctor: {a.doctorName || "Pending Assignment"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
