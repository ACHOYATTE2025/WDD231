export function counterview() {
  const bienvenue = document.getElementById("bienvenue");
  const bande = document.getElementById("bandeCounter");
  const now = new Date();
  const today = now.toDateString();

  // --- Récupération des données ---
  const lastVisit = localStorage.getItem("lastVisit");
  const totalVisits = Number(localStorage.getItem("totalVisits")) || 0;
  const lastVisitDay = localStorage.getItem("lastVisitDay");
  let dailyVisits = Number(localStorage.getItem("dailyVisits")) || 0;

  // --- Gestion du compteur journalier ---
  if (lastVisitDay === today) {
    dailyVisits += 1;
  } else {
    dailyVisits = 1;
    localStorage.setItem("lastVisitDay", today);
  }

  // --- Incrémentation total ---
  const updatedTotal = totalVisits + 1;

  // --- Message dynamique ---
  let title = "";
  let message = "";

  if (!lastVisit) {
    title = "👋 Welcome to Alépé Chamber of Commerce!";
    message = "This is your first visit — feel free to explore our cultural and business opportunities.";
  } else {
    const difference = now.getTime() - Number(lastVisit);
    const daysBetween = Math.floor(difference / (1000*60*60*24));

    if (daysBetween < 1) {
      title = "😎 Welcome back!";
      message = `You’ve visited ${dailyVisits} time${dailyVisits > 1 ? "s" : ""} today!`;
    } else if (daysBetween === 1) {
      title = "👋 Good to see you again!";
      message = `You last visited 1 day ago. Today’s your ${dailyVisits} visit!`;
    } else {
      title = "👋 Welcome back!";
      message = `It’s been ${daysBetween} days since your last visit — and you’ve visited ${updatedTotal} times in total!`;
    }
  }

  // --- Injection modal ---
  bienvenue.innerHTML = `
    <h1>${title}</h1>
    <p>${message}</p>
    <small>🧭 Total visits: ${updatedTotal} | 📅 Today: ${dailyVisits}</small>
  `;

  // --- Animation modal ---
  window.addEventListener("load", () => {
    bienvenue.classList.add("show");

    setTimeout(() => {
      bienvenue.classList.add("fade-out");
    }, 2500);

    setTimeout(() => {
      bienvenue.remove();
    }, 5000);
  });

  // --- Bande défilante ---
  const defileMessage = `🧭 Total visits: ${updatedTotal} | 📅 Today: ${dailyVisits} — Welcome to CÔTE D'IVOIRE ! Explore cultural and business opportunities! `;
  if (bande) {
    bande.textContent = defileMessage.repeat(3);
  }

  // --- Mise à jour localStorage ---
  localStorage.setItem("lastVisit", now.getTime());
  localStorage.setItem("totalVisits", updatedTotal);
  localStorage.setItem("dailyVisits", dailyVisits);
};
