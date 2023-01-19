let rowPhotos = document.getElementsByClassName('row-photos')[0];

async function userPhotos() {
      try {
            let result = await fetch('https://jsonplaceholder.typicode.com/photos');
            let response = await result.json();
            return response;     
      } catch (error) {
            console.log('error');
      }
}

function photosRender (photosList) {
      let getLocalStorageUserId = localStorage.getItem("userId");
      photosList.forEach(element => {
            if (element.albumId == getLocalStorageUserId) {
                  let templatePhotos = document.getElementById('template-photos').cloneNode(true).content;
                  let cardImgTop = templatePhotos.querySelector('.card-img-top');
                  cardImgTop.src = element.thumbnailUrl;

                  let cardText = templatePhotos.querySelector('.card-text');
                  cardText.innerHTML = element.title;

                  let cardId = templatePhotos.querySelector('.card-id');
                  cardId.innerHTML = "id: " + element.id;

                  let cardAlbumId = templatePhotos.querySelector('.card-album-id');
                  cardAlbumId.innerHTML = "&nbsp; album-id: " +  element.albumId;

                  rowPhotos.append(templatePhotos);
            }
      });
}

userPhotos().then((photosList) => {
      photosRender(photosList)
})
