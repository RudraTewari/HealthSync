const express = require("express");
const router = express.Router();
const { createPrescription } = require("../Controller/prescriptionController.js");

// POST /api/prescriptions
router.post("/prescription", createPrescription);

module.exports = router;
