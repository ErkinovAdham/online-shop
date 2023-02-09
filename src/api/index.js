import axios from "../utils/axios";
export function signUp(quary) {
  if (!quary) {
    throw "please";
  }
  let url = `auth/sign-up`;
  return axios.post(url, {
    name: `${quary.name}`,
    email: `${quary.email}`,
    password: `${quary.password}`,
    lastName: `${quary.lastName}`,
    phone: `${quary.phone}`,
    role: `user`,
  });
}

export function signIn(quary) {
  if (!quary) {
    throw "please";
  }
  let url = `auth/sign-in`;
  return axios.post(url, {
    email: `${quary.email}`,
    password: `${quary.password}`,
  });
}

export function products() {
  let url = `products/public`;
  return axios.get(url);
}
export function getCategories() {
  let url = `categories/`;
  return axios.get(url);
}

export function getFavority(id) {
  let url = `favorites/all/${id}`;
  return axios.get(url);
}

export function getAccount() {
  let url = `auth/profile`;
  return axios.get(url);
}

export function postFavority(userId, productId) {
  let url = `favorites/`;
  return axios.post(url, {
    productId:`${productId}`,
    userId: `${userId}`
  });
}

export function deleteFavority(userId, productId) {
  let url = `favorites/${productId}`;
  return axios.delete(url, {
    userId: `${userId}`
  });
}


export function fetchProduct(id) {
  if (!id) {
    throw "please inser id parametr";
  }
  return axios.get(`products/`);
}

export function deleteProduct(id) {
  if (!id) {
    throw "please inser id parametr";
  }
  let url = `products/&{id}/delete`;
  return axios.delete(url);
}


export function createNewProduct(quary) {
  if (!quary) {
    throw "please inser id parametr";
  }
  let url = `products/`;
  return axios.post(url, {
    name: `${quary.name}`,
    price: `${quary.price}`,
    salePrice: `${quary.salePrice}`,
    quantity: `${quary.quantity}`,
    description: `${quary.description}`,
    categoryId: `${quary.categoryId}`,
  });
}

export function deleteCategory(id) {
  if (!id) {
    throw "please inser id parametr";
  }
  let url = `categories/${id}`;
  return axios.delete(url);
}

export function editCategory(id, text) {
  if (!id) {
    throw "please inser id parametr";
  }
  let url = `categories/${id}`;
  return axios.put(url, {
    name: `${text}`,
  });
}

export function addCategory(query) {
  if (!query) {
    throw "Please insert query parametr";
  }
  let url = `categories/`;
  return axios.post(url, {
    name: `${query.name}`,
  });
}
// 


// export function getCart() {
//   let url = `cart/`;
//   return axios.get(url);
// }

export function getUserCart() {
  let url = `cart/${localStorage.userId}`;
  return axios.get(url);
}

export function createCart() {
  let url = `cart/`;
  return axios.post(url);
}
export function cartAdd(userId, id) {
  if (!id) {
    throw "please inser id parametr";
  }
  let url = `cart/${userId}/add`;
  return axios.post(url, {
    product: `${id}`,
        "qty": 1,
        "total": 2000
  });
}

export function deleteCart(id) {
  if (!id) {
    throw "please inser id parametr";
  }
  let url = `cart/${id}/empty`;
  return axios.delete(url);
}

export function daleteProductCard(id , items) {
  let url = `cart/${id}/remove`;
  return axios.put(url, {
    id: `${id}`,
    items: items
  });
}

export function postOrder(id, customer, items, total) {
  let url = `orders/`;
  return axios.post(url , {
    cartId: `${id}`,
    customer: customer,
    items: items,
    total: `${total}`
  });
}

export function getAllUserOrder() {
  let url = `orders`;
  return axios.get(url);
}

export function deleteUserOrder(id) {
  let url = `orders/${id}/delete`;
  return axios.delete(url);
}

export function deleteUser(id) {
  if (!id) {
    throw "Please insert id parametr";
  }
  let url = `users/${id}/delete`;
  return axios.get(url);
}

export function completedUserOrder(id) {
  let url = `orders/${id}/change-status`;
  return axios.put(url, {
    status: "completed"
  });
}

export function cancelUserOrder(id) {
  let url = `orders/${id}/change-status`;
  return axios.put(url, {
    status: "canceled"
  });
}

export function getProductId(id) {
  let url = `products/${id}`;
  return axios.get(url);
}

export function costumerOrder(id) {
  let url = `orders/customer/${id}`;
  return axios.get(url);
}