
# 🌦 Weather App

A simple weather application that fetches real-time weather data using the OpenWeatherMap API.  
Built with **HTML, CSS, JavaScript (Frontend)** and **Node.js + Express (Backend)** to keep the API key safe using a `.env` file.

## 📌 Features
- Search weather by city name.
- Displays:
  - Temperature (°C)
  - Weather condition with icon
  - Wind speed
  - Location (city & country)
- Glassmorphism UI design.
- Backend hides the API key using environment variables.

## 🛠 Tech Stack
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express
- **API**: [OpenWeatherMap API](https://openweathermap.org/api)
- **Env Management**: dotenv

## 📂 Project Structure
```

weather-app/
│
├── public/
│   ├── index.html
│   ├── script.js
│   └── style.css   # (optional, or inline CSS in HTML)
│
├── server.js
├── .env
├── package.json
└── README.md

````

## ⚙️ Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/your-username/weather-app.git
cd weather-app
````

### 2. Install dependencies

```bash
npm install
```

### 3. Get an API Key

* Sign up at [OpenWeatherMap](https://openweathermap.org/api)
* Generate a free API key.

### 4. Create `.env` file

```env
WEATHER_KEY=your_api_key_here
```

### 5. Run the server

```bash
node server.js
```

The app will be running at:

```
http://localhost:3000
```

## 📷 Screenshot

*(Add your app screenshot here)*

## 🚀 Deployment

You can deploy this app on:

* [Render](https://render.com/)
* [Vercel](https://vercel.com/) (for backend + frontend)
* [Railway](https://railway.app/)

Make sure to set `WEATHER_KEY` in your hosting platform's environment variables.

## 📜 License

MIT License. Feel free to use and modify.


