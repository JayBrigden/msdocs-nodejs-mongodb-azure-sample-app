var express = require('express');
var PatientModel = require('../models/Patient');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  PatientModel.find()
    .then((PatientRecords) => {
      const AllPatientRecords = PatientRecords;

      res.render('index', { AllPatientRecords: AllPatientRecords });
    })
    .catch((err) => {
      console.log(err);
      res.send('Sorry Something went wrong!');
    });
});

module.exports = router;
