let input_1 = document.getElementById('sana_1');
let input_2 = document.getElementById('sana_2');

let btn = document.getElementById('btn');
let h2 = document.getElementById('h2');

btn.addEventListener('click', () => {
      let sana_1 = new Date(input_1.value);
      let sana_2 = new Date(input_2.value);
      
      let yil_1 = sana_1.getFullYear();
      let oy_1 = sana_1.getMonth();
      let kun_1 = sana_1.getDate();

      let yil_2 = sana_2.getFullYear();
      let oy_2 = sana_2.getMonth();
      let kun_2 = sana_2.getDate();

      let day_1 = yil_1 + oy_1 + kun_1;
      let day_2 = yil_2 + oy_2 + kun_2;
      h2.innerHTML = day_2 - day_1;
});