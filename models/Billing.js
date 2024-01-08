const mongoose = require('mongoose');

const BillingSchema = new mongoose.Schema({
    BillingID: String,
    PatientID: String,
    PatientName: String,
    Date: Date, 
    ItemisedCost: [String],
    TotalValue: String,
    InsuranceProvider: String,
    InsuranceProviderID: String,
    PaymentStatus: String
});

module.exports = mongoose.model('Billing', BillingSchema);