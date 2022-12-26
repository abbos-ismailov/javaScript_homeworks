// 1. Berilgan sonlar massividan berilgan sondan kattalarini qaytaruvchi funksiya yozing.
// function fiveAndGreaterOnly(arr, min) {
//      let sum = arr.filter((elem) => elem > min)
//      return sum;
// }
//   console.log(fiveAndGreaterOnly([3, 6, 8, 2], 5)); /// [6, 8]


function sartarovka(arr) {
     let son = arr.reduce((acc, cv) => {
          if (acc[cv.name === undefined]) {
               acc[cv.name] = []
               acc[cv.name].push(cv)
          }
          else {
               acc[cv.name].push(cv)
          }
          return acc;
     }, {})
     return son;
}


let array = [
     { name: 'bob', age: 17 },
     { name: 'stiv', age: 17 },
     { name: 'gul', age: 18 },
     { name: 'bob', age: 18 },
     { name: 'stiv', age: 19 },
     { name: 'gul', age: 19 }
]
console.log(sartarovka(array));