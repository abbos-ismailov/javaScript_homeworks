let carousel = document.getElementsByClassName("carousel")[0];
let nextBtn = document.getElementById("next-btn");
let prevBtn = document.getElementById("prev-btn");
let carouselItem = document.getElementsByClassName('carousel-item');


let i = 0;
function nextImg() {
      carouselItem[i].classList.toggle("hide");
      i++;
      if (i > (carouselItem.length - 1)) {
            i = 0;
      }
      carouselItem[i].classList.toggle("hide");
}
function prevImg() {
      carouselItem[i].classList.toggle("hide");
      i--;
      if (i < 0) {
            i = carouselItem.length - 1;
      }
      carouselItem[i].classList.toggle("hide");
}

let setCarouselInterval = () => {
      let intervalCarousel = setInterval(() => {
            nextImg();
      }, 1000);

      return intervalCarousel;
}

nextBtn.addEventListener("click", () => {
      nextImg();
})

prevBtn.addEventListener("click", () => {
      prevImg();
})

let intervalId = setCarouselInterval();
carousel.addEventListener("mouseenter", () => {
      clearInterval(intervalId);
})
carousel.addEventListener("mouseleave", () => {
      intervalId = setCarouselInterval();
})