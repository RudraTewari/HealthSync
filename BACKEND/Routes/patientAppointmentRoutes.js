const express = require("express");
const router = express.Router();
const {
  createPatientAppointment,
  getPatientAppointments
} = require("../Controller/patientAppointmentController");

// POST route to create a new patient appointment
router.post("/add", createPatientAppointment);

// GET route to fetch appointments for a specific patient by name
router.get("/", getPatientAppointments);

module.exports = router;
