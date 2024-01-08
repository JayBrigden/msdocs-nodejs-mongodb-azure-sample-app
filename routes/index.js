var express = require('express');
var Patient = require('../models/Patient');
var Appointment = require('../models/Appointment');
var Billing = require('../models/Billing');
var Inventory = require('../models/Inventory');

var router = express.Router();

router.get('/', function(req, res, next) {
  Promise.all([Patient.find(),Appointment.find(),Billing.find(),Inventory.find()])
    .then((collections) => {

      res.render('index', { PatientRecords: collections[0], AppointmentRecords: collections[1], BillingRecords: collections[2], InventoryRecords: collections[3] });
    })
    .catch((err) => {
      console.log(err);
      res.send('Sorry Something went wrong!');
    });
});

module.exports = router;
