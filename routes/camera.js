var express = require('express');
var router = express.Router();
var _ = require('lodash');

router.post('/:sensor', function(req, res, next) {
  var sensor = req.params.sensor;
  console.log('Sensor used', sensor);
  var body = req.body;

  var respobj = {
    response: 'Bad data'
  };
  if (body && !_.isUndefined(body.enabled)) {
    var status = (body.enabled) ? 'enabled' : 'disabled';
    respobj.response = 'The ' + sensor + ' is ' + status;
  } else {

  }
  return res.json(respobj);
});

module.exports = router;
