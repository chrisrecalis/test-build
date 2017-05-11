var sum = require('sum')
var express = require('express')
var app = express()

var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/add', function (req, res) {

	var num1 = parseInt(req.query.num1) || 0
	var num2 = parseInt(req.query.num2) || 0
	
	console.log("Summing up: " + num1 + " and " + num2)
	res.end("The sum is: " + sum(num1, num2) + "\n")

})

app.listen(3000, function () {
	console.log('Example app listening on port 3000!')
})