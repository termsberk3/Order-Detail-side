'use strict';
var mongoose = require('mongoose'),
Product = mongoose.model('Product');



exports.getProduct = function(req, res) {
        var products = Product(req.body);
        products.find().then(function(product) {
            return res.json(product);
        }).catch(function(err) {   
        return res.status(400).send({
          message: console.log(err)
        });
    });
}