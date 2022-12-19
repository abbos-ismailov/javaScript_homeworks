let yil = prompt('yilni kiriting');
let oy = prompt('oyni kiriting') - 1;
let kun = prompt('kunni kiriting');
let date = new Date();

date.setFullYear(yil , oy, kun);
let day = date.getDay();
let week_days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
console.log(week_days[day]);
if (day == 0 || day == 6) {
      console.log('dam olish kuni');
}
else{
      console.log('dam olish kunimas');
}