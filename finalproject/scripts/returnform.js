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
    <p><strong style="color: var(--primary-color)">First Name:</strong> <span style="color: white">${first}</span></p>
    <p><strong style="color: var(--primary-color)">Last Name:</strong> <span style="color: white">${last}</span></p>
    <p><strong style="color: var(--primary-color)">Organizational Title:</strong> <span style="color: white">${title}</span></p>
    <p><strong style="color: var(--primary-color)">Business/Organization Name:</strong> <span style="color:white">${organization}</span></p>
    <p><strong style="color: var(--primary-color)">Email:</strong> <span style="color: white">${email}</span></p>
    <p><strong style="color: var(--primary-color)">Cell Phone:</strong> <span style="color: white">${phone}</span></p>
    <p><strong style="color: var(--primary-color)">Description:</strong> <span style="color: white">${description}</span></p>
  </div>
`;
