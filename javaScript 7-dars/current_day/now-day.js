let day_style = prompt('(.) yoki (-) kiriting');
let h2 = document.getElementById('h2');

function day() {
      let date = new Date();
      let yil = date.getFullYear();
      let oy = date.getMonth() + 1;
      let kun = date.getDate();

      if (day_style == '.') {
            let sana = yil + '.' + oy + '.' + kun;
            if (oy < 10) {
                  sana = yil + '.' + '0' + oy + '.' + kun;
                  h2.innerHTML = sana;
                  return;
            }
            if (kun < 10) {
                  sana = yil + '.' + oy + '.' + '0' + kun;
                  h2.innerHTML = sana;
                  return;
            }
            h2.innerHTML = sana;
      }
      else if (day_style == '-') {
            let sana = yil + '-' + oy + '-' + kun;
            if (oy < 10) {
                  sana = yil + '-' + '0' + oy + '-' + kun;
                  h2.innerHTML = sana;
                  return;
            }
            if (kun < 10) {
                  sana = yil + '-' + oy + '-' + '0' + kun;
                  h2.innerHTML = sana;
                  return;
            }
            h2.innerHTML = sana;
      }
}

day()
