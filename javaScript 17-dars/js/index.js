let tBodyUser = document.getElementById('tbody-user');

async function albumUsers() {
      try {
            let result = await fetch('https://jsonplaceholder.typicode.com/albums');
            let response = await result.json()
            return response;
      } catch (error) {
            console.log('error');
      }
}
function albumRender(albumList) {
      tBodyUser.innerHTML = "";
      albumList.forEach((element, index) => {
            let templateUser = document.getElementById('template-user').cloneNode(true).content;
            let id = templateUser.getElementById('id');
            id.innerHTML = element.id;
            let userId = templateUser.getElementById('user-id');
            userId.innerHTML = element.userId;
            let title = templateUser.getElementById('title');
            title.innerHTML = element.title;
            let koz = templateUser.getElementById('koz');
            let edit = templateUser.getElementById('edit');
            let deleteUser = templateUser.getElementById('delete-user');
            //// koz function ////
            koz.addEventListener('click', () => {
                  localStorage.setItem("userId", element.userId);
                  window.location.href = './photos.html';
            })
            //// koz function end /// 
            //// edit function  ////////
            edit.dataset.bsToggle = 'modal';
            edit.dataset.bsTarget = '#exampleModal';
            edit.addEventListener('click', () => {
                  let inputId = document.getElementById('input-id');
                  inputId.value = element.id;

                  let inputUserId = document.getElementById('input-user-id');
                  inputUserId.value = element.userId;

                  let inputTitle = document.getElementById('input-title');
                  inputTitle.value = element.title;
            })
            //// edit function end ////
            //// Delete function ////
            deleteUser.addEventListener('click', () => {
                  console.log(albumList[index]);
                  delete albumList[index];
                  // albumList.splice(index , 1);
                  albumRender(albumList);
            })
            //// Delete function end ///
            //// User Id click event ///
            userId.addEventListener('click', () => {
                  localStorage.setItem("userId", element.userId)
                  window.location.href = "./users.html";
            })
            //// User Id click event end //// 
            tBodyUser.append(templateUser);
      });
}


albumUsers().then((albumList) => {
      albumRender(albumList);
});