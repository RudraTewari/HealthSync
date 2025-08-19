import React, { useState } from 'react'
import Logo from '../assets/ChatGPT Image Jul 28, 2025, 07_48_37 PM.png'
import { NavLink } from 'react-router-dom';
import AddDoctor from './Pages/AddDoctor';
import DoctorList from './Pages/DoctorList';
import HealthRecords from './Records/HealthRecords';
import Documents from './Records/Documents';
import Prescriptions from './Prescription/Prescriptions';
import CreatePrescript from './Prescription/CreatePrescript';
import AllAppointments from './Appoint/AllAppointments';
import AddAppointments from './Appoint/AddAppointments';
import CreateInvoice from './Billing/CreateInvoice';
import InsuranceClaims from './Billing/InsuranceClaims';
import InvoiceHistory from './Billing/InvoiceHistory';
import PaymentHistory from './Billing/PaymentHistory';
import Overview from './Reports/Overview';
import FinanceReports from './Reports/FinanceReports';
import AppointmentReports from './Reports/AppointmentReports';

const Sidebar = () => {
  const [isDoctorsOpen, setDoctorsOpen] = useState(false);
  const toggleDoctors = () => setDoctorsOpen(!isDoctorsOpen)
  const [isRecordsOpen, setRecordsOpen] = useState(false);
  const toggleRecords = () => setRecordsOpen(!isRecordsOpen)
  const [isPresOpen, setPresOpen] = useState(false)
  const togglePrescript = () => setPresOpen(!isPresOpen)
  const [isAppointOpen, setAppointOpen] = useState(false)
  const toggleAppoint = () => setAppointOpen(!isAppointOpen)
  const [isBillingOpen, setIsBillingOpen] = useState(false);
  const toggleBilling = () => setIsBillingOpen(!isBillingOpen);

  const [isReportsOpen, setIsReportsOpen] = useState(false);
  const toggleReports = () => setIsReportsOpen(!isReportsOpen);

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

          <nav className="flex flex-col p-0 mt-7 gap-3">

            {/* Dashboard */}
            <NavLink
              to="/Admin"
              id="active"
              className="w-full flex items-center justify-between text-[17px] text-[#ECE5C7] py-3 px-4 font-semibold rounded-[7px] hover:bg-[#00FFDD] hover:text-[#0E185F]"
            >
              <span className="flex items-center">
                <i className="fas fa-tachometer-alt mr-2"></i>Dashboard
              </span>
            </NavLink>

            {/* Doctors */}
            <div className="relative">
              <button
                onClick={toggleDoctors}
                className="w-full flex items-center justify-between text-[17px] text-[#ECE5C7] py-3 px-4 font-semibold rounded-[7px] hover:bg-[#00FFDD] hover:text-[#0E185F]"
              >
                <span className="flex items-center">
                  <i className="fas fa-user-md mr-2"></i>Doctors
                </span>
                <i
                  className={`${isDoctorsOpen ? 'fas fa-angle-up' : 'fas fa-angle-down'} transition-transform duration-500 ease-in`}
                ></i>
              </button>
              {isDoctorsOpen && (
                <div className="ml-4 mt-2 flex flex-col bg-slate-800 transition-all duration-300 ease-in">
                  <NavLink to="/Pages/DoctorList" className="text-sm font-semibold text-[#eeede4] hover:text-cyan-400 hover:bg-slate-950 px-2 py-2 text-center">
                    <i className="fas fa-clipboard-user mr-2"></i>All Doctors
                  </NavLink>
                  <NavLink to="/Pages/AddDoctor" className="text-sm font-semibold text-[#ECE5C7] hover:text-cyan-400 hover:bg-slate-950 px-2 py-2 text-center">
                    <i className="fas fa-plus mr-2"></i>Add Doctors
                  </NavLink>
                </div>
              )}
            </div>

            {/* Records */}
            <div className="relative">
              <button
                onClick={toggleRecords}
                className="w-full flex items-center justify-between text-[17px] text-[#ECE5C7] py-3 px-4 font-semibold rounded-[7px] hover:bg-[#00FFDD] hover:text-[#0E185F]"
              >
                <span className="flex items-center">
                  <i className="fas fa-folder-open mr-2"></i>Records
                </span>
                <i
                  className={`${isRecordsOpen ? 'fas fa-angle-up' : 'fas fa-angle-down'} transition-transform duration-500 ease-in`}
                ></i>
              </button>
              {isRecordsOpen && (
                <div className="ml-4 mt-2 flex flex-col bg-slate-800 transition-all duration-300 ease-in">
                  <NavLink to="/Records/HealthRecords" className="text-sm font-semibold text-[#eeede4] hover:text-cyan-400 hover:bg-slate-950 px-2 py-2 text-center">
                    <i className="fas fa-file-medical mr-2"></i>Health Records
                  </NavLink>
                  <NavLink to="/Records/Documents" className="text-sm font-semibold text-[#eeede4] hover:text-cyan-400 hover:bg-slate-950 px-2 py-2 text-center">
                    <i className="fas fa-file-upload mr-2"></i>Documents Upload
                  </NavLink>
                </div>
              )}
            </div>

            {/* Appointments */}
            <div className="relative">
              <button
                onClick={toggleAppoint}
                className="w-full flex items-center justify-between text-[17px] text-[#ECE5C7] py-3 px-4 font-semibold rounded-[7px] hover:bg-[#00FFDD] hover:text-[#0E185F]"
              >
                <span className="flex items-center">
                  <i className="fas fa-calendar-check mr-2"></i>Appointments
                </span>
                <i
                  className={`${isAppointOpen ? 'fas fa-angle-up' : 'fas fa-angle-down'} transition-transform duration-500 ease-in`}
                ></i>
              </button>
              {isAppointOpen && (
                <div className="ml-4 mt-2 flex flex-col bg-slate-800 transition-all duration-300 ease-in">
                  <NavLink to="/Appoint/AllAppointments" className="text-sm font-semibold text-[#eeede4] hover:text-cyan-400 hover:bg-slate-950 px-2 py-2 text-center">
                    <i className="fas fa-list-alt mr-2"></i>All Appointments
                  </NavLink>
                  <NavLink to="/Appoint/AddAppointments" className="text-sm font-semibold text-[#eeede4] hover:text-cyan-400 hover:bg-slate-950 px-2 py-2 text-center">
                    <i className="fas fa-plus mr-2"></i>Add Appointments
                  </NavLink>
                </div>
              )}
            </div>

            {/* Prescriptions */}
            <div className="relative">
              <button
                onClick={togglePrescript}
                className="w-full flex items-center justify-between text-[17px] text-[#ECE5C7] py-3 px-4 font-semibold rounded-[7px] hover:bg-[#00FFDD] hover:text-[#0E185F]"
              >
                <span className="flex items-center">
                  <i className="fas fa-file-prescription mr-2"></i>Prescriptions
                </span>
                <i
                  className={`${isPresOpen ? 'fas fa-angle-up' : 'fas fa-angle-down'} transition-transform duration-500 ease-in`}
                ></i>
              </button>
              {isPresOpen && (
                <div className="ml-4 mt-2 flex flex-col bg-slate-800 transition-all duration-300 ease-in">
                  <NavLink to="/Prescription/Prescriptions" className="text-sm font-semibold text-[#eeede4] hover:text-cyan-400 hover:bg-slate-950 px-2 py-2 text-center">
                    <i className="fas fa-file-medical mr-2"></i>All Prescripts
                  </NavLink>
                  <NavLink to="/Prescription/CreatePrescript" className="text-sm font-semibold text-[#eeede4] hover:text-cyan-400 hover:bg-slate-950 px-2 py-2 text-center">
                    <i className="fas fa-plus mr-2"></i>Create Prescript
                  </NavLink>
                </div>
              )}
            </div>

              {/* Billing */}
            <div className="relative">
              <button
                onClick={toggleBilling}
                className="w-full flex items-center justify-between text-[17px] text-[#ECE5C7] py-3 px-4 font-semibold rounded-[7px] hover:bg-[#00FFDD] hover:text-[#0E185F]"
              >
                <span className="flex items-center">
                  <i className="fas fa-file-invoice-dollar mr-2"></i>Billing
                </span>
                <i
                  className={`${isBillingOpen ? 'fas fa-angle-up' : 'fas fa-angle-down'} transition-transform duration-500 ease-in`}
                ></i>
              </button>
              {isBillingOpen && (
                <div className="ml-4 mt-2 flex flex-col bg-slate-800 transition-all duration-300 ease-in">
                  <NavLink to="/Billing/PaymentHistory" className="text-sm font-semibold text-[#eeede4] hover:text-cyan-400 hover:bg-slate-950 px-2 py-2 text-center">
                    <i className="fas fa-history mr-2"></i>Payment History
                  </NavLink>
                  <NavLink to="/Billing/CreateInvoice" className="text-sm font-semibold text-[#eeede4] hover:text-cyan-400 hover:bg-slate-950 px-2 py-2 text-center">
                    <i className="fas fa-file-invoice mr-2"></i>Create Invoice
                  </NavLink>
                  <NavLink to="/Billing/InsuranceClaims" className="text-sm font-semibold text-[#eeede4] hover:text-cyan-400 hover:bg-slate-950 px-2 py-2 text-center">
                    <i className="fas fa-clipboard-list mr-2"></i>Insurance Claims
                  </NavLink>
                  <NavLink to="/Billing/InvoiceHistory" className="text-sm font-semibold text-[#eeede4] hover:text-cyan-400 hover:bg-slate-950 px-2 py-2 text-center">
                    <i className="fas fa-folder-open mr-2"></i>Invoice History
                  </NavLink>
                </div>
              )}
            </div>

              {/* Reports */}
              
            <div className="relative">
              <button
                onClick={toggleReports}
                className="w-full flex items-center justify-between text-[17px] text-[#ECE5C7] py-3 px-4 font-semibold rounded-[7px] hover:bg-[#00FFDD] hover:text-[#0E185F]"
              >
                <span className="flex items-center">
                  <i className="fas fa-chart-line mr-2"></i>Reports
                </span>
                <i
                  className={`${isReportsOpen ? 'fas fa-angle-up' : 'fas fa-angle-down'} transition-transform duration-500 ease-in`}
                ></i>
              </button>
              {isReportsOpen && (
                <div className="ml-4 mt-2 flex flex-col bg-slate-800 transition-all duration-300 ease-in">
                  <NavLink to="/Reports/Overview" className="text-sm font-semibold text-[#eeede4] hover:text-cyan-400 hover:bg-slate-950 px-2 py-2 text-center">
                    <i className="fas fa-eye mr-2"></i>Overview
                  </NavLink>
                  <NavLink to="/Reports/AppointmentReports" className="text-sm font-semibold text-[#eeede4] hover:text-cyan-400 hover:bg-slate-950 px-2 py-2 text-center">
                    <i className="fas fa-calendar-check mr-2"></i>Appointment Reports
                  </NavLink>
                  <NavLink to="/Reports/FinanceReports" className="text-sm font-semibold text-[#eeede4] hover:text-cyan-400 hover:bg-slate-950 px-2 py-2 text-center">
                    <i className="fas fa-coins mr-2"></i>Financial Reports
                  </NavLink>
                </div>
              )}
            </div>




            {/* <NavLink to={''} className=' text-[15px] text-center text-[#ECE5C7] px-2 py-3 ml-2 mr-2.5 mt-2 font-semibold border-2 border-[#4AE3B5] rounded-full hover:bg-[#00FFDD] hover:text-[#0E185F] hover:border-amber-100 transition-all duration-300 ease-in hover:scale-110'><i className='fas fa-file-invoice-dollar m-2' ></i> Billing & Claims <i className='fas fa-angle-right float-right mt-2'></i></NavLink> */}
            {/* <NavLink to={''} className=' text-[15px] text-center text-[#ECE5C7] px-2 py-3 ml-2 mr-2.5 mt-2 font-semibold border-2 border-[#4AE3B5] rounded-full hover:bg-[#00FFDD] hover:text-[#0E185F] hover:border-amber-100 transition-all duration-300 ease-in hover:scale-110'><i className='fas fa-chart-line m-2' ></i>Reports  <i className='fas fa-angle-right float-right mt-2'></i></NavLink> */}

          </nav>

        </div>

      </div>
    </>
  );
};

export default Sidebar;
