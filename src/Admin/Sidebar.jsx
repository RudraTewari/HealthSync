import React from 'react';
import Logo from '../assets/ChatGPT Image Jul 28, 2025, 07_48_37 PM.png'
import { NavLink } from 'react-router-dom';


const Sidebar = () => {
  return (
    <>
      <div className='w-full h-full bg-slate-900 flex flex-col'>
          {/* Sidebar Top */}
          <div className='w-full rounded-b-lg'>
              <img src={Logo} alt={Logo} width={125} height={100} className=' rounded-2xl mx-auto mt-6  hover:scale-110 transition-all duration-500 ease-in '></img>
              <p className='text-2xl text-[#F8F3CE] text-center mt-2 py-4 font-bold '> Welcome Admin</p>
          </div>
          {/* Sidebar Bottom */}
          <div className='w-full flex-1 p-0 m-0 overflow-y-auto'>

              <nav className='  h-lvh flex flex-col p-0 mt-7 gap-5'>
                <NavLink to={''} id='active' className=' text-[15px] text-center text-[#ECE5C7] px-2 py-3 ml-2.5 mr-2.5 mt-2 font-semibold border-2 border-[#4AE3B5] rounded-full hover:bg-[#00FFDD] hover:text-[#0E185F]  hover:border-amber-100 transistion-all duration-300 ease-in hover:scale-110'><i className='fas fa-tachometer-alt m-2'></i> Dashboard </NavLink>
                <NavLink to={''} className=' text-[15px] text-center text-[#ECE5C7] px-2 py-3 ml-2 mr-2.5 mt-2 font-semibold border-2 border-[#4AE3B5] rounded-full hover:bg-[#00FFDD] hover:text-[#0E185F] hover:border-amber-100 transition-all duration-300 ease-in hover:scale-110'><i className='fas fa-user-md m-2'></i>Doctors Details <i className='fas fa-angle-right float-right mt-2'></i></NavLink>
                <NavLink to={''} className=' text-[15px] text-center text-[#ECE5C7] px-2 py-3 ml-2 mr-2.5 mt-2 font-semibold border-2 border-[#4AE3B5] rounded-full hover:bg-[#00FFDD] hover:text-[#0E185F] hover:border-amber-100 transition-all duration-300 ease-in hover:scale-110'><i className='fas fa-notes-medical m-2'></i>Patient Records <i className='fas fa-angle-right float-right mt-2'></i></NavLink>
                <NavLink to={''} className=' text-[15px] text-center text-[#ECE5C7] px-2 py-3 ml-1 mr-2.5 mt-2 font-semibold border-2 border-[#4AE3B5] rounded-full hover:bg-[#00FFDD] hover:text-[#0E185F] hover:border-amber-100 transition-all duration-300 ease-in hover:scale-110'><i className='fas fa-calendar-check mr-1'></i>Appointments Scheduling  <i className='fas fa-angle-right float-right mt-2'></i></NavLink>
                <NavLink to={''} className=' text-[15px] text-center text-[#ECE5C7] px-2 py-3 ml-2 mr-2.5 mt-2 font-semibold border-2 border-[#4AE3B5] rounded-full hover:bg-[#00FFDD] hover:text-[#0E185F] hover:border-amber-100 transition-all duration-300 ease-in hover:scale-110'><i className='fas fa-file-medical m-2' ></i>Prescriptions Oversight <i className='fas fa-angle-right float-right mt-2'></i></NavLink>
                <NavLink to={''} className=' text-[15px] text-center text-[#ECE5C7] px-2 py-3 ml-2 mr-2.5 mt-2 font-semibold border-2 border-[#4AE3B5] rounded-full hover:bg-[#00FFDD] hover:text-[#0E185F] hover:border-amber-100 transition-all duration-300 ease-in hover:scale-110'><i className='fas fa-vial m-2' ></i>Lab Management   <i className='fas fa-angle-right float-right mt-2'></i></NavLink>
                <NavLink to={''} className=' text-[15px] text-center text-[#ECE5C7] px-2 py-3 ml-2 mr-2.5 mt-2 font-semibold border-2 border-[#4AE3B5] rounded-full hover:bg-[#00FFDD] hover:text-[#0E185F] hover:border-amber-100 transition-all duration-300 ease-in hover:scale-110'><i className='fas fa-file-invoice-dollar m-2' ></i> Billing & Claims <i className='fas fa-angle-right float-right mt-2'></i></NavLink>
                <NavLink to={''} className=' text-[15px] text-center text-[#ECE5C7] px-2 py-3 ml-2 mr-2.5 mt-2 font-semibold border-2 border-[#4AE3B5] rounded-full hover:bg-[#00FFDD] hover:text-[#0E185F] hover:border-amber-100 transition-all duration-300 ease-in hover:scale-110'><i className='fas fa-chart-line m-2' ></i>Reports & Analytics  <i className='fas fa-angle-right float-right mt-2'></i></NavLink>
                <NavLink to={''} className=' text-[15px] text-center text-[#ECE5C7] px-2 py-3 ml-2 mr-2.5 mt-2 font-semibold border-2 border-[#4AE3B5] rounded-full hover:bg-[#00FFDD] hover:text-[#0E185F] hover:border-amber-100 transition-all duration-300 ease-in hover:scale-110'><i className='fas fa-cog m-2' ></i>System Settings  <i className='fas fa-angle-right float-right mt-2'></i></NavLink>
              </nav>
                
          </div>
           
      </div>
    </>
  );
};

export default Sidebar;
