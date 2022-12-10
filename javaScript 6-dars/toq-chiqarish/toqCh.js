let toq = document.getElementById('toq');
let array = [23, 56, 4, 78, 15, 63, 45, 210, 56]
for (let i = 0; i < array.length; i++){
      let qoldiq = array[i] % 2;
      if (qoldiq === 1) {
            let span = document.createElement('span');
            span.innerHTML = array[i] + ' &nbsp; bu arraydagi toq sonlar qolganlari jup sonlar';
            toq.appendChild(span);  
      }
}