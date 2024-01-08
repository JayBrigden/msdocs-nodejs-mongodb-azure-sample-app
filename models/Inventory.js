const mongoose = require('mongoose');

const InventorySchema = new mongoose.Schema({
    InventoryID: String, 
    InventoryName: Sting,
    Quantity: String,
    SupplierDetails: {
        Name: String, 
        ContactDetails: String
    }, 
    ExpirationDate: Date
});

module.export = mongoose.model('Inventory', InventorySchema);
