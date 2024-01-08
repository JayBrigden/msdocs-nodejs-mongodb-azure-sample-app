var express = require('express');
var Patient = require('../models/Patient');

var router = express.Router();

router.get('/', function(req, res) {
  res.send('hello world');
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

module.exports = router;
