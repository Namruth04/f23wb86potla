var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('cats', { title: 'Search Results cats' });
});

module.exports = router;