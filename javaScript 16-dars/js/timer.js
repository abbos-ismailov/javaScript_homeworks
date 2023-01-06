let timer = document.getElementById('timer');

let a = setInterval(() => {
      let res = +timer.innerText - 1;
      timer.innerHTML = res;
      if (res == 0) {
            clearInterval(a);
      }
}, 1000);



