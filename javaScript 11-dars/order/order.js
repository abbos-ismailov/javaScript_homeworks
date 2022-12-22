// 6. Berilgan massivni yoshi bo'yicha tartiblang.
function ofAge(arr) {
      const sort = arr.sort((a, b) => a.age - b.age);
      return sort;
}    
console.log(
    ofAge([
        { name: "Angelina Jolie", age: 80 },
        { name: "Eric Jones", age: 2 },
        { name: "Paris Hilton", age: 5 },
        { name: "Kayne West", age: 16 },
        { name: "Bob Ziroll", age: 100 },
    ])
);
