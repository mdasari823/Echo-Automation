var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  console.log('Received Alexa Message');
  console.log(req.body.request.intent.slots.NAME.value);

  var resp = {
    "version": "1.0",
    "sessionAttributes": {},
    "response": {
      "outputSpeech": {
        "type": "PlainText",
        "text": "I found " + req.body.request.intent.slots.NAME.value
      },
      "card": {
        "type": "Simple",
        "title": "Friend Finder",
        "content": "Found you!"
      },
      "reprompt": {
        "outputSpeech": {
          "type": "PlainText",
          "text": "Can I find someone else for you?"
        }
      },
      "shouldEndSession": false
    }
  };
  return res.send(resp);
});

module.exports = router;
