let sanoq = document.getElementById('sanoq');
let banner = document.getElementsByClassName('banner')[0];
let i = 0;
banner.addEventListener('click', ()=>{
      sanoq.innerHTML = 'bosildi' + ' ' + i++;
      console.log('marta bosildi ' + i++);
})