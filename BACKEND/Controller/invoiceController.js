const Invoice = require("../Schema/invoiceSchema.js");

// Create a new invoice
const createInvoice = async (req, res) => {
  try {
    const invoice = new Invoice(req.body);
    await invoice.save();
    res.status(201).json(invoice);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getInvoices = async(req,res)=>{
  try{
    const invoices = await Invoice.find().select(
      "InvoiceNumber CustomerName InvoiceDate  Amount  Balance InvoiceStatus InsuranceStatus"
    );

    const formattedInvoices = invoices.map((inv) =>({
      invNumber:inv.InvoiceNumber,
      patient:inv.CustomerName,
      date:inv.InvoiceDate ? new Date(inv.InvoiceDate).toLocaleDateString() : "",
      amount:inv.Amount,
      balance:inv.Balance,
      invStatus:inv.InvoiceStatus,
      insStatus:inv.InsuranceStatus,
    }));
    res.json(formattedInvoices);
  }
  catch(err){
    console.error("Error fteching Invoices:",err);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports={createInvoice , getInvoices};