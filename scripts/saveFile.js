const fs = require("node:fs");
const https = require("https");
const config = require("../config");
const functions = require("./functions.js");

saveToDisk = (url, path) => {
  let fullUrl = url;
  let localPath = fs.createWriteStream(path);
  https.get(fullUrl, (response) => {
    response.pipe(localPath);
  })
}

for (let i = 1; i <= config.numberOfPokemon; i++) {
  let number = functions.pad(i);
  saveToDisk(`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${number}.png`, `./images/raw/${number}.png`);
  console.log(`${number} downloaded.`);
}