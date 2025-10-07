import { temples } from '../data/temples.js';
console.table(temples);


import { url } from '../data/temples.js';
console.table(url);


/*grab information */
const showHere= document.querySelector('#showHere');
const mydialog= document.querySelector('#mydialog');
const mytitle= document.querySelector('#mydialog h2');
const myinfo= document.querySelector('#mydialog p');
const myclose= document.querySelector('#mydialog button');
myclose.addEventListener('click',()=>{
  mydialog.close();
})



/* diplay function*/
async function displayItems(data) {
  
  console.log(data);
  data.forEach(element => {
      console.log(element.name);
      console.log(element.dedicated);
      const photo = document.createElement('img');
      photo.src=`${url}${element.path}`;
      photo.alt=`${element.name}`;
      let dedicax = document.querySelector('p');
      dedicax.innerHTML=`${element.dedicated} <br> ${element.number}`;
     

      //add photo listerner
      photo.addEventListener('click',()=>showStuff(element));
     
      showHere.appendChild(photo);
      
      
  });
  
}


//showStuff

function showStuff(temple){
  mytitle.innerHTML=temple.name;
  myinfo.innerHTML = `${temple.dedicated} <br> ${temple.number}`;
  mydialog.showModal();
  myclose.close();
}






/*diplay temples */

displayItems(temples);