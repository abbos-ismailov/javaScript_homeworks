var voters = [
      { name: 'Bob', age: 30, voted: true },
      { name: 'Jake', age: 32, voted: true },
      { name: 'Kate', age: 25, voted: false },
      { name: 'Sam', age: 20, voted: false },
      { name: 'Phil', age: 21, voted: true },
      { name: 'Ed', age: 55, voted: true },
      { name: 'Tami', age: 54, voted: true },
      { name: 'Mary', age: 31, voted: false },
      { name: 'Becky', age: 43, voted: false },
      { name: 'Joey', age: 41, voted: true },
      { name: 'Jeff', age: 30, voted: true },
      { name: 'Zack', age: 19, voted: false }
];

function voterResults(arr) {
      let sum = 0;
      let ikki = 0;
      let uch = 0;
      for (let i = 0; i < arr.length; i++){
           if (arr[i].voted === true){
                  if (arr[i].age <= 25) {
                        sum++;
                  }
                  if (arr[i].age <= 35 && arr[i].age >= 26) {
                        ikki++;
                  }
                  if (arr[i].age >= 36) {
                        uch++;
                  }
           }
      }
      console.log(`yoshlar ${sum}`);
      console.log(`o'rta yosh ${ikki}`);
      console.log(`keksalar ${uch}`);
}

voterResults(voters);