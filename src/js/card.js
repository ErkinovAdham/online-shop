import configs from "../configs";
export  function displaycard(data = []) {
    let result = "";
    const productDetails = document.querySelector(".cart__title");
    data.forEach((cart) => {
      let { _id, img, name, salePrice, quantity, description } = cart.product;
      let { qty, total } = cart;
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
      <div>${total} ${qty}</div>
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