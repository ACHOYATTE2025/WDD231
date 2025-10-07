
/*  footer */


export  function footershow() {
  

  
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
        
};


