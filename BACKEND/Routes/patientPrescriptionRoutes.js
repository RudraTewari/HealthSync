const express = require("express");
const router = express.Router();
const { getPatientPrescriptions } = require("../Controller/patientPrescriptionController");

// User prescription route
// Example: GET /api/prescriptions?patientName=John&date=2025-09-18
router.get("/", getPatientPrescriptions);

module.exports = router;
