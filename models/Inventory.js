const mongoose = require('mongoose');

const InventorySchema = new mongoose.Schema({
    InventoryID: String, 
    InventoryName: String,
    Quantity: Number,
    SupplierName: String,
    SupplierContact: String,
    ExpirationDate: Date
});

module.exports = mongoose.model('Inventory', InventorySchema);
