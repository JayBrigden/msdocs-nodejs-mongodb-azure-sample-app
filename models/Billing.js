const mongoose = require('mongoose');

const BillingSchema = new mongoose.Schema({
    BillingID: String,
    PatientID: String,
    Date: Date, 
    ItemisedCost: [{
        Description: String,
        Amount: Number,
    }],
    TotalValue: Number,
    InsuranceDetails: {
        Provider: String,
        PolicyNumber: String, 
    },
    PaymentStatus: String,

});

module.exports = mongoose.model('Billing', BillingSchema);