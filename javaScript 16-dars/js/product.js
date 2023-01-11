let array;
let productBox = document.querySelector('.product-box');
let addedBtn = document.querySelector('.added-btn');
let nameInput = document.getElementById('name-input');
let textInput = document.getElementById('text-input');
let btnOpenModal = document.getElementsByClassName('btn-open-modal')[0];
let editNameInput = document.getElementById('edit-name-input');
let imgInput = document.getElementById('img-input');

let productsFromLocalStorage = localStorage.getItem("products")
if (productsFromLocalStorage) {
      array = JSON.parse(productsFromLocalStorage)
      products(array)
}
else {
      array = [
            { id: 1, name: "Redme Not 11 lite", productImg: "https://olcha.uz/image/220x220/products/IPEvlkdiaGo08A3NwdVgrovaXRCw9sschVkhcu2o4LHuc1RgZktml8SgeZtg.jpg", information: "Information ipsum dolor sit amet  porro corporis iste ut, explicabo dolorum dolorem obcaecati commodi quas eius consectetur." },
            { id: 2, name: "HP", productImg: "https://olcha.uz/image/220x220/products/98aqO8iQill384jzmDoESRV2CWfKr8mCBSxxNx8c621NPhFUdNiBtVUyv1yB.", information: "Information ipsum dolor sit amet  porro corporis iste ut, explicabo dolorum dolorem obcaecati commodi quas eius consectetur." },
            { id: 3, name: "Samsung Gallaxy A52", productImg: "https://olcha.uz/image/220x220/products/O9SNIjbc09MNx2HksNKoUNDKggjE0BzrTXY5KsncMc0oebjIbT8zlFl8fOg3.", information: "Information ipsum dolor sit amet  porro corporis iste ut, explicabo dolorum dolorem obcaecati commodi quas eius consectetur." },
            // {id: 4, name: "Dell",productImg:"https://picsum.photos/300/400", information: "Information ipsum dolor sit amet  porro corporis iste ut, explicabo dolorum dolorem obcaecati commodi quas eius consectetur." },
            // {id: 5, name: "Samsung", type: "TV", information: "Information ipsum dolor sit amet  porro corporis iste ut, explicabo dolorum dolorem obcaecati commodi quas eius consectetur." },
            // {id: 6, name: "Apple 14 pro Max", type: "phone", information: "Information ipsum dolor sit amet  porro corporis iste ut, explicabo dolorum dolorem obcaecati commodi quas eius consectetur." },
            // {id: 7, name: "Redme Not 11 pro", type: "phone", information: "Information ipsum dolor sit amet  porro corporis iste ut, explicabo dolorum dolorem obcaecati commodi quas eius consectetur." },
            // {id: 8, name: "Redmi TV", type: "TV", information: "Information ipsum dolor sit amet  porro corporis iste ut, explicabo dolorum dolorem obcaecati commodi quas eius consectetur." },
            // {id: 9, name: "Mac Book Pro 13", type: "computer", information: "Information ipsum dolor sit amet  porro corporis iste ut, explicabo dolorum dolorem obcaecati commodi quas eius consectetur." },
            // {id: 10, name: "LG", type: "TV", information: "Information ipsum dolor sit amet  porro corporis iste ut, explicabo dolorum dolorem obcaecati commodi quas eius consectetur." },
            // {id: 11, name: "OKIRA", type: "TV", information: "Information ipsum dolor sit amet  porro corporis iste ut, explicabo dolorum dolorem obcaecati commodi quas eius consectetur." },
            // {id: 12, name: "Nokia X-200", type: "phone", information: "Information ipsum dolor sit amet  porro corporis iste ut, explicabo dolorum dolorem obcaecati commodi quas eius consectetur." },
            // {id: 13, name: "Artel", type: "TV", information: "Information ipsum dolor sit amet  porro corporis iste ut, explicabo dolorum dolorem obcaecati commodi quas eius consectetur." },
            // {id: 14, name: "Acer", type: "computer", information: "Information ipsum dolor sit amet  porro corporis iste ut, explicabo dolorum dolorem obcaecati commodi quas eius consectetur." },
      ]
}

/////////////////// product qoshish function  //////
addedBtn.addEventListener('click', () => {
      let newObject = new Object();

      if (nameInput.value == '') {
            newObject.name = "Maxsulot nomini kiritmadingiz";
            newObject.information = "Maxsulot xaqida ma'lumot kiritmadingiz";
      }
      else if (nameInput.value) {
            newObject.name = nameInput.value;
            newObject.information = textInput.value;
            newObject.productImg = imgInput.value;
            newObject.id = array.length + 1;
      }
      nameInput.value = '';
      textInput.value = '';
      array.push(newObject);
      localStorage.setItem("products", JSON.stringify(array))
      products(array);
})
//////////////////////////////////////////
function products(productArray) {
      productBox.innerHTML = "";
      productArray.forEach((element, index) => {
            let templateBox = document.querySelector('.template-box').cloneNode(true).content;
            let cardImgTop = templateBox.querySelector('.card-img-top');
            cardImgTop.src = element.productImg;

            let cardTitle = templateBox.querySelector('.card-title');
            cardTitle.innerHTML = element.name;

            let cardText = templateBox.querySelector('.card-text');
            cardText.innerHTML = element.information;

            /////////////////  Product o'chirib yuborish ///////////////////
            let removeBtn = templateBox.querySelector('#remove-btn');
            removeBtn.addEventListener('click', () => {
                  delete productArray[index];
                  products(productArray);
            })

            ///// Tahrirlash function /// 
            let tahrirlashBtn = templateBox.querySelector('.tahrirlash-btn');
            tahrirlashBtn.dataset.bsToggle = 'modal';
            tahrirlashBtn.dataset.bsTarget = '#exampleModal-edit';
            // localStorage.setItem("id" , element.id); // 

            let editBtnEnd = document.querySelector('.edit-btn-end');
            editBtnEnd.addEventListener('click', () => {

            })
            ///// Tahrirlash functionni tugadi ////

            productBox.append(templateBox);
      });
}
products(array);