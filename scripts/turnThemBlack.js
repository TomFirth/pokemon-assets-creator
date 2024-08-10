const sharp = require("sharp");
const config = require("../config");
const functions = require("./functions.js");

blacken = async (number) => {
  await sharp(`./images/raw/${number}.png`)
  .modulate({
    brightness: 0,
    lightness: 0,
    saturation: 0
  })
  .toFile(`./images/raw_black/${number}.png`)
}

for (let i = 1; i <= config.numberOfPokemon; i++) {
  let number = functions.pad(i)
  blacken(number)
}