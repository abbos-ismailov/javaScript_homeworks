let son = document.getElementById('son');
let toq = document.getElementById('toq');
for(let i = 0; i <= 100; i++){
      let raqam = i % 2;
      if(raqam === 0){
            let p = document.createElement('p');
            p.innerHTML  = `jup son ${i}`;
            son.appendChild(p);
      }
      else{
            let p = document.createElement('p');
            p.innerHTML = `toq son ${i}`;
            toq.appendChild(p);
      }
}