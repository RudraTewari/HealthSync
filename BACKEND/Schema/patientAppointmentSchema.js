const mongoose = require("mongoose");

const patientAppointmentSchema = new mongoose.Schema(
  {
    patientName: { type: String, required: true, trim: true },
    appointDate: { type: Date, required: true },
    appointTime: { type: String, required: true },
    symptoms: { type: String, default: "", trim: true },
    doctorName: { type: String, default: "" },
    status: { type: String, enum: ["Pending", "Confirmed"], default: "Pending" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("PatientAppointment", patientAppointmentSchema);
