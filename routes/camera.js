var express = require('express');
var router = express.Router();
var _ = require('lodash');

router.get('/light/command', function(req, res, next) {
  console.log('Light Command ');

  var respobj = {
    command: 'nothing'
  };
  if (global.light && global.light.command && global.light.command != 'nothing') {
    console.log(global.light.command != 'nothing');
    var status = global.light.command;
    respobj.command = status;
  }
  console.log('Light command', respobj.command);
  return res.json(respobj);
});

router.post('/:sensor', function(req, res, next) {
  var sensor = req.params.sensor;
  console.log('Sensor ', sensor);
  var body = req.body;
  console.log('Body', body);

  var respobj = {
    response: 'Bad data'
  };
  if (body && !_.isUndefined(body.enabled)) {
    var enabled = false;
    if (body.enabled == 'true') {
      console.log('here', body.enabled);
      enabled = true;
    }
    //Store the sensor. Globals are bad!!!
    if (!global[sensor]) {
      global[sensor] = {};
    }
    global[sensor].status = enabled;
    console.log('The ' + sensor + ' was ' + global[sensor].status);
    var status = (enabled) ? 'enabled' : 'disabled';
    respobj.response = 'The ' + sensor + ' is ' + status;
    console.log('The ' + sensor + ' is ' + status);
  }
  return res.json(respobj);
});

module.exports = router;
