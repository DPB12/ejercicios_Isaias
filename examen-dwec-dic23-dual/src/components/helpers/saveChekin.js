export async function saveChekin(url,datos,callback) {
    const response = await fetch(url,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
            },
        body: JSON.stringify(datos)
    })

    if (response.ok) {
        callback()
        alert("Se ha confirmado su reserva")
    }else{
        console.log('Algo salió mal')
    }
    
}