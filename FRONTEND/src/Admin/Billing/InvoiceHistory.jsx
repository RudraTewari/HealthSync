import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar'
import { NavLink } from 'react-router-dom'

const InvoiceHistory = () => {
  const [invoices, setInvoices] = useState([])

  useEffect(() => {
    // Fetch invoices from backend
    const fetchInvoices = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/invoices") // update with your backend route
        const data = await res.json()
        setInvoices(data)
      } catch (error) {
        console.error("Error fetching invoices:", error)
      }
    }

    fetchInvoices()
  }, [])

  return (
    <div className='w-full min-h-screen items-stretch'>
      <div className="w-full min-h-screen grid grid-cols-12">
        <div className="col-span-2">
          <Sidebar />
        </div>
        <div className="col-span-10 bg-slate-900 h-full flex flex-col">

          {/* Top Navbar */}
          <div className="h-16 flex items-center justify-end bg-slate-950 border-b-2 rounded-[5px] px-6 space-x-4">
            <button className="text-[15px] text-gray-300 hover:scale-110">
              <i className="fas fa-bell text-gray-300"></i>
            </button>
            <button className="h-10 w-36 text-[15px] text-amber-100 font-semibold bg-slate-900 border-2 border-slate-900 rounded-full hover:border-amber-100 hover:scale-110 duration-300 ease-in">
              <i className="fas fa-user mr-2.5"></i>User Profile
            </button>
          </div>

          {/* Header Section */}
          <div className="flex justify-between items-center px-7 pt-4 text-gray-300 font-semibold">
            <div className="flex flex-col justify-start gap-2 text-[30px] mt-3 ml-4">
              <span className='text-[34px] text-gray-400 font-bold '>Invoices</span>
              <p className="text-[20px] text-gray-500 pb-2">Manage billing and invoices for your patients. </p>
            </div>

            <NavLink to='/Billing/CreateInvoice'>
              <button className='w-52 h-10 flex items-center justify-center gap-2 bg-amber-50 rounded'>
                <i className='fas fa-plus text-[12px] text-black font-semibold'></i>
                <span className='text-[17px] text-black font-semibold'>Create Invoices</span>
              </button>
            </NavLink>
          </div>

          {/* Invoices Table */}
          <div className="flex-1 mx-2 my-2 bg-slate-950 rounded-md p-4">
            <div className="flex flex-col gap-2 ml-3">
              <h1 className="text-[30px] font-bold text-amber-100 ">All Invoices</h1>
              <p className="text-[15px] font-semibold text-gray-400 pb-5">View all invoices.</p>
            </div>

            {/* Table Header */}
            <div className="w-full grid grid-cols-[10%_20%_10%_10%_15%_15%_20%] border-b font-semibold border-gray-700 text-gray-400 text-[15px] py-4">
              <div className="text-center">Invoice</div>
              <div className="text-center">Patient Name</div>
              <div className="text-center">Date</div>
              <div className="text-center">Amount</div>
              <div className="text-center">Balance</div>
              <div className="text-center">Status</div>
              <div className="text-center">Insurance</div>
            </div>

            {/* Table Rows */}
            {invoices.length > 0 ? (
              invoices.map((invoice) => (
                <div
                  key={invoice._id}
                  className="w-full grid grid-cols-[10%_20%_10%_10%_15%_15%_20%] border-b border-gray-800 py-5 text-sm text-gray-300 hover:bg-slate-800 hover:text-slate-300 transition-all duration-300"
                >
                  <div className="text-center text-[15px] font-semibold">{invoice.invNumber}</div>
                  <div className="text-center text-[15px] font-semibold">{invoice.patient}</div>
                  <div className="text-center text-[15px] font-semibold">{invoice.date}</div>
                  <div className="text-center text-[15px] font-semibold">${invoice.amount}</div>
                  <div className="text-center text-[15px] font-semibold">${invoice.balance}</div>
                  <div className={` text-[15px] text-center font-semibold 
                      ${invoice.invStatus=="Paid" ? " text-green-600 ":""} 
                      ${invoice.invStatus=="Partial Paid" ? " text-amber-500   ":""}
                      ${invoice.invStatus=="Unpaid" ? " text-red-700   ":""} `}>{invoice.invStatus}</div>
                  <div className={`text-center text-[15px] font-semibold
                      ${invoice.insStatus=="Approved" ? "text-green-600 ":""} 
                      ${invoice.insStatus=="Pending" ? "text-yellow-500  ":""}
                      ${invoice.insStatus=="UnSubmitted" ? "text-red-700 ":""} `}>{invoice.insStatus}</div>
                </div>
              ))
            ) : (
              <div className="text-center text-gray-500 py-6">No invoices found</div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default InvoiceHistory
