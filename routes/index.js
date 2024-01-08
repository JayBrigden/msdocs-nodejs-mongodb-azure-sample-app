var express = require('express');
var Patient = require('../models/Patient');
var Appointment = require('../models/Appointment');
var Billing = require('../models/Billing');
var Inventory = require('../models/Inventory');

var router = express.Router();

router.get('/', function(req, res, next) {
  Promise.all([Patient.find(),Appointment.find(),Billing.find(),Inventory.find()])
    .then((collections) => {
      const PatientRecords = collections[0]
      const AppointmentRecords = collections[1]
      const BillingRecords = collections[2]
      const InventoryRecords = collections[3]

      res.render('index', { PatientRecords: PatientRecords, AppointmentRecords: AppointmentRecords, BillingRecords: BillingRecords, InventoryRecords: InventoryRecords });
    })
    .catch((err) => {
      console.log(err);
      res.send('Sorry Something went wrong!');
    });
});

module.exports = router;
