var express = require('express')
var bodyParser = require('body-parser')
var axios = require('axios')

var app = express()

app.use(express.static('public'))

app.get('/', function(req, res) {
    console.log(`${req.ip} requested index interface`)

    res.sendFile(__dirname + '/public/index.html')
})

app.listen(5002, function() {
    console.log('Running on the port 5002')
})
