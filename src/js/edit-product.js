import configs from "../configs";
import { deleteProduct } from "../api"
export function cardTemplateAdmin(data) {
  const { _id, imgs, quantity, description, name, salePrice } = data;
  // const nameTitle = name ? name : data.category.name;
  return ` <div class="col container">
    <article class="card" data-id="${_id}">
      <div class="card__header">
        <div class="card__img">
          <img width="100%" src="${imgs}" alt="product">
        </div>
      </div>
      <div class="card__body">
        <div class="card__title">${name}</div>
        <div class="card__discription">${description.slice(0, 23)}</div>
        <div class="card__count">
          <div class="card__prise">
            ${salePrice} ming
          </div>
          <div class="count__products">${quantity} k/n</div>
        </div>
        <div class="card__btns">
          <button class="btns">Tahrirlash</button>
          <button class="btns btn__remove">O'chirish</button>
        </div>
      </div>
      
    </article>
  </div>`;
}

export function displayProductsEdit(data = []) {
  let result = "";
  const productMenuNode = document.querySelector(".card__wreapper");
  data.forEach((product) => {
    const { img, ...docs } = product;
    const imgs = img ? configs.baseImgURL + img : configs.defaultImg + "400";
    result += cardTemplateAdmin({ ...docs, imgs });
  });
  productMenuNode.innerHTML = result;
}

export function handleInitializeProduct() {
  const cardNodeList = document.querySelectorAll(".card");
  cardNodeList.forEach((card) => {
    card.addEventListener("click", (event) => {
      const element = event.target;
      const id = card?.dataset?.id;
      let showMovieDetails =
        element.closest(".btn__remove")?.classList.contains("btn__remove");
      if (showMovieDetails) {
        if (!id) return;
        deleteProduct(id);
        card.parentElement.remove();
      }
    });
  });
}

export function CreateCategory(name) {
  try {
    this.name = name;
  } catch (err) {
    console.log(err);
  }
  
}

export function CreateProduct(name, categoryId, description, price, salePrice, quantity) {
  try {
    this.name = name;
    this.categoryId = categoryId;
    this.description = description;
    this.price = price;
    this.salePrice = salePrice;
    this.quantity = quantity;
  } catch (err) {
    console.log(err);
  }
}
