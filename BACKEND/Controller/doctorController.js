const Doctor = require("../Schema/addDoctorSchema.js");

const createDoctor = async (req, res) => {
  try {
    console.log(" Received data:", req.body);
    const doctor = new Doctor(req.body);
    await doctor.save();
    res.status(201).json(doctor);
  } catch (err) {
    console.error(" Error in createDoctor:", err.message);
    res.status(400).json({ error: err.message });
  }
};

const getDoctors = async (req, res) => {
  try {
    // fetch only selected fields
    const doctors = await Doctor.find().select("docfirstName doclastName specialize experience number position");

    const formattedDoctors = doctors.map(doc => ({
      name: `${doc.docfirstName} ${doc.doclastName}`,
      specialty: doc.specialize,
      experience: doc.experience,
      contact: doc.number,
      position: doc.position // you can map 'position' to a friendly status
    }));

    res.json(formattedDoctors);
  } catch (err) {
    console.error("Error fetching doctors:", err);
    res.status(500).json({ error: "Server error" });
  }
};

 
module.exports = { createDoctor, getDoctors };
