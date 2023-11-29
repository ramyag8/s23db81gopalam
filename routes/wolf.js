var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('wolf', { title: 'Search Results wolf' });
});
var express = require('express');
const wolf_controllers= require('../controllers/wolf');
var router = express.Router();

// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
res.redirect("/login");
}

/* GET wolfs */
router.get('/', wolf_controllers.wolf_view_all_Page );
router.get('/detail', wolf_controllers.wolf_view_one_Page);
router.get('/create', wolf_controllers.wolf_create_Page);
router.get('/update',secured, wolf_controllers.wolf_update_Page);
router.get('/delete', wolf_controllers.wolf_delete_Page);
module.exports = router;