const url = "https://api.open-meteo.com/v1/forecast?latitude=30.23853&longitude=-90.9201&current=temperature_2m,wind_speed_10m,relative_humidity_2m&timezone=auto"

const button = document.getElementById("check-btn");
const weatherArea = document.getElementById("weather");

async function getWeather() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    weatherArea.textContent = "";

const temperature = document.createElement("p");
temperature.textContent = `Temperature: ${data.current.temperature_2m} °C`;

const wind = document.createElement("p");
wind.textContent = `Wind speed: ${data.current.wind_speed_10m} km/h`;

const humidity = document.createElement("p");
humidity.textContent = `Humidity: ${data.current.relative_humidity_2m}%`;

const time = document.createElement("p");
time.textContent = `Time: ${data.current.time}`;

weatherArea.appendChild(temperature);
weatherArea.appendChild(wind);
weatherArea.appendChild(humidity);
weatherArea.appendChild(time);
}

button.addEventListener("click", getWeather);