const express = require("express");
const router = express.Router();
const { createAppointment } = require("../Controller/appointmentController");

// POST /api/appointments
router.post("/appointments", createAppointment);

module.exports = router;
