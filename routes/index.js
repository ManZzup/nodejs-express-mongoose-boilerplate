var express = require('express'),
    router = express.Router(),
    indexController = require('../controllers/indexController');


/* GET home page. */
router.get('/', indexController.showPosts);

module.exports = router;
