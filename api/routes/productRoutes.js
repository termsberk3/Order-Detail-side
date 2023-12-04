'use strict';
module.exports = function(app) {
    var productHandlers = require('../controllers/productController.js');
    // todoList Routes
    app.route('/product')
    .get(productHandlers.getProduct);

};