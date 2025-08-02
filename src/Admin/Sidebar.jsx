import React, { useState } from 'react'
import Logo from '../assets/ChatGPT Image Jul 28, 2025, 07_48_37 PM.png'
import { NavLink } from 'react-router-dom';
import AddDoctor from './Pages/AddDoctor';
import DoctorList from './Pages/DoctorList';
import HealthRecords from './Records/HealthRecords';
import Specialization from './Pages/Specialization';
import Documents from './Records/Documents';
import Prescriptions from './Prescription/Prescriptions';
import CreatePrescript from './Prescription/CreatePrescript';

const Sidebar = () => {
  const [isDoctorsOpen, setDoctorsOpen] = useState(false);
  const toggleDoctors = () => setDoctorsOpen(!isDoctorsOpen)
  const [isRecordsOpen, setRecordsOpen] = useState(false);
  const toggleRecords = () => setRecordsOpen(!isRecordsOpen)
  const [isPresOpen, setPresOpen] = useState(false)
  const togglePrescript = () => setPresOpen(!isPresOpen)

  return (
    <>
      <div className='w-full h-full bg-slate-950 flex flex-col'>
        {/* Sidebar Top */}
        <div className='w-full rounded-b-lg'>
          <img src={Logo} alt={Logo} width={125} height={80} className=' rounded-2xl mx-auto mt-6  hover:scale-110 transition-all duration-500 ease-in '></img>
          <p className='text-2xl text-[#F8F3CE] text-center mt-1 py-4 font-bold '> Welcome Admin</p>
        </div>
        {/* Sidebar Bottom */}
        <div className='w-full flex-1 p-0 m-0 '>

          <nav className=' flex flex-col p-0 mt-7 gap-3'>
            <NavLink to={'/Admin'} id='active' className=' w-full flex gap-1 text-[17px] justify-center text-[#ECE5C7] py-3 px-2 font-semibold rounded-[7px] hover:bg-[#00FFDD] hover:text-[#0E185F] hover:border-amber-100'><i className='fas fa-tachometer-alt m-2'></i> Dashboard </NavLink>

            {/* <NavLink to={'/Pages/DoctorDashboard'} className=' text-[15px] text-center text-[#ECE5C7] px-2 py-3 ml-2 mr-2.5 mt-2 font-semibold border-2 border-[#4AE3B5] rounded-full hover:bg-[#00FFDD] hover:text-[#0E185F] hover:border-amber-100 transition-all duration-300 ease-in hover:scale-110'><i className='fas fa-user-md m-2'></i>Doctors Details <i className='fas fa-angle-right float-right mt-2'></i></NavLink> */}
            <div className="relative">
              <button
                onClick={toggleDoctors}
                className='w-full flex gap-6 text-[17px] justify-center text-[#ECE5C7] py-3 mr-4 font-semibold rounded-[7px] hover:bg-[#00FFDD] hover:text-[#0E185F] hover:border-amber-100'
              >
                <span className="ml-12 ">
                  <i className='fas fa-user-md mr-2'></i>Doctors
                </span>
                <i className={`${isDoctorsOpen ? 'fas fa-angle-up max-h-60 opacity-100 ' : 'fas fa-angle-down max-h-0'} float-right mr-3 mt-1 transition-transform duration-500  ease-in `}></i>
              </button>
              {isDoctorsOpen && (
                <div className='ml-4 mt-2 flex flex-col bg-slate-800 transition-transform duration-1000 ease-in mr-4'>
                  <NavLink to='/Pages/DoctorList' className='text-sm font-semibold text-[#eeede4] hover:text-cyan-400 hover:bg-slate-950 transition-all duration-200 px-2 py-2 text-center'>
                    <i className='fas fa-clipboard-user mr-4'></i>All Doctors
                  </NavLink>
                  <NavLink to='/Pages/AddDoctor' className='text-sm font-semibold text-[#ECE5C7] hover:text-cyan-400 hover:bg-slate-950 transition-all duration-200 px-2 py-2 text-center'>
                    <i className='fas fa-plus mr-3'></i>Add Doctors
                  </NavLink>
                  <NavLink to='/Pages/Specialization' className='text-sm font-semibold text-[#ECE5C7] hover:text-cyan-400 hover:bg-slate-950 transition-all duration-200 px-2 py-2 text-center'>
                    <i className='fas fa-stethoscope mr-2'></i>Specializations
                  </NavLink>
                </div>
              )}
            </div>



            {/* <NavLink to={'/Records/HealthRecords'} className=' text-[15px] text-center text-[#ECE5C7] px-2 py-3 ml-2 mr-2.5 mt-2 font-semibold border-2 border-[#4AE3B5] rounded-full hover:bg-[#00FFDD] hover:text-[#0E185F] hover:border-amber-100 transition-all duration-300 ease-in hover:scale-110'><i className='fas fa-notes-medical m-2'></i>Patient Records <i className='fas fa-angle-right float-right mt-2'></i></NavLink> */}

            <div className="relative">
              <button
                onClick={toggleRecords}
                className='w-full flex gap-6 text-[17px] justify-center text-[#ECE5C7] py-3 mr-4 font-semibold rounded-[7px] hover:bg-[#00FFDD] hover:text-[#0E185F] hover:border-amber-100'
              >
                <span className="ml-12 ">
                  <i className='fas fa-folder-open mr-2'></i>Records
                </span>
                <i className={`${isRecordsOpen ? 'fas fa-angle-up max-h-60 opacity-100' : 'fas fa-angle-down max-h-0'} float-right mr-3 mt-1 transition-transform duration-500 ease-in `}></i>
              </button>
              {isRecordsOpen && (
                <div className='ml-4 mt-2 flex flex-col bg-slate-800 transition-transform duration-300 ease-in mr-4'>
                  <NavLink to='/Records/HealthRecords' className="text-sm font-semibold text-[#eeede4] hover:text-cyan-400 hover:bg-slate-950 transition-all duration-200 px-2 py-2 text-center">
                    <i className='fas fa-file-medical mr-2'></i>Health Records
                  </NavLink>
                  <NavLink to='/Records/Documents' className="text-sm font-semibold text-[#eeede4] hover:text-cyan-400 hover:bg-slate-950 transition-all duration-200 px-2 py-2 text-center">
                    <i className='fas fa-file-upload mr-2'></i>Documents Upload
                  </NavLink>
                </div>
              )}
            </div>

            <NavLink to={''} className=' text-[15px] text-center text-[#ECE5C7] px-2 py-3 ml-2 mr-2.5 mt-2 font-semibold border-2 border-[#4AE3B5] rounded-full hover:bg-[#00FFDD] hover:text-[#0E185F] hover:border-amber-100 transition-all duration-300 ease-in hover:scale-110'><i className='fas fa-file-medical m-2' ></i>Appointments<i className='fas fa-angle-right float-right mt-2'></i></NavLink>



            {/* <NavLink to={''} className=' text-[15px] text-center text-[#ECE5C7] px-2 py-3 ml-1 mr-2.5 mt-2 font-semibold border-2 border-[#4AE3B5] rounded-full hover:bg-[#00FFDD] hover:text-[#0E185F] hover:border-amber-100 transition-all duration-300 ease-in hover:scale-110'><i className='fas fa-calendar-check mr-1'></i>Appointments Scheduling  <i className='fas fa-angle-right float-right mt-2'></i></NavLink> */}
            <div className="relative">
              <button
                onClick={togglePrescript}
                className="w-full flex gap-6 text-[17px] justify-center text-[#ECE5C7] py-3 mr-4 font-semibold rounded-[7px] hover:bg-[#00FFDD]   hover:text-[#0E185F] hover:border-amber-100">
                <span className="ml-12 ">
                  <i className='fas fa-file-prescription mr-2'></i>Prescriptions
                </span>
                <i className={`${isPresOpen ? 'fas fa-angle-up max-h-60 opacity-100' : 'fas fa-angle-down max-h-0'} float-right mr-3 mt-1 transition-transform duration-500 ease-in `}></i>
              </button>
              {isPresOpen && (
                <div className='ml-4 mt-2 flex flex-col bg-slate-800 transition-transform duration-300 ease-in mr-4'>
                  <NavLink to='/Prescription/Prescriptions' className="text-sm font-semibold text-[#eeede4] hover:text-cyan-400 hover:bg-slate-950 transition-all duration-200 px-2 py-2 text-center">
                    <i className='fas fa-file-medical mr-2'></i>All Prescripts
                  </NavLink>
                  <NavLink to='/Prescription/CreatePrescript' className="text-sm font-semibold text-[#eeede4] hover:text-cyan-400 hover:bg-slate-950 transition-all duration-200 px-2 py-2 text-center">
                    <i className='fas fa-file-upload mr-2'></i>Create Prescript
                  </NavLink>
                </div>
              )}
            </div>


            <NavLink to={''} className=' text-[15px] text-center text-[#ECE5C7] px-2 py-3 ml-2 mr-2.5 mt-2 font-semibold border-2 border-[#4AE3B5] rounded-full hover:bg-[#00FFDD] hover:text-[#0E185F] hover:border-amber-100 transition-all duration-300 ease-in hover:scale-110'><i className='fas fa-vial m-2' ></i>Lab Management   <i className='fas fa-angle-right float-right mt-2'></i></NavLink>
            <NavLink to={''} className=' text-[15px] text-center text-[#ECE5C7] px-2 py-3 ml-2 mr-2.5 mt-2 font-semibold border-2 border-[#4AE3B5] rounded-full hover:bg-[#00FFDD] hover:text-[#0E185F] hover:border-amber-100 transition-all duration-300 ease-in hover:scale-110'><i className='fas fa-file-invoice-dollar m-2' ></i> Billing & Claims <i className='fas fa-angle-right float-right mt-2'></i></NavLink>
            <NavLink to={''} className=' text-[15px] text-center text-[#ECE5C7] px-2 py-3 ml-2 mr-2.5 mt-2 font-semibold border-2 border-[#4AE3B5] rounded-full hover:bg-[#00FFDD] hover:text-[#0E185F] hover:border-amber-100 transition-all duration-300 ease-in hover:scale-110'><i className='fas fa-chart-line m-2' ></i>Reports & Analytics  <i className='fas fa-angle-right float-right mt-2'></i></NavLink>
            
          </nav>

        </div>

      </div>
    </>
  );
};

export default Sidebar;
