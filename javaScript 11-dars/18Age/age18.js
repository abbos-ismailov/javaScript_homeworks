// 5. 18 yoshdan kattalarni qaytaruvchi funksiya yozing.

function ofAge(arr) {
      return arr.filter((el) => el.age >= 18);
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
//[ { name: 'Angelina Jolie', age: 80 },
//  { name: 'Bob Ziroll', age: 100 } ]