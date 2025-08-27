const mongoose = require("mongoose");

const addDoctorSchema = new mongoose.Schema({
  docfirstName: { type: String, required: true },
  doclastName: { type: String, required: true },
  dob: { type: Date, required: true },
  gender: { type: String, required: true, enum: ["male", "female"] },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  pincode: { type: Number, required: true },
  email: { type: String, required: true, unique: true, match: /.+\@.+\..+/ },
  number: { type: Number, required: true },
  specialize: { type: String, required: true },
  secSpecialize: { type: String },
  licNumber: { type: Number, required: true, unique: true },
  expire: { type: Date, required: true },
  qualify: { type: String, required: true },
  experience: { type: Number, required: true },
  position: { 
    type: String, 
    required: true, 
    enum: ["depthead", "seDoc", "specialist", "intern"] 
  }
}, { timestamps: true });

const Doctor = mongoose.model("Doctor", addDoctorSchema);
module.exports = Doctor;   // ✅ use module.exports
