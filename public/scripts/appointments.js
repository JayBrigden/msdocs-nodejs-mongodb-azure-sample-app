var appointmentSelectBox = document.getElementById('appointmentSelectBox');
var ctx = document.getElementById("appointmentChart").getContext('2d');

document.addEventListener('DOMContentLoaded', function() {
        const appointmentPurposeData = [];

        for (var i = 0; i < appointmentSelectBox.length; i++){
                appointmentPurposeData.push(JSON.parse(appointmentSelectBox.options[i].dataset.record).Purpose);
        }

        const appointmentPurposeTally = appointmentPurposeData.reduce(function(tally, value){
                tally[value] = tally[value] ? tally[value] + 1 : 1;
                return tally;
        }, {});

        var chart = new Chart(ctx, {
                type: 'pie',
                data: {
                        labels: Object.keys(appointmentPurposeTally),
                        datasets: [{
                                label: 'Appointment Purposes',
                                data: Object.values(appointmentPurposeTally),
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
                                text: "Appointment Purposes"
                        },
                        legend: {
                                position: 'right'
                        }
                }
        });
}, false);

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