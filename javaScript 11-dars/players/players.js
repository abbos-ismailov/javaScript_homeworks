let players = [{name: 'Wes', position: 'WR'}, {name: 'Coty', position: 'QB'}, {name: 'Joe', position: 'WR'}];
const filtered = players.filter((el) => {
      if (el.position === 'WR') {
            return el;
      }
})
console.log(filtered);
// Berilgan o'yinchilar ro'yhatidan lavozimi WR bo'lganlarini qaytaring (Lavozim: position)