const ci = [
  // ===== Nature & Biodiversity =====
  { name: "Taï National Park", photo_url: "images/taiparc.jpeg", description: "A lush rainforest rich in biodiversity and UNESCO World Heritage site." },
  { name: "Comoé National Park", photo_url: "images/comoe.jpeg", description: "One of West Africa's largest national parks, home to diverse wildlife." },
  { name: "Mount Nimba", photo_url: "images/nimba.jpeg", description: "A mountain with unique biodiversity and UNESCO heritage status." },
  { name: "Banco National Park", photo_url: "images/banco.jpeg", description: "Urban forest in Abidjan ideal for hiking and nature walks." },
  { name: "Man Waterfalls", photo_url: "images/cascadesman.jpeg", description: "Beautiful waterfalls surrounded by lush landscapes." },

  // ===== Economy & Infrastructure =====
  { name: "Lagune Ébrié", photo_url: "images/lagune.jpeg", description: "Major lagoon in Abidjan supporting fishing and transportation." },
  { name: "Boulay Island", photo_url: "images/ileboulay.jpeg", description: "Island with economic potential for tourism and hospitality." },
  { name: "Sassandra Port", photo_url: "images/sassandra.jpeg", description: "Coastal town with active port and fishing industry." },
  { name: "Houphouët-Boigny Bridge", photo_url: "images/pontabidjan.jpeg", description: "Iconic bridge facilitating trade and connectivity in Abidjan." },
  { name: "Treichville Market", photo_url: "images/treichville.jpeg", description: "Vibrant market hub contributing to the local economy." },

  // ===== People, Culture & Heritage =====
  { name: "Grand-Bassam Beach", photo_url: "images/grandbassam.jpeg", description: "Historic coastal town known for its colonial heritage and beaches." },
  { name: "Notre-Dame de la Paix Basilica", photo_url: "images/basilique.jpeg", description: "One of the largest churches in the world, symbolizing faith and architecture." },
  { name: "National Museum of Abidjan", photo_url: "images/musee.jpeg", description: "Museum showcasing Ivorian art, culture, and history." },
  { name: "Taï Forest Village Communities", photo_url: "images/taiforest.jpeg", description: "Local communities preserving traditional lifestyles in forested areas." },
  { name: "Cultural Events in Abidjan", photo_url: "images/culture.jpeg", description: "Festivals, music, and dance highlighting the diversity of Ivorian people." }
];


// Simuler fetch avec try/catch
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
        <p>${place.description}</p>
        <button class="learn-more">Learn more</button>
      `;

      card.querySelector('button').addEventListener("click", () => ModalShow(place));
      container.appendChild(card);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    container.innerHTML = `<p style="color:red; text-align:center;">Failed to load data. Please try again later.</p>`;
  }
}

// Modal info
function ModalShow(place) {
  const modal = document.querySelector("#info-modal");
  const modalContent = modal.querySelector(".modal-content");

  modalContent.innerHTML = `
    <span class="close">&times;</span>
    <h1>${place.name}</h1>
    <img src="${place.photo_url}" alt="${place.name}" style="width:100%;max-width:400px;border-radius:10px;margin:1rem 0;">
    <p>${place.description}</p>
  `;

  modal.classList.add("show");

  modalContent.querySelector(".close").addEventListener("click", () => {
    modal.classList.remove("show");
  });
}

