var express = require('express')
var bodyParser = require('body-parser')
var axios = require('axios')
var mongoose = require('mongoose');
var JSON = require('circular-json')


var connectionString = 'mongodb://localhost/shop';

var app = express()

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static('public'))

mongoose.connect(connectionString, {useNewUrlParser: true}, function (err, res) {
    if (err) {
        console.log ('ERROR connecting to: ' + connectionString + '. ' + err);
    } else {
        console.log ('Succeeded connected to: ' + connectionString);
    }
});
require('./app/user/models/models')


var user = mongoose.model('user')

app.get('/', function(req, res) {
    console.log(`${req.ip} requested index page`)

    res.sendFile(__dirname + '/public/index.html')
})

app.get('/users/:id', function(req, res) {
    var query = user.find({_id: req.params.id}, function(err, res) {
        if(!err) {
            console.log(res)
        } else {
            res.send('Error in second query. ' + err)
        }
    })    
})

app.get('/orders', function (req, res) {

})


app.listen(5002, function() {
    console.log('Running on the port 5002')
})
