// 4. Berilgan massivdan clubga tegishli bo'lmagan odamlardan tashqari odamlarni qaytaradigan funksiya yozing;
function peopleWhoBelongToTheIlluminati(arr) {
      return arr.filter((elem) => elem.member);
}
console.log(
      peopleWhoBelongToTheIlluminati([
            { name: "Angelina Jolie", member: true },
            { name: "Eric Jones", member: false },
            { name: "Paris Hilton", member: true },
            { name: "Kayne West", member: false },
            { name: "Bob Ziroll", member: true },
      ])
);
  // =>
  //[ { name: 'Angelina Jolie', member: true },
  //  { name: 'Paris Hilton', member: true },
  //  { name: 'Bob Ziroll', member: true } ]
