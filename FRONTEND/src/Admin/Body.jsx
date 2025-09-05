import React from 'react'
import { NavLink } from 'react-router-dom'
import CustomChart from './CustomChart';
import { useState } from 'react';
import CustomDocStatus from './CustomDocStatus';
import CustomAppointment from './CustomAppointment';
import AdminProfile from './AdminProfile';

const chartData = [
  { date: '2025-07-01', newPatients: 5, earnings: 1000, Revenue: 1200, Tests: 20 },
  { date: '2025-07-02', newPatients: 9, earnings: 1080, Revenue: 1250, Tests: 22 },
  { date: '2025-07-03', newPatients: 8, earnings: 1150, Revenue: 1300, Tests: 26 },
  { date: '2025-07-04', newPatients: 12, earnings: 1130, Revenue: 1330, Tests: 29 },
  { date: '2025-07-05', newPatients: 11, earnings: 1200, Revenue: 1380, Tests: 34 },
  { date: '2025-07-06', newPatients: 15, earnings: 1280, Revenue: 1430, Tests: 38 },
  { date: '2025-07-07', newPatients: 17, earnings: 1320, Revenue: 1460, Tests: 42 },
  { date: '2025-07-08', newPatients: 16, earnings: 1350, Revenue: 1500, Tests: 45 },
  { date: '2025-07-09', newPatients: 20, earnings: 1380, Revenue: 1560, Tests: 48 },
  { date: '2025-07-10', newPatients: 22, earnings: 1420, Revenue: 1600, Tests: 50 },
  { date: '2025-07-11', newPatients: 21, earnings: 1440, Revenue: 1620, Tests: 53 },
  { date: '2025-07-12', newPatients: 25, earnings: 1500, Revenue: 1670, Tests: 56 },
  { date: '2025-07-13', newPatients: 24, earnings: 1520, Revenue: 1700, Tests: 59 },
  { date: '2025-07-14', newPatients: 28, earnings: 1580, Revenue: 1760, Tests: 63 },
  { date: '2025-07-15', newPatients: 30, earnings: 1600, Revenue: 1800, Tests: 67 }
];

const doctorsData = [
  { name: 'Dr. Aisha Verma', patients: 15, DocStatus: 'Active' },
  { name: 'Dr. Rohan Malhotra', patients: 8, DocStatus: 'Inactive' },
  { name: 'Dr. Kavita Sharma', patients: 20, DocStatus: 'Active' },
  { name: 'Dr. Aryan Joshi', patients: 13, DocStatus: 'Active' },
  { name: 'Dr. Sneha Kapoor', patients: 5, DocStatus: 'Inactive' },
  { name: 'Dr. Deepak Mishra', patients: 17, DocStatus: 'Active' },
  { name: 'Dr. Neha Patil', patients: 10, DocStatus: 'Active' },
  { name: 'Dr. Akash Mehra', patients: 7, DocStatus: 'Inactive' },
  { name: 'Dr. Priya Nair', patients: 22, DocStatus: 'Active' },
  { name: 'Dr. Manish Thakur', patients: 12, DocStatus: 'Active' },
];

