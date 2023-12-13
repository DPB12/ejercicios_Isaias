// Imports
import './style.css';
const url_pokemons = `${import.meta.env.VITE_API}/results`
import { pokemonsFromJsonServer } from './src/helpers/pokemonsFromJsonServer';
import { createCardPokemons } from './src/componets/createCardPokemons';
import { findPokemonApi } from './src/helpers/findPokemonApi';

// Variables globales
const pokemons = await pokemonsFromJsonServer(url_pokemons);


// Coger los elemntos del DOM que vamos a usar.
const pokeContainer = document.querySelector(".poke-list");
const buscador = document.querySelector(".search_input");

buscador.addEventListener("keyup", () => {
findPokemonApi(url_pokemons,buscador.value.toLowerCase(),(data) => {
createCardPokemons(pokeContainer,data);
})
});

// Esto lo he tenido que hacer porque el DOMContentLoaded no me iba
// <------- COMENTADO ABAJO -----> 
let cont = 0;
if (cont == 0) {
    createCardPokemons(pokeContainer,pokemons);
    cont++
}

// function init() {
//     createCardPokemons(pokeContainer,pokemons);
//   }
//   // Inicio de la aplicacion
//   document.addEventListener("DOMContentLoaded", init)