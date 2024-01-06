const mongoose = require('mongoose');

const patientRecordSchema = new mongoose.Schema({
    PatientID: String, 
    PatientName: String, 
    DateOfBirth: Date, 
    MedicalHistory: [String],
    CurrentMedication: [String],
    EmergencyContact1Name: String,
    EmergencyContact1PhoneNo: Number,
    EmergencyContact1Relation: String,
    EmergencyContact2Name: String,
    EmergencyContact2PhoneNo: Number, 
    EmergencyContact2Relation: String
});

module.export = mongoose.model('PatientRecord', patientRecordSchema); 