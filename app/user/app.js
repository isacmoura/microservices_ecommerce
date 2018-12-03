var mongoose = require('mongoose');

var connectionString = 'mongodb://localhost/users';

mongoose.connect(connectionString, {useNewUrlParser: true}, function (err, res) {
    if (err) {
        console.log ('ERROR connecting to: ' + connectionString + '. ' + err);
    } else {
        console.log ('Succeeded connected to: ' + connectionString);
    }
});