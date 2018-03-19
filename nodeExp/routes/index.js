var express = require('express');
var router = express.Router();
var exchangeRates = require('../model/currencyDB');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
    res.render('about', { title: 'About this site' });
});

/* GET convert page. */
router.get('/convert', function(req, res, next) {

    var dollars = req.query.dollars;
    var toCurrency = req.query.to_currency;

    var converted = dollars * exchangeRates[toCurrency];

    //res.send(dollars + ' in ' + toCurrency + ' is ' + converted);

    res.render('result',{
        dollars:dollars,
        toCurrency: toCurrency,
        converted: converted}
        );
});

module.exports = router;
