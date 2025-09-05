import React, { useState, useEffect } from 'react'
import Sidebar from '../Sidebar'

const InsuranceClaims = () => {
  const [claims, setClaims] = useState([])

  // Simulating backend fetch with dummy data for now
  useEffect(() => {
    const dummyClaims = [
      {
        id: "CLM-001",
        patientName: "Rishab Patel",
        provider: "Blue Cross Blue Shield",
        submitted: "2025-08-10",
        amount: "$180,000",
        status: "Approved",
      },
      {
        id: "CLM-002",
        patientName: "Ananya Sharma",
        provider: "United Healthcare",
        submitted: "2025-08-12",
        amount: "$95,000",
        status: "Pending",
      },
      {
        id: "CLM-003",
        patientName: "Arjun Verma",
        provider: "HDFC Ergo",
        submitted: "2025-08-14",
        amount: "$150,000",
        status: "Rejected",
      },
    ]
    setClaims(dummyClaims)
  }, [])

  return (
    <>
      <div className='w-full min-h-screen items-stretch'>
        <div className="w-full min-h-screen grid grid-cols-12">
          <div className="col-span-2">
            <Sidebar />
          </div>

          <div className="col-span-10 bg-slate-900 h-full flex flex-col">
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
                <span className='text-[34px] text-gray-400 font-bold '>Insurance Claims</span>
                <p className="text-[20px] text-gray-500 pb-2">Manage and track insurance claims for patient services.</p>
              </div>
            </div>

            {/* Table */}
            <div className="flex-1 mx-2 my-2 bg-slate-950 rounded-md p-4">
              <div className="flex flex-col gap-2 ml-3">
                <h1 className="text-[30px] font-bold text-amber-100 ">All Insurance Claims</h1>
                <p className="text-[15px] font-semibold text-gray-400 pb-5">View and manage all insurance claims.</p>
              </div>

              {/* Table Header */}
              <div className="w-full grid grid-cols-[10%_20%_25%_10%_15%_15%] border-b font-semibold border-gray-700 text-gray-400 text-[15px] py-4">
                <div className="text-center">Claim ID </div>
                <div className="text-center">Patient Name</div>
                <div className="text-center">Provider</div>
                <div className="text-center">Submitted</div>               
                <div className="text-center">Amount</div>
                <div className="text-center">Status</div>
              </div>

              {/* Table Rows */}
              {claims.map((claim, index) => (
                <div 
                  key={index} 
                  className="w-full grid grid-cols-[10%_20%_25%_10%_15%_15%] border-b border-gray-800 hover:bg-slate-800 hover:text-slate-300 transition-all duration-300 py-5 text-sm text-gray-300"
                >
                  <div className="text-center">{claim.id}</div>
                  <div className="text-center">{claim.patientName}</div>
                  <div className="text-center">{claim.provider}</div>
                  <div className="text-center">{claim.submitted}</div>
                  <div className="text-center">{claim.amount}</div>
                  <div className="text-center">{claim.status}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default InsuranceClaims
