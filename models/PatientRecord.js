const mongoose = require('mongoose');

const PatientRecordSchema = new mongoose.Schema({
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

module.exports = mongoose.model('PatientRecords', PatientRecordSchema); 