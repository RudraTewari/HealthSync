const Appointment = require("../Schema/appointmentSchema.js");

// Create a new appointment (no changes)
const createAppointment = async (req, res) => {
  try {
    console.log("Received appointment data:", req.body);

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

// ✅ Get appointments, optionally filter by patientName
const getAppointments = async (req, res) => {
  try {
    const { patientName } = req.query;

    let filter = {};
    if (patientName) {
      // Case-insensitive filtering
      filter.patientName = { $regex: new RegExp("^" + patientName + "$", "i") };
    }

    const appointments = await Appointment.find(filter).select(
      "patientId patientName doctorName appointDate appointTime symptoms status"
    );

    const formattedAppointments = appointments.map((app) => ({
      patientid: app.patientId,
      patient: app.patientName,
      doctor: app.doctorName,
      date: app.appointDate ? new Date(app.appointDate).toLocaleDateString() : "",
      time: app.appointTime || "",
      symptoms: app.symptoms || "",
      status: app.status,
    }));

    res.json(formattedAppointments);
  } catch (err) {
    console.error("Error fetching appointments:", err);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { createAppointment, getAppointments };
