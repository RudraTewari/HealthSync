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
    const { patientName, date } = req.query;

    let query = {};

    // ✅ Apply patient name filter if provided
    if (patientName) {
      query.PatientName = { $regex: new RegExp(patientName, "i") };
    }

    // ✅ Apply date filter if provided
    if (date) {
      const start = new Date(date);
      const end = new Date(date);
      end.setDate(end.getDate() + 1);
      query.PrescriptDate = { $gte: start, $lt: end };
    }

    const prescriptions = await Prescription.find(query).select(
      "PatientName DoctorName PrescriptDate medicines diagnosis"
    );

    if (!prescriptions || prescriptions.length === 0) {
      return res.status(404).json({ message: "No prescriptions found." });
    }

    const formattedPrescriptions = prescriptions.map((pres) => ({
      id: pres._id,
      patientName: pres.PatientName,
      doctorName: pres.DoctorName,
      date: pres.PrescriptDate ? new Date(pres.PrescriptDate).toLocaleDateString() : "",
      medications: pres.medicines.map((med) => med.name),
      diagnosis: pres.diagnosis || ""
    }));

    res.json(formattedPrescriptions);
  } catch (err) {
    console.error("Error fetching prescriptions:", err);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { createPrescription, getPrescriptions };
