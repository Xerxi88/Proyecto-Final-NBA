window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("bajar", window.scrollY > 0);
});

const inputFecha = document.getElementById("fecha");
const fechaActual = new Date().toISOString().slice(0, 10);
inputFecha.value = fechaActual;

const cleanBox=()=>{
  document.querySelector(".containerScore").innerHTML="";
}

$(function () {
  $("#fecha").datepicker({
    dateFormat: "yy-mm-dd",
    position: { my: "left top", at: "left bottom", of: "#fecha" },
    prevText: "⬅",
    nextText: "➡",
    firstDay: 1,
    onSelect: function (dateText) {
      cleanBox();
      let fechaSeleccionada = dateText;
      getNbaGames(fechaSeleccionada);
    },
  });
});

let fecha = new Date();
let dia = fecha.getDate().toString().padStart(2, "0");
let mes = (fecha.getMonth() + 1).toString().padStart(2, "0");
let anio = fecha.getFullYear().toString();
let fechaSeleccionada = `${anio}-${mes}-${dia}`;

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "3a426db377mshd8bbe90792eddacp18f917jsnd53b33d89dbe",
    "X-RapidAPI-Host": "api-nba-v1.p.rapidapi.com",
  },
};

const getNbaGames = async (fechaSeleccionada) => {
  try {
    const response = await fetch(
      `https://api-nba-v1.p.rapidapi.com/games?date=${fechaSeleccionada}`,
      options
    );
    const data = await response.json();
    console.log(data);

    for (const item of data.response) {

      if (item.status.long !== "Scheduled") {

        printTable(item);
        
      } else {

        printEmptyTable(item);
        
      }
    }
  } catch (error) {
  }
};

getNbaGames(fechaSeleccionada);



const getNbaGamesLive = async () => {
  try {
    const response = await fetch(
      `https://api-nba-v1.p.rapidapi.com/games?live=all`,
      options
    );
    const data = await response.json();
    console.log(data);
  
    for (const item of data.response) {
      
      printTable(item);
   
    }
  } catch (error) {
  }
};

getNbaGamesLive();

setInterval(() => {
  cleanBox();
  getNbaGamesLive();
  getNbaGames(fechaSeleccionada);
}, 120_000);


const printTable = (item) => {
  const game = document.querySelector(`.containerScore`);
  const template = document.querySelector("#template-game").content;
  const clone = template.cloneNode(true);
  const fragment = document.createDocumentFragment();

  clone.querySelector("div img").setAttribute("src", item.teams.home.logo);
  clone.querySelectorAll("div img")[1].setAttribute("src", item.teams.visitors.logo);
  clone.querySelector("tbody tr td").textContent = `${item.teams.home.name}`;
  clone.querySelectorAll("tbody tr td")[1].textContent = `${item.scores.home.linescore[0]}`;
  clone.querySelectorAll("tbody tr td")[2].textContent = `${item.scores.home.linescore[1]}`;
  clone.querySelectorAll("tbody tr td")[3].textContent = `${item.scores.home.linescore[2]}`;
  clone.querySelectorAll("tbody tr td")[4].textContent = `${item.scores.home.linescore[3]}`;
  clone.querySelectorAll("tbody tr td")[5].textContent = `${item.scores.home.points}`;
  clone.querySelectorAll("tbody tr td")[6].textContent = `${item.status.long}`;
  clone.querySelectorAll("tbody tr td")[7].textContent = `${item.teams.visitors.name}`;
  clone.querySelectorAll("tbody tr td")[8].textContent = `${item.scores.visitors.linescore[0]}`;
  clone.querySelectorAll("tbody tr td")[9].textContent = `${item.scores.visitors.linescore[1]}`;
  clone.querySelectorAll("tbody tr td")[10].textContent = `${item.scores.visitors.linescore[2]}`;
  clone.querySelectorAll("tbody tr td")[11].textContent = `${item.scores.visitors.linescore[3]}`;
  clone.querySelectorAll("tbody tr td")[12].textContent = `${item.scores.visitors.points}`;

  if (item.status.clock === null) {
    clone.querySelectorAll("tbody tr td")[13].textContent = ``;
  } else {
    clone.querySelectorAll("tbody tr td")[13].textContent = `${item.status.clock}`;
  }

  fragment.appendChild(clone);
  game.appendChild(fragment);
};


const printEmptyTable = (item) => {
  const game = document.querySelector(`.containerScore`);
  const template = document.querySelector("#template-game-empty").content;
  const clone = template.cloneNode(true);
  const fragment = document.createDocumentFragment();

  clone.querySelector("div img").setAttribute("src", item.teams.home.logo);
  clone.querySelectorAll("div img")[1].setAttribute("src", item.teams.visitors.logo);
  clone.querySelector("tbody tr td").textContent = `${item.teams.home.name}`;
  clone.querySelectorAll("tbody tr td")[6].textContent = `Starts at: ${new Date(item.date.start).toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}h`;
  clone.querySelectorAll("tbody tr td")[7].textContent = `${item.teams.visitors.name}`;

  fragment.appendChild(clone);
  game.appendChild(fragment);
};
