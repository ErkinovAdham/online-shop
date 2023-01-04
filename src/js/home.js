import configs from "../configs";
export function displayProducts(data = []) {
  let result = "";
  const productDetails = document.querySelector(".get__products");
  data.forEach((prudoct) => {
    let { _id, img, name, description, salePrice, quantity } = prudoct;
    const imgs = img ? img : configs.defaultImg + "400";
    result += `

            <div class="col" data-id="${_id}>
                <article class="card">
                    <div class="card__header">
                      <img class="card__img" width="100%" src="${imgs}" alt="img">
                    </div>
                    <div class="card__body">
                      <div class="card__title">${name}</div>
                      <div class="card__discriptiop">${description}</div>
                      <div class="row">
                      <div class="col card__salePrice">${salePrice}</div>
                      <div class="card__salePrice">${quantity}</div>
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

            <div class="col" data-id="${_id}>
                <article class="card">
                  <div class="categorea__title">${name}</div>
                 </article>

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
