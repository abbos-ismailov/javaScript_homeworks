function hasOddNumber(array_1, array_2) {
      array_1.some(
            function (element) {
                  if (element % 2 == 1) {
                        console.log(true);
                  }
                  return false;
            }
      )
      array_2.some(
            function (elem) {
                  if (elem % 2 == 1) {
                        console.log(true);
                  }
                  return false;
            }
      )
}
hasOddNumber([1, 32, 24, 28, 46, 2, 4], [2, 12, 8, 36, 10, 4]);