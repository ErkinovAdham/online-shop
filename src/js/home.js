import configs from "../configs";
export function displayProducts(data = []) {
  let result = "";
  const productDetails = document.querySelector(".crew__product");
  data.forEach((prudoct) => {
    let { img, name ,description, salePrice} = prudoct;
    const imgs = img
      ? img
      : configs.defaultImg + "400";
    result += `

            <div class="col">
                <article class="card">
                    <div class="card__header">
                      <img class="card__img" width="100%" src="${imgs}" alt="img">
                    </div>
                    <div class="card__body">
                      <div class="card__title">${name}</div>
                      <div class="card__discriptiop">${description}</div>
                      <div class="card__salePrice">${salePrice}</div>
    
        
                    </div>
                 </article>
            </div>`;
  });
  productDetails.innerHTML = result;
}
