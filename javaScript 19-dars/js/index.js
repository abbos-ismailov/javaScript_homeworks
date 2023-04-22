// let loginForm = document.getElementById("login-form");

// loginForm.addEventListener("submit", (e) => {
//       e.preventDefault();
//       let nameInput = document.getElementById("name").value;
//       let passwordInput = document.getElementById("password").value;
//       let phoneInput = document.getElementById("phone").value;

//       fetch(`https://rare-plants-decide-213-230-120-170.loca.lt/api/user`, {
//             method: "POST",
//             headers: {
//                   'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({password: passwordInput, phone: phoneInput})
//       }).then(response => {
//             for (const iterator of response.headers.entries()) {
//                   console.log(iterator);
//             }
//       });

      // localStorage.setItem("phone", phoneInput);
      // localStorage.setItem("password", passwordInput);

      // window.location.href = "./products.html"
// })