var mongoose = require('mongoose');


var userSchema = new mongoose.Schema({
    name: {type: String},
    email: {type: String},
    password: {type: String}
}, {collection: 'user'})

mongoose.model('user', userSchema)
