const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
    InvoiceNumber:{type:String,required:true},
    CustomerName:{type:String,required:true},
    InvoiceDate:{type:Date,required:true},
    Amount:{type:Number,required:true},
    Balance:{type:Number,required:true},
    InvoiceStatus: { type: String, enum: ["Paid", "Partial Paid","Unpaid"],required:true },
    InsuranceStatus:{type:String,enum:["Approved","Pending","UnSubmitted"],required:true}

},{ timestamps: true }
);

module.exports = mongoose.model("Invoice",invoiceSchema);