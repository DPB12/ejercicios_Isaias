export async function findPokemonApi(url,elem,callback) {
    const response = await fetch(url);
    const newData = [];
    if (response.ok){
        const data = await response.json();
        data.forEach(pokemon => {
            if (pokemon.name.indexOf(elem) != -1) {
                newData.push(pokemon);
            }
        });

    if (newData.length == 0) {
        callback(data);
    }else{
        console.log(newData);
        callback(newData);
        }
    }
}