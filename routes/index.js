var express = require('express');
var AppointmentRecords = require('../models/Appointment');
var BillingRecords = require('../models/BillingInsurance');
var PharmacyInventory = require('../models/PharmacyInventory');
var PatientRecords = require('../models/PatientRecord');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  PatientRecords.find()
    .then((PatientData) => {
      const PatRecords = PatientData;

      res.render('index', { PatRecords: PatRecords });
    })
    .catch((err) => {
      console.log(err);
      res.send('Sorry Something went wrong!');
    });
});





module.exports = router;
