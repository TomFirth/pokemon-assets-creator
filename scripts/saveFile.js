const fs = require("node:fs");
const https = require("https");
const config = require("../config.json");
const functions = require("./functions.js");

const saveToDisk = (url, path) => {
  if (fs.existsSync(path)) {
    console.log(`File already exists at ${path}, skipping download.`);
    return;
  }

  const localPath = fs.createWriteStream(path);
  https.get(url, (response) => {
    response.pipe(localPath);
    console.log(`Downloaded and saved to ${path}`);
  }).on('error', (error) => {
    console.error(`Error downloading ${url}: ${error.message}`);
  });
}

for (let i = 1; i <= config.numberOfPokemon; i++) {
  try {
    let number = functions.pad(i);
    saveToDisk(`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${number}.png`, `./images/raw/${number}.png`);
  } catch (error) {
    console.error(error);
  }
}
