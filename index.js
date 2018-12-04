var express = require('express')
var bodyParser = require('body-parser')
var request = require('request')
var mongoose = require('mongoose')



var connectionString = 'mongodb://localhost/shop'

var app = express()

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }))


app.use(express.static('public'))

mongoose.connect(connectionString, {useNewUrlParser: true}, function (err, res) {
    if (err) {
        console.log ('ERROR connecting to: ' + connectionString + '. ' + err);
    } else {
        console.log ('Succeeded connected to: ' + connectionString);
    }
});
require('./app/user/models/models')
require('./app/product/models/models')

var user = mongoose.model('user')
var product = mongoose.model('product')

app.get('/', function(req, res) {
    console.log(`${req.ip} requested index page`)

    res.sendFile(__dirname + '/public/index.html')
})

app.get('/users/:id', function (req, response) {
    var query = user.find({ _id: req.params.id }).exec(
        function (err, res) {
            if (!err) {
                response.render('users', {
                    profile: res
                })
            } else {
                response.send('Error in second query. ' + err)
            }
            console.log(res)
        })
})

app.post('/update', function(req, res) {
    axios.put('')
})

app.get('/orders', function (req, res) {

})


app.listen(5002, function() {
    console.log('Running on the port 5002')
})
