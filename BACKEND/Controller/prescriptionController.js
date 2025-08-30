const Prescription = require("../Schema/prescriptionSchema.js");

const createPrescription = async (req, res) => {
  try {
    console.log("Received prescription data:", req.body);

    let { PatientID, PatientName, DoctorName, medicines, PrescriptDate, diagnosis } = req.body;

    // Validate required fields
    if (!PatientID || !PatientName || !DoctorName || !PrescriptDate) {
      return res.status(400).json({ error: "Patient, Doctor, and Prescription Date are required." });
    }

    if (!medicines || !Array.isArray(medicines) || medicines.length === 0) {
      return res.status(400).json({ error: "At least one medicine is required." });
    }

    // Validate each medicine
    for (let med of medicines) {
      if (!med.name || !med.dosage || !med.frequency) {
        return res.status(400).json({ error: "Each medicine must have name, dosage, and frequency." });
      }
    }

    // Convert PrescriptDate to Date object
    const prescription = new Prescription({
      PatientID,
      PatientName,
      DoctorName,
      medicines,
      PrescriptDate: new Date(PrescriptDate),
      diagnosis: diagnosis || ""
    });

    await prescription.save();

    res.status(201).json(prescription);
  } catch (err) {
    console.error("Error in createPrescription:", err);
    res.status(500).json({ error: err.message, stack: err.stack });
  }
};

const getPrescriptions = async (req, res) => {
  try {
    const prescriptions = await Prescription.find().select(
      "PatientName DoctorName PrescriptDate medicines"
    );

    const formattedPrescriptions = prescriptions.map((pres) => ({
      id: pres._id,
      patientName: pres.PatientName,
      doctorName: pres.DoctorName,
      date: pres.PrescriptDate ? new Date(pres.PrescriptDate).toLocaleDateString() : "",
      medications: pres.medicines.map((med) => med.name), // Only medicine names
    }));

    res.json(formattedPrescriptions);
  } catch (err) {
    console.error("Error fetching prescriptions:", err);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { createPrescription,getPrescriptions };
