export function createPostApi(url,postData,callback){
    fetch(url,{
        method:"POST",
        headers:{
          'Content-Type': 'application/json'
          },
          body: JSON.stringify(postData)
      })
      .then(response => {
        if (response.ok) {
            return response.json()
        }else{
            throw new Error("Error");
        }
      })
      .then(data => {
        callback(data)
      })
      .catch(err =>{
        throw new Error("Error al obtenerlo")
      })
}