export async function getCheckou(url,callback) {
    const response = await fetch(url)
    if (response.ok) {
        const data = await response.json();
        if (!callback) {
            return data;
        }else{
            callback(data);
        }
    }else{
        throw new Error('Server responded with a status of ' + response.status);
    }
}