import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import AdminPanel from './Admin/AdminPanel';
import UserPanel from './Patient/UserPanel';
import NotFound from './NotFound';
import '@fortawesome/fontawesome-free/css/all.min.css';
import DoctorDashboard from './Admin/Pages/DoctorDashboard';
import PatientRecords from './Admin/Pages/PatientRecords';
import AddDoctor from './Admin/Pages/AddDoctor';
import './App.css'

function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/user' element={<UserPanel />}></Route>
          <Route path='/admin' element={<AdminPanel />}></Route>
           <Route path='/Pages/DoctorDashboard' element={<DoctorDashboard/>}></Route> 
           <Route path='/Pages/AddDoctor' element={<AddDoctor/>}></Route>
          <Route path='/Pages/PatientRecords' element={<PatientRecords/>}></Route> 
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
