const mongoose = require('mongoose');

const documentSchema = mongoose.Schema({
    docName:{type: String,required: true,trim: true},
    docType: {type: String,required: true,trim: true},
    fileUrl: {type: String, required: true},
    uploadedAt: {type: Date,default: Date.now},     
    },
    { timestamps: true }
);

module.exports = mongoose.model("Record",documentSchema);