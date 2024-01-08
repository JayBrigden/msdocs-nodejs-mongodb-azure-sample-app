var billingSelectBox = document.getElementById('billingSelectBox');

billingSelectBox.addEventListener('change', function(event) {
    var currentbillingRecord = JSON.parse(billingSelectBox.options[billingSelectBox.selectedIndex].dataset.record);
    document.getElementById('billingIdInput').value = currentbillingRecord.BillingID;
    document.getElementById('billingPatientIdInput').value = currentbillingRecord.PatientID;
    document.getElementById('billingPatientNameInput').value = currentbillingRecord.PatientName;
    document.getElementById('billingDateInput').value = currentbillingRecord.Date.slice(0,10);
    document.getElementById('billingItemisedCostInput').value = currentbillingRecord.ItemisedCost;
    document.getElementById('billingTotalValueInput').value = currentbillingRecord.TotalValue;
    document.getElementById('billingProviderInput').value = currentbillingRecord.InsuranceProvider;
    document.getElementById('billingProviderIdInput').value = currentbillingRecord.InsuranceProviderID;
    document.getElementById('billingPaymentStatusInput').value = currentbillingRecord.PaymentStatus;
});