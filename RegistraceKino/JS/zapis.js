let nameInput = document.getElementById("nameInput"); //dostávám element s ID "nameInput"
let emailInput = document.getElementById("emailInput"); //dostávám element s ID "nameInput" | emailInput původně sloužil pro Email, po dokončení kódu změna email na příjmení --> nebudu to měnit

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
    let backgroundColor = x.rezervace.occupied ? "red" : ""; //if podmínka, která určuje pokud je sedadlo kliknté, změní barvu pozadí
    let buttonText = x.sedadlo;
    if (x.rezervace.occupied) {
      buttonText += `<br/>${x.rezervace.name}<br/>${x.rezervace.email}`; //výpis registrovaného jména a emailu na sedadlo (button)
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

    tableHTML += `<td><button class="reserveBtn btn my-2" id="id${index}" style="background-color: ${backgroundColor};" onClick="reserve(${index})">${buttonText}</button></td>`; //výpis jednotlivých buttonu z pole pomocí forEach
  });
  tableHTML += `</tr></table>`;
  return tableHTML;
}

function reserve(index) {
  const seat = poleSedadel[index]; //proměnná seat, která bere jednotlivé prvky poleSedadel pomocí indexu
  if (!seat.rezervace.occupied) { //pokud seat.rezervace.occupied není v základním tvaru (Základní tvar --> (false,"",""))
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    if (name != "" && email != "") {
      seat.rezervace.occupied = true; //změní false na true --> obsazeno
      seat.rezervace.name = name; //doplní jméno do rezervace v poli
      seat.rezervace.email = email; //doplní email do rezervace v poli
      root.innerHTML = generateTableHTML(); //vygeneruje znovu pole, ale aktualizované
    } else {
      alert("Vyplňte prosím všechna povinná pole!"); //alert
    }
  } else {
    const name = nameInput.value.trim(); //proměnná pro osekaný nameInput
    const email = emailInput.value.trim(); //proměnná pro osekaný emailInput
    if (name == seat.rezervace.name && email == seat.rezervace.email) { //kontroluje, zdali je zadaný email stejný, jako uložený email. Poté můžete zrušit rezervaci
      seat.rezervace.occupied = false; //vrácení rezervovaného (true) sedadla na nerezervované (false)
      seat.rezervace.name = ""; //Vymazání name v rezervaci
      seat.rezervace.email = ""; //Vymazání email v rezervaci
    }else{
        alert("Toto sedadlo je již obsazené!"); //alert
    }

    root.innerHTML = generateTableHTML(); //Vygeneruje znovu aktualizovaný table
  }
  
}

document.getElementById("resBtn").onclick = () => { //funkce on click na buttonu s ID "resBtn" --> reserve button
  saveToLocalStorage(poleSedadel); //uloží data, do localStorage - uloží stav ve kterém je poleSedadel
  root.innerHTML = generateTableHTML(); //aktualizuje pole
};

function saveToLocalStorage(data) { //funkce na ukládání dat (data = data, které bychom chtěli uložit --> poleSedadel)
  localStorage.setItem( //setItem ukládá do localStorage
    document.getElementById("selFil").value, //klíč k uložení, je název filmu
    JSON.stringify(data) //stringify převede hodnotu na JS Object Notation - JSON
  );
}


function loadFromLocalStorage() { //načítání z localStorage
  const storedData = localStorage.getItem( //getItem načítá z localStorage
    document.getElementById("selFil").value //načítáme pomocí uloženého klíče
  );
  if (storedData) {
    poleSedadel = JSON.parse(storedData); //parsuje JSON --> konstruuje JS objekt
  }
}

function generateDifferentReservation() { //funkce pro nastavení pole do původní stavu
 
  poleSedadel.forEach( //projede celé poleSedadel a přepíše rezervace:.. na původní stav -> (false, "", "")
    (seat) => (seat.rezervace = { occupied: false, name: "", email: "" }) //nastavení rezervace:.. na (false, "", "")
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

