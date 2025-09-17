import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { verifyEmail, resendOtp } from './api';

const VerifyEmailPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { email: initialEmail, role: initialRole } = location.state || {};

  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const email = initialEmail || localStorage.getItem('email');
  const role = initialRole || localStorage.getItem('role');

  if (!email || !role) return <p>Error: Missing email or role.</p>;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setLoading(true);
    try {
      const { data } = await verifyEmail({ email, otp });
      setMessage(data.message);

      if (data.success) {
        localStorage.setItem('isAccountVerified', 'true');
        navigate(role === 'admin' ? '/admin' : '/user');
      }
    } catch (error) {
      setMessage(error.response?.data?.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    setMessage('');
    setLoading(true);
    try {
      const { data } = await resendOtp({ email });
      setMessage(data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || 'Failed to resend OTP');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Verify Your Email</h2>
        <p className="mb-4 text-center text-gray-700">
          An OTP has been sent to <strong>{email}</strong>. Enter it below:
        </p>
        {message && <p className="mb-4 text-center text-red-500">{message}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="otp"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-md text-white transition duration-200 ${
              loading ? 'bg-green-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'
            }`}
          >
            {loading ? 'Verifying...' : 'Verify Email'}
          </button>
        </form>
        <button
          onClick={handleResend}
          disabled={loading}
          className={`w-full mt-3 py-2 rounded-md transition duration-200 ${
            loading ? 'bg-gray-300 cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
          }`}
        >
          Resend OTP
        </button>
      </div>
    </div>
  );
};

export default VerifyEmailPage;
