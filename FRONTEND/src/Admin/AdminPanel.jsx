import React from 'react';
import Sidebar from './Sidebar';
import {Routes,Route} from 'react-router-dom'
import DoctorList from './Pages/DoctorList';
import HealthRecords from './Records/HealthRecords';
import Body from './Body';
import Prescriptions from './Prescription/Prescriptions';
import AllAppointments from './Appoint/AllAppointments';
import Overview from './Reports/Overview';



const AdminPanel = () => {
  return (
    <>
        <div className=' flex w-full min-h-screen  items-stretch'>
            <div className=' w-1/6 p-0 m-0'>
                <Sidebar/>
            </div>
            <div className ='w-5/6 col-span-10 p-0 m-0'>
                <Routes>
                  <Route path='' element={<Body/>} />
                  {/* <Route path='DoctorList' element={<DoctorList/>} />
                  <Route path='HealthRecords' element={<HealthRecords/>} />
                  <Route path='AllAppointments' element={<AllAppointments/>}></Route>
                  <Route path='Prescription' element={<Prescriptions/>}/>
                  <Route path='Overview' element={<Overview/>}/> */}
                </Routes>
                
            </div>
        </div>
    </>
  )
}

export default AdminPanel