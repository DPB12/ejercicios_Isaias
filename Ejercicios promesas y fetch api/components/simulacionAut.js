export async function crearSimulacionDatos(username,password,element){
    const datos = await obtenerSimulacion();
    const elem = document.createElement("div");

    for (const val of datos) {
        if (val.login.username == username && val.login.password == password) {
            elem.innerHTML = '<p>Hola '+val.firstname+' '+val.lastname+'</p><br>';
            elem.innerHTML += '<p>Correo Electronico:'+val.email+'</p><br>';
            element.innerHTML = "<div></div>";
            element.appendChild(elem);
            element.innerHTML += '<div id="map"> </div>'

            initMap(parseFloat(val.address.geo.lat),parseFloat(val.address.geo.lng),val.address.city);
        }
    }

}

async function obtenerSimulacion() {
    try {
        const response = await fetch("https://jsonplaceholder.org/users")
            if (response.ok) {
                let dataR= await response.json();
                return dataR;
            }
    } catch (error) {
        return error;
    }

}

let map;

async function initMap(lat,long,nomCiudad) {

  const position = { lat: lat, lng: long };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 6,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerView({
    map: map,
    position: position,
    title: nomCiudad,
  });
}





