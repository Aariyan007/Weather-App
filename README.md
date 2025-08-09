
# 🌦 Weather App

A simple weather application that fetches real-time weather data using the OpenWeatherMap API.  
Built with **HTML, CSS, JavaScript** and styled with a clean glassmorphism UI.

## 📌 Features
- Search for weather by city name.
- Shows:
  - 🌡 Temperature in Celsius
  - 🌤 Weather description
  - 💨 Wind speed
  - 📍 Location (City & Country)
  - Weather icon
- Glassmorphism card design.

## 🛠 Tech Stack
- HTML
- CSS
- JavaScript (Vanilla)
- [OpenWeatherMap API](https://openweathermap.org/api)

## 📂 Project Structure
```

weather-app/
│
├── index.html
├── script.js
├── style.css   # (optional, or inline CSS in HTML)
├── .env        # stores your API key (used by bundler)
└── README.md

````

## ⚙️ Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/your-username/weather-app.git
cd weather-app
````

### 2. Install dependencies (if using a bundler like Vite or Parcel)

```bash
npm install
```

### 3. Get an API Key

* Sign up at [OpenWeatherMap](https://openweathermap.org/api)
* Create a free API key.

### 4. Add your API key

Create a `.env` file:

```env
VITE_WEATHER_KEY=your_api_key_here
```

> ⚠️ For Vite, variable names must start with `VITE_`.

### 5. Run the project

If using **Vite**:

```bash
npm run dev
```

### 6. Open in Browser

Visit:

```
http://localhost:5173
```

## 📜 License

MIT License. Free to use and modify.
