import "./style";
import { SignUp } from "./signUp";
import { signUp, signIn, products, getCategories } from "../api/index";
import { SignIn } from "./signIn";
import {displayProducts, displayCategore, loadToken} from "./home"
import { displayUsers, handleInitializeUsers } from "./all-users";
document.addEventListener("DOMContentLoaded", async (e) => {
  const page = location.pathname;
  if (page === "/index.html" || page === "/") {
    products()
    .then(({data}) => {
      console.log(data.data);
      displayProducts(data.data);
    })
    
    getCategories().then(({data}) => {
      console.log(data);
      displayCategore(data.payload)
    })
  
    
  }

  if (page === "/sign-up.html" || page === "/sign-up") {
    const signUpForm = document.querySelector(".form__signup");
    try {
      signUpForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new SignUp(
          signUpForm.name.value,
          signUpForm.lastName.value,
          signUpForm.email.value,
          signUpForm.password.value,
          signUpForm.phone.value
        );
        console.log(formData);
        signUp(formData)
          .then(({ data }) => {
            console.log(data);
            localStorage.token = data.token;
            localStorage.user = JSON.stringify(data.user.role);
            location.assign("/");
          })
          .catch((err) => {
            Toastify({
              text: err.msg,
              duration: 3000,
              newWindow: true,
              close: true,
              gravity: "top",
              position: "right",
              stopOnFocus: true,
              style: {
                background: "linear-gradient(to right, red, red)",
              },
              onClick: function () {},
            }).showToast();
            if (err?.path) {
              location.assign(err.path);
            }
          });
      });
    } catch (err) {
      console.log(err);
    }
  }
  if (page === "/sign-in.html" || page === "/sign-in") {
    const signInForm = document.querySelector(".signIn_form");
      signInForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new SignIn(
          signInForm.email.value,
          signInForm.password.value
        );
  
        console.log(formData);
        signIn(formData)
        .then(({ data }) => {
          console.log(data);
          localStorage.token = data.token;
          localStorage.user = JSON.stringify(data.payload.role);
          location.assign("/");
        })
        .catch((err) => {
          Toastify({
            text: err.msg,
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
              background: "linear-gradient(to right, red, red)",
            },
            onClick: function () {},
          }).showToast();
          if (err?.path) {
            location.assign(err.path);
          }
        });
      });    
  }
 
  if (page === "/all-users.html" || page === "/all-users") {
    getUsers().then(({ data }) => {
      console.log(data);
      displayUsers(data);
      handleInitializeUsers();
    });
  }
  loadToken();
});

