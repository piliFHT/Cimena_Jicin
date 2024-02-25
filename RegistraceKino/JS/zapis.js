
let poleSedadel = [
    { sedadlo: "A1", rezervace: false },
    { sedadlo: "A2", rezervace: false },
    { sedadlo: "A3", rezervace: false },
    { sedadlo: "A4", rezervace: false },
    { sedadlo: "A5", rezervace: false },
    { sedadlo: "A6", rezervace: false },
    { sedadlo: "B1", rezervace: false },
    { sedadlo: "B2", rezervace: false },
    { sedadlo: "B3", rezervace: false },
    { sedadlo: "B4", rezervace: false },
    { sedadlo: "B5", rezervace: false },
    { sedadlo: "B6", rezervace: false },
    { sedadlo: "C1", rezervace: false },
    { sedadlo: "C2", rezervace: false },
    { sedadlo: "C3", rezervace: false },
    { sedadlo: "C4", rezervace: false },
    { sedadlo: "C5", rezervace: false },
    { sedadlo: "C6", rezervace: false },
    { sedadlo: "D1", rezervace: false },
    { sedadlo: "D2", rezervace: false },
    { sedadlo: "D3", rezervace: false },
    { sedadlo: "D4", rezervace: false },
    { sedadlo: "D5", rezervace: false },
    { sedadlo: "D6", rezervace: false },
    { sedadlo: "E1", rezervace: false },
    { sedadlo: "E2", rezervace: false },
    { sedadlo: "E3", rezervace: false },
    { sedadlo: "E4", rezervace: false },
    { sedadlo: "E5", rezervace: false },
    { sedadlo: "E6", rezervace: false },
    { sedadlo: "F1", rezervace: false },
    { sedadlo: "F2", rezervace: false },
    { sedadlo: "F3", rezervace: false },
    { sedadlo: "F4", rezervace: false },
    { sedadlo: "F5", rezervace: false },
    { sedadlo: "F6", rezervace: false },
    { sedadlo: "G1", rezervace: false },
    { sedadlo: "G2", rezervace: false },
    { sedadlo: "G3", rezervace: false },
    { sedadlo: "G4", rezervace: false },
    { sedadlo: "G5", rezervace: false },
    { sedadlo: "G6", rezervace: false },
    { sedadlo: "H1", rezervace: false },
    { sedadlo: "H2", rezervace: false },
    { sedadlo: "H3", rezervace: false },
    { sedadlo: "H4", rezervace: false },
    { sedadlo: "H5", rezervace: false },
    { sedadlo: "H6", rezervace: false },
    { sedadlo: "I1", rezervace: false },
    { sedadlo: "I2", rezervace: false },
    { sedadlo: "I3", rezervace: false },
    { sedadlo: "I4", rezervace: false },
    { sedadlo: "I5", rezervace: false },
    { sedadlo: "I6", rezervace: false }
]


function generateTableHTML() {
    let tableHTML = "<table class='tableHTML'";
    
    poleSedadel.forEach((x, index) => {
        if (index % 6 === 0) {
            if (index !== 0) {
                tableHTML += "</tr>";
            }
            tableHTML += "<tr>";
        }
        let backgroundColor = x.rezervace ? "red" : ""; 
        
        tableHTML += `<td><button class="reserveBtn btn my-2" id="id${index}" style="background-color: ${backgroundColor};" onClick="reserve(${index})">${x.sedadlo}</button></td>`;
    });
    tableHTML += "</tr></table>";
    return tableHTML;
}

function reserve(index) {
    poleSedadel[index].rezervace = !poleSedadel[index].rezervace;
    root.innerHTML = generateTableHTML();
}

document.getElementById("resBtn").onclick = () => {
    saveToLocalStorage(poleSedadel);
    root.innerHTML = generateTableHTML();
}
// Function to save data to local storage
function saveToLocalStorage(data) {
    localStorage.setItem(document.getElementById("selFil").value, JSON.stringify(data));
   
}

// Function to load data from local storage
function loadFromLocalStorage() {
    const storedData = localStorage.getItem(document.getElementById("selFil").value);
    if (storedData) {
        poleSedadel = JSON.parse(storedData);
    }
}

function generateDifferentReservation() {
    // For now, let's just reset all reservations
    poleSedadel.forEach(seat => seat.rezervace = false);
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

function handleReservation() {
    
}

let root = document.getElementById("root");

loadFromLocalStorage();

root.innerHTML = generateTableHTML();

let selectFilm = document.getElementById("selFil");
selectFilm.addEventListener("change", handleFilmSelection);

// Add event listener for the reservation button
let reserveBtn = document.getElementById("resBtn");
reserveBtn.addEventListener("click", handleReservation);
