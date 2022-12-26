// 8. Berilgan o'quvchilar ro'yhati massivni guruh bo'yicha bo'lib bering.
function studentsByGroup(arr) {
      return arr.reduce((acc , cv) => {
            if (!acc[cv.group]) {
                  acc[cv.group] = [];
                  acc[cv.group].push(cv);
            }
            else{
                  acc[cv.group].push(cv)
            }
            return acc;
      }, {})
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

console.log(studentsByGroup(students)); 
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