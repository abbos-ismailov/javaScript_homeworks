let odamlar_name = prompt('5 ta ot kiriting');
let array = odamlar_name.split(' ');
for (let i = 0; i < array.length; i++){
      if (array[i].toLowerCase().includes('abdu')) {
            console.log(array[i]);
      }
      else if (array[i].toLowerCase().includes('gul')) {
            console.log(array[i]);
      }
      else{
            console.log('Boshqa ismlar: ' + array[i]);
      }
}
