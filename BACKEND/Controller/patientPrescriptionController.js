const Prescription = require("../Schema/prescriptionSchema.js");

const getPatientPrescriptions = async (req, res) => {
  try {
    const { patientName } = req.query;

    if (!patientName) {
      return res.status(400).json({ error: "Patient name is required." });
    }

    const query = {
      PatientName: { $regex: new RegExp("^" + patientName.trim() + "$", "i") },
    };

    const prescriptions = await Prescription.find(query).select(
      "DoctorName PrescriptDate medicines diagnosis"
    );

    if (!prescriptions.length) {
      return res.status(404).json({
        message: "No prescriptions found for this patient.",
      });
    }

    const formattedPrescriptions = prescriptions.map((pres) => ({
      doctorName: pres.DoctorName,
      date: pres.PrescriptDate
        ? new Date(pres.PrescriptDate).toLocaleDateString()
        : "",
      medications: pres.medicines.map((med) => med.name),
      diagnosis: pres.diagnosis || "",
    }));

    res.json(formattedPrescriptions);
  } catch (err) {
    console.error("Error fetching patient prescriptions:", err);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { getPatientPrescriptions };
