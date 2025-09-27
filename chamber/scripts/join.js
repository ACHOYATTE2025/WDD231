const memberships = [
  { level: "NP Membership", description: "Non-Profit, no fee", cls: "np" },
  { level: "Bronze Membership", description: "Basic benefits, small fee", cls: "bronze" },
  { level: "Silver Membership", description: "More benefits, medium fee", cls: "silver" },
  { level: "Gold Membership", description: "All benefits, higher fee", cls: "gold" },
];

document.addEventListener("DOMContentLoaded", () => {
  const cardsContainer = document.getElementById("membership-cards");
  const modalsContainer = document.getElementById("modals-container");

  function showModal(modalId) {
    document.getElementById(modalId).style.display = "flex";
  }

  function closeModal(modal) {
    modal.style.display = "none";
  }

  memberships.forEach((m, index) => {
  const card = document.createElement("div");
  card.classList.add("card", m.cls); // Ajout de la classe couleur
  card.innerHTML = `
    <h2>${m.level}</h2>
    <p>${m.description}</p>
    <button data-modal="modal-${index}">Learn More</button>
  `;
  cardsContainer.appendChild(card);
   // Appliquer l'animation avec un petit délai pour effet escalier
    setTimeout(() => {
      card.classList.add("show");
    }, index * 200); // 200ms entre chaque carte


    // Modal
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.id = `modal-${index}`;
    modal.innerHTML = `
      <div class="modal-content">
        <span class="close">&times;</span>
        <h3>${m.level}</h3>
        <p>${m.description}</p>
        <ul>
          <li>Benefit 1 for ${m.level}</li>
          <li>Benefit 2 for ${m.level}</li>
          <li>Benefit 3 for ${m.level}</li>
        </ul>
      </div>
    `;
    modalsContainer.appendChild(modal);

    // Événements
    card.querySelector("button").addEventListener("click", () => showModal(modal.id));
    modal.querySelector(".close").addEventListener("click", () => closeModal(modal));
    modal.addEventListener("click", e => { if (e.target === modal) closeModal(modal); });
  });
});



// Récupère les paramètres de l'URL
const params = new URLSearchParams(window.location.search);
const dataContainer = document.getElementById('userData');

// Récupération des valeurs
const first = params.get('first') || '';
const last = params.get('last') || '';
const title = params.get('title') || '';
const organization = params.get('organization') || '';
const email = params.get('email') || '';
const phone = params.get('phone') || '';
const membership = params.get('membership') || '';
const description = params.get('description') || '';

// Création du HTML avec classes pour les couleurs
dataContainer.innerHTML = `
  <div class="user-data">
    <p><strong style="color: var(--primary-color)">First Name:</strong> <span style="color: var(--accent4-color)">${first}</span></p>
    <p><strong style="color: var(--primary-color)">Last Name:</strong> <span style="color: var(--accent4-color)">${last}</span></p>
    <p><strong style="color: var(--primary-color)">Organizational Title:</strong> <span style="color: var(--accent4-color)">${title}</span></p>
    <p><strong style="color: var(--primary-color)">Business/Organization Name:</strong> <span style="color: var(--accent4-color)">${organization}</span></p>
    <p><strong style="color: var(--primary-color)">Email:</strong> <span style="color: var(--accent4-color)">${email}</span></p>
    <p><strong style="color: var(--primary-color)">Cell Phone:</strong> <span style="color: var(--accent4-color)">${phone}</span></p>
    <p><strong style="color: var(--primary-color)">Membership Level:</strong> <span style="color: var(--accent4-color)">${membership}</span></p>
    <p><strong style="color: var(--primary-color)">Description:</strong> <span style="color: var(--accent4-color)">${description}</span></p>
  </div>
`;
