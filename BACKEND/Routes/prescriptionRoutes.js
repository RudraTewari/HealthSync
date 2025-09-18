const express = require("express");
const router = express.Router();
const { createPrescription, getPrescriptions } = require("../Controller/prescriptionController");

// Admin routes
router.post("/addprescription", createPrescription);
router.get("/prescriptions", getPrescriptions);

module.exports = router;
