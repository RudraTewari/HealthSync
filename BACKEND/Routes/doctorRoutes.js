const express = require("express");
const { createDoctor,getDoctors } = require("../Controller/doctorController.js");

const router = express.Router();

// Add Doctor API
router.post("/adddoctor", createDoctor);
router.get("/doctors", getDoctors);

module.exports = router;
