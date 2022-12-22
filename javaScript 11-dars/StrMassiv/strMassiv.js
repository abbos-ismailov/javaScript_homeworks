// 3. Stringlar massivi berilgan. Faqat uzunligi 5 dan kichik bo'lgan elementlaridan tashkil topgan
//  massiv qaytaradigan funksiya yozing

function fiveCharactersOrFewerOnly(arr) {
      const sum = arr.filter((elem) => {
            let a = elem.split('').length;
            if (a <= 5) {
                  return elem;
            }
            return;
      })
      return sum;
}
console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]