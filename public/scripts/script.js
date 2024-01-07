var $selectBox = document.getElementById('selectBox');
console.log('test');

var getSelectedRecord = function() {
    var selectBoxSelectedId = $selectBox.options[$selectBox.selectedIndex].id;
    return !{PatientRecords}.find(record => record.PatientID == selectBoxSelectedId);
}

$selectBox.addEventListener('change', function(event) {
    console.log('test2');
    currentRecord = getSelectedRecord();
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