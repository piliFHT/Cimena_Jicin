let nameInput = document.getElementById("nameInput");
let emailInput = document.getElementById("emailInput");

let poleSedadel = [
  { sedadlo: "A1", rezervace: { occupied: false, name: "", email: "" } },
  { sedadlo: "A2", rezervace: { occupied: false, name: "", email: "" } },
  { sedadlo: "A3", rezervace: { occupied: false, name: "", email: "" } },
  { sedadlo: "A4", rezervace: { occupied: false, name: "", email: "" } },
  { sedadlo: "A5", rezervace: { occupied: false, name: "", email: "" } },
  { sedadlo: "A6", rezervace: { occupied: false, name: "", email: "" } },
  { sedadlo: "B1", rezervace: { occupied: false, name: "", email: "" } },
  { sedadlo: "B2", rezervace: { occupied: false, name: "", email: "" } },
  { sedadlo: "B3", rezervace: { occupied: false, name: "", email: "" } },
  { sedadlo: "B4", rezervace: { occupied: false, name: "", email: "" } },
  { sedadlo: "B5", rezervace: { occupied: false, name: "", email: "" } },
  { sedadlo: "B6", rezervace: { occupied: false, name: "", email: "" } },
  { sedadlo: "C1", rezervace: { occupied: false, name: "", email: "" } },
  { sedadlo: "C2", rezervace: { occupied: false, name: "", email: "" } },
  { sedadlo: "C3", rezervace: { occupied: false, name: "", email: "" } },
  { sedadlo: "C4", rezervace: { occupied: false, name: "", email: "" } },
  { sedadlo: "C5", rezervace: { occupied: false, name: "", email: "" } },
  { sedadlo: "C6", rezervace: { occupied: false, name: "", email: "" } },
  { sedadlo: "D1", rezervace: { occupied: false, name: "", email: "" } },
  { sedadlo: "D2", rezervace: { occupied: false, name: "", email: "" } },
  { sedadlo: "D3", rezervace: { occupied: false, name: "", email: "" } },
  { sedadlo: "D4", rezervace: { occupied: false, name: "", email: "" } },
  { sedadlo: "D5", rezervace: { occupied: false, name: "", email: "" } },
  { sedadlo: "D6", rezervace: { occupied: false, name: "", email: "" } },
  { sedadlo: "E1", rezervace: { occupied: false, name: "", email: "" } },
  { sedadlo: "E2", rezervace: { occupied: false, name: "", email: "" } },
  { sedadlo: "E3", rezervace: { occupied: false, name: "", email: "" } },
  { sedadlo: "E4", rezervace: { occupied: false, name: "", email: "" } },
  { sedadlo: "E5", rezervace: { occupied: false, name: "", email: "" } },
  { sedadlo: "E6", rezervace: { occupied: false, name: "", email: "" } },
  { sedadlo: "F1", rezervace: { occupied: false, name: "", email: "" } },
  { sedadlo: "F2", rezervace: { occupied: false, name: "", email: "" } },
  { sedadlo: "F3", rezervace: { occupied: false, name: "", email: "" } },
  { sedadlo: "F4", rezervace: { occupied: false, name: "", email: "" } },
  { sedadlo: "F5", rezervace: { occupied: false, name: "", email: "" } },
  { sedadlo: "F6", rezervace: { occupied: false, name: "", email: "" } },
  { sedadlo: "G1", rezervace: { occupied: false, name: "", email: "" } },
  { sedadlo: "G2", rezervace: { occupied: false, name: "", email: "" } },
  { sedadlo: "G3", rezervace: { occupied: false, name: "", email: "" } },
  { sedadlo: "G4", rezervace: { occupied: false, name: "", email: "" } },
  { sedadlo: "G5", rezervace: { occupied: false, name: "", email: "" } },
  { sedadlo: "G6", rezervace: { occupied: false, name: "", email: "" } },
  { sedadlo: "H1", rezervace: { occupied: false, name: "", email: "" } },
  { sedadlo: "H2", rezervace: { occupied: false, name: "", email: "" } },
  { sedadlo: "H3", rezervace: { occupied: false, name: "", email: "" } },
  { sedadlo: "H4", rezervace: { occupied: false, name: "", email: "" } },
  { sedadlo: "H5", rezervace: { occupied: false, name: "", email: "" } },
  { sedadlo: "H6", rezervace: { occupied: false, name: "", email: "" } },
  { sedadlo: "I1", rezervace: { occupied: false, name: "", email: "" } },
  { sedadlo: "I2", rezervace: { occupied: false, name: "", email: "" } },
  { sedadlo: "I3", rezervace: { occupied: false, name: "", email: "" } },
  { sedadlo: "I4", rezervace: { occupied: false, name: "", email: "" } },
  { sedadlo: "I5", rezervace: { occupied: false, name: "", email: "" } },
  { sedadlo: "I6", rezervace: { occupied: false, name: "", email: "" } },
];

