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

const getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find().select(
      "patientId patientName doctorName appointDate appointTime symptoms status"
    );

    // Map data to frontend-friendly structure
    const formattedAppointments = appointments.map((app) => ({
      patientid : app.patientId,
      patient : app.patientName,
      doctor : app.doctorName,
      date : app.appointDate ? new Date(app.appointDate).toLocaleDateString() : "",
      time : app.appointTime || "", // use the separate time field
      symptoms : app.symptoms || "",
      status : app.status,
    }));

    res.json(formattedAppointments);
  } catch (err) {
    console.error("Error fetching appointments:", err);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { createAppointment,getAppointments };