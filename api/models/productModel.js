const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
var assert = require('assert');
mongoose.set('debug', true);

const productSchema = mongoose.Schema(
    {
        orderno: {
            type: String,
            default: () => uuidv4(), 
          },
        price:{
            type : Number
        },
        product:{
            type : String
        },
        amount: {
            type : Number
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    },
    {
        timestamps : true
    }
)

const Order = mongoose.model('Product', productSchema);

module.exports = Order;