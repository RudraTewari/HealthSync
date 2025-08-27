const Appointment = require("../Schema/appointmentSchema.js");

const createAppointment = async (req, res) => {
  try {
    console.log("Received appointment data:", req.body);

    // Optional: You can validate required fields manually
    const { patientId, patientName, doctorName, appointDate } = req.body;
    if (!patientId || !patientName || !doctorName || !appointDate) {
      return res.status(400).json({ error: "All required fields must be filled." });
    }

    const appointment = new Appointment(req.body);
    await appointment.save();

    res.status(201).json(appointment);
  } catch (err) {
    console.error("Error in createAppointment:", err.message);
    res.status(400).json({ error: err.message });
  }
};

module.exports = { createAppointment };
