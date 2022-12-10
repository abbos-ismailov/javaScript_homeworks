let words = document.getElementById('words');
let btn = document.getElementById('btn');
let h2 = document.getElementById('h2');

btn.addEventListener('click', () => {
   let array = words.value.split(' ');
   h2.innerHTML = array.length;
});