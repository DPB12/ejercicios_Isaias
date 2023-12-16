
export function renderCheckin(elem,clien) {
  elem.innerHTML = `<tr>
  <th>Id</th>
  <th>Cliente</th>
  <th>Habitación</th>
  <th>F. entrada</th>
  <th>F. salida</th>
  <th>Precio</th>
  <th>Editar</th>
  <th>Checkout</th>
  </tr>`;

  let Totaldinero = 0;



    clien.forEach(cliente => {
      Totaldinero+=cliente.precio_facturado
        elem.innerHTML += `
        <tr id="checkDiv-${cliente.id}">
        <td>${cliente.id}</td>
        <td>${cliente.nombre}</td>
        <td>${cliente.numero_habitacion}</td>
        <td>${cliente.fecha_entrada}</td>
        <td>${cliente.fecha_salida}</td>
        <td>${cliente.precio_facturado}€</td>
        <td><button class="editar">Editar</button></td>
        <td><button class="check-out">Check-Out</button></td>
      </tr>`

    });
    elem.innerHTML += `<tr>
    <th>Precio Total</th>
  </tr>
  <tr>
    <td>${Totaldinero}€</td>
  </tr>`;    
}