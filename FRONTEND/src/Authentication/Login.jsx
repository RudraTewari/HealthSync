import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { loginUser } from './api';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();               // <— NEW
  const redirectTo = location.state?.redirectTo; // e.g. "/admin" or "/user"
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const response = await loginUser(formData);
      const data = response.data;
      setMessage(data.message);

      if (data.success) {
        localStorage.setItem('role', data.role);
        localStorage.setItem('email', formData.email);
        localStorage.setItem('isAccountVerified', data.isAccountVerified);

        if (!data.isAccountVerified) {
          navigate('/verify-email', {
            state: { email: formData.email, role: data.role }
          });
          return;
        }

        // ===== New Role-Aware Redirect Logic =====
        if (redirectTo) {
          // if redirecting to admin but user isn't admin
          if (redirectTo.startsWith('/admin') && data.role !== 'admin') {
            setMessage('Access denied: Admins only.');
            navigate('/', { replace: true });
            return;
          }
          // if redirecting to user but user isn't patient (optional)
          if (redirectTo.startsWith('/user') && data.role !== 'patient') {
            setMessage('Access denied: Patients only.');
            navigate('/', { replace: true });
            return;
          }
          navigate(redirectTo);
          return;
        }
        // default fallback
        navigate(data.role === 'admin' ? '/admin' : '/user');
      }
    } catch (error) {
      setMessage(error.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        {message && <p className="mb-4 text-center text-red-500">{message}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Login
          </button>
        </form>
        <div className="mt-4 flex justify-between text-sm text-gray-600">
          <span>
            Don't have an account?{' '}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => navigate('/register')}
            >
              Register
            </span>
          </span>
          <span
            className="text-blue-600 cursor-pointer"
            onClick={() => navigate('/forgot-password')}
          >
            Forgot Password?
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
