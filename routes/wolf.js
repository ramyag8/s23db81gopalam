
var express = require('express');
const wolf_controllers= require('../controllers/wolf');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('wolf', { title: 'Search Results wolf' });
});

/* GET wolfs */
router.get('/', wolf_controllers.wolf_view_all_Page );


// GET request for one costume.
router.get('/wolf/:id', wolf_controllers.wolf_detail);

module.exports = router;