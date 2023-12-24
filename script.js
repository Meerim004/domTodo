const intOne = document.querySelector(".int-1");
const intTwo = document.querySelector(".int-2");
const intThree = document.querySelector(".int-3");
const Btn = document.querySelector(".box-btn");
const click = document.querySelector(".click");
const cont = document.querySelector(".contact");
getProduct();

click.addEventListener("click", () => {
   let obj = {
      name: intOne.value,
      LastName: intTwo.value,
      image: intThree.value,
      id: Date.now(),
   };
   let data = JSON.parse(localStorage.getItem("key")) || [];
   data.push(obj);
   localStorage.setItem("key", JSON.stringify(data));
   getProduct();
});

function getProduct() {
   let data = JSON.parse(localStorage.getItem("key")) || [];
   data.forEach((el) => {
      let info = document.createElement("div");
      let infoText = document.createElement("div");
      let infoImg = document.createElement("div");
      let namePi = document.createElement("p");
      let LastName = document.createElement("p");
      let image = document.createElement("img");
      image.style.width = '200px'
      
      let infoBtn = document.createElement("div");
      let infoDel = document.createElement("button");
      let infoEdit = document.createElement("button");
      let infoHeart = document.createElement("button");

      image.src = el.image;
      name.innerText = el.name;
      LastName.innerText = el.LastName;

      
      infoDel.innerHTML = `<ion-icon name="trash"></ion-icon>`;
      infoHeart.innerHTML =`<ion-icon name="heart"></ion-icon>`;
      infoEdit.innerHTML = `<ion-icon name="pencil"></ion-icon>`;
      infoText.append(namePi);
      infoText.append(LastName);
      infoImg.append(image);
      info.append(infoImg);
      info.append(infoText);

      infoBtn.append(infoDel);
      infoBtn.append(infoHeart);
      infoBtn.append(infoEdit);

      info.append(infoBtn);
      cont.append(info);
   });
}
