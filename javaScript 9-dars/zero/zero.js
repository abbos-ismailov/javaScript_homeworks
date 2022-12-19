function hasAZero(one, two) {
      let array = [one, two];
      let regex = /0/
      array.some(
            function (element) {
                  let result = regex.test(element);
                  if (result == true) {
                        console.log(`${element} true`);
                  }
            }
      )
}
hasAZero(33321232131012, 12121)