let penize = 1;

function generateTableHTML() {
  let tableHTML = "<table class='tableHTML'";

  poleSedadel.forEach((x, index) => {
    if (index % 6 === 0) {
      if (index !== 0) {
        tableHTML += "</tr>";
      }
      tableHTML += "<tr>";
    }
    let backgroundColor = x.rezervace.occupied ? "red" : "";
    let buttonText = x.sedadlo;
    if (x.rezervace.occupied) {
      buttonText += `<br/>${x.rezervace.name}<br/>${x.rezervace.email}`;
    } else {
      buttonText += `<br/>Volné sedadlo<br/>180Kč`;
    }

    tableHTML += `<td><button class="reserveBtn btn my-2" id="id${index}" style="background-color: ${backgroundColor};" onClick="reserve(${index})">${buttonText}</button></td>`;
  });
  tableHTML += `</tr></table><br/><p class="lead">`;
  return tableHTML;
}

function reserve(index) {
  const seat = poleSedadel[index];
  if (!seat.rezervace.occupied) {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    if (name != "" && email != "") {
      seat.rezervace.occupied = true;
      seat.rezervace.name = name;
      seat.rezervace.email = email;
      root.innerHTML = generateTableHTML();
    } else {
      alert("Vyplňte prosím všechna povinná pole!");
    }
  } else {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    if (nameInput.value.trim() == seat.rezervace.name && emailInput.value.trim() == seat.rezervace.email) {
      seat.rezervace.occupied = false;
      seat.rezervace.name = "";
      seat.rezervace.email = "";
    }else{
        alert("Prdel");
    }

    root.innerHTML = generateTableHTML();
  }
  // poleSedadel[index].rezervace = !poleSedadel[index].rezervace;
  // root.innerHTML = generateTableHTML();
}

document.getElementById("resBtn").onclick = () => {
  saveToLocalStorage(poleSedadel);
  root.innerHTML = generateTableHTML();
};
// Function to save data to local storage
function saveToLocalStorage(data) {
  localStorage.setItem(
    document.getElementById("selFil").value,
    JSON.stringify(data)
  );
}

// Function to load data from local storage
function loadFromLocalStorage() {
  const storedData = localStorage.getItem(
    document.getElementById("selFil").value
  );
  if (storedData) {
    poleSedadel = JSON.parse(storedData);
  }
}

function generateDifferentReservation() {
  // For now, let's just reset all reservations
  poleSedadel.forEach(
    (seat) => (seat.rezervace = { occupied: false, name: "", email: "" })
  );
  location.reload();
  root.innerHTML = generateTableHTML();
}

//let selectedFilm =

function handleFilmSelection() {
  selectFilm.value;

  generateDifferentReservation();

  // You can add specific logic for each film here
  switch (selectedFilm) {
    case "Top Gun: Maverick":
      loadFromLocalStorage();
      break;
    case "Le Mans":
      loadFromLocalStorage();
      break;
    case "Fight Club":
      loadFromLocalStorage();
      break;
    default:
      break;
  }
}

function handleReservation() {}

let root = document.getElementById("root");

loadFromLocalStorage();

root.innerHTML = generateTableHTML();

let selectFilm = document.getElementById("selFil");
selectFilm.addEventListener("change", handleFilmSelection);

// Add event listener for the reservation button
let reserveBtn = document.getElementById("resBtn");
reserveBtn.addEventListener("click", handleReservation);
