let text = document.getElementById('text');
let topish = document.getElementById('topish');
let soz = document.getElementById('soz');

topish.addEventListener('input', ()=> {
      let natija = text.innerText.includes(topish.value);
      if (natija === true){
            topish.classList.add('bor');
            soz.innerHTML = 'Bunday soz mavjud';
      }
      else{
            topish.classList.add('yoq');
            soz.innerHTML = 'Bunday soz yo\'q';
      }
});