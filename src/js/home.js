import configs from "../configs";
import { cartAdd, deleteCart } from "../api";
export function displayProducts(data = []) {
  let result = "";
  const productDetails = document.querySelector(".get__products");
  data.forEach((prudoct) => {
    let { _id, img, name, description, salePrice, quantity } = prudoct;
    const imgs = img ? img : configs.defaultImg + "400";
    result += `

    <div class="col">
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
        <div class="card__btn">
          <button class="btns  save__cart">Savatga qo'shish</button>
        </div>
      
      </div>
      
    </article>
  </div>`;
  });
  productDetails.innerHTML = result;
}
export function displayCategore(data = []) {
  let result = "";
  const productDetails = document.querySelector(".cotegore__wrap");
  data.forEach((prudoct) => {
    let { _id, name } = prudoct;
    result += `
            <div class="gets__category" data-id="${_id}>
                  <div class="categorea__title">${name}</div>
            </div>`;
  });
  productDetails.innerHTML = result;
}
export function loadToken() {
  if (localStorage.token) {
    let img__wrapper = document.querySelector(".account__img");
    let auth__link = document.querySelector(".navbar__btns");
    if (!auth__link || !img__wrapper) return;
    auth__link.remove();
    img__wrapper.classList.remove("hide");
  }
}

export function initializeMEvent() {
  const cardNodeList = document.querySelectorAll(".card");
  cardNodeList.forEach((card) => {
    card.addEventListener("click", (event) => {
      const element = event.target;
      const id = card?.dataset?.id;
      if (!id) return;
      let isMenuBtn = element
        .closest(".save__cart")
        ?.classList.contains("save__cart");

      if (isMenuBtn) {
        cartAdd(localStorage.userId, id).then(({ data }) => {
          console.log(data);
        });
      }
    });
  });
}


export function initializeDeleteEvent() {
  const cardNodeList = document.querySelector(".card__btn2");
  cardNodeList.addEventListener("click",() => {
    deleteCart(localStorage.userId).then(({data}) => {
      console.log(data);
      const dalete = document.querySelector(".cart__title")
      dalete.remove()
    })
  })
}