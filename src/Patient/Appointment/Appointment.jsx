import React, { useState, useEffect } from 'react';
import Sidebar from '../Sidebar';

const doctorsList = [
  { id: 1, name: 'Dr. Aditi Sharma', specialty: 'Cardiologist' },
  { id: 2, name: 'Dr. Rohan Mehta', specialty: 'Dermatologist' },
  { id: 3, name: 'Dr. Vikram Singh', specialty: 'Neurologist' },
];

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [form, setForm] = useState({ doctorId: '', date: '', time: '' });
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notificationDropdown, setNotificationDropdown] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('appointments');
    if (stored) setAppointments(JSON.parse(stored));
  }, []);

  const handleBook = (e) => {
    e.preventDefault();
    const doctor = doctorsList.find(d => d.id === parseInt(form.doctorId));
    if (!doctor) return;
    const newAppt = { ...form, doctorName: doctor.name, specialty: doctor.specialty };
    const updated = [...appointments, newAppt];
    setAppointments(updated);
    localStorage.setItem('appointments', JSON.stringify(updated));
    setForm({ doctorId: '', date: '', time: '' });
  };

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleNotificationDropdown = () => setNotificationDropdown(prev => !prev);

  return (

    <div className="flex min-h-screen bg-slate-800">
      {/* Sidebar */}
      <div className="w-1/6"><Sidebar /></div>

      {/* Main Content */}
      <div className="w-5/6 p-6">
        {/* Header */}
        <div className="flex justify-between items-center h-20 bg-slate-900 px-6 mb-6 shadow-lg rounded-xl">
          <div className="text-3xl font-bold bg-gradient-to-r from-blue-300 to-pink-500 text-transparent bg-clip-text">
            Appointments
          </div>

          <div className="flex items-center gap-4 relative">
            {/* Notification Icon with dropdown */}
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
                  <div className="px-4 py-3 border-b border-gray-300 font-semibold">Notifications</div>
                  <div className="px-4 py-2 hover:bg-white cursor-pointer text-sm">
                    <span className="font-medium">Appointment Reminder:</span> You have an appointment tomorrow.
                  </div>
                  <div className="px-4 py-2 hover:bg-white cursor-pointer text-sm">
                    <span className="font-medium">Lab Report Ready:</span> Your recent lab test result is available.
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
                onClick={toggleDropdown}
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

        {/* Book Appointment Form */}
        <div className="bg-slate-900 p-6 rounded-xl shadow-md mb-8">
          <h2 className="text-xl font-bold text-white mb-4">Book an Appointment</h2>
          <form onSubmit={handleBook} className="flex flex-col md:flex-row gap-4 items-center">
            <select
              required
              value={form.doctorId}
              onChange={e => setForm({ ...form, doctorId: e.target.value })}
              className="p-2 rounded bg-slate-800 text-white flex-1"
            >
              <option value="">Select Doctor</option>
              {doctorsList.map(d => (
                <option key={d.id} value={d.id}>{d.name} ({d.specialty})</option>
              ))}
            </select>

            <div className="relative flex-1">
              <input
                type="date"
                required
                value={form.date}
                onChange={e => setForm({ ...form, date: e.target.value })}
                className="p-2 rounded bg-slate-800 text-white w-full"
              />
              <i className="fa-solid fa-calendar text-white absolute right-3 top-2.5 pointer-events-none"></i>
            </div>

            <div className="relative flex-1">
              <input
                type="time"
                required
                value={form.time}
                onChange={e => setForm({ ...form, time: e.target.value })}
                className="p-2 rounded bg-slate-800 text-white w-full"
              />
              <i className="fa-solid fa-clock text-white absolute right-3 top-2.5 pointer-events-none"></i>
            </div>

            <button type="submit" className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded transition">
              Book
            </button>
          </form>
        </div>

        {/* Upcoming Appointments */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Upcoming Appointments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {appointments.length === 0 && <p className="text-gray-300">No appointments booked.</p>}
            {appointments.map((a, idx) => (
              <div key={idx} className="bg-slate-700 p-4 rounded-xl shadow-md text-white flex items-center gap-4 transition hover:scale-105">
                <div className="w-16 h-16 flex items-center justify-center bg-slate-800 rounded-full border-2 border-pink-500">
                  <i className="fa-solid fa-user-doctor text-white text-2xl"></i>
                </div>
                <div>
                  <p className="font-semibold">{a.doctorName}</p>
                  <p className="text-gray-300">{a.specialty}</p>
                  <p><strong>Date:</strong> {a.date}</p>
                  <p><strong>Time:</strong> {a.time}</p>
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
