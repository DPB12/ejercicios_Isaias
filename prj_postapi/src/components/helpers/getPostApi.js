export function getPostApi(url, callback) {
fetch(url)
.then( (response) => {
    if (response.ok){
        return response.json();
    }else{
        throw new Error("HTTP error " + response.status);
    }
})
.then((data) => callback(data))
.catch((err) => {
  throw new Error("Error al obtenerlo")
});
}