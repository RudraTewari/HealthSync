import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import AdminPanel from './Admin/AdminPanel';
import UserPanel from './Patient/UserPanel';
import NotFound from './NotFound';
import '@fortawesome/fontawesome-free/css/all.min.css';
import DoctorList from './Admin/Pages/DoctorList';
import Specialization from './Admin/Pages/Specialization';
import AddDoctor from './Admin/Pages/AddDoctor';
import HealthRecords from './Admin/Records/HealthRecords';
import Prescriptions from './Admin/Prescription/Prescriptions';
import CreatePrescript from './Admin/Prescription/CreatePrescript';
import Documents from './Admin/Records/Documents';
import './App.css'

function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/user' element={<UserPanel />}></Route>
          <Route path='/admin' element={<AdminPanel />}></Route>
          <Route path='/Pages/DoctorList' element={<DoctorList/>}></Route> 
          <Route path='/Pages/AddDoctor' element={<AddDoctor/>}></Route>
          <Route path='/Pages/Specialization' element={<Specialization/>}></Route>
          <Route path='/Records/HealthRecords' element={<HealthRecords/>}></Route>
          <Route path='/Records/Documents' element={<Documents/>}></Route>
          <Route path='/Prescription/Prescriptions' element={<Prescriptions/>}></Route>
          <Route path='/Prescription/CreatePrescript' element={<CreatePrescript/>}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
