const Prescription = require("../Schema/prescriptionSchema.js");

// ✅ User fetches prescriptions strictly by patient name + date
const getPatientPrescriptions = async (req, res) => {
  try {
    const { patientName, date } = req.query;

    // Strict validation: both name and date are required
    if (!patientName || !date) {
      return res
        .status(400)
        .json({ error: "Both patient name and date are required." });
    }

    // Build query
    const start = new Date(date);
    const end = new Date(date);
    end.setDate(end.getDate() + 1);

    const query = {
      PatientName: { $regex: new RegExp(patientName, "i") },
      PrescriptDate: { $gte: start, $lt: end },
    };

    const prescriptions = await Prescription.find(query).select(
      "DoctorName PrescriptDate medicines diagnosis"
    );

    if (!prescriptions || prescriptions.length === 0) {
      return res.status(404).json({
        message: "No prescriptions found for this patient on given date.",
      });
    }

    // Map response for frontend
    const formattedPrescriptions = prescriptions.map((pres) => ({
      doctor: pres.DoctorName,
      date: pres.PrescriptDate
        ? new Date(pres.PrescriptDate).toLocaleDateString()
        : "",
      medications: pres.medicines.map((med) => ({
        name: med.name,
        dosage: med.dosage,
        frequency: med.frequency,
      })),
      diagnosis: pres.diagnosis || "",
    }));

    res.json(formattedPrescriptions);
  } catch (err) {
    console.error("Error fetching patient prescriptions:", err);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { getPatientPrescriptions };
