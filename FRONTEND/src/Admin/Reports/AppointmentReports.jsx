import React, { useState } from "react";
import Sidebar from "../Sidebar";


const AppointmentReports = () => {

  return (

    <>
      <div className="w-full min-h-screen grid grid-cols-12">
        <div className="col-span-2">
          <Sidebar />
        </div>

        <div className="col-span-10 flex flex-col bg-slate-900 min-h-screen">

          <div className="h-16 flex items-center justify-end bg-slate-950 border-b-2 rounded-[5px] px-6 space-x-4">
            <button className="text-[15px] text-gray-300 hover:scale-110">
              <i className="fas fa-bell text-gray-300"></i>
            </button>
            <button className="h-10 w-36 text-[15px] text-amber-100 font-semibold bg-slate-900 border-2 border-slate-900 rounded-full hover:border-amber-100 hover:scale-110 duration-300 ease-in">
              <i className="fas fa-user mr-2.5"></i>User Profile
            </button>
          </div>
          <div className="flex flex-col justify-start  gap-2 mt-5 ml-8">
            <span className='text-[34px] text-gray-400 font-bold '>Appointment Reports</span>
            <p className="text-[20px] text-gray-500">Analyze appointment data, track trends, and generate detailed reports </p>
          </div>

          <div className='flex-1 mx-2 my-2  bg-slate-950 rounded-md p-4 mt-5'>
            <div className="grid grid-cols-12 gap-3">
              <div className="col-span-6 bg-slate-900  py-7  px-4 border-2 rounded-md border-slate-700 hover:border-white mt-10 ml-5 ">
                <h1 className='text-[30px] text-gray-400  font-semibold'>Total Appointments</h1>
                <h1 className="text-[40px] text-gray-400  mt-2.5 font-semibold">1,258</h1>
                <p className='text-[15px] text-gray-400 '>+12.5% from last month</p>
                <div className="w-72 h-3 bg-gray-800 rounded-full overflow-hidden mt-3">
                  <div
                    className="h-3 rounded-full"
                    style={{
                      width: "65%",
                      background: "linear-gradient(to right, white)"
                    }}
                  ></div>
                </div>
              </div>

              <div className="col-span-6 bg-slate-900  py-7  px-4 border-2 rounded-md border-slate-700 hover:border-white mt-10 ml-5 ">
                <h1 className='text-[30px] text-gray-400  font-semibold'>Booked</h1>
                <h1 className="text-[40px] text-gray-400  mt-2.5 font-semibold">876</h1>
                <p className='text-[15px] text-gray-400 '>70.2% completion rate</p>
                <div className="w-72 h-3 bg-gray-800 rounded-full overflow-hidden mt-3">
                  <div
                    className="h-3 rounded-full"
                    style={{
                      width: "70.2%",
                      background: "linear-gradient(to right, green)"
                    }}
                  ></div>
                </div>
              </div>

              <div className="col-span-6 bg-slate-900  py-7  px-4 border-2 rounded-md border-slate-700 hover:border-white mt-10 ml-5 ">
                <h1 className='text-[30px] text-gray-400  font-semibold'>Cancelled</h1>
                <h1 className="text-[40px] text-gray-400  mt-2.5 font-semibold">187</h1>
                <p className='text-[15px] text-gray-400 '>15% cancellation rate</p>
                <div className="w-72 h-3 bg-gray-800 rounded-full overflow-hidden mt-3">
                  <div
                    className="h-3 rounded-full"
                    style={{
                      width: "15%",
                      background: "linear-gradient(to right, red)"
                    }}
                  ></div>
                </div>
              </div>


              <div className="col-span-6 bg-slate-900  py-7  px-4 border-2 rounded-md border-slate-700 hover:border-white mt-10 ml-5 ">
                <h1 className='text-[30px] text-gray-400  font-semibold'>No-Shows</h1>
                <h1 className="text-[40px] text-gray-400  mt-2.5 font-semibold">85</h1>
                <p className='text-[15px] text-gray-400 '>6.8% no-show rate</p>
                <div className="w-72 h-3 bg-gray-800 rounded-full overflow-hidden mt-3">
                  <div
                    className="h-3 rounded-full"
                    style={{
                      width: "6.8%",
                      background: "linear-gradient(to right, yellow)"
                    }}
                  ></div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </div>


    </>

  );
};

export default AppointmentReports;
