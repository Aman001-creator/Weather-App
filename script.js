// Function to fetch weather data
async function fetchWeather(cityInput) {
    const url = `https://yahoo-weather5.p.rapidapi.com/weather?location=${cityInput}&format=json&u=c`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '02b92e4427msh798da8f69f27323p181b8cjsn30e7b7494f2c',
            'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);

        // Extract forecast data
        const forecastLabels = result.forecasts.map(f => f.day);
        const forecastHighData = result.forecasts.map(f => f.high);
        const forecastLowData = result.forecasts.map(f => f.low);

        // Update the UI
        document.getElementById('city').innerText = `${result.location.city}, ${result.location.country}`;
        document.getElementById('timezone').innerText = `${result.location.timezone_id}`;
        document.getElementById('temperature').innerText = `${result.current_observation.condition.temperature}°C`;
        document.getElementById('humidity').innerText = `${result.current_observation.atmosphere.humidity}%`;
        document.getElementById('windspeed').innerText = `${result.current_observation.wind.speed} km/h`;
        document.getElementById('condition').innerText = result.current_observation.condition.text;
        document.getElementById('pressure').innerText = `${result.current_observation.atmosphere.pressure} hPa`;
        document.getElementById('visibility').innerText = `${result.current_observation.atmosphere.visibility} km`;
        document.getElementById('sunrise').innerText = `${result.current_observation.astronomy.sunrise}`;
        document.getElementById('sunset').innerText = `${result.current_observation.astronomy.sunset}`;
        document.getElementById('date').innerText = `${new Date(result.current_observation.pubDate * 1000).toLocaleDateString()}`;

        // Update background based on weather condition
        updateBackground(result.current_observation.condition.text);

        // Generate chart for the forecast data
        const ctx = document.getElementById('forecastChart').getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: forecastLabels,
                datasets: [
                    {
                        label: 'High Temperature (°C)',
                        data: forecastHighData,
                        borderColor: '#FF5733',
                        backgroundColor: 'rgba(255, 87, 51, 0.2)',
                        borderWidth: 2,
                        lineTension: 0,
                        fill: true
                    },
                    {
                        label: 'Low Temperature (°C)',
                        data: forecastLowData,
                        borderColor: '#3399FF',
                        backgroundColor: 'rgba(51, 153, 255, 0.2)',
                        borderWidth: 2,
                        lineTension: 0,
                        fill: true
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        beginAtZero: true
                    },
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

    } catch (error) {
        console.error(error);
        alert('Failed to fetch weather data. Please try again.');
    }
}

// Function to update the background image based on weather condition
function updateBackground(condition) {
    let imageUrl = '/images/a1.png'; // Default background

    switch (condition.toLowerCase()) {
        case 'sunny':
        case 'hot':
            imageUrl = '/images/a1.png';
            break;
        case 'cloudy':
        case 'mostly sunny':
        case 'partly cloudy':
        case 'mostly cloudy':
        case 'fair':
        case 'clear':
            imageUrl = '/images/a2.png';
            break;
        case 'fog':
            imageUrl = '/images/a3.png';
            break;
        case 'thunderstorms':
            imageUrl = '/images/a4.png';
            break;
        case 'dust':
        case 'blowing dust':
            imageUrl = '/images/a5.png';
            break;
        case 'windy':
            imageUrl = '/images/a6.png';
            break;
        case 'rain':
        case 'light rain':
        case 'heavy rain':
        case 'showers':
        case 'scattered showers':
        case 'freezing rain':
            imageUrl = '/images/a7.png';
            break;
        case 'snow':
        case 'light snow':
        case 'heavy snow':
        case 'blowing snow':
            imageUrl = '/images/a8.png';
            break;
        case 'sleet':
            imageUrl = '/images/a9.png';
            break;
        case 'hail':
            imageUrl = '/images/a10.png';
            break;
        default:
            imageUrl = '/images/a1.png';
            break;
    }

    document.querySelector('.box.left').style.backgroundImage = `url('${imageUrl}')`;
}

// Event listener for the search button
document.getElementById('searchButton').addEventListener('click', () => {
    const cityInput = document.getElementById('cityInput').value;
    fetchWeather(cityInput);
});

// Event listener for Enter key press
document.getElementById('cityInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const cityInput = document.getElementById('cityInput').value;
        fetchWeather(cityInput);
    }
});
//Fetch weather data for Delhi on page load
window.onload = () => {
    fetchWeather('Delhi');
};
