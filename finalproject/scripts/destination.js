import { ci } from "./datax.mjs";
import { footershow } from "./footer.mjs";




//show footer
document.addEventListener("DOMContentLoaded", footershow);

// === Afficher toutes les cartes ===
function afficherCartes() {
  const container = document.querySelector(".contained");
  container.innerHTML = ""; // vider avant d'ajouter

  ci.forEach((place) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${place.photo_url}" alt="${place.name}" loading="lazy">
      <h2>${place.name}</h2>
      <button>Learn more</button>
    `;

    // Événement bouton Learn more
    card.querySelector("button").addEventListener("click", () => showModal(place));

    container.appendChild(card);
  });
}

// === Affichage du modal d’information ===
function showModal(place) {
  const modal = document.getElementById("info-modal");
  const modalContent = modal.querySelector(".modal-content");

  modalContent.innerHTML = `
    <span class="close">&times;</span>
    <h2>${place.name}</h2>
    <img src="${place.photo_url}" alt="${place.name}">
    <p>${place.description}</p>
    <p><strong>Category:</strong> ${place.category || "N/A"}</p>
    <p><strong>Location:</strong> ${place.location || "Unknown"}</p>
  `;

  modal.style.display = "flex";
  requestAnimationFrame(() => modal.classList.add("show"));

  const closeBtn = modal.querySelector(".close");
  closeBtn.addEventListener("click", () => {
    modal.classList.remove("show");
    modal.classList.add("fade-out");
    setTimeout(() => {
      modal.style.display = "none";
      modal.classList.remove("fade-out");
    }, 600);
  });
}


// Fermer le modal quand on clique à l’extérieur
window.addEventListener("click", (e) => {
  const modal = document.getElementById("info-modal");
  if (e.target === modal) modal.style.display = "none";
});

// === Exécution principale ===
document.addEventListener("DOMContentLoaded", () => {
  afficherCartes();

  // Gestion du modal de bienvenue
  const bienvenue = document.getElementById("bienvenue");
  const closeBienvenue = bienvenue.querySelector(".close");
  closeBienvenue.addEventListener("click", () => {
    bienvenue.style.display = "none";
  });

  // Navbar responsive
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('show');
    navLinks.classList.toggle('show');
  });

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('show');
      hamburger.classList.remove('show');
    });
  });
});
