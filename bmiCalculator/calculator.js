// jshint esversion:6

// require the framework express
const express = require("express");
// require body parser
const bodyParser = require("body-parser");
// app is a function that represents the framework module
const app = express();
// body parser has a few modes: text, json, urlencoded
// urlencoded is to parse data from a form
// extended option allows to post nested objects
app.use(bodyParser.urlencoded({extended: true}));
// Define a variable for a port
const port = 8080;

// first parameter gets the location of the get request
// when the get request happens we can trigger a callback function
// the callback function has two parameters, request and response
// res.send -> individual bits of html
// __dirname gives the file path of the current file no matter where is hosted
app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));

app.post("/", (req, res) => {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var sum =  num1 + num2;
  res.send(`The sum of ${num1} + ${num2} = ${sum}`);}
);

app.get("/bmicalculator", (req, res) => res.sendFile(__dirname + "/bmicalculator.html"));

app.post("/bmicalculator", (req, res) => {
  var height = Number(req.body.height);
  var weight = Number(req.body.weight);
  var sum =  weight / (height * height);
  res.send(`Your Body Mass Index is ${sum}`);}
);

// Start the server to listen on the specified port and print it
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
