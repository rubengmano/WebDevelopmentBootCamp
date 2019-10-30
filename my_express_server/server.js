// jshint esversion:6

// // require http module
// var http = require('http');
//
// // create a server object
// http.createServer(function (req, res) {
//   // write a response to the client
//   res.write("Hello World!");
//   // end the response
//   res.end();
//   // the server listens on port 8080
// }).listen(8080);

// require the framework express
const express = require("express");
// app is a function that represents the framework module
const app = express();
// Define a variable for a port
const port = 3000;

// first parameter gets the location of the get request
// when the get request happens we can trigger a callback function
// the callback function has two parameters, request and response
app.get("/", (req, res) => res.send("<h1>Hello</h1>"));

// adding a different route
app.get("/contact", (req, res) => res.send("Contact me!"));

app.get("/about", (req, res) => res.send("I'm Ruben, a volunteer!"));

// Start the server to listen on the specified port and print it
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
