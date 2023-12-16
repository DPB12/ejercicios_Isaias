export async function saveCheckout(urlCheckin,urlCheckout,callback) {
    const response = await fetch(urlCheckin);
    if (response.ok) {
        const data = await response.json();
        let checoutkObj = {
            nombre: data.nombre,
            email: data.email,
            numero_habitacion: data.numero_habitacion,
            numero_personas: data.numero_personas,
            fecha_entrada: data.fecha_entrada,
            fecha_salida: data.fecha_salida,
            precio_facturado: data.precio_facturado
        }
        const response2 = await fetch(urlCheckout,{
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
                },
                body: JSON.stringify(checoutkObj)
        })
        if (response2.ok) {
            const response = await fetch(urlCheckin,{
                method:'DELETE',
                headers: {"Content-Type": "application/json"}
            });

            callback()
            console.log("todo correcto");
        }
    }else{
        console.log('Algo salió mal');
    }
}