let productBox = document.querySelector('.product-box');
let addedBtn = document.querySelector('.added-btn');
let nameInput = document.getElementById('name-input');
let textInput = document.getElementById('text-input');
let btnOpenModal = document.getElementsByClassName('btn-open-modal')[0];
let editNameInput = document.getElementById('edit-name-input');

// let removeBtn = document.getElementById('remove-btn');

let array = [
      { name: "Redme Not 11 lite", type: "phone", information: "Information ipsum dolor sit amet  porro corporis iste ut, explicabo dolorum dolorem obcaecati commodi quas eius consectetur." },
      { name: "HP", type: "computer", information: "Information ipsum dolor sit amet  porro corporis iste ut, explicabo dolorum dolorem obcaecati commodi quas eius consectetur." },
      { name: "Samsung Gallaxy A52", type: "phone", information: "Information ipsum dolor sit amet  porro corporis iste ut, explicabo dolorum dolorem obcaecati commodi quas eius consectetur." },
      // { name: "Dell", type: "computer", information: "Information ipsum dolor sit amet  porro corporis iste ut, explicabo dolorum dolorem obcaecati commodi quas eius consectetur." },
      // { name: "Samsung", type: "TV", information: "Information ipsum dolor sit amet  porro corporis iste ut, explicabo dolorum dolorem obcaecati commodi quas eius consectetur." },
      // { name: "Apple 14 pro Max", type: "phone", information: "Information ipsum dolor sit amet  porro corporis iste ut, explicabo dolorum dolorem obcaecati commodi quas eius consectetur." },
      // { name: "Redme Not 11 pro", type: "phone", information: "Information ipsum dolor sit amet  porro corporis iste ut, explicabo dolorum dolorem obcaecati commodi quas eius consectetur." },
      // { name: "Redmi TV", type: "TV", information: "Information ipsum dolor sit amet  porro corporis iste ut, explicabo dolorum dolorem obcaecati commodi quas eius consectetur." },
      // { name: "Mac Book Pro 13", type: "computer", information: "Information ipsum dolor sit amet  porro corporis iste ut, explicabo dolorum dolorem obcaecati commodi quas eius consectetur." },
      // { name: "LG", type: "TV", information: "Information ipsum dolor sit amet  porro corporis iste ut, explicabo dolorum dolorem obcaecati commodi quas eius consectetur." },
      // { name: "OKIRA", type: "TV", information: "Information ipsum dolor sit amet  porro corporis iste ut, explicabo dolorum dolorem obcaecati commodi quas eius consectetur." },
      // { name: "Nokia X-200", type: "phone", information: "Information ipsum dolor sit amet  porro corporis iste ut, explicabo dolorum dolorem obcaecati commodi quas eius consectetur." },
      // { name: "Artel", type: "TV", information: "Information ipsum dolor sit amet  porro corporis iste ut, explicabo dolorum dolorem obcaecati commodi quas eius consectetur." },
      // { name: "Acer", type: "computer", information: "Information ipsum dolor sit amet  porro corporis iste ut, explicabo dolorum dolorem obcaecati commodi quas eius consectetur." },
]


function products(productArray) {
      productArray.forEach((element, index) => {
            let templateBox = document.querySelector('.template-box').cloneNode(true).content;
            // let cardImgTop = document.querySelector('.card-img-top');

            let cardTitle = templateBox.querySelector('.card-title');
            cardTitle.innerHTML = element.name;

            let cardText = templateBox.querySelector('.card-text');
            cardText.innerHTML = element.information;

            /////////////////  Product o'chirib yuborish boshladik ///////////////////
            let removeBtn = templateBox.querySelector('#remove-btn');
            removeBtn.addEventListener('click', () => {
                  delete productArray[index];
                  products(productArray);
            })
            //////////// product qo'shish tugadi //////////////


            ///// Tahrirlash function /// 
            let tahrirlashBtn = templateBox.querySelector('.tahrirlash-btn');
            tahrirlashBtn.dataset.bsToggle = 'modal';
            tahrirlashBtn.dataset.bsTarget = '#exampleModal-edit';

            let editBtnEnd = document.querySelector('.edit-btn-end');
            ///// Tahrirlash functionni tugadi ////

            productBox.append(templateBox);
      });

      /////////////////// product qoshish function  //////////////
      btnOpenModal.addEventListener('click', () => {
            let newObject = new Object();
            addedBtn.addEventListener('click', () => {
                  if (nameInput.value == '') {
                        newObject.name = "Maxsulot nomini kiritmadingiz";
                        newObject.information = "Maxsulot xaqida ma'lumot kiritmadingiz";
                        products(productArray);
                  }
                  else if (nameInput.value) {
                        console.log('sa');
                        newObject.name = nameInput.value;
                        newObject.information = textInput.value;
                        products(productArray)
                  }
                  console.log(newObject);
                  nameInput.value = '';

            })
            array.push(newObject);
      })
      /////////////////  Product qoshish tugadi ////////////////////
}
products(array);