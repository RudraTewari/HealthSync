const express = require("express");
const { createDoctor } = require("../Controller/doctorController.js");

const router = express.Router();

// Add Doctor API
router.post("/adddoctor", createDoctor);

module.exports = router;
