let emailInput = document.getElementById('email-input');
let passwordInput = document.getElementById('password-input');
let btnSubmit = document.getElementById('btn-submit');
// let form = document.getElementById('form');

// form.addEventListener('submit', (e) => {
//       e.preventDefault();
// })

btnSubmit.addEventListener('click', () => {
      localStorage.setItem("email", emailInput.value);
      localStorage.setItem("password", passwordInput.value);
})

let getEmail = localStorage.getItem("email");
let getPassword = localStorage.getItem("password");

if (getEmail && getPassword) {
      window.location.href = './main.html';
}