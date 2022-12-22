// 2. Berilgan massivning faqat juft sonlardan iborat elementlaridan tashkil topgan
//  yangi massiv qaytaradigan funksiya yozing

function evensOnly(arr) {
      let sum = arr.filter((element) => {
            if (element % 2 === 0) {
                  return element;
            }
            return;
      });
      return sum;
}
console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]