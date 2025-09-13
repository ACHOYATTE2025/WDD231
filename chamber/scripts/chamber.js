/* hambuger and navbar menu */
const navButton = document.querySelector('#nav-button');
const navBar = document.querySelector('#nav-bar');

navButton.addEventListener('click', () => {
  navButton.classList.toggle('show'); 
  navBar.classList.toggle('show');  
});


/* circle half navigation*/

const circleButton = document.querySelector('#color-change');
  circleButton.addEventListener('click',()=>{
  circleButton.classList.toggle('circle_show');
})




/*  footer */


document.addEventListener("DOMContentLoaded", function () {
  
  const today = new Date();
  let year = today.getFullYear();
  const exoTime= document.querySelector("#currentyear");
  

  const yearN = today.getFullYear();
  const month = `0`+(today.getMonth() + 1);
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
    image:"",
    membershipLevel:1,
    email:"alepe@gmail.com",
    businessField: "oil",
  },
  {
    names: "Yatte Deivy Constant ACHO",
    adress: "Alépé Côte d'Ivoire",
    phone: "+225 0748365619",
    url:"https:\\www.alepe.ci",
    image:"",
    membershipLevel:1,
    email:"alepe@gmail.com",
    businessField: "oil",
  },
  {
    names: "Yatte Deivy Constant ACHO",
    adress: "Alépé Côte d'Ivoire",
    phone: "+225 0748365619",
    url:"https:\\www.alepe.ci",
    image:"",
    membershipLevel:1,
    email:"alepe@gmail.com",
    businessField: "oil",
  },
  {
    names: "Yatte Deivy Constant ACHO",
    adress: "Alépé Côte d'Ivoire",
    phone: "+225 0748365619",
    url:"https:\\www.alepe.ci",
    image:"",
    membershipLevel:1,
    email:"alepe@gmail.com",
    businessField: "oil",
  },
  {
    names: "Yatte Deivy Constant ACHO",
    adress: "Alépé Côte d'Ivoire",
    phone: "+225 0748365619",
    url:"https:\\www.alepe.ci",
    image:"",
    membershipLevel:1,
    email:"alepe@gmail.com",
    businessField: "oil",
  },
  {
    names: "Yatte Deivy Constant ACHO",
    adress: "Alépé Côte d'Ivoire",
    phone: "+225 0748365619",
    url:"https:\\www.alepe.ci",
    image:"",
    membershipLevel:1,
    email:"alepe@gmail.com",
    businessField: "oil",
  },
  {
    names: "Yatte Deivy Constant ACHO",
    adress: "Alépé Côte d'Ivoire",
    phone: "+225 0748365619",
    url:"https:\\www.alepe.ci",
    image:"",
    membershipLevel:1,
    email:"alepe@gmail.com",
    businessField: "oil",
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


//load data with fetch

async function loadBusiness() {
  try {
    const data = await fetchBusinessData();
    console.log("Données reçues :", data);
    
    // Exemple : parcourir et afficher les noms
      displayBusiness(data);
    
  } catch (err) {
    console.error("Erreur lors du chargement :", err);
  }
}

loadBusiness();

/*        cards creation   */

const cards = document.querySelector(".insider");

function displayBusiness(business) {
  const cards = document.querySelector(".insider");
  cards.innerHTML = ""; // vider le conteneur

  business.forEach((ventures) => {
    // créer la carte principale
    let card = document.createElement("section");
    card.classList.add("business_cards");

    // créer les sous-blocs
    let bloc1 = document.createElement("div");
    bloc1.classList.add("usa"); // par ex. image

    let bloc2 = document.createElement("div");
    bloc2.classList.add("chine"); // par ex. infos texte

    // créer les éléments
    let nameBusiness = document.createElement("h2");
    let straight = document.createElement("hr");
    let portrait = document.createElement("img");
    let email = document.createElement("p");
    let phone = document.createElement("p");
    let url = document.createElement("p");
    let businessField = document.createElement("p");
    let level = document.createElement("p");

    // remplir les contenus
    nameBusiness.textContent = ventures.names;
    portrait.setAttribute("src", ventures.image || "images/default.png");
    portrait.setAttribute("alt", ventures.names);
    portrait.setAttribute("loading", "lazy");
    portrait.setAttribute("width", 340);
    portrait.setAttribute("height", 440);

    email.innerHTML = `<p><strong>EMAIL:</strong> ${ventures.email}</p>`;
    phone.innerHTML = `<p><strong>PHONE:</strong> ${ventures.phone}</p>`;
    url.innerHTML = `<p><strong>URL:</strong> ${ventures.url}</p>`;
    businessField.textContent = `Field: ${ventures.businessField}`;
    level.textContent = `Membership Level: ${ventures.membershipLevel}`;

    // organiser dans les blocs
    bloc1.appendChild(portrait);

    bloc2.appendChild(email);
    bloc2.appendChild(phone);
    bloc2.appendChild(url);
    

    // ajouter les sous-blocs à la carte
    card.appendChild(nameBusiness);
    card.appendChild(straight);
    card.appendChild(bloc1);
    card.appendChild(bloc2);

    // ajouter la carte au conteneur
    cards.appendChild(card);
  });
}
