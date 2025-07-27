import React from 'react';
import Logo from '../assets/logo.jpg'
import { NavLink } from 'react-router-dom';


const Sidebar = () => {
  return (
    <>
      <div className='w-full min-h-screen bg-[#3B3B1A] flex flex-col border-2 border-e-blue-200 '>
          {/* Sidebar Top */}
          <div className='w-full bg-[#8A784E] border-b-2 border-b-amber-950 rounded-b-lg'>
              <img src={Logo} alt={Logo} width={100} height={100} className=' rounded-2xl mx-auto mt-6 border-2 border-amber-900 hover:border-2 hover:border-amber-950  hover:scale-110 transition-all duration-500 ease-in '></img>
              <p className='text-2xl text-[#F8F3CE] text-center mt-2 py-4 '> Welcome,Admin</p>
          </div>
          {/* Sidebar Bottom */}
          <div className='w-full flex-1 p-0 m-0 overflow-y-auto'>

              <nav className='  h-lvh flex flex-col p-0 mt-7'>
                <NavLink to={''} id='active' className=' text-[15px] text-center text-[#FFF0BD] px-2 py-1 ml-2.5 mr-2.5 mt-2 bg-[#626F47] border-2 border-[#754E1A] rounded-full hover:bg-[#A4B465] hover:text-[#443627]  hover:border-amber-100 transistion-all duration-300 ease-in hover:scale-110'><i className='fas fa-tachometer-alt m-2'></i> Dashboard </NavLink>
                <NavLink to={''} className=' text-[15px] text-center text-[#FFF0BD] px-2 py-1 ml-2.5 mr-2.5 mt-2 bg-[#626F47] border-2 border-[#754E1A] rounded-full hover:bg-[#A4B465] hover:text-[#443627] hover:border-amber-100 transition-all duration-300 ease-in hover:scale-110'><i className='fas fa-users m-2'></i>User Management <i className='fas fa-angle-right float-right mt-1.5'></i></NavLink>
                <NavLink to={''} className=' text-[15px] text-center text-[#FFF0BD] px-2 py-1 ml-2.5 mr-2.5 mt-2 bg-[#626F47] border-2 border-[#754E1A] rounded-full hover:bg-[#A4B465] hover:text-[#443627] hover:border-amber-100 transition-all duration-300 ease-in hover:scale-110'><i className='fas fa-user-md m-2'></i>Doctors Details <i className='fas fa-angle-right float-right mt-1.5'></i></NavLink>
                <NavLink to={''} className=' text-[15px] text-center text-[#FFF0BD] px-2 py-1 ml-2.5 mr-2.5 mt-2 bg-[#626F47] border-2 border-[#754E1A] rounded-full hover:bg-[#A4B465] hover:text-[#443627] hover:border-amber-100 transition-all duration-300 ease-in hover:scale-110'><i className='fas fa-notes-medical m-2'></i>Patient Records <i className='fas fa-angle-right float-right mt-1.5'></i></NavLink>
                <NavLink to={''} className=' text-[15px] text-center text-[#FFF0BD] px-2 py-1 ml-2.5 mr-2.5 mt-2 bg-[#626F47] border-2 border-[#754E1A] rounded-full hover:bg-[#A4B465] hover:text-[#443627] hover:border-amber-100 transition-all duration-300 ease-in hover:scale-110'><i className='fas fa-calendar-check m-2'></i>Appointments Scheduling  <i className='fas fa-angle-right float-right mt-1.5'></i></NavLink>
                <NavLink to={''} className=' text-[15px] text-center text-[#FFF0BD] px-2 py-1 ml-2.5 mr-2.5 mt-2 bg-[#626F47] border-2 border-[#754E1A] rounded-full hover:bg-[#A4B465] hover:text-[#443627] hover:border-amber-100 transition-all duration-300 ease-in hover:scale-110'><i className='fas fa-file-medical m-2' ></i>Prescriptions Oversight <i className='fas fa-angle-right float-right mt-1.5'></i></NavLink>
                <NavLink to={''} className=' text-[15px] text-center text-[#FFF0BD] px-2 py-1 ml-2.5 mr-2.5 mt-2 bg-[#626F47] border-2 border-[#754E1A] rounded-full hover:bg-[#A4B465] hover:text-[#443627] hover:border-amber-100 transition-all duration-300 ease-in hover:scale-110'><i className='fas fa-vial m-2' ></i>Lab Management   <i className='fas fa-angle-right float-right mt-1.5'></i></NavLink>
                <NavLink to={''} className=' text-[15px] text-center text-[#FFF0BD] px-2 py-1 ml-2.5 mr-2.5 mt-2 bg-[#626F47] border-2 border-[#754E1A] rounded-full hover:bg-[#A4B465] hover:text-[#443627] hover:border-amber-100 transition-all duration-300 ease-in hover:scale-110'><i className='fas fa-file-invoice-dollar m-2' ></i> Billing & Claims <i className='fas fa-angle-right float-right mt-1.5'></i></NavLink>
                <NavLink to={''} className=' text-[15px] text-center text-[#FFF0BD] px-2 py-1 ml-2.5 mr-2.5 mt-2 bg-[#626F47] border-2 border-[#754E1A] rounded-full hover:bg-[#A4B465] hover:text-[#443627] hover:border-amber-100 transition-all duration-300 ease-in hover:scale-110'><i className='fas fa-chart-line m-2' ></i>Reports & Analytics  <i className='fas fa-angle-right float-right mt-1.5'></i></NavLink>
                <NavLink to={''} className=' text-[15px] text-center text-[#FFF0BD] px-2 py-1 ml-2.5 mr-2.5 mt-2 bg-[#626F47] border-2 border-[#754E1A] rounded-full hover:bg-[#A4B465] hover:text-[#443627] hover:border-amber-100 transition-all duration-300 ease-in hover:scale-110'><i className='fas fa-cog m-2' ></i>System Settings  <i className='fas fa-angle-right float-right mt-1.5'></i></NavLink>
              </nav>
                
          </div>
           
      </div>
    </>
  );
};

export default Sidebar;
