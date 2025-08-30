const Document = require("../Schema/documentSchema.js");

const createDocument = async (req, res) => {
  try {
    const { docName, docType } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const newDoc = new Document({
      docName,
      docType,
      fileUrl: `/uploads/${req.file.filename}`, // file path
    });

    await newDoc.save();

    res.status(201).json(newDoc);
  } catch (error) {
    console.error("Error uploading document:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { createDocument };
