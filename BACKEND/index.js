// index.js
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");

dotenv.config();

// =======================================================
// ✅ MIDDLEWARE CONFIGURATION
// =======================================================
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true, // ✅ allow cookies
}));

app.use(express.json());
app.use(cookieParser());

// =======================================================
// Database & Routes
// =======================================================
const Connection = require("./Database/db.js");

const doctorRoutes = require("./Routes/doctorRoutes.js");
const appointmentRoutes = require("./Routes/appointmentRoutes.js");
const prescriptionRoutes = require("./Routes/prescriptionRoutes.js");
const invoiceRoutes = require("./Routes/invoiceRoutes.js");
const documentRoutes = require("./Routes/documentRoutes.js");
const authRouter = require("./Routes/authRoutes.js");
const patientAppointmentRoutes = require("./Routes/patientAppointmentRoutes.js");
const patientPrescriptionRoutes = require("./Routes/patientPrescriptionRoutes.js");

app.use("/api", doctorRoutes);
app.use("/api", appointmentRoutes);
app.use("/api", prescriptionRoutes);
app.use("/api", invoiceRoutes);
app.use("/api", documentRoutes);
app.use("/api/auth", authRouter);
app.use("/api/patient", patientAppointmentRoutes);
app.use("/api/prescriptions", patientPrescriptionRoutes);

// Static folders
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/assets", express.static("Assets"));

// Start Server
const PORT = process.env.PORT || 5000;
Connection();
app.listen(PORT, () => console.log(`✅ Server running at port ${PORT}`));
