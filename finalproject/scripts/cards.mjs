import { ci } from "./datax.mjs";

// Simuler un fetch
function fetchRichesses() {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        if (ci && ci.length > 0) resolve(ci);
        else reject("No data available");
      }, 500);
    } catch (error) {
      reject(error);
    }
  });
}

// Afficher cartes aléatoires
export async function afficherCartes(n = 3) {
  const container = document.querySelector(".contained");
  container.innerHTML = "";

  try {
    const data = await fetchRichesses();
    const shuffled = data.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, n);

    selected.forEach((place) => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <figure>
          <img src="${place.photo_url}" alt="${place.name}" loading="lazy">
        </figure>
        <h2>${place.name}</h2>
        <button class="learn-more">Learn more</button>
      `;

      card.querySelector(".learn-more").addEventListener("click", () => ModalShow(place));
      container.appendChild(card);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    container.innerHTML = `<p style="color:red; text-align:center;">Failed to load data. Please try again later.</p>`;
  }
}

// Modal d'information
function ModalShow(place) {
  const modal = document.querySelector("#info-modal");
  const modalContent = modal.querySelector(".modal-content");

  modalContent.innerHTML = `
    <span class="close">&times;</span>
    <h1>${place.name}</h1>
    <img src="${place.photo_url}" alt="${place.name}" style="width:100%;max-width:400px;border-radius:10px;margin:1rem 0;">
    <div class="modal-text">
      <p><strong>Description:</strong> ${place.description}</p>
      <p><strong>Category:</strong> ${place.category || "N/A"}</p>
      <p><strong>Location:</strong> ${place.location || "Unknown"}</p>
      <p><strong>Importance:</strong> ${place.importance || "N/A"}</p>
      <p><strong>Heritage Status:</strong> ${place.heritage_status || "Not specified"}</p>
      <p><strong>Activities:</strong> ${place.activities ? place.activities.join(", ") : "None listed"}</p>
    </div>
  `;

  modal.classList.add("show");

  // Fermer via le bouton X
  modalContent.querySelector(".close").addEventListener("click", () => {
    modal.classList.remove("show");
  });

  // Fermer en cliquant à l’extérieur
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("show");
  });
}
