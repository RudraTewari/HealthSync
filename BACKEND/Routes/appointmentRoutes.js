const express = require("express");
const router = express.Router();
const { createAppointment,getAppointments  } = require("../Controller/appointmentController");


router.post("/addappointments", createAppointment);
router.get("/appointments", getAppointments);

module.exports = router;
