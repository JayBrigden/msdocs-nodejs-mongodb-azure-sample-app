const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.schema({ 
    AppointmentID: String,
    PatientName: String, 
    PatientID: String, 
    DoctorID: String,
    AppointmentDate: Date, 
    Time: String, 
    Purpose: String,
    Notes: String
});

module.exports = mongoose.model('Appointment', AppointmentSchema);