let nameInput = document.getElementById("nameInput"); //dostávám element s ID "nameInput"
let surnameInput = document.getElementById("surnameInput"); //dostávám element s ID "surnameInput" 

let poleSedadel = [
  { sedadlo: "A1", rezervace: { occupied: false, name: "", surname: "" } },
  { sedadlo: "A2", rezervace: { occupied: false, name: "", surname: "" } },
  { sedadlo: "A3", rezervace: { occupied: false, name: "", surname: "" } },
  { sedadlo: "A4", rezervace: { occupied: false, name: "", surname: "" } },
  { sedadlo: "A5", rezervace: { occupied: false, name: "", surname: "" } },
  { sedadlo: "A6", rezervace: { occupied: false, name: "", surname: "" } },
  { sedadlo: "B1", rezervace: { occupied: false, name: "", surname: "" } },
  { sedadlo: "B2", rezervace: { occupied: false, name: "", surname: "" } },
  { sedadlo: "B3", rezervace: { occupied: false, name: "", surname: "" } },
  { sedadlo: "B4", rezervace: { occupied: false, name: "", surname: "" } },
  { sedadlo: "B5", rezervace: { occupied: false, name: "", surname: "" } },
  { sedadlo: "B6", rezervace: { occupied: false, name: "", surname: "" } },
  { sedadlo: "C1", rezervace: { occupied: false, name: "", surname: "" } },
  { sedadlo: "C2", rezervace: { occupied: false, name: "", surname: "" } },
  { sedadlo: "C3", rezervace: { occupied: false, name: "", surname: "" } },
  { sedadlo: "C4", rezervace: { occupied: false, name: "", surname: "" } },
  { sedadlo: "C5", rezervace: { occupied: false, name: "", surname: "" } },
  { sedadlo: "C6", rezervace: { occupied: false, name: "", surname: "" } },
  { sedadlo: "D1", rezervace: { occupied: false, name: "", surname: "" } },
  { sedadlo: "D2", rezervace: { occupied: false, name: "", surname: "" } },
  { sedadlo: "D3", rezervace: { occupied: false, name: "", surname: "" } },
  { sedadlo: "D4", rezervace: { occupied: false, name: "", surname: "" } },
  { sedadlo: "D5", rezervace: { occupied: false, name: "", surname: "" } },
  { sedadlo: "D6", rezervace: { occupied: false, name: "", surname: "" } },
  { sedadlo: "E1", rezervace: { occupied: false, name: "", surname: "" } },
  { sedadlo: "E2", rezervace: { occupied: false, name: "", surname: "" } },
  { sedadlo: "E3", rezervace: { occupied: false, name: "", surname: "" } },
  { sedadlo: "E4", rezervace: { occupied: false, name: "", surname: "" } },
  { sedadlo: "E5", rezervace: { occupied: false, name: "", surname: "" } },
  { sedadlo: "E6", rezervace: { occupied: false, name: "", surname: "" } },
  { sedadlo: "F1", rezervace: { occupied: false, name: "", surname: "" } },
  { sedadlo: "F2", rezervace: { occupied: false, name: "", surname: "" } },
  { sedadlo: "F3", rezervace: { occupied: false, name: "", surname: "" } },
  { sedadlo: "F4", rezervace: { occupied: false, name: "", surname: "" } },
  { sedadlo: "F5", rezervace: { occupied: false, name: "", surname: "" } },
  { sedadlo: "F6", rezervace: { occupied: false, name: "", surname: "" } },
  { sedadlo: "G1", rezervace: { occupied: false, name: "", surname: "" } },
  { sedadlo: "G2", rezervace: { occupied: false, name: "", surname: "" } },
  { sedadlo: "G3", rezervace: { occupied: false, name: "", surname: "" } },
  { sedadlo: "G4", rezervace: { occupied: false, name: "", surname: "" } },
  { sedadlo: "G5", rezervace: { occupied: false, name: "", surname: "" } },
  { sedadlo: "G6", rezervace: { occupied: false, name: "", surname: "" } },
  { sedadlo: "H1", rezervace: { occupied: false, name: "", surname: "" } },
  { sedadlo: "H2", rezervace: { occupied: false, name: "", surname: "" } },
  { sedadlo: "H3", rezervace: { occupied: false, name: "", surname: "" } },
  { sedadlo: "H4", rezervace: { occupied: false, name: "", surname: "" } },
  { sedadlo: "H5", rezervace: { occupied: false, name: "", surname: "" } },
  { sedadlo: "H6", rezervace: { occupied: false, name: "", surname: "" } },
  { sedadlo: "I1", rezervace: { occupied: false, name: "", surname: "" } },
  { sedadlo: "I2", rezervace: { occupied: false, name: "", surname: "" } },
  { sedadlo: "I3", rezervace: { occupied: false, name: "", surname: "" } },
  { sedadlo: "I4", rezervace: { occupied: false, name: "", surname: "" } },
  { sedadlo: "I5", rezervace: { occupied: false, name: "", surname: "" } },
  { sedadlo: "I6", rezervace: { occupied: false, name: "", surname: "" } },
]; //pole pro výpis sedadel


