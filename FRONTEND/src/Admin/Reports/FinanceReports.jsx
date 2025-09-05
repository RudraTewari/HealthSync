import React from 'react';
import Sidebar from '../Sidebar';
import { NavLink } from 'react-router-dom';
import AdminProfile from '../AdminProfile';

const FinanceReports = () => {
  return (
    <div className="w-full min-h-screen items-stretch">
      <div className="w-full min-h-screen grid grid-cols-12">
        <div className="col-span-2">
          <Sidebar />
        </div>
        <div className="col-span-10 flex flex-col bg-slate-900 min-h-screen">
          <div className="h-16 flex items-center justify-end bg-slate-950 border-b-2 rounded-[5px] px-6 space-x-4">
            <button className="text-[15px] text-gray-300 hover:scale-110">
              <i className="fas fa-bell text-gray-300"></i>
            </button>
            <NavLink to="/Admin/AdminProfile" className="h-10 w-36 flex flex-wrap bg-slate-900 border-2 border-slate-900 rounded-full hover:border-amber-100 hover:scale-110 duration-300 ease-in">
                <i className="fas fa-user mr-2.5 text-white ml-2 mt-2.5"></i>
                <h2 className="text-[15px] text-white mt-2">Admin Profile</h2>
              </NavLink>
          </div>

          <div className="flex flex-col justify-start  gap-2 mt-5 ml-8">
            <span className='text-[34px] text-gray-400 font-bold '>Financial Reports</span>
            <p className="text-[20px] text-gray-500">Track revenue, expenses, and financial performance metrics</p>
          </div>
          <div className='flex-1 mx-2 my-2  bg-slate-950 rounded-md p-4 mt-5'>
            <div className="grid grid-cols-12 gap-3">
              <div className="col-span-6 bg-slate-900  py-7  px-4 border-2 rounded-md border-slate-700 hover:border-white mt-10 ml-5 ">
                <h1 className='text-[30px] text-gray-400  font-semibold'>Total Revenue</h1>
                <h1 className="text-[40px] text-gray-400  mt-2.5 font-semibold">$128,450</h1>
                <p className='text-[15px] text-gray-400 '>+18.2% from last month</p>
                <div className="w-72 h-3 bg-gray-800 rounded-full overflow-hidden mt-3">
                  <div
                    className="h-3 rounded-full"
                    style={{
                      width: "78%",
                      background: "linear-gradient(to right, white)"
                    }}
                  ></div>
                </div>
              </div>

              <div className="col-span-6 bg-slate-900  py-7  px-4 border-2 rounded-md border-slate-700 hover:border-white mt-10 ml-5 ">
                <h1 className='text-[30px] text-gray-400  font-semibold'>Total Expenses</h1>
                <h1 className="text-[40px] text-gray-400  mt-2.5 font-semibold">$87,325</h1>
                <p className='text-[15px] text-gray-400 '>+5.4% from last month</p>
                <div className="w-72 h-3 bg-gray-800 rounded-full overflow-hidden mt-3">
                  <div
                    className="h-3 rounded-full"
                    style={{
                      width: "45%",
                      background: "linear-gradient(to right, red)"
                    }}
                  ></div>
                </div>
              </div>

              <div className="col-span-6 bg-slate-900  py-7  px-4 border-2 rounded-md border-slate-700 hover:border-white mt-10 ml-5 ">
                <h1 className='text-[30px] text-gray-400  font-semibold'>Net Profit</h1>
                <h1 className="text-[40px] text-gray-400  mt-2.5 font-semibold">$41,125</h1>
                <p className='text-[15px] text-gray-400 '>+12.8% from last month</p>
                <div className="w-72 h-3 bg-gray-800 rounded-full overflow-hidden mt-3">
                  <div
                    className="h-3 rounded-full"
                    style={{
                      width: "25%",
                      background: "linear-gradient(to right, green)"
                    }}
                  ></div>
                </div>
              </div>


              <div className="col-span-6 bg-slate-900  py-7  px-4 border-2 rounded-md border-slate-700 hover:border-white mt-10 ml-5 ">
                <h1 className='text-[30px] text-gray-400  font-semibold'>Outstanding Payments</h1>
                <h1 className="text-[40px] text-gray-400  mt-2.5 font-semibold">$23,540</h1>
                <p className='text-[15px] text-gray-400 '>+3.2% from last month</p>
                <div className="w-72 h-3 bg-gray-800 rounded-full overflow-hidden mt-3">
                  <div
                    className="h-3 rounded-full"
                    style={{
                      width: "15%",
                      background: "linear-gradient(to right, yellow)"
                    }}
                  ></div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default FinanceReports;
