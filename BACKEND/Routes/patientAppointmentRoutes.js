const express = require("express");
const router = express.Router();
const { createAppointment, getAppointments } = require("../controllers/patientAppointmentController");

// POST new appointment
router.post("/appointments", createAppointment);

// GET appointments (pending/confirmed)
router.get("/appointments", getAppointments);

module.exports = router;
