const students = [
      { name: "Bekmurod", group: "NT-79", success: true },
      { name: "Asliddin", group: "NT-77", success: true },
      { name: "Ahmadxon", group: "NT-70", success: false },
      { name: "Ibrohim", group: "NT-77", success: false },
      { name: "Xojiakbarxon", group: "NT-70", success: true },
      { name: "Abbos", group: "NT-79", success: true },
      { name: "Iroda", group: "NT-77", success: true },
      { name: "Abduraxim", group: "NT-70", success: false },
      { name: "Komiljon", group: "NT-79", success: false },
      { name: "Javlonbek", group: "NT-70", success: true },
      { name: "Muhammadrizo", group: "NT-79", success: true },
      { name: "Azizbek", group: "NT-79", success: false },
      { name: "Jahongir", group: "NT-71", success: false },
      { name: "Alisher", group: "NT-79", success: true },
];

let tBody = document.getElementById('tBody');


function allStudents(s) {
      tBody.innerHTML = " ";

      for (let i = 0; i < s.length; i++) {
            let tr = document.createElement('tr');
            let thOrders = document.createElement('th');
            thOrders.innerHTML = i + 1;
            let tdName = document.createElement('td');
            tdName.innerHTML = s[i].name;
            let tdGroup = document.createElement('td');
            tdGroup.innerHTML = s[i].group;
            let tdSucces = document.createElement('td');
            let span = document.createElement('span');
            span.classList.add('badge');
            if (s[i].success) {
                  span.classList.add('text-bg-primary')
                  span.innerHTML = 'O\'tdi';
            }
            else {
                  span.classList.add('text-bg-danger');
                  span.innerHTML = 'Yiqildi';
            }
            tdSucces.append(span);

            tr.addEventListener('click', () => {
                  if (s[i].success) {
                        alert(tdName.innerHTML + ' O\'tdi')
                  }
                  else {
                        alert(tdName.innerHTML + ' Yiqildi')
                  }
            })
            tr.append(thOrders, tdName, tdGroup, tdSucces);
            tBody.appendChild(tr);
      }
}

allStudents(students);


let studentName = document.getElementById('name');
studentName.addEventListener('input', (el) => {
      searchValue = el.target.value;
      let result = students.filter((element) => element.name.toLowerCase().includes(searchValue.toLowerCase())
      )
      allStudents(result);
})

let group = document.getElementById('group');
group.addEventListener('change', (element) => {
      let searchGroup = element.target.value;
      console.log(searchGroup);
      let resultGroup = students.filter((elem, index) => {
            let groupFiltered = elem.group.toLowerCase().includes(searchGroup.toLowerCase());
            if (groupFiltered) {
                  let tr = document.createElement('tr');
                  let thOrders = document.createElement('th');
                  thOrders.innerHTML = index;
                  let tdName = document.createElement('td');
                  tdName.innerHTML = elem.name;
                  let tdGroup = document.createElement('td');
                  tdGroup.innerHTML = elem.group;
                  let tdSucces = document.createElement('td');
                  let span = document.createElement('span');
                  span.classList.add('badge');
                  if (elem.success) {
                        span.classList.add('text-bg-primary')
                        span.innerHTML = 'O\'tdi';
                  }
                  else {
                        span.classList.add('text-bg-danger');
                        span.innerHTML = 'Yiqildi';
                  }
                  tdSucces.append(span);
                  tr.classList.add('mt-5');
                  tr.append(thOrders, tdName, tdGroup, tdSucces);
                  tableBody.appendChild(tr);
            }
      })
})