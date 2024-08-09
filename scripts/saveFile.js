// this script downloads and saves the raw Pokemon images (1 - 151 generation 1)
// change the number on line #21 to download and save more Pokemon

const fs = require("node:fs")
const https = require("https")

function saveToDisk (url, path) {
  let fullUrl = url
  let localPath = fs.createWriteStream(path)
  https.get(fullUrl, (response) => {
    response.pipe(localPath)
  })
}

function pad (n) { // for this website, the images are three digits in length (e.g. 001.png) this adds the zeroes.
  var len = 3 - (''  +n).length
  return (len > 0 ? new Array(++len).join('0') : '') + n
}

let numberOfPokemon = 1025
numberOfPokemon++ // number has to be 1 higher than needed.

for (let i = 1; i < numberOfPokemon; i++) {
  let number = pad(i)
  saveToDisk(`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${number}.png`, "../raw/" + `${number}` + ".png")
}