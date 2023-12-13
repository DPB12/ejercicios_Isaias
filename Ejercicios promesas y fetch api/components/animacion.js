export const pintarAnimacion =  (component,duracion) =>{
    let interv = ""
    animacion(component,5000)
    .then(data => {
       console.log(data)
    })
    .catch( err => {
        console.log(err)
    })
}

function animacion(component , duracion) {

    let interv = "";


    let element = document.createElement("h1");
    element.textContent = "Animacion de desvanecer";
    element.className ="h";
    component.appendChild(element);

        let elem = document.querySelector(".h")
        elem.style.opacity = 1;

    return new Promise((resolve,reject) =>{

        interv = setInterval( ()=>{
            elem.style.opacity -= 0.05;
        },300) 
        
       
        setTimeout(() => {
            clearInterval(interv);
            elem.style.opacity = 1;
            resolve("se ha ejecutado correctamente") 
        },duracion)


    

    })
}