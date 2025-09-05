import React, { useState } from 'react'
import Sidebar from '../Sidebar'
import Personal from './Personal'
import Professional from './Professional'
import { useForm, FormProvider } from "react-hook-form";
import { addDoctor } from '@/Services/api'; 
import AdminProfile from '../AdminProfile';
import { NavLink } from 'react-router-dom';

const AddDoctor = () => {
  const [activeTab, setActiveTab] = useState('personal');
  const [loading, setLoading] = useState(false);
  const methods = useForm();   // RHF instance

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      await addDoctor(data);   // call your API
      alert("Doctor added successfully!");
      methods.reset();
    } catch (err) {
      console.error(err);
      alert("Failed to add doctor");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='w-full min-h-screen items-stretch'>
      <div className="grid grid-cols-12 p-0 m-0">
        <div className="col-span-2 p-0 m-0">
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
          <div className="flex flex-col justify-start gap-2 mt-5 ml-8">
            <span className='text-[34px] text-gray-400 font-bold '>Add Doctor</span>
            <p className="text-[20px] text-gray-500">Add a new doctor to your clinic. </p>
          </div>

          {/* Form with Tabs */}
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} className="flex-1 mx-2 my-2 bg-slate-950 rounded-md p-4 mt-5">

              {/* Tab Buttons */}
              <div className="flex space-x-6 mb-6">
                <button
                  type="button"
                  onClick={() => setActiveTab('personal')}
                  className={`px-4 py-2 rounded-full ${activeTab === 'personal' ? 'bg-white text-black' : 'bg-gray-800 text-gray-400 hover:bg-gray-400 hover:text-black'}`}
                >
                  Personal Information
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('professional')}
                  className={`px-4 py-2 rounded-full ${activeTab === 'professional' ? 'bg-white text-black' : 'bg-gray-800 text-gray-400 hover:bg-gray-400 hover:text-black'}`}
                >
                  Professional Details
                </button>
              </div>

              {/* Tab Content */}
              {activeTab === 'personal' && <div className="text-white"><Personal setActiveTab={setActiveTab} /></div>}
              {activeTab === 'professional' && <div className="text-white"><Professional />
                <div className="mt-6">
                  <button
                    type="submit"
                    disabled={loading}
                    className={`px-6 py-2 flex items-center justify-center gap-2 rounded-full text-slate-950 font-semibold ${loading
                      ? "bg-gray-500 cursor-not-allowed"
                      : "bg-amber-100 hover:bg-gray-600 hover:text-white"
                      }`}
                  >
                    {loading && (
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    )}
                    {loading ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </div>}

              {/* Submit Button */}
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
};

export default AddDoctor;
