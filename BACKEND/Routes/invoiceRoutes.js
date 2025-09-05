const express = require('express');
const router = express.Router();

const {createInvoice , getInvoices} = require('../Controller/invoiceController.js');

router.post("/addinvoices",createInvoice);
router.get("/invoices",getInvoices);
module.exports=router;