const creaTabellone = (celle) => {
  const tabella = document.getElementById("creaTomb");

  for (let i = 0; i < 76; i++) {
    const cellDiv = document.createElement("div");
    const cellH3 = document.createElement("h3");
    cellDiv.className = "cella";
    cellH3.innerText = i + 1;
    cellDiv.appendChild(cellH3);
    tabella.appendChild(cellDiv);
    console.log(cellDiv);
  }
};

const btn1 = document.getElementById("go");
btn1.onclick = function (e) {
  const casualNum = Math.floor(Math.random() * 76);
  const array = document.querySelectorAll(".cella");
  console.log(casualNum, array[casualNum - 1]);
};

creaTabellone();
