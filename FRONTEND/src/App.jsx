import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home/HomePage';
import AdminPanel from './Admin/AdminPanel';
import UserPanel from './Patient/UserPanel';
import NotFound from './NotFound';
import '@fortawesome/fontawesome-free/css/all.min.css';
import DoctorList from './Admin/Pages/DoctorList';
import AddDoctor from './Admin/Pages/AddDoctor';
import HealthRecords from './Admin/Records/HealthRecords';
import Prescriptions from './Admin/Prescription/Prescriptions';
import CreatePrescript from './Admin/Prescription/CreatePrescript';
import Documents from './Admin/Records/Documents';
import AddAppointments from './Admin/Appoint/AddAppointments';
import AllAppointments from './Admin/Appoint/AllAppointments';
import './App.css'
import CreateInvoice from './Admin/Billing/CreateInvoice';
import PaymentHistory from './Admin/Billing/PaymentHistory';
import InsuranceClaims from './Admin/Billing/InsuranceClaims';
import InvoiceHistory from './Admin/Billing/InvoiceHistory';
import Overview from './Admin/Reports/Overview';
import AppointmentReports from './Admin/Reports/AppointmentReports';
import FinanceReports from './Admin/Reports/FinanceReports';
import Appointment from './Patient/Appointment/Appointment';
import Prescription from './Patient/Prescription/Prescription';
import Insurance from './Patient/Insurance/Insurance';
import BillingPayment from './Patient/BillingPayement/BillingPayment';
import LabRecord from './Patient/LabRecord/LabRecord';
import UserProfile from './Patient/UserProfile';
import About from './Home/About';
import Benefit from './Home/Benefits';
import Contact from './Home/Contact';
import Service from './Home/Service';
import Team from './Home/Team';
import Testinomial from './Home/Testimonials';
import Help from './Home/Help';
import Terms from './Home/Terms';
import Privacy from './Home/Privacy';
import AdminProfile from './Admin/AdminProfile';

function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          {/*Home page*/} 
          <Route path='/About' element={<About />}></Route>
          <Route path='/Benefits' element={<Benefit />}></Route>
          <Route path='/Contact' element={<Contact />}></Route>
          <Route path='/Services' element={<Service />}></Route>
          <Route path='/Team' element={<Team />}></Route>
          <Route path='/Testinomials' element={<Testinomial />}></Route>
          <Route path='/Help' element={<Help />}></Route>
          <Route path='/Privacy' element={<Privacy />}></Route>
          <Route path='/Terms' element={<Terms />}></Route>
          {/*Patient page*/} 
          <Route path='/user' element={<UserPanel />}></Route>
          <Route path='/user/UserProfile' element={<UserProfile />}></Route>
          <Route path='/user/Appointment' element={<Appointment/>}></Route>
          <Route path='/user/Prescription' element={<Prescription/>}></Route>
          <Route path='/user/LabReport' element={<LabRecord/>}></Route>
          <Route path='/user/BillingPayment' element={<BillingPayment/>}></Route>
          <Route path='/user/Insurance' element={<Insurance/>}></Route>
          {/*Admin page*/} 
          <Route path='/admin' element={<AdminPanel />}></Route>
          <Route path='/Admin/AdminProfile' element={<AdminProfile/>}></Route>
          <Route path='/Pages/DoctorList' element={<DoctorList/>}></Route> 
          <Route path='/Pages/AddDoctor' element={<AddDoctor/>}></Route>
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
