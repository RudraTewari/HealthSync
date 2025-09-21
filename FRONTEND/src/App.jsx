import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home/HomePage';
import AdminPanel from './Admin/AdminPanel';
import UserPanel from './Patient/UserPanel';
import NotFound from './NotFound';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Admin Pages
import DoctorList from './Admin/Pages/DoctorList';
import AddDoctor from './Admin/Pages/AddDoctor';
import HealthRecords from './Admin/Records/HealthRecords';
import Prescriptions from './Admin/Prescription/Prescriptions';
import CreatePrescript from './Admin/Prescription/CreatePrescript';
import Documents from './Admin/Records/Documents';
import AddAppointments from './Admin/Appoint/AddAppointments';
import AllAppointments from './Admin/Appoint/AllAppointments';
import CreateInvoice from './Admin/Billing/CreateInvoice';
import PaymentHistory from './Admin/Billing/PaymentHistory';
import InsuranceClaims from './Admin/Billing/InsuranceClaims';
import InvoiceHistory from './Admin/Billing/InvoiceHistory';
import Overview from './Admin/Reports/Overview';
import AppointmentReports from './Admin/Reports/AppointmentReports';
import FinanceReports from './Admin/Reports/FinanceReports';
import AdminProfile from './Admin/AdminProfile';

// Patient Pages
import Appointment from './Patient/Appointment/Appointment';
import Prescription from './Patient/Prescription/Prescription';
import Insurance from './Patient/Insurance/Insurance';
import BillingPayment from './Patient/BillingPayement/BillingPayment';
import LabRecord from './Patient/LabRecord/LabRecord';
import UserProfile from './Patient/UserProfile/UserProfile';

// Auth Pages
import Login from './Authentication/Login';
import Register from './Authentication/Register';
import VerifyEmail from './Authentication/VerifyEmail';
import ForgotPassword from './Authentication/ForgotPassword';
import ResetPassword from './Authentication/ResetPassword';
import MessagePage from './Authentication/MessagePage';

// Home Pages
import About from './Home/About';
import Benefit from './Home/Benefits';
import Contact from './Home/Contact';
import Service from './Home/Service';
import Team from './Home/Team';
import Testimonials from './Home/Testimonials';
import Help from './Home/Help';
import Terms from './Home/Terms';
import Privacy from './Home/Privacy';

// ---------------- ProtectedRoute ----------------
const ProtectedRoute = ({ allowedRole, children }) => {
  const role = localStorage.getItem('role');
  const isVerified = localStorage.getItem('isAccountVerified') === 'true';

  if (!role) return <Navigate to="/login" />;
  if (!isVerified) return <Navigate to="/verify-email" />;

  if (role !== allowedRole) {
    const msg =
      role === 'admin'
        ? 'Admins cannot access patient pages. Redirecting to Home.'
        : 'Patients cannot access admin pages. Redirecting to Home.';
    return (
      <Navigate
        to="/message"
        state={{ message: msg, redirectTo: '/' }}
        replace
      />
    );
  }

  return children;
};

// ---------------- RedirectLoggedIn ----------------
const RedirectLoggedIn = ({ children }) => {
  const role = localStorage.getItem('role');
  const isVerified = localStorage.getItem('isAccountVerified') === 'true';
  if (role && isVerified)
    return <Navigate to={role === 'admin' ? '/admin' : '/user'} />;
  return children;
};

