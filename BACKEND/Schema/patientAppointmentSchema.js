// BACKEND/Schema/patientAppointmentSchema.js
const mongoose = require("mongoose");

const patientAppointmentSchema = new mongoose.Schema(
  {
    patientName: { type: String, required: true, trim: true },
    appointDate: { type: Date, required: true },
    symptoms: { type: String, default: "", trim: true },  // doctor assigned on confirmation
    appointDate: { type: Date, required: true },     // full datetime
    symptoms:    { type: String, default: "", trim: true },

    // Set/filled by admin when confirming:
    doctorName:  { type: String, default: "", trim: true },
    patientId:   { type: String, default: "", trim: true },

    // User creates as "pending", admin flips to "confirmed"
    status: { type: String, enum: ["pending", "confirmed"], default: "pending" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("PatientAppointment", patientAppointmentSchema);
