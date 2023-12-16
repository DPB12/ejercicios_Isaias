export async function getFoodsApi(url,callback) {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        if (callback) {
            callback(data)
        }else{
            return data;
        }
    }else{
        console.log("ERROR: " + response.statusText);
    }
}