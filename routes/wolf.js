var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('wolf', { title: 'search results Ramya Gopalam' });
});

module.exports = router;
