export const updatePostApi = (url,postId,postData,callback) => {
    fetch(`${url}/${postId}`,{
        method: 'PATCH',
        headers:{
            "Content-Type":'application/json;charset=utf-8'
        },
        body: JSON.stringify(postData),
    })
    .then((response) => {
        if (response.ok) {
            return response.json();
        }else{
            throw new Error('No se ha podido acceder a la base de datos');
        }
    })
    .then((data) => callback(data))
    .catch((error)=> console.log(error));

}