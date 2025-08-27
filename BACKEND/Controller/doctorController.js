const Doctor = require("../Schema/addDoctorSchema.js");

const createDoctor = async (req, res) => {
  try {
    console.log(" Received data:", req.body);
    const doctor = new Doctor(req.body);
    await doctor.save();
    res.status(201).json(doctor);
  } catch (err) {
    console.error(" Error in createDoctor:", err.message);
    res.status(400).json({ error: err.message });
  }
};

module.exports = { createDoctor };