const appointmentsData = [
  { patientName: 'Ananya Sharma', doctorName: 'Dr. Aisha Verma', date: '2025-08-01', time: '10:00 AM', status: 'Completed' },
  { patientName: 'Rohan Mehta', doctorName: 'Dr. Rohan Malhotra', date: '2025-08-01', time: '11:15 AM', status: 'Pending' },
  { patientName: 'Priya Nair', doctorName: 'Dr. Kavita Sharma', date: '2025-08-01', time: '01:30 PM', status: 'Completed' },
  { patientName: 'Kabir Chauhan', doctorName: 'Dr. Aryan Joshi', date: '2025-08-02', time: '09:45 AM', status: 'Cancelled' },
  { patientName: 'Divya Kapoor', doctorName: 'Dr. Sneha Kapoor', date: '2025-08-02', time: '02:00 PM', status: 'Completed' },
  { patientName: 'Aditya Sen', doctorName: 'Dr. Deepak Mishra', date: '2025-08-03', time: '12:30 PM', status: 'Pending' },
  { patientName: 'Meera Iyer', doctorName: 'Dr. Neha Patil', date: '2025-08-03', time: '03:15 PM', status: 'Completed' },
  { patientName: 'Arjun Saxena', doctorName: 'Dr. Akash Mehra', date: '2025-08-04', time: '11:45 AM', status: 'Pending' },
  { patientName: 'Ishita Bansal', doctorName: 'Dr. Priya Nair', date: '2025-08-04', time: '04:00 PM', status: 'Completed' },
  { patientName: 'Vikram Rao', doctorName: 'Dr. Manish Thakur', date: '2025-08-05', time: '09:00 AM', status: 'Cancelled' },
  { patientName: 'Nikhil Sinha', doctorName: 'Dr. Aisha Verma', date: '2025-08-05', time: '02:15 PM', status: 'Completed' },
  { patientName: 'Tanvi Deshmukh', doctorName: 'Dr. Rohan Malhotra', date: '2025-08-06', time: '11:00 AM', status: 'Pending' },
  { patientName: 'Rahul Khanna', doctorName: 'Dr. Kavita Sharma', date: '2025-08-06', time: '01:45 PM', status: 'Completed' },
  { patientName: 'Sneha Tiwari', doctorName: 'Dr. Aryan Joshi', date: '2025-08-07', time: '10:30 AM', status: 'Completed' },
  { patientName: 'Ishan Dubey', doctorName: 'Dr. Sneha Kapoor', date: '2025-08-07', time: '03:30 PM', status: 'Cancelled' },
  { patientName: 'Simran Kaur', doctorName: 'Dr. Deepak Mishra', date: '2025-08-08', time: '12:00 PM', status: 'Pending' },
  { patientName: 'Yash Garg', doctorName: 'Dr. Neha Patil', date: '2025-08-08', time: '04:00 PM', status: 'Completed' },
  { patientName: 'Kritika Bhatnagar', doctorName: 'Dr. Akash Mehra', date: '2025-08-09', time: '10:45 AM', status: 'Completed' },
  { patientName: 'Harsh Vardhan', doctorName: 'Dr. Priya Nair', date: '2025-08-09', time: '01:00 PM', status: 'Pending' },
  { patientName: 'Tanya Rawat', doctorName: 'Dr. Manish Thakur', date: '2025-08-10', time: '03:00 PM', status: 'Completed' }
];






