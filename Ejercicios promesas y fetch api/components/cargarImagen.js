export const pintarImg = async (component) =>{
    let img = await cargarImgAsyn();
    component.innerHTML += '<h2>LOADING...</h2>'
    setTimeout(() => {
        component.innerHTML = `<img src="${img.src}" alt="imagen" width="220px" height="230px">`;        
    }, 2000);
}

async function cargarImgAsyn() {
    try {
        const respuesta = await fetch("./images/foto1.jpg")
        if(respuesta.ok){
            let img = document.createElement('img')
            img.src= respuesta.url;
            return img;
    }
        
    } catch (error) {
        throw new Error(`Error`); 
    }
}
