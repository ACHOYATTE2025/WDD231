
/*  footer */


export  function footershow() {
  

  
  const today = new Date();
  let year = today.getFullYear();
  const exoTime= document.getElementById('lastModified');
  const exoyear =document.getElementById('currentyear');
  

  const yearN = today.getFullYear();
  const month = (today.getMonth() + 1);
  const day = today.getDate().toString();

  const hours =+ today.getHours();
  const minutes = today.getMinutes();
  const seconds = today.getSeconds();


  // Format personnalisé (ex: 01/07/2025 22:45:00)
  exoTime.innerHTML=`<p> Last modification : ${month}/${day}/${year} ${hours}:${minutes}:${seconds}</p>`;

                      
  exoyear.innerHTML=`</p>&copy;${year} <span>CÔTE D'IVOIRE TOURISM</span> — 
  Designed by <strong>Yatté Deivy Constant ACHO</strong></p>`;
};


