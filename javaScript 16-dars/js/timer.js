let timer = document.getElementById('timer');
let timerId;
function rounTime() {
      timerId = setInterval(() => {
            timer.innerHTML = +timer.innerHTML - 1;
            if (timer.innerHTML == 0) {
                  clearInterval(timerId);
                  return;
            }
      }, 1000);
      return timerId;
}
timerId = rounTime();

timer.addEventListener('mouseenter', () => {
      clearInterval(timerId);
})
timer.addEventListener('mouseout', () => {
      timerId = rounTime();
})