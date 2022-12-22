// 8. Berilgan o'quvchilar ro'yhati massivni guruh bo'yicha bo'lib bering.
function studentsByGroup(arr) {
      let array_79 = [];
      let array_70 = [];
      let array_77 = [];
      arr.filter((el) => {
            if (el.group == 'NT-79') {
                  array_79.push(el)
            }
      })
      console.log("NT-79: " , array_79);

      arr.filter((el) => {
            if (el.group == 'NT-70') {
                  array_70.push(el);
            }
      })
      console.log("NT-70: " , array_70);

      arr.filter((el) => {
            if (el.group == 'NT-77') {
                  array_77.push(el);
            }
      })
      console.log("NT-77: " , array_77);
}

const students = [
      { name: "Bob", group: "NT-79", voted: true },
      { name: "Jake", group: "NT-77", voted: true },
      { name: "Kate", group: "NT-70", voted: false },
      { name: "Sam", group: "NT-77", voted: false },
      { name: "Phil", group: "NT-70", voted: true },
      { name: "Ed", group: "NT-79", voted: true },
      { name: "Tami", group: "NT-77", voted: true },
      { name: "Mary", group: "NT-70", voted: false },
      { name: "Becky", group: "NT-79", voted: false },
      { name: "Joey", group: "NT-70", voted: true },
      { name: "Jeff", group: "NT-79", voted: true },
      { name: "Zack", group: "NT-79", voted: false },
];

studentsByGroup(students);
  // Natija:
  // {
  //     "NT-79": [
  //         { name: "Bob", group: "NT-79", voted: true },
  //         { name: "Ed", group: "NT-79", voted: true },
  //         { name: "Becky", group: "NT-79", voted: false },
  //         { name: "Jeff", group: "NT-79", voted: true },
  //         { name: "Zack", group: "NT-79", voted: false },
  //     ],
  //     "NT-70": [
  //         { name: "Kate", group: "NT-70", voted: false },
  //         { name: "Mary", group: "NT-70", voted: false },
  //         { name: "Joey", group: "NT-70", voted: true },
  //     ],
  //     "NT-77": [
  //         { name: "Jake", group: "NT-77", voted: true },
  //         { name: "Sam", group: "NT-77", voted: false },
  //         { name: "Tami", group: "NT-77", voted: true },
  //     ]
  // }