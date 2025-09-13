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






/* data of business */

 const business = [
  {
    names: "Aba Nigeria",
    adress: "Aba, Nigeria",
    phone: "2005, August, 7",
    website:"https:\\www.lagosbis.ng",
    image:"",
    membershipLevel:1,
    email:"lagosbis@gmail.com",
    businessField: "oil",
  },
  {names: "Aba Nigeria",
    adress: "Aba, Nigeria",
    phone: "2005, August, 7",
    website:"",
    image:"",
    membershipLevel:1,
    email:"",
    businessField: "",
  },
  { names: "Aba Nigeria",
    adress: "Aba, Nigeria",
    phone: "2005, August, 7",
    website:"",
    image:"",
    membershipLevel:1,
    email:"",
    businessField: "",
  },
  { names: "Aba Nigeria",
    adress: "Aba, Nigeria",
    phone: "2005, August, 7",
    website:"",
    image:"",
    membershipLevel:1,
    email:"",
    businessField: "",
  },
  { names: "Aba Nigeria",
    adress: "Aba, Nigeria",
    phone: "2005, August, 7",
    website:"",
    image:"",
    membershipLevel:1,
    email:"",
    businessField: "",
  },
  { names: "Aba Nigeria",
    adress: "Aba, Nigeria",
    phone: "2005, August, 7",
    website:"",
    image:"",
    membershipLevel:1,
    email:"",
    businessField: "",
  },{ names: "Aba Nigeria",
    adress: "Aba, Nigeria",
    phone: "2005, August, 7",
    website:"",
    image:"",
    membershipLevel:1,
    email:"",
    businessField: "",
  }
];






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



//