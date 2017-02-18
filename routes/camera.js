var express = require('express');
var router = express.Router();
var _ = require('lodash');

router.get('/:sensor', function(req, res, next) {
  var sensor = req.params.sensor;
  console.log('Sensor ', sensor);

  var respobj = {
    response: 'No data for ' + sensor
  };
  if (global[sensor] && !_.isUndefined(global[sensor].enabled)) {
    var enabled = global[sensor].enabled;
    var status = (enabled) ? 'enabled' : 'disabled';
    respobj.response = 'The ' + sensor + ' is ' + status;
  }
  return res.json(respobj);
});

router.post('/:sensor', function(req, res, next) {
  var sensor = req.params.sensor;
  console.log('Sensor ', sensor);
  var body = req.body;

  var respobj = {
    response: 'Bad data'
  };
  if (body && !_.isUndefined(body.enabled)) {
    var enabled = false;
    if (body.enabled) {
      enabled = true;
    }
    //Store the sensor. Globals are bad!!!
    if (!global[sensor]) {
      global[sensor] = {};
    }
    global[sensor].enabled = enabled;
    var status = (enabled) ? 'enabled' : 'disabled';
    respobj.response = 'The ' + sensor + ' was set to ' + status;
  }
  return res.json(respobj);
});

module.exports = router;
