let loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      let nameInput = document.getElementById("name").value;
      let passwordInput = document.getElementById("password").value;
      let phoneInput = document.getElementById("phone").value;

      fetch(`https://rare-plants-decide-213-230-120-170.loca.lt/api/user`, {
            method: "POST",
            headers: {
                  'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: nameInput, password: passwordInput, phone: phoneInput })
      });
})


// async function httpsPOST(url, data) {
//       const response = await fetch(url, data, {
//             method: "POST",
//             headers: {
//                   'Content-Type': 'application/json',
//                   // 'ngrok-skip-browser-warning': 'no'
//             },
//             body: JSON.stringify({ name: nameInput, password: passwordInput, phone: phoneInput })
//       });
//       return response;
// }