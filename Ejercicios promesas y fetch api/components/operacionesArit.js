export const pintarOperacion =  (component) =>{
    const newHijo = document.createElement("span")
    component.appendChild(newHijo)
    operaciones(4,2,"dividir").then((dato) =>{
        newHijo.innerHTML+=dato
    }).catch(err => {
        newHijo.innerHTML+=err
    })
    
}

function operaciones(n1,n2,cadena) {
    return new Promise((resolve,reject) =>{
        let cadeLcas = cadena.toLowerCase()
        let result = 0;

        const operaciones = ["sumar","restar","multiplicar","dividir"]

        if (operaciones.indexOf(cadeLcas) == -1) {
            reject(new Error("Esta operacion no es valida"))
        }else if (operaciones.indexOf(cadeLcas) == 0) {
            result = n1+n2;
            resolve(result)
        }else if (operaciones.indexOf(cadeLcas) == 1) {
            result = n1-n2;
            resolve(result) 
        }else if (operaciones.indexOf(cadeLcas) == 2) {
            result = n1*n2;
            resolve(result) 
        }else if (operaciones.indexOf(cadeLcas) == 3) {
            if (n1 <= 0 || n2 <= 0) {
                reject(new Error("No se puede dividir"))
            }else{
            result = n1/n2;
            resolve(result) 
            }
        }
    })
}