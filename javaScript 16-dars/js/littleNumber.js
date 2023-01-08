let array = [1, 2, 4, 5, 6, 7, 8, 9, 12, 45, 78, 89];
function number(param) {
      let res = Math.min(...param)
      console.log(res);
}
number(array);