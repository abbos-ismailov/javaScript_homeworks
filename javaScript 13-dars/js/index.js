const students = [
      { name: "Bekmurod", group: "NT-79", success: true },
      { name: "Asliddin", group: "NT-77", success: true },
      { name: "Ahmadxon", group: "NT-70", success: false },
      { name: "Ibrohim", group: "NT-77", success: false },
      { name: "Xojiakbarxon", group: "NT-70", success: true },
      { name: "Abbos", group: "NT-79", success: true },
      { name: "Bahodir", group: "NT-79", success: true },
      { name: "Abduraxim", group: "NT-70", success: false },
      { name: "Komiljon", group: "NT-79", success: false },
      { name: "Javlonbek", group: "NT-70", success: true },
      { name: "Muhammadrizo", group: "NT-79", success: true },
      { name: "Azizbek", group: "NT-79", success: false },
      { name: "Jahongir", group: "NT-71", success: false },
      { name: "Alisher", group: "NT-79", success: true },
];

let tableBody = document.getElementById('tBody');

function allStudents(student) {
      tableBody.innerHTML = '';
      let fragment = new DocumentFragment();
      student.forEach((element, index) => {
            let tr = document.createElement('tr');

            let thOrder = document.createElement('th');
            thOrder.innerHTML = index + 1;

            let tdName = document.createElement('td');
            tdName.innerHTML = element.name;

            let tdGroup = document.createElement('td');
            tdGroup.innerHTML = element.group;

            let tdNatija = document.createElement('td');
            let spanNatija = document.createElement('span');
            spanNatija.classList.add('badge');
            if (element.success) {
                  spanNatija.innerHTML = 'O\'tdi';
                  spanNatija.classList.add('text-bg-primary', 'px-3', 'py-2')
            }
            else {
                  spanNatija.innerHTML = 'Yiqildi';
                  spanNatija.classList.add('text-bg-danger', 'px-3', 'py-2')
            }
            //// Edit started
            let tdEdit = document.createElement('td');
            let spanEdit = document.createElement('span');
            tdEdit.append(spanEdit);
            spanEdit.innerHTML = 'Edit';
            spanEdit.classList.add('badge', 'text-bg-success', 'px-3', 'py-2');
            //// Edit function started
            spanEdit.dataset.bsToggle = 'modal';
            spanEdit.dataset.bsTarget = '#exampleModal';
            spanEdit.addEventListener('click', () => {
                  let modalBody = document.getElementById('modal-body');
                  modalBody.innerHTML = element.name + ' ' + element.group;
            })

            /// Remove started
            let tdRemove = document.createElement('td');
            let spanRemove = document.createElement('span');
            tdRemove.append(spanRemove);
            spanRemove.innerHTML = 'Remove';
            spanRemove.classList.add('badge', 'text-bg-danger', 'px-3', 'py-2');
            /// spanRemove function started
            spanRemove.addEventListener('click', () => {
                  student.splice(index, 1);
                  allStudents(students);
            })

            //// tr bosilganda alert ga chiqish
            tr.addEventListener('click', () => {
                  if (element.success) {
                        alert(element.name + ' ' + element.success);
                  }
                  else{
                        alert(element.name + ' ' + element.success);
                  }
            })
            tdNatija.append(spanNatija);
            tr.append(thOrder, tdName, tdGroup, tdNatija, tdEdit, tdRemove)
            fragment.append(tr);
      });
      tableBody.append(fragment);
}

allStudents(students)