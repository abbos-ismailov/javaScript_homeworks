let uch = document.getElementById('uch');
let besh = document.getElementById('besh');

for(let i = 1; i <= 100; i++){
      let kichik = i % 3;
      if (kichik === 0) {
            let span = document.createElement('span');
            span.innerHTML = i + ` bu son uchga bolinadi`;
            span.style.display = 'block'
            uch.appendChild(span); 
      }
}
for (let j = 0; j < 100; j++) {
      let katta = j % 5;
      if (katta === 0) {
            let span = document.createElement('span');
            span.innerHTML = j + `  bu son beshga bo'linadi`;
            span.style.display = 'block'
            besh.appendChild(span);
      }
}