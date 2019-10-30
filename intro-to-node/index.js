// jshint esversion:6
const fs = require("fs");
fs.copyFileSync("file1.txt", "file.txt");

const superheroes = require("superheroes");
console.log(superheroes.random());
