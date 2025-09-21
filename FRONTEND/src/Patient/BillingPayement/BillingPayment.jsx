import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar";
import UserDropdown from "../UserProfile/UserDropdown";

const defaultBills = [
  {
    id: 1,
    name: "Consultation Fee",
    amount: 1200,
    dueDate: "2025-09-25",
    category: "Consultation",
    paid: false,
  },
  {
    id: 2,
    name: "Lab Test Fee",
    amount: 2500,
    dueDate: "2025-09-28",
    category: "Lab Test",
    paid: false,
  },
  {
    id: 3,
    name: "Medicine Bill",
    amount: 900,
    dueDate: "2025-09-20",
    category: "Medicine",
    paid: true,
  },
];

const paymentMethods = ["Credit Card", "UPI", "Wallet"];

const BillingPayment = () => {
  const [bills, setBills] = useState(() => {
    return JSON.parse(localStorage.getItem("bills")) || defaultBills;
  });

  const [activeTab, setActiveTab] = useState("All");
  const [selectedMethod, setSelectedMethod] = useState(paymentMethods[0]);
  const [notificationDropdown, setNotificationDropdown] = useState(false);

  useEffect(() => {
    localStorage.setItem("bills", JSON.stringify(bills));
  }, [bills]);

  const payBill = (id) => {
    const updated = bills.map((b) =>
      b.id === id ? { ...b, paid: true } : b
    );
    setBills(updated);
    alert("Payment successful!");
  };

  const filteredBills =
    activeTab === "All"
      ? bills
      : activeTab === "Paid"
      ? bills.filter((b) => b.paid)
      : activeTab === "Unpaid"
      ? bills.filter((b) => !b.paid)
      : bills.filter((b) => !b.paid && new Date(b.dueDate) > new Date());

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
            Billing & Payment
          </div>

          <div className="flex items-center gap-4 relative">
            {/* Notification Icon */}
            <div className="relative">
              <div
                className="cursor-pointer w-11 h-11 flex items-center justify-center bg-slate-900 hover:bg-gray-500 rounded-full transition"
                onClick={() => setNotificationDropdown((prev) => !prev)}
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
                    <span className="font-medium">Payment Reminder:</span> Your
                    bill is due soon.
                  </div>
                  <div className="px-4 py-2 hover:bg-white cursor-pointer text-sm">
                    <span className="font-medium">New Bill Added:</span> Lab Test
                    Fee added to your account.
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

        {/* Status Tabs */}
        <div className="flex gap-4 mb-6 ml-1">
          {["All", "Paid", "Unpaid", "Upcoming"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded font-semibold ${
                activeTab === tab
                  ? "bg-blue-500 text-white"
                  : "bg-slate-700 text-gray-300 hover:bg-slate-600"
              } transition`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Bills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredBills.length === 0 && (
            <p className="text-gray-300">No bills found for this category.</p>
          )}

          {filteredBills.map((bill) => (
            <div
              key={bill.id}
              className="bg-slate-900 p-6 rounded-xl shadow-md text-white flex flex-col gap-3 hover:scale-105 transition"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold flex items-center gap-2 text-blue-300">
                  {bill.name}
                </h3>
                <span
                  className={`px-2 py-1 rounded bg-slate-700 ${
                    bill.paid ? "text-green-400 font-semibold" : "text-yellow-400 font-semibold"
                  }`}
                >
                  {bill.paid ? "Paid" : "Unpaid"}
                </span>
              </div>
              <p>Amount: ₹{bill.amount}</p>
              <p>Due Date: {bill.dueDate}</p>
              <p>Category: {bill.category}</p>

              {!bill.paid && (
                <div className="flex flex-col md:flex-row gap-2 mt-2">
                  <select
                    className="bg-slate-800 text-white p-2 rounded flex-1"
                    value={selectedMethod}
                    onChange={(e) => setSelectedMethod(e.target.value)}
                  >
                    {paymentMethods.map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>
                  <button
                    onClick={() => payBill(bill.id)}
                    className="bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded transition w-max"
                  >
                    Pay Now
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BillingPayment;
