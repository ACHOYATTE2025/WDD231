export async function initWeatherAndCounter() {
  const apiKey = 'abeffbf8fcae76832c1363c4ca9c9752';
  const city = "Abidjan";

  const bienvenue = document.getElementById("bienvenue");
  const bande = document.getElementById("bandeCounter");
  const container = document.querySelector(".weather_container");
  const forecastContainer = document.querySelector(".forecast_details");
  const weatherIcon = document.getElementById("weatherIcon");
  const captionDesc = document.getElementById("captionDesc");

  /* ===================== Compteur ===================== */
  const now = new Date();
  const today = now.toDateString();

  const lastVisit = localStorage.getItem("lastVisit");
  const totalVisits = Number(localStorage.getItem("totalVisits")) || 0;
  const lastVisitDay = localStorage.getItem("lastVisitDay");
  let dailyVisits = Number(localStorage.getItem("dailyVisits")) || 0;

  if (lastVisitDay === today) {
    dailyVisits += 1;
  } else {
    dailyVisits = 1;
    localStorage.setItem("lastVisitDay", today);
  }

  const updatedTotal = totalVisits + 1;

  let title = "";
  let message = "";

  if (!lastVisit) {
    title = "👋 Welcome to CÔTE D'IVOIRE!";
    message = "This is your first visit — feel free to explore our cultural and business opportunities.";
  } else {
    const difference = now.getTime() - Number(lastVisit);
    const daysBetween = Math.floor(difference / (1000 * 60 * 60 * 24));

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

  bienvenue.innerHTML = `
    <h1>${title}</h1>
    <p>${message}</p>
    <small>🧭 Total visits: ${updatedTotal} | 📅 Today: ${dailyVisits}</small>
  `;

  // Animation du modal
  window.addEventListener("load", () => {
    bienvenue.classList.add("show");
    setTimeout(() => bienvenue.classList.add("fade-out"), 2500);
    setTimeout(() => bienvenue.remove(), 5000);
  });

  /* ===================== Météo actuelle ===================== */
  let weatherNow = null;
  try {
    const urlCurrent = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${apiKey}`;
    const resCurrent = await fetch(urlCurrent);
    if (!resCurrent.ok) throw new Error(await resCurrent.text());
    const data = await resCurrent.json();

    // Icône + description
    if (weatherIcon && captionDesc) {
      weatherIcon.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
      weatherIcon.alt = data.weather[0].description;
      captionDesc.textContent = data.weather[0].description;
    }

    // Tableau d'informations météo
    if (container) {
      const weatherData = {
        "Temperature": data.main.temp.toFixed(1) + "°C",
        "Max": data.main.temp_max.toFixed(1) + "°C",
        "Min": data.main.temp_min.toFixed(1) + "°C",
        "Humidity": data.main.humidity + "%",
        "SunRise": new Date(data.sys.sunrise * 1000).toLocaleTimeString(),
        "SunSet": new Date(data.sys.sunset * 1000).toLocaleTimeString(),
      };

      const table = document.createElement("table");
      for (const [key, value] of Object.entries(weatherData)) {
        const row = document.createElement("tr");
        const cellKey = document.createElement("td");
        const cellValue = document.createElement("td");
        cellKey.textContent = key;
        cellKey.style.fontWeight = "bold";
        cellValue.textContent = value;
        row.appendChild(cellKey);
        row.appendChild(cellValue);
        table.appendChild(row);
      }

      container.innerHTML = "";
      container.appendChild(table);
    }

    weatherNow = {
      city: city,
      temp: data.main.temp.toFixed(1),
      desc: data.weather[0].description
    };
  } catch (error) {
    console.error("Erreur météo:", error);
  }

  /* ===================== Prévisions météo ===================== */
  let forecastDays = [];
  try {
    const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(city)}&units=metric&appid=${apiKey}`;
    const res = await fetch(urlForecast);
    if (!res.ok) throw new Error(await res.text());
    const data = await res.json();

    const today = new Date();
    for (const item of data.list) {
      const itemDate = new Date(item.dt * 1000);
      const dayDiff = Math.floor((itemDate - today) / (1000 * 60 * 60 * 24));

      if ([1, 2, 3].includes(dayDiff)) {
        if (!forecastDays.some(f => f.dayDiff === dayDiff)) {
          forecastDays.push({
            day: itemDate.toLocaleDateString("en-US", { weekday: "long" }),
            temp: item.main.temp,
            description: item.weather[0].description,
            dayDiff: dayDiff
          });
        }
      }
    }

    // Affichage sur la page
    if (forecastContainer) {
      forecastContainer.innerHTML = "";
      forecastDays.forEach(f => {
        const span = document.createElement("span");
        span.innerHTML = `${f.day}: <strong>${f.temp.toFixed(0)}°C</strong>`;
        forecastContainer.appendChild(span);
      });
    }
  } catch (error) {
    console.error("Erreur prévisions météo:", error);
  }

  /* ===================== Bande défilante ===================== */
  let weatherMessage = "";
  if (weatherNow) {
    weatherMessage = `🌤️ ${weatherNow.city}: ${weatherNow.temp}°C (${weatherNow.desc}) | `;
  }
  if (forecastDays.length > 0) {
    weatherMessage += `🔮 Forecast → ${forecastDays.map(f => `${f.day}: ${f.temp.toFixed(0)}°C (${f.description})`).join(" | ")}`;
  }

  const defileMessage = `
    🧭 Total visits: ${updatedTotal} | 📅 Today: ${dailyVisits} — 
    ${weatherMessage} — 
    Welcome to CÔTE D'IVOIRE! Explore cultural and business opportunities! 
  `;

  if (bande) {
    bande.textContent = defileMessage.repeat(2);
  }

  // --- Sauvegarde ---
  localStorage.setItem("lastVisit", now.getTime());
  localStorage.setItem("totalVisits", updatedTotal);
  localStorage.setItem("dailyVisits", dailyVisits);
}
