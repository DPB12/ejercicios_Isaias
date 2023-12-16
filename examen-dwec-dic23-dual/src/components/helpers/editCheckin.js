export async function editCheckin(urlCheckin,datos,callback) {
    const response = await fetch(urlCheckin,{
        method: 'PATCH',
        headers:{
           "Content-Type": "application/json" 
        },
        body: JSON.stringify(datos)
    });

    if (response.ok) {
        callback()
        alert("Reserva editada");
    }

}