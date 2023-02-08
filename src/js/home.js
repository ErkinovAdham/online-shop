import configs from "../configs";
import { cartAdd, deleteCart, daleteProductCard, getAccount } from "../api";
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
  cardNodeList.addEventListener("click", () => {
    deleteCart(localStorage.userId).then(({ data }) => {
      console.log(data);
      const dalete = document.querySelector(".cart__title");
      dalete.remove();
    });
  });
}

export function initializeCostumerEvent() {
  const orders = document.querySelectorAll(".user__order");

  orders.forEach((order) => {
    order.addEventListener("click", (event) => {
      const element = event.target;
      const id = order?.dataset?.id;
      let deleteOrder = element
        .closest(".remove__order")
        ?.classList.contains("remove__order");
      if (deleteOrder) {
        if (!id) return;
        deleteUserOrder(id).then(({ data }) => {
          console.log(data);
          Toastify({
            text: 'Remove order !!!',
            duration: 3000,
          }).showToast();
          event.target.parentElement.remove();
        });
      }
    });
  });
}

export function displayAccount(data = []) {
  let result = "";
  const productMenuNode = document.querySelector(".account__wreapper");
  const { _id, name, img, address, email, lastName, phone, createdAt } = data;
  const imgs = img ? configs.baseImgURL + img : configs.defaultImg + "400";
  result += `<div class="account" data-id="${_id}">
      <div class="card__img">
        <img width="20%" src="${imgs}" alt="product">
      </div>
       <h1 class="user__name">${name}</h1>
       <p class="user__lastname">${lastName}</p>
       <p class="user__lastname">${address}</p>
       <p class="user__lastname">${email}</p>
       <p class="user__lastname">${phone}</p>
       <p class="user__lastname">${createdAt.slice(0, 10)}</p>
       </div>`;
  productMenuNode.innerHTML = result;
}

export function initializeCartEvent(data) {
  const moviesStatus = document.querySelectorAll(".card");
  moviesStatus.forEach((card) => {
    card.addEventListener("click", (event) => {
      const id = event.target.closest(".card")?.dataset?.id;
      console.log(id);
      let result = 1;
      console.log(id, "bosilgan");
      if (!id) return;
      const isMenuBtn = event.target
        .closest(".delete__cart")
        ?.classList.contains("delete__cart");
      console.log(isMenuBtn);
      if (isMenuBtn) {
        const itemid = data.filter((item) => {
          return item.product._id != id;
        });
        console.log(itemid);
        const dataCart = itemid.map((data) => {
          return {
            product: `${data.product._id}`,
            qty: `${data.qty}`,
            total: `${data.total}`,
            _id: `${data._id}`,
          };
        });
        daleteProductCard(localStorage.userId, dataCart ? dataCart : {}).then(
          (data) => {
            console.log(data);
            card.parentElement.remove();
          }
        );
      }
    });
  });
}
