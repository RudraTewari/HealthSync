import React from 'react';
import Sidebar from './Sidebar';
import {Routes,Route} from 'react-router-dom'
import DoctorDashboard from './DoctorsDetails/DoctorDashboard';
import PatientRecords from './DoctorsDetails/PatientRecords';
import Body from './Body';

const AdminPanel = () => {
  return (
    <>
        <div className=' flex w-full  min-h-screen  items-stretch '>
            <div className=' w-1/6 p-0 m-0'>
                <Sidebar/>
            </div>
            <div className ='w-5/6 col-span-10 p-0 m-0'>
                <Routes>
                  <Route path='' element={<Body/>} />
                  <Route path='DoctorDashboard' element={<DoctorDashboard/>} />
                  <Route path='PatientRecords' element={<PatientRecords/>} />

                </Routes>
                
            </div>
        </div>
    </>
  )
}

export default AdminPanel