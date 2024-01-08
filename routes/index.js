var express = require('express');
var Patient = require('../models/Patient');
//var Appointment = require('../models/Appointment');
var Billing = require('../models/Billing');

var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/patients', function(req, res, next) {
  Patient.find()
    .then((patients) => {
      res.render('patients', { PatientRecords: patients });
    })
    .catch((err) => {
      console.log(err);
      res.send('Sorry Something went wrong!');
    });
});

/*router.get('/appointments', function(req, res, next) {
  Appointment.find()
    .then((appointments) => {
      res.render('appointments', { AppointmentRecords: appointments });
    })
    .catch((err) => {
      console.log(err);
      res.send('Sorry Something went wrong!');
    });
});*/

router.get('/billing', function(req, res, next) {
  Billing.find()
    .then((billings) => {
      res.render('billing', { BillingRecords: billings });
    })
    .catch((err) => {
      console.log(err);
      res.send('Sorry Something went wrong!');
    });
});

module.exports = router;
