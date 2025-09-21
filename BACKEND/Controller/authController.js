const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userModel = require('../Schema/userModel.js');
const transporter = require('../Database/nodeMailer.js');
const path = require('path');

const logoPath = path.join(__dirname, '../Assets/logo.png');

// ----------------- HELPER: SEND EMAIL -----------------
const sendEmail = async ({ user, subject, title, message, otp, otpValidityMinutes = 2 }) => {
    try {
        const mailOptions = {
            from: `"HealthSync" <${process.env.SENDER_EMAIL}>`,
            to: user.email,
            subject,
            attachments: [{
                filename: 'logo.png',
                path: logoPath,
                cid: 'healthsync-logo'
            }],
            html: `
                <div style="background-color:#0d1117; font-family:Arial, sans-serif; padding:40px; color:#ffffff;">
                  <div style="max-width:600px; margin:0 auto; background:#161b22; border-radius:12px; padding:30px; box-shadow:0 6px 18px rgba(0,0,0,0.5); text-align:center;">
                    <div style="margin-bottom:20px;">
                      <img src="cid:healthsync-logo" alt="HealthSync Logo" style="height:120px; width:auto; border-radius:15px;" />
                    </div>
                    <h2 style="margin:0 0 25px 0; font-size:36px; font-weight:bold; background:linear-gradient(90deg,#00e6b8,#00b3e6); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; color:transparent;">
                      HealthSync
                    </h2>
                    <h1 style="font-size:24px; margin-bottom:10px; color:#ffffff;">
                      ${title}
                    </h1>
                    <p style="font-size:15px; color:#bbbbbb; margin:0 0 20px;">
                      Hello <strong>${user.name || "User"}</strong>,<br>
                      ${message}<br>
                      ${otp ? `<span style="color:#00e6b8;font-weight:bold;">Valid for ${otpValidityMinutes} minutes only.</span>` : ''}
                    </p>
                    ${otp ? `<div style="margin:30px 0; font-size:36px; font-weight:bold; letter-spacing:18px; background:linear-gradient(90deg,#b27aff,#ff4d6d); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; color:transparent;">
                      ${otp.split("").join(" ")}
                    </div>` : ''}
                    <p style="font-size:14px; color:#cccccc; margin-top:25px; line-height:1.6; background:#0d1117; padding:12px; border-radius:8px; border:1px solid #222;">
                      ⚠️ If you did not request this, please ignore this email. <strong>Do not share this with anyone.</strong>
                    </p>
                    <div style="margin-top:30px; font-size:12px; color:#777;">
                      &copy; ${new Date().getFullYear()} HealthSync. All rights reserved.
                    </div>
                  </div>
                </div>
            `
        };

        await transporter.sendMail(mailOptions);
        console.log("✅ Email sent:", user.email);
        return { success: true };
    } catch (err) {
        console.error("❌ Email error:", err.message);
        return { success: false, message: "Failed to send email" };
    }
};

