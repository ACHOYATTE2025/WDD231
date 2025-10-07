




/* hambuger and navbar menu */
const navButton = document.querySelector('#nav-button');
const navBar = document.querySelector('#nav-bar');
const cards = document.querySelector('#insider');


navButton.addEventListener('click', () => {
  navButton.classList.toggle('show'); 
  navBar.classList.toggle('show');  
});





/*  footer */


document.addEventListener("DOMContentLoaded", function () {
  
  const today = new Date();
  let year = today.getFullYear();
  const exoTime= document.querySelector("#currentyear");
  

  const yearN = today.getFullYear();
  const month = (today.getMonth() + 1);
  const day = today.getDate().toString();

  const hours =+ today.getHours();
  const minutes = today.getMinutes();
  const seconds = today.getSeconds();

  //Alépé information and contact
  const Chambertop = document.querySelector('#chamber_top');
  const infoChamber = document.querySelector('#chamber_text');
  const author = document.querySelector('#author');
  Chambertop.innerHTML=`<p><strong>Alépé Chamber of Commerce</strong> `;
  infoChamber.innerHTML = `<p> Rue principale Danguira<br>
                              Alépé ,Côte D'Ivoire 692<br>
                              info@alepe.org<br>
                              (225) 07 48 36 56 19</p>`;

  // Format personnalisé (ex: 01/07/2025 22:45:00)
  author.innerHTML=`<p>WDD231 Class Project<br>Yatte Deivy Constant ACHO<br>
                      &copy;${year} |Alépé Chamber of Commerce <br>
                      Last modification : ${month}/${day}/${year} ${hours}:${minutes}:${seconds}</p>`;
        
});




/* data of business */

 const business = [
  {
    names: "Yatte Deivy Constant ACHO",
    adress: "Alépé Côte d'Ivoire",
    phone: "+225 0748365619",
    url:"https:\\www.alepe.ci",
    image:"images/ventures.webp",
    membershipLevel:1,
    email:"alepe@gmail.com",
    businessField: "oil",
  },
  {
    names: "Cocoa Business",
    adress: "Alépé Côte d'Ivoire",
    phone: "+225 0748365611",
    url:"https:\\www.alepe-cocoa.ci",
    image:"images/cocoa.webp",
    membershipLevel:2,
    email:"cocoaalepe@gmail.com",
    businessField: "cocoa",
  },
  {
    names: "Coffee Prod Enterprise",
    adress: "Alépé Côte d'Ivoire",
    phone: "+225 0548365619",
    url:"https:\\www.alepe-coffee.ci",
    image:"images/coffee.webp",
    membershipLevel:1,
    email:"coffee_al@gmail.com",
    businessField: "coffee",
  },
  {
    names: "latex corporation",
    adress: "Alépé Côte d'Ivoire",
    phone: "+225 0148365619",
    url:"https:\\www.alepe-latex.ci",
    image:"images/latex.webp",
    membershipLevel:2,
    email:"alepelatex@gmail.com",
    businessField: "latex",
  },
  {
    names: "Sugar business inc",
    adress: "Alépé Côte d'Ivoire",
    phone: "+225 05418962",
    url:"https:\\www.alepesugar.ci",
    image:"images/sugar.webp",
    membershipLevel:1,
    email:"alepesugar@gmail.com",
    businessField: "sugar",
  },
  {
    names: "palm oil Holding",
    adress: "Alépé Côte d'Ivoire",
    phone: "+225 0785965110",
    url:"https:\\www.alepepalm.ci",
    image:"images/palm.webp",
    membershipLevel:2,
    email:"alepe@gmail.com",
    businessField: "palm oil",
  },
  {
    names: "realstate building inc",
    adress: "Alépé Côte d'Ivoire",
    phone: "+225 0145968782",
    url:"https:\\www.alepebuild.ci",
    image:"images/realstate.webp",
    membershipLevel:1,
    email:"alepebuil@gmail.com",
    businessField: "realstate",
  }

];


//fake fecth asynchrome
function fetchBusinessData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(business);
    }, 500); //
  });
}






// Sélection de la div pour afficher les cartes
const spotlightContainer = document.querySelector("#spotlight .spotlight_cards_container");

// Filtrer et mélanger aléatoirement
function getRandomSpotlights(data, count = 3) {
  const eligible = data.filter(d => d.membershipLevel === 1 || d.membershipLevel === 2);
  for (let i = eligible.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [eligible[i], eligible[j]] = [eligible[j], eligible[i]];
  }
  return eligible.slice(0, count);
}

// Affichage des cartes
function displaySpotlights(data) {
  if (!spotlightContainer) return;
  spotlightContainer.innerHTML = "";
  const spotlights = getRandomSpotlights(data, 3);
  spotlights.forEach(member => {
    const card = document.createElement("section");
    card.classList.add("spotlight_card");
    card.innerHTML = `
      <img src="${member.image}" alt="${member.names}">
      <h3>${member.names}</h3>
      <p><strong>Company:</strong> ${member.names}</p>
      <p><strong>Phone:</strong> ${member.phone}</p>
      <p><strong>Address:</strong> ${member.adress}</p>
      <p><strong>Website:</strong> <a href="${member.url}" target="_blank">${member.url}</a></p>
      <p><strong>Membership Level:</strong> ${member.membershipLevel === 1 ? "Gold" : "Silver"}</p>
    `;
    spotlightContainer.appendChild(card);
  });
}

// Charger au DOM
document.addEventListener("DOMContentLoaded", () => {
    console.log("Business data pour spotlight:", business);
  displaySpotlights(business);
});