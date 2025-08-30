const express = require('express');
const router = express.Router();

const {createInvoice} = require('../Controller/invoiceController.js');

router.post("/invoices",createInvoice);
module.exports=router;