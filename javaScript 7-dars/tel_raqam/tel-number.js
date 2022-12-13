let tel = document.getElementById('tel');
let phone = tel.innerHTML.padEnd(13, 'p').padEnd(14,'h').padEnd(15, 'o').padEnd(16, 'n').padEnd(17, 'e');
tel.innerHTML = phone;