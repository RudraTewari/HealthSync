import React, { useState, useEffect } from 'react';
import Sidebar from '../Sidebar';
import UserDropdown from '../UserProfile/UserDropdown'; // import your new dropdown

const Prescription = () => {
  const [prescriptions, setPrescriptions] = useState([]);
  const [form, setForm] = useState({ medicine: '', dosage: '', doctor: '', date: '' });
  const [doctorDropdown, setDoctorDropdown] = useState(false);
  const [notificationDropdown, setNotificationDropdown] = useState(false);

  const doctorsList = [
    { id: 1, name: 'Dr. Aditi Sharma', specialty: 'Cardiologist' },
    { id: 2, name: 'Dr. Rohan Mehta', specialty: 'Dermatologist' },
    { id: 3, name: 'Dr. Vikram Singh', specialty: 'Neurologist' },
  ];

  useEffect(() => {
    const stored = localStorage.getItem('prescriptions');
    if (stored) setPrescriptions(JSON.parse(stored));
  }, []);

  const handleAdd = (e) => {
    e.preventDefault();
    const updated = [...prescriptions, form];
    setPrescriptions(updated);
    localStorage.setItem('prescriptions', JSON.stringify(updated));
    setForm({ medicine: '', dosage: '', doctor: '', date: '' });
  };

  const toggleNotificationDropdown = () => setNotificationDropdown(prev => !prev);

  return (
    <div className="flex min-h-screen bg-slate-800">
      <div className="w-1/6"><Sidebar /></div>
      <div className="w-5/6 p-6">

        {/* Header */}
        <div className="flex justify-between items-center h-20 bg-slate-900 px-6 mb-6 shadow-lg rounded-xl">
          <div className="text-3xl font-bold bg-gradient-to-r from-blue-300 to-pink-500 text-transparent bg-clip-text">
            Prescriptions
          </div>
          <div className="flex items-center gap-4 relative">

            {/* Notification Icon with dropdown */}
            <div className="relative">
              <div
                className="cursor-pointer w-11 h-11 flex items-center justify-center bg-slate-900 hover:bg-gray-500 rounded-full transition"
                onClick={toggleNotificationDropdown}
              >
                <i className="fa-solid fa-bell text-white text-xl"></i>
                <span className="absolute -top-1 -right-1 bg-red-500 text-xs text-white px-1.5 py-0.5 rounded-full font-bold">2</span>
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

            {/* User Dropdown */}
            <UserDropdown />  {/* Reusable dropdown component */}
          </div>
        </div>

        {/* Add Prescription Form */}
        <div className="bg-slate-900 p-6 rounded-xl shadow-md mb-8">
          <h2 className="text-xl font-bold text-white mb-4">Add Prescription</h2>
          <form onSubmit={handleAdd} className="flex flex-col md:flex-row gap-4 items-center">

            <input
              type="text"
              required
              placeholder="Medicine Name"
              className="p-2 rounded bg-slate-800 text-white flex-1"
              value={form.medicine}
              onChange={e => setForm({ ...form, medicine: e.target.value })}
            />

            <input
              type="text"
              required
              placeholder="Dosage (e.g., 2 times a day)"
              className="p-2 rounded bg-slate-800 text-white flex-1"
              value={form.dosage}
              onChange={e => setForm({ ...form, dosage: e.target.value })}
            />

            <div className="relative flex-1">
              <button
                type="button"
                className="w-full p-2 rounded bg-slate-800 text-white text-left flex justify-between items-center"
                onClick={() => setDoctorDropdown(!doctorDropdown)}
              >
                {form.doctor || 'Select Doctor'}
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

            <div className="relative flex-1">
              <input
                type="date"
                required
                className="p-2 pl-4 rounded bg-slate-800 text-white w-full"
                value={form.date}
                onChange={e => setForm({ ...form, date: e.target.value })}
              />
              <i
                className="fa-solid fa-calendar text-white absolute right-3 top-2.5 cursor-pointer"
                onClick={() => document.querySelector('input[type="date"]').showPicker()}
              ></i>
            </div>

            <button type="submit" className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded transition">
              Add
            </button>
          </form>
        </div>

        {/* View Prescriptions */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">My Prescriptions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {prescriptions.length === 0 && <p className="text-gray-300">No prescriptions added.</p>}
            {prescriptions.map((p, idx) => (
              <div key={idx} className="bg-slate-700 p-4 rounded-xl shadow-md text-white flex items-center gap-4 transition hover:scale-105">
                <div className="w-16 h-16 flex items-center justify-center bg-slate-800 rounded-full border-2 border-green-400">
                  <i className="fa-solid fa-prescription-bottle-medical text-white text-2xl"></i>
                </div>
                <div>
                  <p className="font-semibold">{p.medicine}</p>
                  <p className="text-gray-300">Dosage: {p.dosage}</p>
                  <p className="text-gray-300">Doctor: {p.doctor}</p>
                  <p><i className="fa-solid fa-calendar text-white mr-2"></i>{p.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Prescription;
