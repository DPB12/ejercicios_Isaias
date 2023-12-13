import { getPokemon } from "../helpers/getPokemon";

export async function createCardPokemons(element, pokemons) {
    let contenido = "";

    pokemons.forEach( async poke => {
        let pokemon= await getPokemon(poke.url);


        if (pokemon != null){

                let tipoPo = "";
                let cont = 1
                for (const tipo of pokemon.types) {
                    if (cont>1) {
                        tipoPo += `,${tipo.type.name}`;
                    }else{
                        tipoPo += `${tipo.type.name}`;
                        cont++;
                    }
                }
    
                let movimientos = "";
                for (const movim of pokemon.abilities) {
                        movimientos += `<li>${movim.ability.name}</li>`;
                    }
    
    
                contenido += `
                <div class="card card-pokemon card-fire m-lg-2 p-2" style="width: 25rem; height: 25rem; ">
                <div class="row">
                <img src="${pokemon.sprites.front_default}" class="col-xs-12 d-flex justify-content-center" alt="Pokecard Image" width = "100px" height= "150px">            
                </div>
                <div class="card-block">
                    <h4 class="card-title"><strong>${pokemon.name}</strong>  <small>${tipoPo} Pokemon. Length ${pokemon.height}meter, Weight: ${pokemon.weight} lbs.</small></h4>
                    <p class="card-text"><strong>Pokemon Power:</strong> <ul>${movimientos}</ul></p>
                </div>
              </div>`;
                }else{
                console.log("No se pudo obtener el Pokémon");
            }

            element.innerHTML = contenido;
    });

}
