function total(arr) {
      let sum = 0;
      arr.forEach(element => {
            sum += element;
      });
      console.log(sum);
}
let arr = [1,2,3]
total(arr);