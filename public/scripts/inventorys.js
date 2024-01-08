var inventorySelectBox = document.getElementById('inventorySelectBox');

inventorySelectBox.addEventListener('change', function(event) {
    var currentInventoryRecord = JSON.parse(inventorySelectBox.options[inventorySelectBox.selectedIndex].dataset.record);
    document.getElementById('inventoryIdInput').value = currentInventoryRecord.inventoryID;
    document.getElementById('inventoryNameInput').value = currentInventoryRecord.PatientName;
    document.getElementById('inventoryQuantityInput').value = currentInventoryRecord.Quantity;
    document.getElementById('inventorySupplierNameInput').value = currentInventoryRecord.SupplierName;
    document.getElementById('inventorySupplierContactInput').value = currentInventoryRecord.SupplierContact;
    document.getElementById('inventoryExpirationDateInput').value = currentInventoryRecord.ExpirationDate.slice(0,9);
});