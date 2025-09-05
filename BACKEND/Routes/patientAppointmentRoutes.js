const express = require("express");
const router = express.Router();
const { createAppointment, getAppointments } = require("../Controller/patientAppointmentController");

// POST new appointment
router.post("/appointments", createAppointment);

// GET appointments (pending/confirmed)
router.get("/appointments", getAppointments);

module.exports = router;
