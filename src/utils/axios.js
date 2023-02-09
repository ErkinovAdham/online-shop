import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css"
import Axios from "axios";
import config from "../configs";
const { baseURL, baseImgUrl } = config;
const axios = Axios.create({
  baseURL,
  // withCredentials: true,
});
const ApiForImg = Axios.create({
  baseURL: baseImgUrl,
});

function getToken(config) {
 config.headers.authorization = localStorage.getItem("token")
? `Bearer ${localStorage.getItem("token")}`
: "";
  return config;
}

axios.interceptors.request.use(
  (config) => {
    return getToken(config);
  },
  (error) => {
    return Promise.reject(error);
  }
);

ApiForImg.interceptors.request.use(
  (config) => getToken(config),
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 404) {
      Toastify({
        text: error.response.data.msg,
        duration: 3000,
      }).showToast();
    }
    else if (error.response.status === 401){
      Toastify({
        text: error.response.data.msg,
        duration: 3000,
      }).showToast();

      location.assign('/sign-in.html')
    }
    else if (error.response.status === 400){
      Toastify({
        text: error.response.data.msg,
        duration: 3000,
      }).showToast();
    }
    else {
      Toastify({
        text: error.response.data.msg,
        duration: 3000,
      }).showToast();
    }
    return Promise.reject(error);
  }
);

export { ApiForImg, axios as default };
