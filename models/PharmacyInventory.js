const mongoose = required ('mongoose');

const PharmacyInventorySchema = new mongoose.Schema({
    InventoryID: String, 
    InventoryName: Sting,
    Quantity: String,
    SupplierDetails: {
        Name: String, 
        ContactDetails: String
    }, 
    EpirationDate: Date
});

module.export = mongoose.modle('PharmacyInventory', PharmacyInventorySchema);
