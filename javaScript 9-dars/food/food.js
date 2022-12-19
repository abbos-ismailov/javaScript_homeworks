let food_1 = ['Noodle', 'Pasta', 'Ice-cream', 'marojna'];
let food_2 = ['Fries', 'Ice-cream', 'Pizza', 'kola', 'Pasta', 'sweets'];

let food = food_1.some(
      function (element){
            for (let i = 0; i < food_2.length; i++){
                  if (element == food_2[i]) {
                        console.log(element);
                  }
            }
      }
);
