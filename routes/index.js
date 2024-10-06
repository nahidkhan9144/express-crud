var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express we' });
});
router.get('/topF', function(req, res, next) {
  res.render('components/topFile', { title: 'Top File' });
});

module.exports = router;
