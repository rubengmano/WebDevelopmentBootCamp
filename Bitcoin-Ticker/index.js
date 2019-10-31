// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const request = require('request');

const port = 3000;

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));

app.post("/", (req, res) => {
  var cryp = req.body.crypto;
  var fiat = req.body.fiat;
  var amount = req.body.amount;
  // var url = "https://apiv2.bitcoinaverage.com/indices/global/ticker/" + cryp + fiat;

  var options = {
    url: "https://apiv2.bitcoinaverage.com/convert/global",
    method: "GET",
    qs: {
      // keywords from bitcoin server api
      from: cryp,
      to: fiat,
      amount: amount
    }
  };

  request(options , (error, response, body) => {
    var data = JSON.parse(body);
    var price = data.price;
    var currentData = data.time;
    res.write(`<p>The current data is: ${currentData}</p>`);
    res.write(`<h1> ${amount} ${cryp} is ${price} ${fiat}.</h1>`);
    res.send();
  });
});

app.listen(port, () => console.log(`Server is listening on port ${port}`));
