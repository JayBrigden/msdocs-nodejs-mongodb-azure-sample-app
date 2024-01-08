var patientSelectBox = document.getElementById('patientSelectBox');

patientSelectBox.addEventListener('change', function(event) {
    var currentPatientRecord = JSON.parse(patientSelectBox.options[patientSelectBox.selectedIndex].dataset.record);
    document.getElementById('patientIdInput').value = currentPatientRecord.PatientID;
    document.getElementById('patientNameInput').value = currentPatientRecord.PatientName;
    document.getElementById('patientDobInput').value = currentPatientRecord.DateOfBirth.slice(0,9);
    document.getElementById('patientHistoryInput').value = currentPatientRecord.MedicalHistory;
    document.getElementById('patientMedicationInput').value = currentPatientRecord.CurrentMedication;
    document.getElementById('patientContact1NameInput').value = currentPatientRecord.EmergencyContact1Name;
    document.getElementById('patientContact1PhoneInput').value = currentPatientRecord.EmergencyContact1PhoneNo;
    document.getElementById('patientContact1RelationInput').value = currentPatientRecord.EmergencyContact1Relation;
    document.getElementById('patientContact2NameInput').value = currentPatientRecord.EmergencyContact2Name;
    document.getElementById('patientContact2PhoneInput').value = currentPatientRecord.EmergencyContact2PhoneNo;
    document.getElementById('patientContact2RelationInput').value = currentPatientRecord.EmergencyContact2Relation;
});