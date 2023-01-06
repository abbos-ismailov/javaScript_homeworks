let searchMmovie = document.getElementById('search-movie');
let nextBtn = document.getElementById('next-btn');
let prevBtn = document.getElementById('prev-btn');

async function allMovies(nextPage, s  = 'captain america') {
      let result = await fetch(`http://www.omdbapi.com/?s=${s}&page=${nextPage}&apikey=a4a9f59a`);
      let response = await result.json();
      return response;
}

let containerMe = document.querySelector('.container-me');
function renderMovies(movies) {
      containerMe.innerHTML = "";
      movies.Search.forEach(movie => {
            let boxMovies = document.getElementById('box-movies').cloneNode(true).content;
            let card = boxMovies.querySelector('.card');
            card.classList.add('m-2');

            let poster = boxMovies.querySelector('.card-img-top');
            poster.src = movie.Poster;

            let cardTitle = boxMovies.querySelector('.card-title');
            cardTitle.innerHTML = movie.Title;
            containerMe.append(boxMovies);
      });
}
////// pagination panel
let nextPage = 1;
nextBtn.addEventListener('click', () => {
      console.log(getLocalStorage);
      movieAndRender(nextPage++);
      console.log(movieAndRender(nextPage++ , getLocalStorage));
})
prevBtn.addEventListener('click', () => {
      let getLocalStorage = localStorage.getItem("searchInput");
      movieAndRender(nextPage--);
      console.log(movieAndRender(nextPage-- , getLocalStorage));
})
////////////////////////////////

function movieAndRender(nextPage = 1, s) {
      allMovies(nextPage, s).then((movies) => {
            renderMovies(movies);
      })
}
movieAndRender(nextPage);

function search() {
      localStorage.setItem("searchInput", searchMmovie.value);
      movieAndRender(1, searchMmovie.value);
      searchMmovie.value = ''; 
}



let getEmail = localStorage.getItem("email");
let getPassword = localStorage.getItem("password");
if (!getEmail || !getPassword) {
      window.location.href = './index.html';
}