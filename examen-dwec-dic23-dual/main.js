import { renderCheckin } from "./src/components/renderCheckin";
import { getCheckin } from "./src/components/helpers/getCheckin";
import { getRooms } from "./src/components/helpers/getRooms";
import { saveChekin } from "./src/components/helpers/saveChekin";
import { saveCheckout } from "./src/components/helpers/saveCheckout";
import { editCheckin } from "./src/components/helpers/editCheckin";
import { getCheckou } from "./src/components/helpers/getCheckout";

const URL_habitaciones = `${import.meta.env.VITE_URL}/habitaciones`;
const URL_checkins = `${import.meta.env.VITE_URL}/checkins`;
const URL_checkouts = `${import.meta.env.VITE_URL}/checkouts`;

const checkinDiv = document.querySelector(".tablaCheckin");
const btnCheckin = document.querySelector(".btn_checkin");
const btnEditCheckin = document.querySelector("#btn_edit");
const formCheckin = document.querySelector(".contact__form")


const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const numberPers = document.querySelector("#numberPers");
const fecha_entrada = document.querySelector("#fecha_entrada");
const fecha_salida = document.querySelector("#fecha_salida");

async function verificarCheckin() {
    
    if (nombre && email && numberPers && fecha_entrada && fecha_salida) {
        
        if (numberPers.value >= 1 && numberPers.value <= 4) {
            const fecha = new Date;
            const mes =fecha.getMonth()+1;

            let fechaEnt = fecha_entrada.value;
            let fechaSal = fecha_salida.value;

            fechaEnt = fechaEnt.split("-")
            fechaSal = fechaSal.split("-")

            console.log(fechaSal[0]);
            // fechaEnt = fechaEnt.split("-")
            console.log(fecha.getFullYear(),fechaEnt[0]);
            console.log(mes,fechaEnt[1]);
            console.log(fecha.getDate(),fechaEnt[2]);

            if(fecha.getFullYear() <= parseInt(fechaEnt[0]) && mes <= parseInt(fechaEnt[1]) && fecha.getDate() < parseInt(fechaEnt[2])){

                if(fecha.getFullYear() <= parseInt(fechaSal[0]) && mes <= parseInt(fechaSal[1]) && fecha.getDate() < parseInt(fechaSal[2])){
                
                const habit = await getRooms(URL_habitaciones);
                let habitaciónDisp = [];
                
                habit.forEach(habita => {
                    habitaciónDisp.push(habita.numero_habitacion)
                });

                const person = await getCheckin(URL_checkins);
                person.forEach(check =>{
                    if (habitaciónDisp.indexOf(check.numero_habitacion) != -1) {
                        habitaciónDisp.splice(habitaciónDisp.indexOf(check.numero_habitacion),1)
                    }
                })

                if (habitaciónDisp.length == 0) {
                    alert("No hay habitaciones disponibles")
                    return
                }

                let habitacionReser = Math.floor(Math.random() * habitaciónDisp.length);
                let precio = 0;
                habit.forEach(habita => {
                    if (habita.numero_habitacion == habitaciónDisp[habitacionReser]){
                        precio= habita.precio_dia;
                    }
                });

                let diasReservad = new Date(fecha_salida.value).getTime() - new Date(fecha_entrada.value).getTime();
                //console.log(diasReservad/(1000*60*60*24));
                let numDias = parseInt(diasReservad/(86400000));

                precio = precio*numberPers.value*numDias;

                if (numberPers.value == 4) {
                    let descuen = precio*0.2;
                    precio -= descuen;
                }

                
                let checkObj = {
                    nombre: nombre.value,
                    email: email.value,
                    numero_habitacion: habitaciónDisp[habitacionReser],
                    numero_personas: numberPers.value,
                    fecha_entrada: fecha_entrada.value,
                    fecha_salida: fecha_salida.value,
                    precio_facturado: precio
                }

                saveChekin(URL_checkins,checkObj,()=>{
                    getCheckin(URL_checkins,(data) =>{
                        renderCheckin(checkinDiv,data)
                        formCheckin.reset()
                    })
                })



                }else{
                    alert("La fecha de salida es anterior al dia de hoy.")
    
                }
        
            }else{
                console.log("La fecha de entrada es anterior al dia de hoy.")

            }

        }else{
          alert('La cantidad de personas debe ser entre 1 y 4');
        }
    
    } else {
        alert("Todos los campos son obligatorios");
    }
    
}

async function totalCheckout() {
    const checkou = await getCheckou(URL_checkouts);
let totalC = 0;
console.log(checkou);
checkou.forEach(che =>{
    totalC += che.precio_facturado;
    console.log(totalC);

})
checkinDiv.innerHTML += `<tr>
<th>Precio de los checkout del inventario</th>
</tr>
<tr>
<td>${totalC}€</td>
</tr>`; 

}

btnCheckin.addEventListener("click",(e)=>{

    e.preventDefault();
    verificarCheckin();
    totalCheckout();

})

checkinDiv.addEventListener("click", async (e) =>{
    e.preventDefault();
    const elemento = e.target;

    let idC = elemento.parentElement;
    idC = idC.parentElement;
    idC = idC.id.split("-");
    
    let URL_nuevaChekin = `${URL_checkins}/${idC[1]}`;

    if (elemento.classList.contains("check-out")) {

        saveCheckout(URL_nuevaChekin,URL_checkouts,()=>{
            getCheckin(URL_checkins,(datos)=>renderCheckin(checkinDiv, datos));
        })
        totalCheckout();
    }

    if (elemento.classList.contains("editar")) {
        let reserv = await getCheckin(URL_nuevaChekin)
        nombre.value = reserv.nombre;
        email.value=reserv.email;
        numberPers.value = reserv.numero_personas;
        fecha_entrada.value = reserv.fecha_entrada;
        fecha_salida.value =reserv.fecha_salida;

        btnCheckin.style.display = "none";
        btnEditCheckin.type = "submit";
        btnEditCheckin.style.backgroundColor= "green";
        btnEditCheckin.id = idC[1];
        totalCheckout();

    }

})

btnEditCheckin.addEventListener("click",(e)=>{
    e.preventDefault();
    let checkObj = {
        nombre: nombre.value,
        email: email.value,
        numero_personas: numberPers.value,
        fecha_entrada: fecha_entrada.value,
        fecha_salida: fecha_salida.value,
    }

    let URL_nuevaChekin = `${URL_checkins}/${btnEditCheckin.id}`;

    
    editCheckin(URL_nuevaChekin,checkObj,()=>{
        getCheckin(URL_checkins,(datos) =>{
            renderCheckin(checkinDiv,datos);
            btnCheckin.style.display = "block";
            btnEditCheckin.type = "hidden";    
            formCheckin.reset();
            totalCheckout();

        })
    })



})

async function init() {
    getCheckin(URL_checkins,(data) =>{
        renderCheckin(checkinDiv,data)
    })
    totalCheckout();

}

document.addEventListener("DOMContentLoaded", init)