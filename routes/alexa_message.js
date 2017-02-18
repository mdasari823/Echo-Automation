var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  console.log('Alexa Message');
  console.log(req.body.request.intent);
});

module.exports = router;
