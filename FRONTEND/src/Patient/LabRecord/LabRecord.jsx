import React, { useState } from "react";
import Sidebar from "../Sidebar";
import UserDropdown from "../UserProfile/UserDropdown";

// Hardcoded patient lab records
const labRecordsData = {
  "John Doe": {
    tests: [
      { date: "2024-09-10", name: "Blood Test", doctor: "Dr. Aditi Sharma", result: "Normal" },
      { date: "2024-08-01", name: "ECG", doctor: "Dr. Aditi Sharma", result: "Mild irregularity" },
    ],
    imaging: [
      { date: "2024-05-15", name: "Chest X-Ray", doctor: "Dr. Rohan Mehta", result: "Clear" },
    ],
  },
  "Jane Smith": {
    tests: [
      { date: "2024-08-05", name: "Urine Test", doctor: "Dr. Rohan Mehta", result: "Infection detected" },
    ],
    imaging: [
      { date: "2024-07-20", name: "X-Ray", doctor: "Dr. Rohan Mehta", result: "Minor fracture" },
    ],
  },
  "Ravi Kumar": {
    tests: [
      { date: "2024-07-18", name: "MRI Scan", doctor: "Dr. Vikram Singh", result: "No abnormalities" },
      { date: "2024-06-05", name: "Blood Sugar Test", doctor: "Dr. Vikram Singh", result: "High" },
    ],
    imaging: [
      { date: "2024-04-25", name: "CT Scan", doctor: "Dr. Vikram Singh", result: "Normal" },
    ],
  },
};

const LabRecord = () => {
  const [patientName, setPatientName] = useState("");
  const [records, setRecords] = useState(null);
  const [error, setError] = useState("");
  const [notificationDropdown, setNotificationDropdown] = useState(false); // State for notification dropdown

  const handleSearch = (e) => {
    e.preventDefault();
    if (labRecordsData[patientName]) {
      setRecords(labRecordsData[patientName]);
      setError("");
    } else {
      setRecords(null);
      setError("No health records found for this patient.");
    }
  };

  const toggleNotificationDropdown = () => setNotificationDropdown((prev) => !prev);

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
            Health Records
          </div>
          <div className="flex items-center gap-4 relative">
            {/* ✅ Notifications */}
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

        {/* Search Form */}
        <div className="bg-slate-900 p-6 rounded-xl mb-6 shadow-md">
          <h2 className="text-xl font-bold text-white mb-4">Show Health Records</h2>
          <form onSubmit={handleSearch} className="flex gap-4">
            <input
              type="text"
              placeholder="Enter Patient Name (John Doe, Jane Smith, Ravi Kumar)"
              className="flex-1 p-2 rounded bg-slate-800 text-white"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition"
            >
              Show
            </button>
          </form>
        </div>

        {/* Records Section */}
        {error && <p className="text-gray-400 mb-4 pl-2">{error}</p>}
        {records && (
          <div className="mt-8 space-y-10 text-white">
            {/* Lab Tests */}
            <div className="bg-slate-900 p-6 rounded-xl shadow-md">
              <h2 className="text-xl font-bold mb-4 text-blue-300">Lab Tests</h2>
              <div className="rounded-lg overflow-hidden border border-slate-700">
                <table className="w-full text-left text-gray-300">
                  <thead className="bg-slate-800 text-gray-200">
                    <tr>
                      <th className="p-3 border-b border-r border-slate-700">Date</th>
                      <th className="p-3 border-b border-r border-slate-700">Test</th>
                      <th className="p-3 border-b border-r border-slate-700">Doctor</th>
                      <th className="p-3 border-b border-slate-700">Result</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700">
                    {records.tests.map((t, idx) => (
                      <tr key={idx} className="hover:bg-slate-800/70 transition-colors">
                        <td className="p-3 border-r border-slate-700">{t.date}</td>
                        <td className="p-3 border-r border-slate-700">{t.name}</td>
                        <td className="p-3 border-r border-slate-700">{t.doctor}</td>
                        <td className="p-3">{t.result}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Imaging Reports */}
            <div className="bg-slate-900 p-6 rounded-xl shadow-md">
              <h2 className="text-xl font-bold mb-4 text-pink-300">Imaging Reports</h2>
              <div className="rounded-lg overflow-hidden border border-slate-700">
                <table className="w-full text-left text-gray-300">
                  <thead className="bg-slate-800 text-gray-200">
                    <tr>
                      <th className="p-3 border-b border-r border-slate-700">Date</th>
                      <th className="p-3 border-b border-r border-slate-700">Imaging Type</th>
                      <th className="p-3 border-b border-r border-slate-700">Doctor</th>
                      <th className="p-3 border-b border-slate-700">Result</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700">
                    {records.imaging.map((i, idx) => (
                      <tr key={idx} className="hover:bg-slate-800/70 transition-colors">
                        <td className="p-3 border-r border-slate-700">{i.date}</td>
                        <td className="p-3 border-r border-slate-700">{i.name}</td>
                        <td className="p-3 border-r border-slate-700">{i.doctor}</td>
                        <td className="p-3">{i.result}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LabRecord;
