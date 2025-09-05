// BACKEND/Controller/patientAppointmentController.js
const Appointment = require("../Schema/patientAppointmentSchema.js");

/**
 * POST /api/patient-appointments
 * Body: { patientName, appointDate (ISO string), symptoms }
 * Creates a *pending* appointment.
 */
exports.createPatientAppointment = async (req, res) => {
  try {
    const { patientName, appointDate, symptoms } = req.body;

    if (!patientName || !appointDate) {
      return res
        .status(400)
        .json({ message: "patientName and appointDate are required." });
    }

    const normalized = new Date(appointDate);
    if (isNaN(normalized.getTime())) {
      return res.status(400).json({ message: "Invalid appointDate format." });
    }

    const appt = await Appointment.create({
      patientName,
      appointDate: normalized,
      symptoms: symptoms || "",
      status: "pending",
    });

    return res.status(201).json(appt);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Error creating appointment", error: err.message });
  }
};

/**
 * GET /api/patient-appointments?status=pending|confirmed&patientName=John
 * Returns only the records for the given patient (case-insensitive).
 * If status is provided, it filters by it; otherwise returns all statuses for that patient.
 * Projection differs by status:
 *  - pending: patientName, appointDate, symptoms
 *  - confirmed: +doctorName, +patientId
 */
exports.getPatientAppointments = async (req, res) => {
  try {
    const { status, patientName } = req.query;

    if (!patientName) {
      return res
        .status(400)
        .json({ message: "Query param 'patientName' is required." });
    }

    // Build filter
    const filter = {
      patientName: { $regex: new RegExp(`^${patientName}$`, "i") }, // exact match, case-insensitive
    };
    if (status) {
      // accept Pending/CONFIRMED etc., normalize to lowercase
      filter.status = String(status).toLowerCase();
    }

    // Field selection depends on requested status
    let projection = {};
    if (filter.status === "pending") {
      projection = { patientName: 1, appointDate: 1, symptoms: 1, status: 1 };
    } else if (filter.status === "confirmed") {
      projection = {
        patientName: 1,
        appointDate: 1,
        symptoms: 1,
        status: 1,
        doctorName: 1,
        patientId: 1,
      };
    } // if no status, return all fields (user will still only see their own docs)

    const docs = await Appointment.find(filter, projection).sort({
      appointDate: 1,
      createdAt: -1,
    });

    return res.json(docs);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Error fetching appointments", error: err.message });
  }
};
