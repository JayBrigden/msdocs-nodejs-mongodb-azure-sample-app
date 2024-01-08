var appointmentSelectBox = document.getElementById('appointmentSelectBox');

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