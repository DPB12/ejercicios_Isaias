export function renderCardFoods(elem,foods) {
    elem.innerHTML = "";

    foods.forEach(food => {
        elem.innerHTML += `
        <div class="col-md-4">
        <div class="card">
          <img
            src="${food.strCategoryThumb}"
            class="card-img-top"
            alt="Imagen de comida"
          />
          <div class="card-body" id="divCom-${food.id}">
            <h5 class="card-title">${food.strCategory}</h5>
            <p class="card-text">Precio: $${food.price}</p>
            <p class="card-text">${food.strCategoryDescription}</p>
            <input type="submit" class="btn btn-link card-link anadir" id="btnAdd-${food.id}" value="Añadir">
          </div>
        </div>
      </div>`
    });
}