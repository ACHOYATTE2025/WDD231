import { footershow } from "./footer.mjs";


//show footer
document.addEventListener("DOMContentLoaded", footershow);



const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('show');  // animation croix
  navLinks.classList.toggle('show');   // affichage menu
});

// Fermer le menu quand on clique sur un lien
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
    hamburger.classList.remove('show');
  });
});

