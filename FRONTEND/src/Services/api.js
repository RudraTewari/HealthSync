import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

// Add Appointment
export const addAppointment = async (data) => {
  try {
    const res = await API.post("/appointments", data);
    return res.data;
  } catch (error) {
    console.error("Error while adding appointment:", error);
    throw error;
  }
};


export const addPrescription = async (data) => {
  try {
    const res = await API.post("/prescription", data);
    return res.data;
  } catch (error) {
    console.error("Error while adding prescription:", error);
    throw error;
  }
};

export const addDoctor = async (data) => {
  try {
    const res = await API.post("/adddoctor", data);
    return res.data;
  } catch (error) {
    console.error("Error while adding Doctor:", error);
    throw error;
  }
};

export const addInvoices = async (data) => {
  try {
    const res = await API.post("/invoices", data);
    return res.data;
  } catch (error) {
    console.error("Error while creating invoices:", error);
    throw error;
  }
};

