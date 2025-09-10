const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';

const cards = document.querySelector('#cards');



//fetch data on url
async function getProphetsData() {
  try{
  const response = await  fetch(url);
  const data = await response.json();
  console.table(data.prophets);
  displayProphets(data.prophets);
}
  catch(error){
    console.error("Error fetching data:", error);
  };
}

//execute data
getProphetsData();


//build a card
const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    // card build code goes here
    let card = document.createElement("section");
    let fullName = document.createElement("h2");
    let portait = document.createElement("img");
    let birthDate = document.createElement("p");
    let birthPlace = document.createElement("p");

    portait.setAttribute("src",prophet.imageurl);
    portait.setAttribute("alt",prophet.name);
    portait.setAttribute("loading","lazy");
    portait.setAttribute("width",340);
    portait.setAttribute("heigth",440);

    fullName.textContent=`${prophet.name}  ${prophet.lastname}`;
    birthDate.textContent =`Date of Birth ${prophet.birthdate}`;
    birthPlace.textContent =`Place of Birth ${prophet.birthplace}`;
    card.appendChild(fullName);
    card.appendChild(birthDate);
    card.appendChild(birthPlace);
    card.appendChild(portait);
    cards.appendChild(card);

    });
}


document.addEventListener("DOMContentLoaded",getProphetsData());




