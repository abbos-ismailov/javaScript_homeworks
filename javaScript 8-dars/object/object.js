let person = {
      name: "Abdurrahmon",
      phone: "+998 99 841-85-81",
      birthDate: "12-18-2000",
      createdDate: "06-07-2010",
      bonus: 100000,
      height: 178,
      weight: 70,

      getAge() {
            let date = new Date().getFullYear();
            let birthday = new Date(this.birthDate).getFullYear();
            console.log(date - birthday);
      },
      isHealthy() {
            let healthy = this.height - this.weight;
            return healthy >= 110 ? 'siz sog\'lomsiz' : 'o\'z ustingizda ishlashingiz kerak';
      },
      getBalance() {
            let created = new Date(this.createdDate).getFullYear();
            let date = new Date().getFullYear();
            let difference = date - created;
            let monthlik = this.bonus + (difference * 25000);
            return console.log(monthlik);
      }
}
function getPerson(person) {
      console.log(person.getBalance());
      console.log(person.getAge());
      console.log(person.isHealthy());
}
getPerson(person)