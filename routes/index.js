var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'Express' });
});

module.exports = router;

router.get('/index_1', function(req, res) {
    res.render('index_1', { title: 'Hello, World!' });
});