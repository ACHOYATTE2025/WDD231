const weatherIcon = document.getElementById("weather-icon");
const captionDesc = document.getElementById("captionDesc");
const container = document.getElementById("weather");

async function getWeather() {
  const apiKey = 'abeffbf8fcae76832c1363c4ca9c9752';
  const city = "Alepe";
  const urlCurrent = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${apiKey}`;
;

  try {
    const resCurrent = await fetch(urlCurrent);
    if (!resCurrent.ok) throw new Error(await resCurrent.text());
    const data = await resCurrent.json();

    // Icône + description
    weatherIcon.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.alt = data.weather[0].description;
    captionDesc.textContent = data.weather[0].description;

    // Tableau
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

  } catch (error) {
    console.error("Erreur météo:", error);
  }
}

document.addEventListener("DOMContentLoaded", getWeather);





/* forecast weather */

const forecastContainer = document.querySelector(".forecast_details");
const apiKey = 'abeffbf8fcae76832c1363c4ca9c9752';
const city = "Alepe";
const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(city)}&units=metric&appid=${apiKey}`;

async function getForecast() {
  try {
    const res = await fetch(urlForecast);
    if (!res.ok) throw new Error(await res.text());
    const data = await res.json();

    const forecastDays = [];
    const today = new Date();

    for (const item of data.list) {
      const itemDate = new Date(item.dt * 1000);
      const dayDiff = Math.floor((itemDate - today) / (1000 * 60 * 60 * 24));

      if ([0, 2, 3].includes(dayDiff)) {
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

    forecastContainer.innerHTML = "";
    forecastDays.forEach(f => {
      const span = document.createElement("span");
      span.innerHTML = `${f.day}: <strong>${f.temp.toFixed(0)}°C</strong>`;
      forecastContainer.appendChild(span);
    });

  } catch (error) {
    console.error("Erreur prévisions météo:", error);
  }
}

document.addEventListener("DOMContentLoaded", getForecast);
