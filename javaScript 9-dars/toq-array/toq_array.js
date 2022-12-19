let array1 = [1, 3, 5, 7];
let array2 = [1, 2, 3, 5, 7];
function hasOnlyOddNumbers() {
      for (let i = 0; i < array1.length; i++) {
            if (array1[i] % 2 == 0) {
                  console.log(false + ' Juft son mavjud');
            }
      }
      for (let i = 0; i < array2.length; i++) {
            if (array2[i] % 2 == 0) {
                  console.log(false + ' Juft son mavjud');
            }
      }
      return console.log(true);
}
hasOnlyOddNumbers();