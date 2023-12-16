export function renderCardOrder(elem,foods) {
    elem.innerHTML= "";
    let total = 0;

    foods.forEach(food => {
        total += food.price;
        elem.innerHTML += `
        <div class="col">
        <div class="card">
          <img
            src="${food.strCategoryThumb}"
            class="img-order"
            alt="Imagen de comida"
          />
          <div class="card-body" id="divCom-${food.id}">
            <h5 class="card-title">${food.strCategory}</h5>
            <p class="card-text">Precio: $${food.price}</p>
            <input type="submit" class="btn btn-link card-link quitar" value="Quitar">
          </div>
        </div>
      </div>`
    });

    if (foods.length > 0) {
        elem.innerHTML += `
        <div class="card">
        <p class="card-text">Precio-total: $${total}</p>
        <input type="submit" class="btn btn-link card-link pagar" value="Pagar">
      </div>`;
    }
}