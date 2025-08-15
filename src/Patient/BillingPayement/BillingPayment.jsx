import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar";

const billCategories = ["Consultation", "Lab Test", "Medicine", "Other"];
const paymentMethods = ["Credit Card", "UPI", "Wallet"];

const BillingPayment = () => {
  const [bills, setBills] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notificationDropdown, setNotificationDropdown] = useState(false);
  const [activeTab, setActiveTab] = useState("All");
  const [selectedMethod, setSelectedMethod] = useState(paymentMethods[0]);

  // Load bills from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("bills") || "[]");
    setBills(saved);
  }, []);

  const addMockBill = (category) => {
    const newBill = {
      id: Date.now(),
      name: `${category} Fee`,
      amount: Math.floor(Math.random() * 5000) + 500,
      dueDate: new Date().toLocaleDateString(),
      category,
      paid: false,
    };
    const updated = [...bills, newBill];
    setBills(updated);
    localStorage.setItem("bills", JSON.stringify(updated));
  };

  const payBill = (id) => {
    const updated = bills.map((b) => (b.id === id ? { ...b, paid: true } : b));
    setBills(updated);
    localStorage.setItem("bills", JSON.stringify(updated));
  };

  const filteredBills =
    activeTab === "All"
      ? bills
      : activeTab === "Paid"
      ? bills.filter((b) => b.paid)
      : activeTab === "Unpaid"
      ? bills.filter((b) => !b.paid)
      : bills.filter((b) => !b.paid && new Date(b.dueDate) > new Date());

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);
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
            Billing & Payment
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
                    <span className="font-medium">Payment Reminder:</span> Your bill is due soon.
                  </div>
                  <div className="px-4 py-2 hover:bg-white cursor-pointer text-sm">
                    <span className="font-medium">New Bill Added:</span> Lab Test Fee added to your account.
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

        {/* Status Tabs */}
        <div className="flex gap-4 mb-6">
          {["All", "Paid", "Unpaid", "Upcoming"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl font-semibold ${
                activeTab === tab ? "bg-pink-500 text-white" : "bg-slate-700 text-gray-300 hover:bg-slate-600"
              } transition`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Bills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredBills.length === 0 && <p className="text-gray-300">No bills found for this category.</p>}

          {filteredBills.map((bill) => (
            <div
              key={bill.id}
              className="bg-slate-900 p-6 rounded-xl shadow-md text-white flex flex-col gap-3 hover:scale-105 transition"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold flex items-center gap-2">
                  <i className="fa-solid fa-file-invoice-dollar text-pink-400"></i> {bill.name}
                </h3>
                <span className={`px-2 py-1 rounded-full ${bill.paid ? "bg-green-600" : "bg-red-600"}`}>
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
                    className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded transition w-max"
                  >
                    Pay Now
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Add Mock Bills Section */}
        <div className="bg-slate-900 p-6 rounded-xl shadow-md mt-6">
          <h2 className="text-xl font-bold mb-4 text-white">Add Mock Bills</h2>
          <div className="flex flex-wrap gap-3">
            {billCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => addMockBill(cat)}
                className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-white transition"
              >
                Add {cat} Fee
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingPayment;
