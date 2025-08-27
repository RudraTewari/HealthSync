const mongoose = require("mongoose");

const medicineSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  dosage: { type: String, required: true, trim: true },
  frequency: { type: String, required: true, trim: true },
});

const prescriptionSchema = new mongoose.Schema(
  {
    PatientID: { type: String, required: true, trim: true },
    PatientName: { type: String, required: true, trim: true },
    DoctorName: { type: String, required: true, trim: true },
    medicines: {
      type: [medicineSchema],
      required: true,
      validate: [(val) => val.length > 0, "At least one medicine is required"],
    },
    PrescriptDate: { type: Date, required: true },
    diagnosis: { type: String, trim: true },
  },
  { timestamps: true } 
);

module.exports = mongoose.model("Prescription", prescriptionSchema);
