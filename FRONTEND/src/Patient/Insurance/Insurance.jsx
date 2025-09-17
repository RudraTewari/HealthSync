import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar";
import UserDropdown from "../UserProfile/UserDropdown";

const defaultPlans = [
  { id: 1, name: "MediSecure", type: "Health", coverage: "Up to ₹75,000", premium: "₹1,800/year" },
  { id: 2, name: "SafeLife", type: "Life", coverage: "Up to ₹1,00,000", premium: "₹2,000/year" },
  { id: 3, name: "FamilyCare", type: "Health", coverage: "Up to ₹5,00,000", premium: "₹8,500/year" },
];

const Insurance = () => {
  const [plans, setPlans] = useState(defaultPlans);

  const [purchasedPlans, setPurchasedPlans] = useState(() => {
    return JSON.parse(localStorage.getItem("purchasedPlans") || "[]");
  });

  const [category, setCategory] = useState("All");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notificationDropdown, setNotificationDropdown] = useState(false);

  useEffect(() => {
    localStorage.setItem("purchasedPlans", JSON.stringify(purchasedPlans));
  }, [purchasedPlans]);

  const filteredPlans = category === "All" ? plans : plans.filter((p) => p.type === category);

  const buyPlan = (plan) => {
    if (!purchasedPlans.find((p) => p.id === plan.id)) {
      setPurchasedPlans([...purchasedPlans, plan]);
      alert(`${plan.name} purchased successfully!`);
    } else {
      alert("You already purchased this plan.");
    }
  };

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
            Insurance
          </div>

          <div className="flex items-center gap-4 relative">
            {/* Notification Icon with badge like Appointments */}
            <div className="relative cursor-pointer w-11 h-11 flex items-center justify-center bg-slate-900 hover:bg-gray-500 rounded-full transition">
              <i className="fa-solid fa-bell text-white text-xl"></i>
              <span className="absolute -top-1 -right-1 bg-red-500 text-xs text-white px-1.5 py-0.5 rounded-full font-bold">
                2
              </span>
            </div>

            {/* Notification Dropdown */}
            {notificationDropdown && (
              <div className="absolute right-0 mt-2 bg-gray-200 text-black w-60 rounded-lg shadow-lg overflow-hidden z-50">
                <div className="px-4 py-3 border-b border-gray-300 font-semibold">Notifications</div>
                <div className="px-4 py-2 hover:bg-white cursor-pointer text-sm">
                  <span className="font-medium">Policy Update:</span> New health insurance plans available.
                </div>
                <div className="px-4 py-2 hover:bg-white cursor-pointer text-sm">
                  <span className="font-medium">Premium Due:</span> Your premium for SafeLife is due next week.
                </div>
                <div className="px-4 py-2 hover:bg-white cursor-pointer text-sm text-gray-400">
                  No more notifications.
                </div>
              </div>
            )}

            {/* Profile Dropdown */}
            <UserDropdown /> {/* replaced hardcoded dropdown */}
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex gap-4 mb-6">
          {["All", "Health", "Life"].map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`px-4 py-2 rounded ${
                category === c ? "bg-pink-500 text-white" : "bg-slate-700 text-white hover:bg-slate-600"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredPlans.map((plan) => (
            <div
              key={plan.id}
              className="bg-slate-900 p-6 rounded-xl shadow-md flex flex-col gap-4 hover:scale-105 transition"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold flex items-center gap-2 text-white">
                  <i className="fa-solid fa-shield-heart text-pink-400"></i> {plan.name}
                </h3>
                <span className="px-2 py-1 rounded-full bg-blue-600 text-white">{plan.type}</span>
              </div>
              <p className="text-white">Coverage: {plan.coverage}</p>
              <p className="text-white">Premium: {plan.premium}</p>
              <button
                onClick={() => buyPlan(plan)}
                className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded transition w-max text-white"
              >
                Buy Plan
              </button>
            </div>
          ))}
        </div>

        {/* Purchased Plans */}
        <div className="mt-6">
          <h2 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
            <i className="fa-solid fa-check-circle text-green-400"></i> Purchased Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {purchasedPlans.length === 0 && <p className="text-gray-300">No plans purchased yet.</p>}
            {purchasedPlans.map((plan) => (
              <div key={plan.id} className="bg-slate-700 p-4 rounded-xl shadow-md flex flex-col gap-2">
                <p className="font-bold text-lg text-white">{plan.name}</p>
                <p className="text-white">Type: {plan.type}</p>
                <p className="text-white">Coverage: {plan.coverage}</p>
                <p className="text-white">Premium: {plan.premium}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insurance;
