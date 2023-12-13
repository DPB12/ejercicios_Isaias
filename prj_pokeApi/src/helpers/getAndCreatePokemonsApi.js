// --------- IMPORTS --------- //

// Comand: npm install node-fetch
// Para usar fetch como un servidor ya que fs/promises solo se pueder  
// usar en modo servidor.
// ------- package.json:     "fetch-and-save": "node rutaDondeEstéEsteDocumento", ------ //
import fetch from 'node-fetch';
// Comand: npm install fs.promises
// Importa fs que tiene que funcionar como servidor entoces hay que 
// instalarla con el comando de arriba y configurar el package.json.
import fs from "fs/promises";

// Variable global que guarda la ubicaccion de archivo que guarda
// el JSON("db.json") y se usa como server.
const path = "./server/db.json"

/**
 * @description Funcion que actualiza el db.json con el result que guarda 
 * los nombres("name") y urls("url") de los pokemons.
 */
async function getAndCreatePokemonsApi() {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/")
        if (response.ok) {
            const data = await response.json();
            const {count , next , previous , results } = data;
            await fs.writeFile(path,JSON.stringify({results}),null,2)
        }
    } catch (error) {
        throw new Error(`El error es: ${error}`)
    }
}
getAndCreatePokemonsApi();