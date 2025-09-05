const Appointment = require("../Schema/patientAppointmentSchema.js");

// Create new appointment
exports.createAppointment = async (req, res) => {
  try {
    const { patientName, appointDate, symptoms } = req.body;
    if (!patientName || !appointDate) {
      return res.status(400).json({ message: "Patient name and date are required" });
    }
    const normalizedDate = new Date(appointDate);
    if (isNaN(normalizedDate.getTime())) {
      return res.status(400).json({ message: "Invalid appointment date format" });
    }

    const newAppointment = new Appointment({
      patientName,
      appointDate: normalizedDate,
      symptoms,
      status: "pending",
    });

    await newAppointment.save();
    res.status(201).json(newAppointment);
  } catch (err) {
    res.status(500).json({ message: "Error creating appointment", error: err.message });
  }
};

// Get appointments with select fields based on status
exports.getAppointments = async (req, res) => {
  try {
    const { status } = req.query;
    const filter = status ? { status } : {};

    // Select fields based on status
    let projection = {};
    if (status === "pending") {
      projection = { patientName: 1, appointDate: 1, symptoms: 1 };
    } else if (status === "confirmed") {
      projection = { patientName: 1, patientId: 1, doctorName: 1, appointDate: 1, symptoms: 1 };
    }

    const appointments = await Appointment.find(filter, projection).sort({ createdAt: -1 });

    res.json(appointments);
  } catch (err) {
    res.status(500).json({ message: "Error fetching appointments", error: err.message });
  }
};
