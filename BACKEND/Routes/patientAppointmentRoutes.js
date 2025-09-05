// BACKEND/Routes/patientAppointmentRoutes.js
const express = require("express");
const router = express.Router();

const {
  createPatientAppointment,
  getPatientAppointments,
} = require("../Controller/patientAppointmentController.js");

// User creates a pending appointment
router.post("/patient-appointments", createPatientAppointment);

// User fetches only their own appointments (filtered by name & optional status)
router.get("/patient-appointments", getPatientAppointments);

module.exports = router;
