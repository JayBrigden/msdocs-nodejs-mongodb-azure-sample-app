const mongoose = required('mongoose');

const AppointmentSchema = new mongoose.schema({ 
    AppointmentID: String, 
    PatientID: String, 
    DoctorID: String,
    AppointmentDate: Date, 
    Time: String, 
    Purpose: String,
    Notes: String
});

module.export = mongoose.model('AppointmentRecords', AppointmentSchema);