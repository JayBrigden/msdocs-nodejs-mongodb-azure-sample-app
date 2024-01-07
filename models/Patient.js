const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
    PatientID: String, 
    PatientName: String, 
    DateOfBirth: Date, 
    MedicalHistory: [String],
    CurrentMedication: [String],
    EmergencyContact1Name: String,
    EmergencyContact1PhoneNo: String,
    EmergencyContact1Relation: String,
    EmergencyContact2Name: String,
    EmergencyContact2PhoneNo: String, 
    EmergencyContact2Relation: String
});

module.exports = mongoose.model('Patient', PatientSchema); 