// ---------------- App ----------------
function App() {
  return (
    <Router>
      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Service />} />
        <Route path="/Benefits" element={<Benefit />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/Testinomials" element={<Testimonials />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Privacy" element={<Privacy />} />
        <Route path="/Terms" element={<Terms />} />
        <Route path="/Help" element={<Help />} />

        {/* Auth Pages */}
        <Route
          path="/login"
          element={<RedirectLoggedIn><Login /></RedirectLoggedIn>}
        />
        <Route
          path="/register"
          element={<RedirectLoggedIn><Register /></RedirectLoggedIn>}
        />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/message" element={<MessagePage />} />

        {/* Patient Routes */}
        <Route
          path="/user"
          element={<ProtectedRoute allowedRole="patient"><UserPanel /></ProtectedRoute>}
        />
        <Route
          path="/user/Appointment"
          element={<ProtectedRoute allowedRole="patient"><Appointment /></ProtectedRoute>}
        />
        <Route
          path="/user/Prescription"
          element={<ProtectedRoute allowedRole="patient"><Prescription /></ProtectedRoute>}
        />
        <Route
          path="/user/LabReport"
          element={<ProtectedRoute allowedRole="patient"><LabRecord /></ProtectedRoute>}
        />
        <Route
          path="/user/BillingPayment"
          element={<ProtectedRoute allowedRole="patient"><BillingPayment /></ProtectedRoute>}
        />
        <Route
          path="/user/Insurance"
          element={<ProtectedRoute allowedRole="patient"><Insurance /></ProtectedRoute>}
        />
        <Route
          path="/user/UserProfile"
          element={<ProtectedRoute allowedRole="patient"><UserProfile /></ProtectedRoute>}
        />        

        {/* Admin Routes (restored original link style) */}
        <Route
          path="/admin"
          element={<ProtectedRoute allowedRole="admin"><AdminPanel /></ProtectedRoute>}
        />
        <Route
          path="/Admin/AdminProfile"
          element={<ProtectedRoute allowedRole="admin"><AdminProfile /></ProtectedRoute>}
        />
        <Route
          path="/Pages/DoctorList"
          element={<ProtectedRoute allowedRole="admin"><DoctorList /></ProtectedRoute>}
        />
        <Route
          path="/Pages/AddDoctor"
          element={<ProtectedRoute allowedRole="admin"><AddDoctor /></ProtectedRoute>}
        />
        <Route
          path="/Records/HealthRecords"
          element={<ProtectedRoute allowedRole="admin"><HealthRecords /></ProtectedRoute>}
        />
        <Route
          path="/Records/Documents"
          element={<ProtectedRoute allowedRole="admin"><Documents /></ProtectedRoute>}
        />
        <Route
          path="/Appoint/AllAppointments"
          element={<ProtectedRoute allowedRole="admin"><AllAppointments /></ProtectedRoute>}
        />
        <Route
          path="/Appoint/AddAppointments"
          element={<ProtectedRoute allowedRole="admin"><AddAppointments /></ProtectedRoute>}
        />
        <Route
          path="/Prescription/Prescriptions"
          element={<ProtectedRoute allowedRole="admin"><Prescriptions /></ProtectedRoute>}
        />
        <Route
          path="/Prescription/CreatePrescript"
          element={<ProtectedRoute allowedRole="admin"><CreatePrescript /></ProtectedRoute>}
        />
        <Route
          path="/Billing/CreateInvoice"
          element={<ProtectedRoute allowedRole="admin"><CreateInvoice /></ProtectedRoute>}
        />
        <Route
          path="/Billing/PaymentHistory"
          element={<ProtectedRoute allowedRole="admin"><PaymentHistory /></ProtectedRoute>}
        />
        <Route
          path="/Billing/InvoiceHistory"
          element={<ProtectedRoute allowedRole="admin"><InvoiceHistory /></ProtectedRoute>}
        />
        <Route
          path="/Billing/InsuranceClaims"
          element={<ProtectedRoute allowedRole="admin"><InsuranceClaims /></ProtectedRoute>}
        />
        <Route
          path="/Reports/Overview"
          element={<ProtectedRoute allowedRole="admin"><Overview /></ProtectedRoute>}
        />
        <Route
          path="/Reports/AppointmentReports"
          element={<ProtectedRoute allowedRole="admin"><AppointmentReports /></ProtectedRoute>}
        />
        <Route
          path="/Reports/FinanceReports"
          element={<ProtectedRoute allowedRole="admin"><FinanceReports /></ProtectedRoute>}
        />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
