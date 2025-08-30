const express = require("express");
const router = express.Router();
const { createPrescription,getPrescriptions } = require("../Controller/prescriptionController.js");


router.post("/addprescription", createPrescription);
router.get("/prescriptions",getPrescriptions);

module.exports = router;
