/* hambuger and navbar menu */
const navButton = document.querySelector('#nav-button');
const navBar = document.querySelector('#nav-bar');
const cards = document.querySelector('#insider');
const circleButton = document.querySelector('#color-change');

navButton.addEventListener('click', () => {
  navButton.classList.toggle('show'); 
  navBar.classList.toggle('show');  
});


/* circle half navigation*/

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
    image:"https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1280/https://www.celge.fr/wp-content/uploads/2021/07/team-4084637_1280.jpg",
    membershipLevel:1,
    email:"alepe@gmail.com",
    businessField: "oil",
  },
  {
    names: "Yatte Deivy Constant ACHO",
    adress: "Alépé Côte d'Ivoire",
    phone: "+225 0748365619",
    url:"https:\\www.alepe.ci",
    image:"https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1280/https://www.celge.fr/wp-content/uploads/2021/07/team-4084637_1280.jpg",
    membershipLevel:1,
    email:"alepe@gmail.com",
    businessField: "oil",
  },
  {
    names: "Yatte Deivy Constant ACHO",
    adress: "Alépé Côte d'Ivoire",
    phone: "+225 0748365619",
    url:"https:\\www.alepe.ci",
    image:"https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1280/https://www.celge.fr/wp-content/uploads/2021/07/team-4084637_1280.jpg",
    membershipLevel:1,
    email:"alepe@gmail.com",
    businessField: "oil",
  },
  {
    names: "Yatte Deivy Constant ACHO",
    adress: "Alépé Côte d'Ivoire",
    phone: "+225 0748365619",
    url:"https:\\www.alepe.ci",
    image:"https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1280/https://www.celge.fr/wp-content/uploads/2021/07/team-4084637_1280.jpg",
    membershipLevel:1,
    email:"alepe@gmail.com",
    businessField: "oil",
  },
  {
    names: "Yatte Deivy Constant ACHO",
    adress: "Alépé Côte d'Ivoire",
    phone: "+225 0748365619",
    url:"https:\\www.alepe.ci",
    image:"https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1280/https://www.celge.fr/wp-content/uploads/2021/07/team-4084637_1280.jpg",
    membershipLevel:1,
    email:"alepe@gmail.com",
    businessField: "oil",
  },
  {
    names: "Yatte Deivy Constant ACHO",
    adress: "Alépé Côte d'Ivoire",
    phone: "+225 0748365619",
    url:"https:\\www.alepe.ci",
    image:"https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1280/https://www.celge.fr/wp-content/uploads/2021/07/team-4084637_1280.jpg",
    membershipLevel:1,
    email:"alepe@gmail.com",
    businessField: "oil",
  },
  {
    names: "Yatte Deivy Constant ACHO",
    adress: "Alépé Côte d'Ivoire",
    phone: "+225 0748365619",
    url:"https:\\www.alepe.ci",
    image:"https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1280/https://www.celge.fr/wp-content/uploads/2021/07/team-4084637_1280.jpg",
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



function displayBusiness(business) {
  const cards = document.querySelector("#insider");
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
    let tagBusinesss =document.createElement("p");
    let straight = document.createElement("hr");
    let portrait = document.createElement("img");
    let email = document.createElement("p");
    let phone = document.createElement("p");
    let url = document.createElement("p");
    let businessField = document.createElement("p");
    let level = document.createElement("p");

    // remplir les contenus
    nameBusiness.textContent = ventures.names;
    tagBusinesss.classList.add("cent");
    portrait.setAttribute("src", ventures.image || "images/default.png");
    portrait.setAttribute("alt", ventures.names);
    portrait.setAttribute("loading", "lazy");
    portrait.setAttribute("width", "120px");
    portrait.setAttribute("height", "100px");

    email.innerHTML = `<p><strong>EMAIL:</strong> ${ventures.email}</p>`;
    phone.innerHTML = `<p><strong>PHONE:</strong> ${ventures.phone}</p>`;
    url.innerHTML = `<p><strong>URL:</strong> ${ventures.url}</p>`;
    businessField.textContent = `Field: ${ventures.businessField}`;
    level.textContent = `Membership Level: ${ventures.membershipLevel}`;
    tagBusinesss.innerHTML=`<a href=" ${ventures.url}"> ${ventures.url}</a>`;

    // organiser dans les blocs
    bloc1.appendChild(portrait);

    bloc2.appendChild(email);
    bloc2.appendChild(phone);
    bloc2.appendChild(url);
    

    // ajouter les sous-blocs à la carte
    card.appendChild(nameBusiness);
    card.appendChild(tagBusinesss);
    card.appendChild(straight);
    card.appendChild(bloc1);
    card.appendChild(bloc2);

    // ajouter la carte au conteneur
    cards.appendChild(card);
  });
}


//switch from  card to list
const displaySwitch= document.querySelector('#color-change');
displaySwitch.addEventListener("click", () => {
  cards.classList.toggle("showList");

  // si on est en mode liste
  if (cards.classList.contains("showList")) {
    // vider le contenu existant
    cards.innerHTML = "";

    // créer un tableau
    let table = document.createElement("table");
    table.classList.add("businessTable");

    // === HEADER ===
    let thead = document.createElement("thead");
    let headerRow = document.createElement("tr");

    const headers = ["Name", "Email",  "URL"];
    headers.forEach((text) => {
      let th = document.createElement("th");
      th.textContent = text;
      headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    // === BODY ===
    let tbody = document.createElement("tbody");

    business.forEach((ventures) => {
      let row = document.createElement("tr");

      let name = document.createElement("td");
      name.textContent = ventures.names;

      let email = document.createElement("td");
      email.textContent = ventures.email;

      let url = document.createElement("td");
      url.innerHTML=`<a href="${ventures.url}">${ventures.url}</a>`;


      

      row.appendChild(name);
      row.appendChild(email);
      row.appendChild(url);
      
     

      tbody.appendChild(row);
    });

    table.appendChild(tbody);
    cards.appendChild(table);
  } else {
    // si on repasse en mode cartes
    displayBusiness(business);
  }
});
