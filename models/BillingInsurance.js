const mongoose = require('mongoose');

const BillingInsuranceSchema = new mongoose.Schema({
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
module.export = mongoose.model('BillingInsurance',BillingInsuranceSchema);