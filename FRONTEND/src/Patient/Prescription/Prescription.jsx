import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import UserDropdown from '../UserProfile/UserDropdown';

const Prescription = () => {
  const [patientName, setPatientName] = useState('');
  const [date, setDate] = useState('');
  const [prescriptions, setPrescriptions] = useState([]);
  const [userDropdown, setUserDropdown] = useState(false);
  const [notificationDropdown, setNotificationDropdown] = useState(false);

  const toggleUserDropdown = () => setUserDropdown(prev => !prev);
  const toggleNotificationDropdown = () => setNotificationDropdown(prev => !prev);

  // ✅ Fetch prescriptions from backend
  const handleFetchPrescriptions = async () => {
    if (!patientName.trim() || !date) {
      alert("Both patient name and date are required.");
      return;
    }

    try {
      const res = await fetch(
        `http://localhost:5000/api/prescriptions?patientName=${encodeURIComponent(
          patientName
        )}&date=${encodeURIComponent(date)}`
      );

      if (!res.ok) {
        const errorData = await res.json();
        alert(errorData.message || "Failed to fetch prescriptions.");
        setPrescriptions([]);
        return;
      }

      const data = await res.json();

      if (!Array.isArray(data) || data.length === 0) {
        alert("No prescriptions found for this patient on given date.");
        setPrescriptions([]);
        return;
      }

      const filteredData = data.map((p) => ({
        doctor: p.doctor,
        date: p.date,
        medications: p.medications,
        diagnosis: p.diagnosis || "",
      }));

      setPrescriptions(filteredData);
    } catch (err) {
      console.error("Error fetching prescriptions:", err);
      alert("Error fetching prescriptions from server.");
    }
  };

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
            {/* Notifications */}
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
            <UserDropdown />
          </div>
        </div>

        {/* Search Form */}
        <div className="bg-slate-900 p-6 rounded-xl shadow-md mb-8">
          <h2 className="text-xl font-bold text-white mb-4">Show Prescriptions</h2>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Patient Name"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              className="p-2 rounded bg-slate-800 text-white flex-1"
            />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="p-2 rounded bg-slate-800 text-white flex-1"
            />
            <button
              onClick={handleFetchPrescriptions}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition"
            >
              Show
            </button>
          </div>
        </div>

        {/* Display Prescriptions */}
        <div className="bg-slate-900 p-6 rounded-xl shadow-md">
          {prescriptions.length > 0 ? (
            <table className="table-auto w-full text-gray-300">
              <thead>
                <tr>
                  <th className="px-4 py-2">Doctor</th>
                  <th className="px-4 py-2">Date</th>
                  <th className="px-4 py-2">Medications</th>
                  <th className="px-4 py-2">Diagnosis</th>
                </tr>
              </thead>
              <tbody>
                {prescriptions.map((p, idx) => (
                  <tr key={idx} className="text-center">
                    <td className="px-4 py-2">{p.doctor}</td>
                    <td className="px-4 py-2">{p.date}</td>
                    <td className="px-4 py-2">{p.medications.join(", ")}</td>
                    <td className="px-4 py-2">{p.diagnosis}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-gray-400">No prescriptions found.</p>
          )}
        </div>

      </div>
    </div>
  );
};

export default Prescription;
