let h2 = document.getElementById('h2');
function help(){
      let Falastin = new Date().toLocaleString('en', {timeZone: 'Asia/Gaza'});
      setTimeout('help()' , 1000);
      h2.innerHTML = Falastin;
}
help()