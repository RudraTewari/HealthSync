import React from 'react'
import { useState } from 'react'
import Sidebar from '../Sidebar'
import Completed from './Completed'
import Cancelled from './Cancelled'
import Appointments from './Appointments'
import AddAppointments from './AddAppointments'
import { NavLink } from 'react-router-dom'

const AllAppointments = () => {
    const [activeTab, setActiveTab] = useState('allAppoint');

    return (
        <div className='w-full min-h-screen items-stretch'>
            <div className=" grid grid-cols-12 p-0 m-0">
                <div className="col-span-2 p-0 m-0">
                    <Sidebar />
                </div>
                <div className="col-span-10 bg-slate-900 h-full flex flex-col">

                    <div className="h-16 flex items-center justify-end bg-slate-950 border-b-2 rounded-[5px] px-6 space-x-4">
                        <button className="text-[15px] text-gray-300 hover:scale-110">
                            <i className="fas fa-bell text-gray-300"></i>
                        </button>
                        <button className="h-10 w-36 text-[15px] text-amber-100 font-semibold bg-slate-900 border-2 border-slate-900 rounded-full hover:border-amber-100 hover:scale-110 duration-300 ease-in">
                            <i className="fas fa-user mr-2.5"></i>User Profile
                        </button>
                    </div>

                    <div className="flex flex-col justify-start  gap-2 mt-5 ml-8">
                        <span className='text-[34px] text-gray-400 font-bold '>Appointments</span>
                        <p className="text-[20px] text-gray-500">Manage your clinic's appointments and schedules. </p>
                    </div>



                    <div className="flex-1 mx-2 my-2  bg-slate-950 rounded-md p-4 mt-5">



                        <div className="flex justify-between items-center mb-6">
                            <div className="flex space-x-6">
                                <button
                                    onClick={() => setActiveTab('allAppoint')}
                                    className={`px-4 py-2 rounded-full ${activeTab === 'allAppoint' ? 'bg-white text-black' : 'bg-gray-800 text-gray-400 hover:bg-gray-400 hover:text-black'}`}
                                >
                                    All Appointments
                                </button>
                                <button
                                    onClick={() => setActiveTab('completed')}
                                    className={`px-4 py-2 rounded-full ${activeTab === 'completed' ? 'bg-white text-black' : 'bg-gray-800 text-gray-400 hover:bg-gray-400 hover:text-black'}`}
                                >
                                    Completed
                                </button>
                                <button
                                    onClick={() => setActiveTab('cancelled')}
                                    className={`px-4 py-2 rounded-full ${activeTab === 'cancelled' ? 'bg-white text-black' : 'bg-gray-800 text-gray-400 hover:bg-gray-400 hover:text-black'}`}
                                >
                                    Cancelled
                                </button>
                            </div>

                            <NavLink to='/Appoint/AddAppointments'>
                                <button className='w-52 h-10 flex items-center justify-center gap-2 bg-amber-50 rounded'>
                                    <i className='fas fa-plus text-[12px] text-black font-semibold'></i>
                                    <span className='text-[17px] text-black font-semibold'>Add Appointments</span>
                                </button>
                            </NavLink>
                        </div>

                        {activeTab === 'allAppoint' && <div className="text-white"><Appointments /> </div>}
                        {activeTab === 'completed' && <div className="text-white"><Completed /></div>}
                        {activeTab === 'cancelled' && <div className="text-white"><Cancelled /></div>}



                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllAppointments