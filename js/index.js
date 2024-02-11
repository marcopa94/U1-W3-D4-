const contenitore = document.getElementsByClassName("container")[0];
//////////crea celle
for (let i = 0; i < 70; i++) {
  const celle = document.createElement("div");
  celle.classList.add("celle");
  celle.textContent = i + 1;
  contenitore.appendChild(celle); //applica celle
}
//creo bottone
const button = document.createElement("button");
button.classList.add("btn");
button.innerText = "Genera Numero";
contenitore.appendChild(button);
button.addEventListener("click", function () {
  const nRandom = Math.floor(Math.random() * 60);
  const celle = document.getElementsByClassName("celle");
  //confronto numeri
  for (let i = 0; i < celle.length; i++) {
    if (parseInt(celle[i].textContent) === nRandom) {
      celle[i].style.backgroundColor = "red";
      break;
    }
  }
});
/////////////generazione cartelline
const newSect = document.getElementsByClassName("centro")[0];
const button1 = document.createElement("button");
button1.innerText = "generate card";
button1.classList.add("btn1");
newSect.appendChild(button1);
const section = document.getElementsByClassName("sezione")[0];
button1.onclick = () => {
  const cartelline = document.createElement("div");
  cartelline.classList.add("cartelline");

  /* cartelline.appendChild(newSect); */
  section.appendChild(cartelline);
  for (let i = 0; i < 30; i++) {
    const celle1 = document.createElement("div");
    celle1.classList.add("celle1");
    celle1.textContent = Math.floor(Math.random() * 70);
    cartelline.appendChild(celle1);
  }
};
