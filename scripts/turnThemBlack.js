const sharp = require("sharp")

function pad (n) {
  var len = 3 - (''  +n).length
  return (len > 0 ? new Array(++len).join('0') : '') + n
}

async function createGuess(number) {
  await sharp(`./images/raw/${number}.png`)
  .modulate({
    brightness: 0,
    lightness: 0,
    saturation: 0
  })
  .toFile(`./images/raw_black/${number}.png`)
}

let numberOfPokemon = 151
numberOfPokemon++ // number has to be 1 higher than needed.

for (let i = 1; i < numberOfPokemon; i++) {
  let number = pad(i)
  createGuess(number)
}