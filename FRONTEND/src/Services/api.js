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

export const addDocument = async (data) => {
  try {
    const formData = new FormData();
    formData.append("docName", data.docName);
    formData.append("docType", data.docType);
    formData.append("file", data.file[0]); // single file upload

    const res = await API.post("/documents", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    return res.data;
  } catch (error) {
    console.error(" Error while uploading document:", error);
    throw error;
  }
};