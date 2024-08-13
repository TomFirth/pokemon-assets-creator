const axios = require("axios");
const config = require("../config.json");

for (let i = 1; i <= config.numberOfPokemon; i++) {
  axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
    .then(response => {
      const data = response.data;

      console.log("Name:", data.name);
      console.log("Number:", data.order);
      console.log("Move:", data.abilities[0].ability.name);
      data.types.forEach((value, index) => {
        console.log("Type:", index, value.type.name);
      })
      data.stats.forEach(value => {
        console.log(value.stat.name, value.base_stat);
      })
    })
    .catch(error => {
      console.error(error);
    })
    .finally(() => {
      // always executed
    });
}

/* {
    name: data.name;
    number: data.order

    moveName: data.abilities[0].ability.name

    type: data.types[0].type.name

    health: "(value) data.stats[0].base_stat (name) data.stats[0].stat.name"
    attack: 
    defence: 
    speed: 
    spAtk: 
    spDef: 

    "hp"
    "attack"
    "defense"
    "special-attack"
    "special-defense"
    "speed"
} */