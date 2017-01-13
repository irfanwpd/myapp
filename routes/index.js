var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Taaj Services' });
});

router.get('/', function(req, res, next) {
  res.render('usermanage', { title: 'User Management' });
});
module.exports = router;