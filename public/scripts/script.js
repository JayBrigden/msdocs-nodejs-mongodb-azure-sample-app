const patientBtn = document.getElementById('patientBtn');
const appointmentBtn = document.getElementById('appointmentBtn');
const inventoryBtn = document.getElementById('inventoryBtn');
const billingBtn = document.getElementById('billingBtn');
var patientSelectBox = document.getElementById('patientSelectBox');
var appointmentSelectBox = document.getElementById('appointmentSelectBox');

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
    var currentPatientRecord = JSON.parse(patientSelectBox.options[patientSelectBox.selectedIndex].dataset.record);
    document.getElementById('patientIdInput').value = currentPatientRecord.PatientID;
    document.getElementById('patientNameInput').value = currentPatientRecord.PatientName;
    document.getElementById('patientDobInput').value = new Date(currentPatientRecord.DateOfBirth);
    document.getElementById('patientHistoryInput').value = currentPatientRecord.MedicalHistory;
    document.getElementById('patientMedicationInput').value = currentPatientRecord.CurrentMedication;
    document.getElementById('patientContact1NameInput').value = currentPatientRecord.EmergencyContact1Name;
    document.getElementById('patientContact1PhoneInput').value = currentPatientRecord.EmergencyContact1PhoneNo;
    document.getElementById('patientContact1RelationInput').value = currentPatientRecord.EmergencyContact1Relation;
    document.getElementById('patientContact2NameInput').value = currentPatientRecord.EmergencyContact2Name;
    document.getElementById('patientContact2PhoneInput').value = currentPatientRecord.EmergencyContact2PhoneNo;
    document.getElementById('patientContact2RelationInput').value = currentPatientRecord.EmergencyContact2Relation;
});

appointmentSelectBox.addEventListener('change', function(event) {
        var currentAppointmentRecord = JSON.parse(appointmentSelectBox.options[appointmentSelectBox.selectedIndex].dataset.record);
        document.getElementById('appointmentIdInput').value = currentAppointmentRecord.AppointmentID;
        document.getElementById('appointmentPatientIdInput').value = currentAppointmentRecord.PatientID;
        document.getElementById('appointmentPatientNameInput').value = currentAppointmentRecord.PatientName;
        document.getElementById('appointmentDoctorIdInput').value = currentAppointmentRecord.DoctorID;
        document.getElementById('appointmentDateInput').value = new Date(currentAppointmentRecord.AppointmentDate);
        document.getElementById('appointmentTimeInput').value = currentAppointmentRecord.Time;
        document.getElementById('appointmentPurposeInput').value = currentAppointmentRecord.Purpose;
        document.getElementById('appointmentNotesInput').value = currentAppointmentRecord.Notes;

});

    // Copy code above
    // replace currentpatientrecord -- currentappointmentrecord 
    // make the appointment & inventory button interactive
            // make new sheet 
            //show correct data
    // Fix Collection naming 
            // Billing, Inventories, Appintments