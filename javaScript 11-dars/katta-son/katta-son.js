// 1. Berilgan sonlar massividan berilgan sondan kattalarini qaytaruvchi funksiya yozing.
function fiveAndGreaterOnly(arr, min) {
     let sum = arr.filter((elem) => elem > min ? elem : 0)
     return sum;
}
  console.log(fiveAndGreaterOnly([3, 6, 8, 2], 5)); /// [6, 8]