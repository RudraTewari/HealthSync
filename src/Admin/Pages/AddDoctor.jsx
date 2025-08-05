import React from 'react'
import Sidebar from '../Sidebar'
import { useState } from 'react'
import Personal from './Personal'
import Professional from './Professional'

const AddDoctor = () => {
  const [activeTab, setActiveTab] = useState('personal');

  return (
    <>
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
              <span className='text-[34px] text-gray-400 font-bold '>Add Doctor</span>
              <p className="text-[20px] text-gray-500">Add a new doctor to your clinic. </p>

            </div>

            <div className="flex-1 mx-2 my-2 bg-slate-950 rounded-md p-4 mt-5">

              <div className="flex space-x-6 mb-6">
                <button
                  onClick={() => setActiveTab('personal')}
                  className={`px-4 py-2 rounded-full ${activeTab === 'personal' ? 'bg-white text-black' : 'bg-gray-800 text-gray-400 hover:bg-gray-400 hover:text-black'}`}
                >
                  Personal Information
                </button>
                <button
                  onClick={() => setActiveTab('professional')}
                  className={`px-4 py-2 rounded-full ${activeTab === 'professional' ? 'bg-white text-black' : 'bg-gray-800 text-gray-400 hover:bg-gray-400 hover:text-black'}`}
                >
                  Professional Details
                </button>
                
              </div>
              {activeTab === 'personal' && <div className="text-white"><Personal/> </div>}
              {activeTab === 'professional' && <div className="text-white"><Professional/></div>}

            </div>
          </div>
        </div>




      </div>


    </>
  )
}

export default AddDoctor