const express = require('express');
const router = express.Router();

const {createInvoice} = require('../Controller/invoiceController.js');

router.post("/addinvoices",createInvoice);
module.exports=router;