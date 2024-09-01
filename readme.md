# Weather App

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [License](#license)
- [Installation](#installation)
- [Usage](#usage)
- [API Key Setup](#api-key-setup)

## Introduction
The Weather App is a responsive web application that provides users with real-time weather updates for any city. The app fetches data from the Yahoo Weather API and displays current weather conditions, a 7-day forecast, and additional atmospheric information.

## Features
- Displays current weather conditions, including temperature, humidity, wind speed, and more.
- Shows a 7-day weather forecast with high and low temperatures.
- Responsive design for both desktop and mobile devices.
- Background image changes based on the current weather condition.
- Real-time data fetching from the Yahoo Weather API.

## Technologies Used
- **HTML5/CSS3**: For structuring and styling the application.
- **JavaScript (ES6)**: For fetching data from the API and updating the UI dynamically.
- **Bootstrap 4**: For responsive design.
- **Chart.js**: For visualizing the weather forecast.
- **Yahoo Weather API**: For fetching weather data.

## Project Structure

weather-app/
│
├── index.html           # Main HTML file
├── style.css            # CSS styles
├── script.js            # JavaScript file with API calls and UI updates
├── README.md            # Readme file
├── images/              # Folder for images, icons, etc.
└── favicon              # favicon for the app


## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Installation
To run this project locally, follow these steps:

## 1. Clone the repository:
   git clone https://github.com/your-username/weather-app.git

## API Key Setup

To get started, you'll need to set up your API key by following these steps:

1. Sign up on [RapidAPI](https://rapidapi.com/) and subscribe to the [Yahoo Weather API](https://rapidapi.com/community/api/yahoo-weather/).
2. Replace the placeholder API key in the `script.js` file with your actual API key:

```javascript
 const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'YOUR_API_KEY_HERE',
        'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
    }
};




