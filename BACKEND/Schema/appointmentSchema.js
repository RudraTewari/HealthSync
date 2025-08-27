const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
  {
    patientId: { type: String, required: true, trim: true },
    patientName: { type: String, required: true, trim: true },
    doctorName: { type: String, required: true, trim: true },
    appointDate: { type: Date, required: true },
    symptoms: { type: String, default: "", trim: true },
    status: { type: String, enum: ["pending", "confirmed"], default: "pending" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Appointment", appointmentSchema);
