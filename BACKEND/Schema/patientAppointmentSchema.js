const mongoose = require("mongoose");

const patientAppointmentSchema = new mongoose.Schema(
  {
    patientName: { type: String, required: true, trim: true },
    appointDate: { type: Date, required: true },
    symptoms: { type: String, default: "", trim: true },
    doctorName: { type: String, default: "", trim: true },  // doctor assigned on confirmation
    status: { type: String, enum: ["pending", "confirmed"], default: "pending" },
    patientId: { type: String, trim: true }, // assigned on confirmation
  },
  { timestamps: true }
);

module.exports = mongoose.model("PatientAppointment", patientAppointmentSchema);
