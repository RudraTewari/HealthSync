import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar'
import AdminProfile from '../AdminProfile'
import { NavLink } from 'react-router-dom'

const PaymentHistory = () => {
  const [payments, setPayments] = useState([])

  useEffect(() => {
    // Mock backend data (replace with API call later)
    const mockPayments = [
      {
        id: "001",
        patientName: "Rishab Patel",
        invoice: "INV-005",
        date: "2025-08-10",
        amount: "$300,000",
        method: "Credit",
        status: "Completed",
      },
      {
        id: "002",
        patientName: "Ananya Sharma",
        invoice: "INV-006",
        date: "2025-08-12",
        amount: "$150,000",
        method: "Cash",
        status: "Pending",
      },
      {
        id: "003",
        patientName: "Aarav Verma",
        invoice: "INV-007",
        date: "2025-08-13",
        amount: "$250,000",
        method: "UPI",
        status: "Failed",
      },
    ]

    setPayments(mockPayments)
  }, [])

  return (
    <>
      <div className="w-full min-h-screen items-stretch">
        <div className="w-full min-h-screen grid grid-cols-12">
          <div className="col-span-2">
            <Sidebar />
          </div>
          <div className="col-span-10 bg-slate-900 h-full flex flex-col">
            
            {/* Header */}
            <div className="h-16 flex items-center justify-end bg-slate-950 border-b-2 rounded-[5px] px-6 space-x-4">
              <button className="text-[15px] text-gray-300 hover:scale-110">
                <i className="fas fa-bell text-gray-300"></i>
              </button>
              <NavLink to="/Admin/AdminProfile" className="h-10 w-36 flex flex-wrap bg-slate-900 border-2 border-slate-900 rounded-full hover:border-amber-100 hover:scale-110 duration-300 ease-in">
                <i className="fas fa-user mr-2.5 text-white ml-2 mt-2.5"></i>
                <h2 className="text-[15px] text-white mt-2">Admin Profile</h2>
              </NavLink>
            </div>

            {/* Title */}
            <div className="flex justify-between items-center px-7 pt-4 text-gray-300 font-semibold">
              <div className="flex flex-col justify-start gap-2 text-[30px] mt-3 ml-4">
                <span className="text-[34px] text-gray-400 font-bold ">Payments History</span>
                <p className="text-[20px] text-gray-500 pb-2">View and manage all payment transactions.</p>
              </div>
            </div>

            {/* Table */}
            <div className="flex-1 mx-2 my-2 bg-slate-950 rounded-md p-4">
              <div className="flex flex-col gap-2 ml-3">
                <h1 className="text-[30px] font-bold text-amber-100 ">All Payments</h1>
                <p className="text-[15px] font-semibold text-gray-400 pb-5">View all payments transaction.</p>
              </div>

              {/* Table Head */}
              <div className="w-full grid grid-cols-[10%_20%_10%_10%_15%_15%_20%] justify-evenly border-b font-semibold border-gray-700 text-gray-400 text-[15px] py-4">
                <div className="text-center">Payment ID</div>
                <div className="text-center">Patient Name</div>
                <div className="text-center">Invoice</div>
                <div className="text-center">Date</div>
                <div className="text-center">Amount</div>
                <div className="text-center">Method</div>
                <div className="text-center">Status</div>
              </div>

              {/* Table Rows */}
              {payments.map((payment, index) => (
                <div
                  key={index}
                  className="w-full grid grid-cols-[10%_20%_10%_10%_15%_15%_20%] justify-evenly border-b border-gray-800 hover:bg-slate-800 hover:text-slate-300 transition-all duration-300 py-5 text-sm text-gray-300"
                >
                  <div className="text-center">{payment.id}</div>
                  <div className="text-center">{payment.patientName}</div>
                  <div className="text-center">{payment.invoice}</div>
                  <div className="text-center">{payment.date}</div>
                  <div className="text-center">{payment.amount}</div>
                  <div className="text-center">{payment.method}</div>
                  <div
                    className={`text-center font-semibold ${
                      payment.status === "Completed"
                        ? "text-green-400"
                        : payment.status === "Pending"
                        ? "text-yellow-400"
                        : "text-red-400"
                    }`}
                  >
                    {payment.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PaymentHistory
