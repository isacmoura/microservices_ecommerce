var mongoose = require('mongoose')

var productSchema = new mongoose.Schema({
    name: {type: String},
    price: {type: Number},
    stock: {type: String}
}, {collection: 'product'})

mongoose.model('product', productSchema)