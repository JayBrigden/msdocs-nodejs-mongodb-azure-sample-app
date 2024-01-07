var express = require('express');
var Patient = require('../models/Patient');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  Patient.find()
    .then((patients) => {
      const PatientRecords = patients;

      res.render('index', { PatientRecords: PatientRecords });
    })
    .catch((err) => {
      console.log(err);
      res.send('Sorry Something went wrong!');
    });
});

module.exports = router;
