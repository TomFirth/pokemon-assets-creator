const images = require("images");
const config = require("../config");
const functions = require("./functions.js");

const array = [
  "questions",
  "answers"
];
let raw = "raw";

array.forEach(value => {
  for (let i = 1; i <= config.numberOfPokemon; i++) {
    let number = functions.pad(i);
    if (value == "questions") raw = "raw_black";
    images("./images/wtp/background.png")
      .size(400)
      .draw(images(`./images/wtp/${raw}/${number}.png`), 10, 10)
      .save(`./images/wtp/${value}/${number}.jpg`, {
        quality : 80
      });
  }
});