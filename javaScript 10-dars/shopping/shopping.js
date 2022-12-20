function shoppingSpree(arr) {
      let sum = 0;
      arr.forEach(element => {
            sum += element.price;
      });
      return sum;
}

var wishlist = [
      { title: "Tesla Model S", price: 90000 },
      { title: "4 carat diamond ring", price: 45000 },
      { title: "Fancy hacky Sack", price: 5 },
      { title: "Gold fidgit spinner", price: 2000 },
      { title: "A second Tesla Model S", price: 90000 }
];

console.log(shoppingSpree(wishlist)); 