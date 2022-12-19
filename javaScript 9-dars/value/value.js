let values1= ['Apple', 1, false];
let values2 = ['Fries', 2 , true, 'Apple'];
let values3 = ['Mars', 9, 'Apple'];

values2.some(
      function (el) {
            for (let i = 0; i < values1.length; i++){
                  if (el == values1[i]) {
                        values3.some(
                              function (elem){
                                    if (elem == values1[i]) {
                                          console.log(elem);
                                    }
                              }
                        )
                  }
            }
      }
)