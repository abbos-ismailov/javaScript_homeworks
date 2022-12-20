function calculateLength(array){
      let newArray = [];
      let result = array.some(
            function (elem) {
                 let a = elem.split('');
                 newArray.push(a.length);
            }
      )
      console.log(newArray);
}
calculateLength(["hello", "what", "is", "up", "dude"]) 