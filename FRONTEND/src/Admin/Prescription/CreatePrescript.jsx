import React from 'react'
import Sidebar from '../Sidebar'
import PresForm from './PresForm'
import AdminProfile from '../AdminProfile'
import { NavLink } from 'react-router-dom'

const CreatePrescript = () => {
    return (
        <>
            <div className='w-full min-h-screen items-stretch'>
                <div className=" w-full min-h-screen grid grid-cols-12">
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
                            <span className='text-[34px] text-gray-400 font-bold '>Create Prescription</span>
                            <p className="text-[20px] text-gray-500">Create a new prescription for a patient. </p>

                        </div>

                        <div className="flex-1 mx-2 my-2 bg-slate-950 rounded-md p-4 mt-5">
                            <div className="flex flex-col gap-2 ml-3">
                                <h1 className="text-[30px] font-bold text-amber-100 ">Prescription Details</h1>
                                <p className="text-[15px] font-semibold text-gray-400 ">Enter the details for the new prescription.</p>
                            </div>
                            <PresForm />

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CreatePrescript