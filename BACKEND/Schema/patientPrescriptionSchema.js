const mongoose = require("mongoose");

const patientPrescriptionSchema = new mongoose.Schema({
  PatientID: String,
  PatientName: { type: String, required: true },
  DoctorName: { type: String, required: true },
  PrescriptDate: { type: Date, required: true },
  medicines: [
    {
      name: { type: String, required: true },
      dosage: String,
      frequency: String
    }
  ],
  diagnosis: String
});

module.exports = mongoose.model("PatientPrescription", patientPrescriptionSchema);
