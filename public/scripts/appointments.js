var appointmentSelectBox = document.getElementById('appointmentSelectBox');
const appointmentPurposeData = [];
var ctx = document.getElementById("appointmentChart").getContext('2d');

document.addEventListener('DOMContentLoaded', function() {
        for (var i = 0; i < appointmentSelectBox.length; i++){
                appointmentPurposeData.push(JSON.parse(appointmentSelectBox.options[i].dataset.record).Purpose);
        }
}, false);

var chart = new Chart(ctx, {
        type: 'pie',
        data: {
                labels: Array.from(new Set(appointmentPurposeData)),
                datasets: [{
                        label: 'Appointment Purposes',
                        data: appointmentPurposeData,
                        borderWidth: 1
                }]
        },
        options: {
                title: {
                        display: true,
                        text: "chart"
                },
                legend: {
                        position: 'bottom'
                }
        }
});

appointmentSelectBox.addEventListener('change', function(event) {
        var currentAppointmentRecord = JSON.parse(appointmentSelectBox.options[appointmentSelectBox.selectedIndex].dataset.record);
        document.getElementById('appointmentIdInput').value = currentAppointmentRecord.AppointmentID;
        document.getElementById('appointmentPatientIdInput').value = currentAppointmentRecord.PatientID;
        document.getElementById('appointmentPatientNameInput').value = currentAppointmentRecord.PatientName;
        document.getElementById('appointmentDoctorIdInput').value = currentAppointmentRecord.DoctorID;
        document.getElementById('appointmentDateInput').value = currentAppointmentRecord.AppointmentDate.slice(0,10);
        document.getElementById('appointmentTimeInput').value = currentAppointmentRecord.Time;
        document.getElementById('appointmentPurposeInput').value = currentAppointmentRecord.Purpose;
        document.getElementById('appointmentNotesInput').value = currentAppointmentRecord.Notes;
});