const express = require('express');
const router = express.Router();
const multer = require('multer')
const path = require('path');
const {createDocument}=require('../Controller/documentController.js');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
    cb(null, "uploads/"); // folder where files will be stored
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // unique filename
  },
});

const document = multer({storage});

router.post("/documents", document.single("file"), createDocument);

module.exports=router;