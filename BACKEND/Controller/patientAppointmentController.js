const PatientAppointment = require("../Schema/patientAppointmentSchema.js");

// ✅ Create new appointment
const createPatientAppointment = async (req, res) => {
  try {
    console.log("Received patient appointment data:", req.body);

    const { patientName, appointDate, appointTime } = req.body;
    if (!patientName || !appointDate || !appointTime) {
      return res.status(400).json({
        error: "Patient name, date and time are required."
      });
    }

    const appointment = new PatientAppointment(req.body);
    await appointment.save();

    res.status(201).json({
      message: "Appointment stored successfully",
      appointment
    });
  } catch (err) {
    console.error("Error in createPatientAppointment:", err.message);
    res.status(400).json({ error: err.message });
  }
};

// ✅ Fetch appointments for a specific patient by name
const getPatientAppointments = async (req, res) => {
  try {
    const { patientName } = req.query;

    if (!patientName) {
      return res.status(400).json({ error: "Patient name is required." });
    }

    // Case-insensitive search
    const appointments = await PatientAppointment.find({
      patientName: { $regex: new RegExp("^" + patientName + "$", "i") }
    }).select("doctorName appointDate appointTime symptoms status");

    const formattedAppointments = appointments.map((app) => ({
      doctor: app.doctorName,
      date: app.appointDate
        ? new Date(app.appointDate).toLocaleDateString()
        : "",
      time: app.appointTime || "",
      symptoms: app.symptoms || "",
      status: app.status || "Pending"
    }));

    res.json(formattedAppointments);
  } catch (err) {
    console.error("Error in getPatientAppointments:", err.message);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { createPatientAppointment, getPatientAppointments };
