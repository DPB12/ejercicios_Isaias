export const llamadaAsync =  (component) =>{
    paso1(component)
    .then(data => console.log(data))
    .catch(err => console.log(err));
    paso2()
    .then(data => console.log(data))
    .catch(err => console.log(err))
    paso3()
    .then(data => console.log(data))
    .catch(err => console.log(err))

    
}

function paso1(component) {
    let elem = document.createElement("spam");
    elem.className ="s"
    return new Promise((resolve, reject) => {
           setTimeout(() => {
            elem.style.width = "auto";
            elem.style.height = "auto";
            elem.style.display= "block"
            component.appendChild(elem);
            resolve("Hecho Paso 1")
           }, 1000); 
    })
}

function paso2() {
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                let selectEl = document.querySelector(".s")
                selectEl.style.color = "red";
                resolve("Hecho Paso 2")
               }, 2000); 
    })
}

function paso3() {
    
    return new Promise((resolve, reject) => {
            setTimeout(() => {
                let selectEl = document.querySelector(".s")
                selectEl.textContent = "HOLA MUNDO!!";
                resolve("Hecho Paso 2")
               }, 3000); 

    })
}