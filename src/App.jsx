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
import AddAppointments from './Admin/Appoint/AddAppointments';
import AllAppointments from './Admin/Appoint/AllAppointments';
import './App.css'
import AddSpecialization from './Admin/Pages/AddSpecialization';
import CreateInvoice from './Admin/Billing/CreateInvoice';
import PaymentHistory from './Admin/Billing/PaymentHistory';
import InsuranceClaims from './Admin/Billing/InsuranceClaims';
import InvoiceHistory from './Admin/Billing/InvoiceHistory';
import Overview from './Admin/Reports/Overview';
import AppointmentReports from './Admin/Reports/AppointmentReports';
import FinanceReports from './Admin/Reports/FinanceReports';

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
          <Route path='/Pages/AddSpecialization' element={<AddSpecialization/>}></Route>
          <Route path='/Records/HealthRecords' element={<HealthRecords/>}></Route>
          <Route path='/Records/Documents' element={<Documents/>}></Route>
          <Route path='/Appoint/AllAppointments' element={<AllAppointments/>}></Route>
          <Route path='/Appoint/AddAppointments' element={<AddAppointments/>}></Route>
          <Route path='/Prescription/Prescriptions' element={<Prescriptions/>}></Route>
          <Route path='/Prescription/CreatePrescript' element={<CreatePrescript/>}></Route>
          <Route path = '/Billing/CreateInvoice' element ={<CreateInvoice/>}></Route>
          <Route path='/Billing/PaymentHistory' element={<PaymentHistory/>}></Route>
          <Route path='/Billing/InvoiceHistory' element={<InvoiceHistory/>}></Route>
          <Route path='/Billing/InsuranceClaims' element={<InsuranceClaims/>}></Route>
          <Route path ='/Reports/Overview' element={<Overview/>}></Route>
          <Route path ='/Reports/AppointmentReports' element={<AppointmentReports/>}></Route>
          <Route path ='/Reports/FinanceReports' element={<FinanceReports/>}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
