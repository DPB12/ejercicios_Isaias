import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { pintarImg } from './components/cargarImagen';
import { pintarOperacion } from './components/operacionesArit';
import { pintarAnimacion } from './components/animacion';
import { llamadaAsync } from './components/llamadaAsync';
import { crearSimulacionDatos } from './components/simulacionAut';

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Ejercicios fecth</h1>
    <h2>Formulario de inicio de sesion</h2>
    <div class="card0>
    <form action="">
    <label for="nombre">Nombre de la ciudad:</label>
    <input type="text" id="nombreCiud">
    <input type="submit" id="buscarCiudad" value="Buscar ciudad">
  </form>
    </div>
    <div class="card">
    <form action="">
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre">
    <label for="passw">Contraseña:</label>
    <input type="password" id="passw">
    <input type="submit" id="sesion" value="Iniciar sesion">
  </form>
    </div>
    <div class="card2">
    </div>
    <div class="card3">
    </div>
  </div>
`;

const nombre = document.querySelector("#nombre");
const passw = document.querySelector("#passw");
const submit = document.querySelector("#sesion")


const container = document.querySelector('.card');
const container2 = document.querySelector('.card2');
const container3 = document.querySelector('.card3');

pintarOperacion(container2)
pintarAnimacion(container2,4000)
llamadaAsync(container2)
submit.addEventListener("click", (e) => {
  e.preventDefault();
  crearSimulacionDatos(nombre.value,passw.value,container)
})
pintarImg(container3)

