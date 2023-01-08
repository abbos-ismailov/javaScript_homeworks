let timer = document.getElementById('timer');

let a = setInterval(() => {
      let res = +timer.innerText - 1;
      timer.innerHTML = res;
      if (res == 0) {
            clearInterval(a);
      }
      timer.addEventListener('mouseover', () =>{
            clearInterval(a);
      })
      timer.addEventListener('mouseout', () => {
            setInterval(a , 1000)
      })
}, 1000);