var mongoose = require('mongoose');


var userSchema = new mongoose.Schema({
    name: {type: String},
    email: {type: String},
    password: {type: String},
    orders: [{ id: Number, name: String, date: Date, price: Number }]
}, {collection: 'user'})

mongoose.model('user', userSchema)
