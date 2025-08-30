import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import { NavLink } from "react-router-dom";

const Prescriptions = () => {
  const [prescriptions, setPrescriptions] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch prescriptions from backend
  useEffect(() => {
    const fetchPrescriptions = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/prescriptions");
        if (!response.ok) throw new Error("Failed to fetch prescriptions");
        const data = await response.json();
        setPrescriptions(data);
      } catch (err) {
        console.error("Error fetching prescriptions:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPrescriptions();
  }, []);

  return (
    <div className="w-full min-h-screen grid grid-cols-12">
      {/* Sidebar */}
      <div className="col-span-2">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="col-span-10 bg-slate-900 flex flex-col min-h-screen">
        {/* Topbar */}
        <div className="h-16 flex items-center justify-end bg-slate-950 border-b-2 rounded-[5px] px-6 space-x-4">
          <button className="text-[15px] text-gray-300 hover:scale-110">
            <i className="fas fa-bell text-gray-300"></i>
          </button>
          <button className="h-10 w-36 text-[15px] text-amber-100 font-semibold bg-slate-900 border-2 border-slate-900 rounded-full hover:border-amber-100 hover:scale-110 duration-300 ease-in">
            <i className="fas fa-user mr-2.5"></i>User Profile
          </button>
        </div>

        {/* Header */}
        <div className="flex justify-between items-center px-7 pt-4 text-gray-300 font-semibold">
          <div className="flex flex-col justify-start gap-2 text-[30px] mt-3 ml-4">
            <span className="text-[34px] text-gray-400 font-bold">Prescriptions</span>
            <p className="text-[20px] text-gray-500 pb-2">
              Manage patient prescriptions and medications.
            </p>
          </div>

          <NavLink to="/Prescription/CreatePrescript">
            <button className="w-56 h-10 flex items-center justify-center gap-2 bg-amber-50 rounded">
              <i className="fas fa-plus text-[12px] text-black"></i>
              <span className="text-[17px] text-black">Create Prescription</span>
            </button>
          </NavLink>
        </div>

        {/* Prescriptions List */}
        <div className="flex-1 mx-2 my-2 bg-slate-950 rounded-md p-4">
          <div className="flex flex-col gap-2 ml-3">
            <h1 className="text-[30px] font-bold text-amber-100">All Prescriptions</h1>
            <p className="text-[15px] font-semibold text-gray-400 pb-5">
              View and manage all patient prescriptions.
            </p>
          </div>

          {/* Table Header */}
          <div className="w-full grid grid-cols-[20%_15%_10%_25%] justify-evenly border-b font-semibold border-gray-700 text-gray-400 text-[15px] py-4">
            <div>Patient</div>
            <div>Doctor</div>
            <div>Date</div>
            <div>Medication</div>
          </div>

          {/* Table Rows */}
          {loading ? (
            <p className="text-gray-500 text-center py-6">Loading prescriptions...</p>
          ) : prescriptions.length > 0 ? (
            prescriptions.map((pres, index) => (
              <div
                key={index}
                className="w-full grid grid-cols-[20%_15%_10%_25%] justify-evenly border-b border-gray-800 hover:bg-slate-600 hover:text-slate-300 transition-all duration-300 py-5 text-sm text-gray-300"
              >
                <div>{pres.patientName}</div>
                <div>{pres.doctorName}</div>
                <div>{pres.date}</div>
                <div className="flex flex-col gap-1">
                  {pres.medications && pres.medications.length > 0 ? (
                    pres.medications.map((med, i) => <p key={i}>{med}</p>)
                  ) : (
                    <p>No medications listed</p>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center py-6">No prescriptions found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Prescriptions;
