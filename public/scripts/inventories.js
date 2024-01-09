var inventorySelectBox = document.getElementById('inventorySelectBox');
var ctx = document.getElementById("inventoryChart").getContext('2d');

document.addEventListener('DOMContentLoaded', function() {
    const inventoryNameData = [];
    const inventoryQuantityData = [];

    for (var i = 0; i < inventorySelectBox.length; i++){
            const inventoryData = JSON.parse(inventorySelectBox.options[i].dataset.record);
            inventoryNameData.push(inventoryData.InventoryName);
            inventoryQuantityData.push(inventoryData.Quantity);
    }

    var chart = new Chart(ctx, {
            type: 'pie',
            data: {
                    labels: inventoryNameData,
                    datasets: [{
                            label: 'Inventory Quantities',
                            data: inventoryQuantityData,
                            backgroundColor: [
                                    "#00eff3",
                                    "#ae37c2",
                                    "#bbed63",
                                    "#0042c7",
                                    "#ff980d",
                                    "#00a6ff",
                                    "#007100",
                                    "#ffabff",
                                    "#6f6900",
                                    "#7f56ac",
                                    "#00e4ff",
                                    "#7a0000",
                                    "#00dfff",
                                    "#640030",
                                    "#8ef0ff",
                                    "#411600",
                                    "#ff9293",
                                    "#3f4553",
                                    "#662245",
                                    "#95899e"
                            ]
                    }]
            },
            options: {
                    title: {
                            display: true,
                            text: "Inventory Quantities"
                    },
                    legend: {
                            position: 'right'
                    }
            }
    });
}, false);

inventorySelectBox.addEventListener('change', function(event) {
    var currentInventoryRecord = JSON.parse(inventorySelectBox.options[inventorySelectBox.selectedIndex].dataset.record);
    document.getElementById('inventoryIdInput').value = currentInventoryRecord.InventoryID;
    document.getElementById('inventoryNameInput').value = currentInventoryRecord.InventoryName;
    document.getElementById('inventoryQuantityInput').value = currentInventoryRecord.Quantity.toString();
    document.getElementById('inventorySupplierNameInput').value = currentInventoryRecord.SupplierName;
    document.getElementById('inventorySupplierContactInput').value = currentInventoryRecord.SupplierContact;
    document.getElementById('inventoryExpirationDateInput').value = currentInventoryRecord.ExpirationDate.slice(0,10);
});