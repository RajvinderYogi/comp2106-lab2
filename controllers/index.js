let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Family', message:'This is my family website. Please click the above navigation bar to see the different members of my family' });
});

router.get('/joginder', function(req, res, next) {
    res.render('joginder', { title: 'Joginder Singh Yogi', message:'Joginder Yogi is my father. He is a real estate agent in back home. He is positive and hard working man.' });
});

router.get('/kanwaljeet', function(req, res, next) {
    res.render('kanwaljeet', { title: 'Kanwaljeet Kaur Yogi', message:'Kanwaljeet Yogi Is my mother. She is a housewife. She cooks delicious food.' });
});

router.get('/samandeep', function(req, res, next) {
    res.render('samandeep', { title: 'Samandeep Kaur Buttar', message:'Samandeep Buttar is my elder sister. She works in Alberta Health Services. She is married to Gurpreet Buttar.' });
});

router.get('/rajvinder', function(req, res, next) {
    res.render('rajvinder', { title: 'Rajvinder Singh Yogi', message:'My name is Rajvinder Yogi. I study in georgian college, Barrie. I am taking Interactive Media Design - Web.' });
});

module.exports = router;
