/**
 * @description Funcion que devuelve un objeto json con los 
 * nombres(name) y urls(url) de los pokemons.
 * @param {URL} url 
 * @returns data archiveJSON
 */
export async function pokemonsFromJsonServer(url) {
    try {
        const response = await fetch(url,{
            method: 'GET',
            headers:{
                "Content-Type": "application/json"
            }
        })
        if (response.ok) {
            const data = await response.json();
            return data;
        }
    } catch (error) {
        console.log('Error:', error);
    }
}