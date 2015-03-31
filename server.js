// Bring in Express router ...
var express = require('express');

// Create app by running Express ...
var app = express();

var html = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Express Router Calculator</title></head><body><h1>Welcome to the Express Route-Based Calculator</h1><h3>Addition: x + y</h3><p>/add/x/y</p><h3>Subtraction: x - y</h3><p>/subtract/x/y</p><h3>Multiplication: x * y</h3><p>/multiply/x/y</p><h3>Division: x / y</h3><p>/divide/x/y</p></body></html>';

// Create Express root route with calculator directions
app.get('/', function(req, res) {
  res.send(html);
});

var calculate = 0;
var x = 0;
var y = 0;

// Addition
app.get('/add/:x/:y', function(req, res) {
  x = parseInt(req.params.x, 10);
  y = parseInt(req.params.y, 10);
  calculate = x + y;
  res.send("<h1>" + x + " + " + y + " = " + calculate + "</h1>");
});

// Subtraction
app.get('/subtract/:x/:y', function(req, res) {
  x = parseInt(req.params.x, 10);
  y = parseInt(req.params.y, 10);
  calculate = x - y;
  res.send("<h1>" + x + " - " + y + " = " + calculate + "</h1>");
});

// Multiplication
app.get('/multiply/:x/:y', function(req, res) {
  x = parseInt(req.params.x, 10);
  y = parseInt(req.params.y, 10);
  calculate = x * y;
  res.send("<h1>" + x + " * " + y + " = " + calculate + "</h1>");  
});

// Division
app.get('/divide/:x/:y', function(req, res) {
  x = parseInt(req.params.x, 10);
  y = parseInt(req.params.y, 10);  
  calculate = x / y;
  res.send("<h1>" + x + " / " + y + " = " + calculate + "</h1>");  
});

// To run, access http://localhost:3000/
app.listen(3000);
console.log("To access the Express calculator, point your browser to http://localhost:3000/");