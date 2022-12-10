let mevaName = document.getElementById('meva-name');
let mevaList = document.getElementById('meva-list');
let btn = document.getElementById('btn');
let natijaInput = document.getElementById('natija-input');

btn.addEventListener('click', () => {
      let result = mevaList.innerText.includes(mevaName.value);
      if (result === true) {
            natijaInput.value = 'Ajoyib meva';
      }
      else{
            natijaInput.value = `Bunday meva ro'yhatda yo'q`;
      }
})