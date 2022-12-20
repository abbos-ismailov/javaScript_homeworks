function flatten(arr) {
      let a = [];
      let result = arr.join(' ');
      a.push(result);
      return a;
}

var arrays = [
      ["1", "2", "3"],
      [true],
      [4, 5, 6]
];

console.log(flatten(arrays));