let box = document.querySelector('.box');
let clock = document.querySelector('#clock');

function soat (){
      let date = new Date()
      let hours = date.getHours();
      let minuts = date.getMinutes();
      let seconds = date.getSeconds();
      let result = hours;
      
      if (minuts < 10) {
            result += '0';
      }
      result = result + ':' + minuts + ':';
      if (seconds < 10) {
            result += '0';
      }
      result = result + seconds;
      clock.innerHTML = result;
}
setInterval('soat()', 1000)