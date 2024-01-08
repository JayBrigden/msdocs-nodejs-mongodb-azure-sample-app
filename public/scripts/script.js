const patientBtn = document.getElementById('patientBtn');
const appointmentBtn = document.getElementById('appointmentBtn');
const inventoryBtn = document.getElementById('inventoryBtn');
const billingBtn = document.getElementById('billingBtn');
var patientSelectBox = document.getElementById('patientSelectBox');

patientBtn.addEventListener('click', function onClick() {
    patientBtn.style.backgroundColor = 'rgb(70, 131, 77)';
    appointmentBtn.style.backgroundColor = 'rgb(131, 184, 137)';
    inventoryBtn.style.backgroundColor = 'rgb(131, 184, 137)';
    billingBtn.style.backgroundColor = 'rgb(131, 184, 137)';
});

appointmentBtn.addEventListener('click', function onClick() {
    appointmentBtn.style.backgroundColor = 'rgb(70, 131, 77)';
    patientBtn.style.backgroundColor = '';
    inventoryBtn.style.backgroundColor = '';
    billingBtn.style.backgroundColor = '';
});

inventoryBtn.addEventListener('click', function onClick() {
    inventoryBtn.style.backgroundColor = 'rgb(70, 131, 77)';
    appointmentBtn.style.backgroundColor = '';
    patientBtn.style.backgroundColor = '';
    billingBtn.style.backgroundColor = '';
});

billingBtn.addEventListener('click', function onClick() {
    billingBtn.style.backgroundColor = 'rgb(70, 131, 77)';
    appointmentBtn.style.backgroundColor = '';
    inventoryBtn.style.backgroundColor = '';
    patientBtn.style.backgroundColor = '';
});

patientSelectBox.addEventListener('change', function(event) {
    var currentRecord = JSON.parse(patientSelectBox.options[patientSelectBox.selectedIndex].dataset.record);
    document.getElementById('patientIdInput').value = currentRecord.PatientID;
    document.getElementById('patientNameInput').value = currentRecord.PatientName;
    document.getElementById('patientDobInput').value = currentRecord.DateOfBirth;
    document.getElementById('patientHistoryInput').value = currentRecord.MedicalHistory;
    document.getElementById('patientMedicationInput').value = currentRecord.CurrentMedication;
    document.getElementById('patientContact1NameInput').value = currentRecord.EmergencyContact1Name;
    document.getElementById('patientContact1PhoneInput').value = currentRecord.EmergencyContact1PhoneNo;
    document.getElementById('patientContact1RelationInput').value = currentRecord.EmergencyContact1Relation;
    document.getElementById('patientContact2NameInput').value = currentRecord.EmergencyContact2Name;
    document.getElementById('patientContact2PhoneInput').value = currentRecord.EmergencyContact2PhoneNo;
    document.getElementById('patientContact2RelationInput').value = currentRecord.EmergencyContact2Relation;
});