const Body = () => {

  const [completedCount, setCompletedCount] = useState(100)
  const [pendingCount, setPendingCount] = useState(0)



  return (
    <>
      <div className='w-full min-h-screen bg-[#0B192C]'>

        {/* HEADER PART */}
        <div className="w-full h-16 flex items-center justify-end bg-slate-950 border-b-2 rounded-[5px] px-6 space-x-4">
              <button className='text-[15px] text-gray-300 hover:scale-110'>
                <i className='fas fa-bell text-gray-300'></i>
              </button>
              <NavLink to="/Admin/AdminProfile" className="h-10 w-36 flex flex-wrap bg-slate-900 border-2 border-slate-900 rounded-full hover:border-amber-100 hover:scale-110 duration-300 ease-in">
                <i className="fas fa-user mr-2.5 text-white ml-2 mt-2.5"></i>
                <h2 className="text-[15px] text-white mt-2">Admin Profile</h2>
              </NavLink>
        </div>

        <h1 className=' text-[30px] text-gray-300 mt-10 mx-7 font-semibold'><i className='fas fa-home mr-2'></i> Dashboard</h1>

        {/* BODY PART */}

        <div className='grid grid-cols-12 m-0 p-0 gap-5'>

          <div className='col-span-4 h-48 bg-[#222831] shadow-lg shadow-amber-300 mt-15 ml-5 border-2 border-[#222831]  rounded-[8px] rounded-bl-[5px] hover:border-amber-300 hover:scale-105 transition-all duration-300 ease-in'>
            <p className=' text-left text-yellow-500 mt-4 ml-4 text-[22px] font-semibold'>Total Patients : {completedCount}</p>
            <div className=' flex flex-row p-0 mt-7 gap-4'>
              <p className="text-amber-500 text-[18px] mt-3 ml-4">Completed : {completedCount} </p>
              <button onClick={() => setCompletedCount(completedCount + 1)} ><i className="fas fa-plus text-green-500 text-[12px] mt-4"></i></button>


              <p className="text-amber-500 text-[18px] mt-3">Pending : {pendingCount} </p>
              <button onClick={() => setPendingCount(pendingCount + 1)} ><i className="fas fa-plus text-green-500 text-[12px] mt-4"></i></button>
              <button onClick={() => setPendingCount(pendingCount - 1)} ><i className="fas fa-minus text-red-500 text-[12px] mt-4"></i></button>
            </div>

          </div>
          <div className='col-span-4 h-48 flex flex-col bg-[#222831] shadow-lg shadow-purple-600 mt-15 border-2 border-[#222831]  rounded-[8px] rounded-bl-[5px] hover:scale-105 hover:border-purple-500 transition-all duration-300 ease-in'>
            <p className=' text-left text-purple-500 mt-4 ml-4 text-[20px] font-semibold'><i className="fas fa-users ml-1 mr-2.5"></i>New Patients</p>

            <div className="flex-1"> {/* Adjust this value as needed */}
              <CustomChart
                data={chartData}
                areaKey="newPatients"
                areaColor="#9929EA"
                xkey="date"
                ylabel="New Patients"
              />
            </div>
          </div>
          <div className='col-span-4 h-48 flex flex-col bg-[#222831] shadow-lg shadow-green-700 mt-15 mr-5 border-2 border-[#222831]  rounded-[8px] rounded-bl-[5px] hover:scale-105 hover:border-green-400 transition-all duration-300 ease-in'>
            <p className=' text-left text-green-400 mt-2 ml-4 text-[20px] font-semibold'><i className="fas fa-hand-holding-usd mr-2 ml-1"></i>Earnings</p>
            <div className="flex-1">
              <CustomChart
                data={chartData}
                areaKey="earnings"
                areaColor='#78C841'
                xkey="date"
                ylabel="Earnings"
              />
            </div>
          </div>
        </div>


        <div className=' grid grid-cols-12 p-0 m-0 gap-4'>
          <div className='col-span-6 h-80 bg-[#222831] shadow-lg shadow-cyan-500 ml-5 mr-2 mt-12 border-2 border-[#222831] rounded-[8px] hover:scale-105 hover:border-cyan-500 transition-all duration-300 ease-in'>

            {/* Title */}
            <p className='text-cyan-300 mt-4 ml-4 text-[20px] font-semibold'>
              <i className="fas fa-user-nurse mr-2.5 ml-1"></i>Doctors Status
            </p>

            {/* Table Header Row */}
            <div className="flex w-full justify-around text-cyan-400 font-bold text-lg border-b border-cyan-600 pb-2 mt-4  ">
              <div className="w-1/3 text-center">Doctors Name</div>
              <div className="w-1/3 text-center">Patients Checked</div>
              <div className="w-1/3 text-center">Status</div>
            </div>

              <div className="overflow-y-auto max-h-[200px] w-full px-2">
                {doctorsData.map((doc, index) => (
                  <CustomDocStatus
                    key={index}
                    name={doc.name}
                    patients={doc.patients}
                    DocStatus={doc.DocStatus}
                  />
                ))}
              </div>
          </div>

          <div className='col-span-6 h-80 flex flex-col bg-[#222831] shadow-lg shadow-[#FF7D29] mt-12 mr-5 border-2 border-[#222831] rounded-[8px] hover:scale-105 hover:border-[#FF7D29] transition-all duration-300 ease-in'>
            <p className='  text-orange-400 mt-4 ml-4 text-[20px] font-semibold'><i className="fas fa-dollar-sign mr-2.5 ml-1"></i>Revenue</p>
            <div className="flex-1">

            </div>
            <CustomChart
              data={chartData}
              areaKey='Revenue'
              areaColor='#F97A00'
              xkey="date"
              ylabel="Revenue"
            />
          </div>
        </div>

        <div className='grid grid-cols-12 p-0 m-0 gap-4'>

          <div className='col-span-8 h-96 bg-[#222831] shadow-lg shadow-[#DC2525] ml-5 mt-12 mb-10 mr-3 border-2 border-[#222831] rounded-[8px] hover:scale-105 hover:border-[#DC2525] transition-all duration-300 ease-in'>
            <p className='text-[20px] text-[#e2180a] ml-4 mt-4 font-semibold'><i className="fas fa-calendar-alt mr-2.5 ml-1"></i>Appointment List</p>

            <div className="flex w-full justify-around text-red-600 font-semibold border-b border-red-500 mt-4 ">
                <div className="w-1/4 text-center">Patient Name</div>
                <div className="w-1/4 text-center">Doctor</div>
                <div className="w-1/4 text-center">Date & Time</div>
                <div className="w-1/4 text-center">Status</div>
            </div>
            <div className="overflow-y-auto max-h-[290px] w-full pr-4">

                {appointmentsData.map((appointment,index)=>(
                  <CustomAppointment
                    key={index}
                    patientName={appointment.patientName}
                    doctorName={appointment.doctorName}
                    date={appointment.date}
                    time={appointment.time}
                    status={appointment.status}
                  />
                ))}

            </div>

          </div>

          <div className='col-span-4 h-96 flex flex-col bg-[#222831] shadow-lg shadow-[#FFF9AF] mr-5 mt-12 mb-10  border-2 border-[#222831] rounded-[8px] hover:scale-105 hover:border-[#FFFDB7] transition-all duration-300 ease-in'>
            <p className='text-[20px] text-[#F6F6F6] ml-4 mt-4 font-semibold'><i className="fas fa-microscope mr-2.5 ml-1"></i>Lab & Analytics</p>
            <div className="flex-1">
              <CustomChart
                data={chartData}
                areaKey="Tests"
                areaColor='#483AA0'
                xkey="date"
                ylabel="Lab Analytics"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Body