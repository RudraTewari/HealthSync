const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
  {
    patientId: { type: String, required: true, trim: true },
    patientName: { type: String, required: true, trim: true },
    doctorName: { type: String, required: true, trim: true },
    appointDate: { type: Date, required: true },
    appointTime: { 
      type: String, 
      enum: ["10:00 AM", "11:00 AM", "12:00 PM", "3:00 PM", "5:00 PM", "6:00 PM"], 
      required: true 
    },
    symptoms: { type: String, default: "", trim: true },
    status: { type: String, enum: ["Pending", "Confirmed"], default: "Pending" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Appointment", appointmentSchema);
