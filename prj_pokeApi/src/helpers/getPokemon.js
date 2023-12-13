/**
 * @description Funcion a la que se le pasa una url y una id para 
 * buscar cada pokemon por id.
 * @param {URL} url 
 * @returns data archiveJSON
 */
export async function getPokemon(url) {
    const response = await fetch(url,{
        method: 'GET',
        headers:{
            "Content-Type": "application/json"
            }
    });
    if (response.ok) {
        const data = await response.json();
        return data;
    }else{
        throw new Error('Error: ' + response.statusText);
    }
}