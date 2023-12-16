export async function getRooms(url) {
    const response = await fetch(url)
    if (response.ok) {
        const data = await response.json();
        return data;
    }else{
        throw new Error('Server responded with a status of ' + response.status);
    }
}