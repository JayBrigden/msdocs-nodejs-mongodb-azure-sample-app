var express = require('express');
var Patient = require('../models/Patient');
var Appointment = require('../models/Appointment');
var Billing = require('../models/Billing');
var Inventory = require('../models/Inventory');

var router = express.Router();

router.get('/', function(req, res, next) {
  Promise.all([Patient.find(),Appointment.find(),Billing.find(),Inventory.find()])
    .then(([patients,appointments,billings,inventorys]) => {

      res.render('index', { PatientRecords: patients, AppointmentRecords: appointments, BillingRecords: billings, InventoryRecords: inventorys });
    })
    .catch((err) => {
      console.log(err);
      res.send('Sorry Something went wrong!');
    });
});

module.exports = router;
