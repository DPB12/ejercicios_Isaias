// Imports que son usados en el documento.
import { renderCardFoods } from "./src/components/renderCardFoods";
import { renderCardOrder } from "./src/components/renderCardOrder";
import { getFoodsApi } from "./src/components/helpers/getFoodsApi";
import { saveOrderApi } from "./src/components/helpers/saveOrderApi";
import { findFoodsApi } from "./src/components/helpers/findFoodsApi";

// URLS que se usaran a lo largo del documento.
const URL_CATEGORIES = `${import.meta.env.VITE_URL}/categories`;
const URL_ORDER = `${import.meta.env.VITE_URL}/order`;

// Elementos del DOM que son usados.
const foodsDiv = document.querySelector(".divFoods");
const orderDiv = document.querySelector(".orderDiv");
const inptBuscador = document.querySelector(".buscador")




// Variables globales que van variando a lo largo del documento.
// " allOrder " nunca varia de un array pero lo pongo let para vaiarlo mas facilmente cuando tenga que hacerlo.
let allOrder = [];
let totalOr = 0;
/**
 * @description Es un addeventlitener que se usa en el div de las comidas se usa para identificar el boton de  " ANADIR " y ordenarle qu hacer cuando 
 * la en el classList este  "anadir".
 */
foodsDiv.addEventListener("click", async (e) => {
  // le digo que no se recargue cuando le de al "foodsDiv".
  e.preventDefault();

  // cojo el elemento
  const elemento = e.target;

  // cojo el id del elemnto
  let idFood = elemento.parentElement.id;
  idFood = idFood.split("-");
  idFood = idFood[1];


  //Ledigo que hacer si en el classList esta "anadir".
  if (elemento.classList.contains("anadir")) {
    
    // url nueva con la que obtendremos la comida
    const URL_NUEVA = `${URL_CATEGORIES}/${idFood}`
    
    // le mando una peticion a la "url_nueva"
    const food = await getFoodsApi(URL_NUEVA);

    // meto la comida en el array "allOrder"
    allOrder.push(food);

    // cojo el padre del padre del elemnto para opacarlo.
    let padre = elemento.parentElement;
    padre = padre.parentElement;
    
    // le añado la clase opacar que lo difumina
    padre.classList.remove("desopacar");
    padre.classList.add("opacar");
    
    
    // desabilito el input de añadir
    elemento.disabled = true;

    // renderizo todas la ordenes en el "orderDiv"
    renderCardOrder(orderDiv,allOrder);

    // variable que guarda el precio actual del producto
    let tot= 0;

    // recorro el array de "allOrder"
    allOrder.forEach(food => {
      // Asigno al valor actual solo el ultimo valor
      tot = food.price;
    })

    // Lo sumo al total de todos los productos añadidos al "allOrder"
    totalOr +=tot;
  }
})

orderDiv.addEventListener("click", async (e) => {
  e.preventDefault();
  const elemento = e.target;

  let idFood = elemento.parentElement.id;
  idFood = idFood.split("-");
  idFood = idFood[1];

  if (elemento.classList.contains("quitar")) {
    
    let precioActual = 0;
    allOrder.forEach(order => {

      if(order.id == idFood){
        // elimino el plato de "allOrder"
        precioActual = order.price; 
        allOrder = allOrder.filter(item => item.id !== order.id)
        }
      });

      totalOr -= precioActual;


    renderCardOrder(orderDiv,allOrder);

    const elemFood = document.querySelector(`#btnAdd-${idFood}`)

    elemFood.disabled = false;
    
    let padre = elemFood.parentElement;
    padre = padre.parentElement;

    padre.classList.remove("opacar");
    padre.classList.add("desopacar");

  }

  if (elemento.classList.contains("pagar")) {
        saveOrderApi(URL_ORDER,allOrder);
        allOrder.push({total: Math.floor(totalOr)})
        localStorage.setItem("OrderFoods", JSON.stringify(allOrder))
        orderDiv.innerHTML= "";

        let btnsAdd = document.querySelectorAll(".anadir")

        btnsAdd.forEach(element => {
          element.disabled = false;
          let padre = element.parentElement;
          padre = padre.parentElement;

          padre.classList.remove("opacar");
          padre.classList.add("desopacar");
        });

        allOrder = [];


  }

})

inptBuscador.addEventListener("keyup", (e) =>{
  e.preventDefault
  findFoodsApi(URL_CATEGORIES,inptBuscador.value.toLowerCase(),(data)=>{
    renderCardFoods(foodsDiv,data);
  })
})


async function init() {
  getFoodsApi(URL_CATEGORIES,(data) => {
    renderCardFoods(foodsDiv,data)
  })

  
}

document.addEventListener("DOMContentLoaded", init)