const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
dotenv.config();

// DB connection
const Connection = require('./Database/db.js');

// Routers
const doctorRoutes = require('./Routes/doctorRoutes.js'); 
const appointmentRoutes = require('./Routes/appointmentRoutes.js')
const prescriptionRoutes = require('./Routes/prescriptionRoutes.js')
const invoiceRoutes = require("./Routes/invoiceRoutes.js");
const documentRoutes = require("./Routes/documentRoutes.js");
const patientAppointmentRoutes = require("./Routes/patientAppointmentRoutes.js");

// Middleware
app.use(cors());
app.use(express.json());

// Use Routers
app.use('/api', doctorRoutes);
app.use('/api', appointmentRoutes); 
app.use('/api',prescriptionRoutes);
app.use('/api',invoiceRoutes);
app.use("/api", documentRoutes);
app.use("/api", patientAppointmentRoutes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Start Server
const PORT = process.env.PORT || 5000;
Connection();
app.listen(PORT, () => console.log(`Server is running at Port number ${PORT}`));