function generateTableHTML() { //funkce na generování sedadel v kině
  let tableHTML = "<table class='tableHTML'";

  poleSedadel.forEach((x, index) => {
    if (index % 6 === 0) { //pokud je index : 6 = 0 a není 0, přídá tableRow na zarovnání dokumentu
      if (index !== 0) {
        tableHTML += "</tr>";
      }
      tableHTML += "<tr>";
    }
    let backgroundColor = x.rezervace.occupied ? "#F8333C" : ""; //if podmínka, která určuje pokud je sedadlo kliknté, změní barvu pozadí
    let color = x.rezervace.occupied ? "#66D7D1" : "";
    let buttonText = x.sedadlo;
    if (x.rezervace.occupied) {
      buttonText += `<br/>${x.rezervace.name}<br/>${x.rezervace.surname}`; //výpis registrovaného jména a emailu na sedadlo (button)
    } else {
      let penize = 0; //proměnná peníze, která se vypisuje částku za film
      switch(document.getElementById("selFil").value){ //switch, který mění vypsanou částku za film, podle selectu
        case "Top Gun: Maverick - 08:15":
          penize = 220;
          break;
        case "Le Mans - 11:00":
          penize = 200;
          break;
        case "Fight Club - 13:45":
          penize = 180;
          break;
        case "Top Gun: Maverick - 16:15":
          penize = 250;
          break;
        case "Le Mans - 18:45":
          penize = 230;
          break;
        case "Fight Club - 21:15":
          penize = 140;
          break;
      }
      buttonText += `<br/>Volné sedadlo<br/>${penize}Kč`; //pokud není registrované, je v základu
    }

    tableHTML += `<td><button class="reserveBtn btn my-2" id="id${index}" style="background-color: ${backgroundColor}; color: ${color};" onClick="reserve(${index})">${buttonText}</button></td>`; //výpis jednotlivých buttonu z pole pomocí forEach
  });
  tableHTML += `</tr></table>`;
  return tableHTML;
}

function reserve(index) {
  const seat = poleSedadel[index]; //proměnná seat, která bere jednotlivé prvky poleSedadel pomocí indexu
  if (!seat.rezervace.occupied) { //pokud seat.rezervace.occupied není v základním tvaru (Základní tvar --> (false,"",""))
    const name = nameInput.value.trim();
    const surname = surnameInput.value.trim();
    if (name != "" && surname != "") {
      seat.rezervace.occupied = true; //změní false na true --> obsazeno
      seat.rezervace.name = name; //doplní jméno do rezervace v poli
      seat.rezervace.surname = surname; //doplní surname do rezervace v poli
      root.innerHTML = generateTableHTML(); //vygeneruje znovu pole, ale aktualizované
    } else {
      alert("Vyplňte prosím všechna povinná pole! ('*' značí povinné pole)"); //alert
    }
  } else {
    const name = nameInput.value.trim(); //proměnná pro osekaný nameInput
    const surname = surnameInput.value.trim(); //proměnná pro osekaný surnameInput
    if (name == seat.rezervace.name && surname == seat.rezervace.surname) { //kontroluje, zdali je zadaný surname stejný, jako uložený surname. Poté můžete zrušit rezervaci
      seat.rezervace.occupied = false; //vrácení rezervovaného (true) sedadla na nerezervované (false)
      seat.rezervace.name = ""; //Vymazání name v rezervaci
      seat.rezervace.surname = ""; //Vymazání surname v rezervaci
    }else{
        alert("Toto sedadlo je již obsazené!"); //alert
    }

    root.innerHTML = generateTableHTML(); //Vygeneruje znovu aktualizovaný table
  }
  
}

document.getElementById("resBtn").onclick = () => { //funkce on click na buttonu s ID "resBtn" --> reserve button
  saveToLocalStorage(poleSedadel); //uloží data, do localStorage - uloží stav ve kterém je poleSedadel
  root.innerHTML = generateTableHTML(); //aktualizuje pole
  alert("Místa rezervována!");
};

function saveToLocalStorage(data) { //funkce na ukládání dat (data = data, které bychom chtěli uložit --> poleSedadel)
  localStorage.setItem( //setItem ukládá do localStorage(klíč, co)
    document.getElementById("selFil").value, //klíč k uložení, je název filmu - nebo-li value selectu filmu
    JSON.stringify(data) //stringify převede poleSedadel (data) na text a uloží
  );
}


function loadFromLocalStorage() { //načítání z localStorage
  const storedData = localStorage.getItem( //getItem načítá z localStorage klíč
    document.getElementById("selFil").value //načítáme pomocí uloženého klíče
  );
  if (storedData) {//pokud existují uložená data
    poleSedadel = JSON.parse(storedData); //načte poleSedadel podle uložených dat
  }
}

function generateDifferentReservation() { //funkce pro nastavení pole do původní stavu
 
  poleSedadel.forEach( //projede celé poleSedadel a přepíše rezervace:.. na původní stav -> (false, "", "")
    (seat) => (seat.rezervace = { occupied: false, name: "", surname: "" }) //nastavení rezervace:.. na (false, "", "")
  );
  loadFromLocalStorage(); //volání funkce na načtení z databáze --> načte po přepsání na původní stav --> žádná kolize mezi uloženými sedadly
  root.innerHTML = generateTableHTML(); //aktualizuje pole
}



function vyberFilm() { //funkce pro poslouchání eventu change --> onChange --> kód
  selectFilm.value; //value selectu

  generateDifferentReservation(); //aktualizuje pole
}



let root = document.getElementById("root"); //div s ID root, kam načítáme poleSedadel

loadFromLocalStorage(); //načítaní z localStorage při zmáčknutí F5 (reload stránky)

root.innerHTML = generateTableHTML(); //vypisování poleSedadel do div#root elementu

let selectFilm = document.getElementById("selFil"); //dostávám select#selFil
selectFilm.addEventListener("change", vyberFilm); //EventListener na změnu v Selectu (vybrání jiného option)

