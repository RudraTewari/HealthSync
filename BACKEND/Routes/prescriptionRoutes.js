const express = require("express");
const router = express.Router();
const { createPrescription } = require("../Controller/prescriptionController.js");


router.post("/prescription", createPrescription);

module.exports = router;
