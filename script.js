const apiKey = "YOUR_API_KEY"; 

async function getWeather() {
    const city = document.getElementById("city").value.trim();
    const weatherDiv = document.getElementById("weather");

    if (!city) {
        weatherDiv.innerHTML = "<p>Please enter a city name.</p>";
        return;
    }

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

        weatherDiv.innerHTML = `
            <img src="${icon}" alt="Weather icon">
            <div class="temp">${data.main.temp}°C</div>
            <div class="description">${data.weather[0].description}</div>
            <p>${data.name}, ${data.sys.country}</p>
            <p>💨 ${data.wind.speed} m/s</p>
        `;
    } catch (error) {
        weatherDiv.innerHTML = `<p>${error.message}</p>`;
    }
}