// ---------------- REGISTER ----------------
const userRegistration = async (req, res) => {
    const { name, email, password, adminCode } = req.body;
    if (!name || !email || !password) return res.status(400).json({ success: false, message: 'Missing detail' });

    try {
        const existingUser = await userModel.findOne({ email });
        if (existingUser) return res.json({ success: false, message: "User already exists" });

        const hashedPassword = await bcrypt.hash(password, 10);
        const role = adminCode === process.env.ADMIN_SECRET ? 'admin' : 'patient';
        const user = new userModel({ name, email, password: hashedPassword, role });
        await user.save();

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
        res.cookie('token', token, {
            httpOnly: true,
            secure: false,
            sameSite: 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000,
            path: '/',
        });

        const otp = String(Math.floor(100000 + Math.random() * 900000));
        user.verifyOtp = otp;
        user.verifyOtpExpireAt = Date.now() + 2 * 60 * 1000;
        await user.save();

        const emailResult = await sendEmail({
            user,
            subject: "⏱️ Verify your HealthSync Email – OTP Expires in 2 Minutes!",
            title: "Verify Your Email",
            message: "Use the following OTP to verify your HealthSync account.",
            otp,
            otpValidityMinutes: 2
        });

        if (!emailResult.success) console.error(emailResult.message);

        return res.json({ success: true, message: "Registered successfully. Please verify your email.", role: user.role });
    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
};

// ---------------- LOGIN ----------------
const userLogin = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.json({ success: false, message: "Email and Password are required" });

    try {
        const user = await userModel.findOne({ email });
        if (!user) return res.json({ success: false, message: "Invalid Email Address, try again" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.json({ success: false, message: "Invalid password" });

        if (!user.isAccountVerified) {
            const otp = String(Math.floor(100000 + Math.random() * 900000));
            user.verifyOtp = otp;
            user.verifyOtpExpireAt = Date.now() + 2 * 60 * 1000;
            await user.save();

            await sendEmail({
                user,
                subject: "⏱️ Verify your HealthSync Email – New OTP Sent!",
                title: "Verify Your Email",
                message: "A new OTP has been generated for your HealthSync account. Please use it to verify your email.",
                otp,
                otpValidityMinutes: 2
            });

            return res.json({ success: true, message: "Email not verified. OTP sent again.", role: user.role, isAccountVerified: false });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
        res.cookie('token', token, { httpOnly: true, secure: false, sameSite: 'strict', maxAge: 7*24*60*60*1000, path: '/'});

        return res.json({ success: true, message: "Logged in successfully", role: user.role, isAccountVerified: user.isAccountVerified });
    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
};

// ---------------- LOGOUT ----------------
const userLogout = async (req, res) => {
    try {
        res.clearCookie("token", { httpOnly: true, secure: false, sameSite: "strict", path: '/' });
        return res.json({ success: true, message: "Logged out successfully" });
    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
};

// ---------------- VERIFY EMAIL ----------------
const verifyEmail = async (req, res) => {
    const { email, otp } = req.body;
    if (!email || !otp) return res.json({ success: false, message: 'Missing email or OTP' });

    try {
        const user = await userModel.findOne({ email });
        if (!user) return res.json({ success: false, message: "User not found" });
        if (user.isAccountVerified) return res.json({ success: false, message: "Account already verified" });
        if (user.verifyOtp !== otp) return res.json({ success: false, message: "Invalid OTP" });
        if (user.verifyOtpExpireAt < Date.now()) return res.json({ success: false, message: "OTP expired" });

        user.isAccountVerified = true;
        user.verifyOtp = '';
        user.verifyOtpExpireAt = 0;
        await user.save();

        return res.json({ success: true, message: 'Email verified successfully!' });
    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
};

// ---------------- RESEND OTP ----------------
const resendOtp = async (req, res) => {
    const { email } = req.body;
    if (!email) return res.json({ success: false, message: 'Missing email' });

    try {
        const user = await userModel.findOne({ email });
        if (!user) return res.json({ success: false, message: "User not found" });
        if (user.isAccountVerified) return res.json({ success: false, message: "Account already verified" });

        const otp = String(Math.floor(100000 + Math.random() * 900000));
        user.verifyOtp = otp;
        user.verifyOtpExpireAt = Date.now() + 2*60*1000;
        await user.save();

        const emailResult = await sendEmail({ user, subject: "🔑 Your HealthSync OTP – Expires in 2 Minutes!", title:"Your OTP", message:"Use the following OTP to verify your account.", otp, otpValidityMinutes:2 });
        if (!emailResult.success) return res.json({ success: false, message: emailResult.message });

        return res.json({ success: true, message: "OTP resent successfully" });
    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
};

// ---------------- RESET OTP ----------------
const sendResetOtp = async (req,res) => {
    const { email } = req.body;
    if (!email) return res.json({ success:false,message:"Email is required" });

    try {
        const user = await userModel.findOne({ email });
        if (!user) return res.json({ success:false,message:"User not found" });

        const otp = String(Math.floor(100000 + Math.random() * 900000));
        user.resetOtp = otp;
        user.resetOtpExpireAt = Date.now() + 10*60*1000;
        await user.save();

        const emailResult = await sendEmail({ user, subject:"🔑 HealthSync Password Reset Code – Expires in 10 Minutes!", title:"Password Reset Code", message:"We received a request to reset your password. Use the following code.", otp, otpValidityMinutes:10 });
        if (!emailResult.success) return res.json({ success:false,message:emailResult.message });

        return res.json({ success:true,message:"OTP sent successfully" });
    } catch (error) { return res.json({ success:false,message:error.message }); }
};

// ---------------- RESET PASSWORD ----------------
const resetPassword = async (req,res) => {
    const { email, otp, newPassword } = req.body;
    if (!email || !otp || !newPassword) return res.json({ success:false,message:"Email / OTP / new password are required" });

    try {
        const user = await userModel.findOne({ email });
        if (!user) return res.json({ success:false,message:"User not found" });
        if (user.resetOtp !== otp || !user.resetOtp) return res.json({ success:false,message:"Invalid OTP" });
        if (user.resetOtpExpireAt < Date.now()) return res.json({ success:false,message:"OTP expired" });

        const hashedPassword = await bcrypt.hash(newPassword,10);
        user.password = hashedPassword;
        user.resetOtp = "";
        user.resetOtpExpireAt = 0;
        await user.save();

        return res.json({ success:true,message:"Password has been reset successfully" });
    } catch (error) { return res.json({ success:false,message:error.message }); }
};

// ---------------- GET LOGGED-IN USER ----------------
const getLoggedInUser = async (req, res) => {
  try {
    const user = await userModel.findById(req.user._id).select("-password");
    if (!user) return res.status(404).json({ success: false, message: "User not found" });

    // if (user.role !== "patient") {
    //   return res.status(403).json({ success: false, message: "Access denied: not a patient" });
    // }

    return res.json({ success: true, user });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { 
    userRegistration, 
    userLogin, 
    userLogout, 
    verifyEmail, 
    resendOtp, 
    sendResetOtp, 
    resetPassword,
    getLoggedInUser
};
