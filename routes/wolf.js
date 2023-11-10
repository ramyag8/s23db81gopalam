var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('wolf', { title: 'Search Results wolf' });
});
var express = require('express');
const wolf_controlers= require('../controllers/wolf');
var router = express.Router();
/* GET wolfs */
router.get('/', wolf_controlers.wolf_view_all_Page );
module.exports = router;