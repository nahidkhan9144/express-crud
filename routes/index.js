var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express we' });
});
router.get('/top', function(req, res, next) {
  res.render('../components/top', { title: 'Express we' });
});

module.exports = router;
