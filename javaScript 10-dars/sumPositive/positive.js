let array = [1, -4, 12, 0, -3, 29, -150];
function sumPositive(arr) {
      let sum = 0;
      arr.forEach(element => {
         if (element > 0) {
            sum += element
         }   
      });
      console.log(sum);
}
sumPositive(array)