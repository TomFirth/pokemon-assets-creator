const images = require("images");
const config = require("../config");
const functions = require("./functions.js");

const array = [
  "questions",
  "answers"
]

array.forEach(value => {
  for (let i = 1; i <= config.numberOfPokemon; i++) {
    let number = functions.pad(i);
    let raw = "";
    if (value == "questions") raw = "raw_black";
    images("./images/background.png")
    .size(400)
    .draw(images(`./images/${raw}/${number}.png`), 10, 10)
    .save(`./images/${value}/${number}.jpg`, {
        quality : 80
    });
  }
});