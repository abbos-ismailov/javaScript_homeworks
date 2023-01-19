async function getUsers() {
      try {
            let response = await fetch(`https://jsonplaceholder.typicode.com/users`);
            let result = await response.json();
            return result;
      } catch (error) {
            console.log('error');
      }
}

let userName = document.getElementById('user-name');
let getLocaleStorageUserId = localStorage.getItem("userId");
function usersRender(usersList) {
      usersList.forEach(element => {
            if (element.id == getLocaleStorageUserId) {
                  userName.innerHTML = `Name: ` + element.name;
                  document.getElementById('user-name-list').innerHTML = `User name: <b>${element.username}</b>`;
                  document.getElementById("user-street").innerHTML = `street: <b>${element.address.street}</b>`;
                  document.getElementById("user-city").innerHTML = `City: <b>${element.address.city}</b>`;
                  document.getElementById("company-name").innerHTML = `Company: <b>${element.company.name}</b>`;
                  document.getElementById('user-email').innerHTML = `Email address: <b>${element.email}</b>`;
                  document.getElementById("user-phone").innerHTML = `Phone number: <b>${element.phone}</b>`;
                  document.getElementById("user-website").innerHTML = `Website: <b>${element.website}</b>`;
            }
      });
}

getUsers().then((usersList) => {
      usersRender(usersList);
})

let nightLight = document.querySelector(".night-light");
nightLight.addEventListener('click', () => {
      document.body.classList.toggle("moon-light")
})
