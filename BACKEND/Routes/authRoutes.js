const express = require('express');
const {
  userRegistration,
  userLogin,
  verifyEmail,
  resendOtp,
  userLogout,
  sendResetOtp,
  resetPassword
} = require('../Controller/authController.js');
const userAuth = require('../Middleware/authUser.js');

const router = express.Router();

// ---------------- PUBLIC ROUTES ----------------
router.post('/register', userRegistration);
router.post('/login', userLogin);

// Public (no token needed yet)
router.post('/verify-email', verifyEmail);
router.post('/resend-otp', resendOtp);

// Logout
router.post('/logout', userLogout);

// ---------------- PASSWORD RESET ----------------
router.post('/send-reset-otp', sendResetOtp);
router.post('/reset-password', resetPassword);

module.exports = router;
