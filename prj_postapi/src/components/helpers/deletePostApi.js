export function deletePostApi(url,postId,callback) {
    fetch(`${url}/${postId}`, {
        method: 'DELETE',
        headers:{
            "Content-Type":'application/json;charset=utf-8'
        },
    })
    .then((response) => {
        if (response.ok){
            callback()
        }else{
            throw new Error('ERROR');
        }
    })
    .catch((error)=>{
        console.log("Error", error);
        });

}