function func() {
let sorov = prompt('Login kiriting / admin, dasturchi');
let chiqarish = document.getElementById('chiqarish');
      if (sorov === 'admin') {
            let parol = prompt('parol kiriting');
            chiqarish.innerHTML = parol;
      }
      else if (sorov === '' || sorov === null) {
            chiqarish.innerHTML = 'bekor qilindi'
      }
      else if (sorov === 'dasturchi') {
            chiqarish.innerHTML = 'Xush kelibsiz...'
      }
}
func()

