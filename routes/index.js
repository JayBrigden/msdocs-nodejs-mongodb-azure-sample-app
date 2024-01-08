var express = require('express');
var Patient = require('../models/Patient');

var router = express.Router();

router.get('/', function(req, res, next) {
  Promise.all(Patient.find())
    .then((patients) => {

      res.render('index', { PatientRecords: patients });
    })
    .catch((err) => {
      console.log(err);
      res.send('Sorry Something went wrong!');
    });
});

module.exports = router;
