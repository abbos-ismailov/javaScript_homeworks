function hasNoDuplicates(array1) {
      for (let i = 0; i < array1.length; i++) {
            for (let j = 0; j < array1.length; j++) {
                  if (array1[i] == array1[j] && i != j) {
                        return  console.log(false + ' DUBLICATE');
                  }
            }
      }
      return console.log(true + ' dublicate emas');
}
hasNoDuplicates([1, 2, 3, 1])