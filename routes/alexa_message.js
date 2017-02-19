var express = require('express');
var router = express.Router();
var _ = require('lodash');

/* GET home page. */
router.post('/', function(req, res, next) {
  console.log('Received Alexa Message');

  var errorobj = {
    status: 'error'
  };
  if (!req.body.request || !req.body.request.intent || !req.body.request.intent) {
    console.log('Variable not defined', req.body.request);
    return res.json(errorobj);
  }

  var resp = {
    "version": "1.0",
    "sessionAttributes": {},
    "response": {
      "outputSpeech": {
        "type": "PlainText",
        "text": "Ask again"
      },
      "card": {
        "type": "Simple",
        "title": "Cerebro Control",
        "content": "The light status"
      },
      "reprompt": {
        "outputSpeech": {
          "type": "PlainText",
          "text": "Can I do something else for you?"
        }
      },
      "shouldEndSession": true
    }
  };
  switch (req.body.request.intent.name) {
    case 'LightIntent_READ':
      console.log('LightIntent_READ');
      console.log('slot', req.body.request.intent.slots.ENABLED);
      resp.response.outputSpeech.text = 'I think the lights are off.';
      if (!_.isUndefined(global.light)) {
        console.log('Here');
        resp.response.outputSpeech.text = (global.light.status) ? 'It\'s bright in here': 'I\m in the dark';
      }
      break;
    case 'LightIntent_WRITE':
      console.log('Write');
      if (!global.light) {
        global.light = {};
      }
      var command = req.body.request.intent.slots.ENABLED;
      console.log('Command', command.value);
      global.light.command = command.value;
      resp.response.outputSpeech.text = 'I turned ' + command.value + ' the light.';
      break;
    case 'MotionIntent': //Could only read
      console.log('Motion');
      resp.response.outputSpeech.text = 'I don\'t know if there\'s anyone at home.';
      if (!_.isUndefined(global.motion)) {
        console.log('Here');
        resp.response.outputSpeech.text = (global.motion.status) ? 'There\'s a monster in the closet': 'I am all by myself';
      }
      break;
    default:
      console.log('Default');
      break;
  }
  console.log(resp.response.outputSpeech.text);

  console.log(resp);
  return res.json(resp);
});

module.exports = router;
