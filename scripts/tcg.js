const images = require("images");
const config = require("../config");
const functions = require("./functions.js");

for (let i = 1; i <= config.numberOfPokemon; i++) {
  let number = functions.pad(i);
  images("./images/tcg.png")
    .size(400)
    .draw(images(`./images/${raw}/${number}.png`), 10, 10)
    .save(`./images/${value}/${number}.jpg`, {
      quality : 80
    });
}

// get data: https://pokeapi.co/api/v2/pokemon/1
// get default card background
// get type and add secondary background
// add stats
// create ScriptableObject


// function fetchPokemonData(pokemon) {
//   let url = pokemon.url // <--- this is saving the pokemon url to a      variable to us in a fetch.(Ex: https://pokeapi.co/api/v2/pokemon/1/)
//   fetch(url)
//     .then(response => response.json())
//     .then(function(pokeData) {
//       console.log(pokeData)
//   })
// }