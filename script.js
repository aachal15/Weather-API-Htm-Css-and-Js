document.getElementById("getWeather").addEventListener("click", () => {
    let city = document.getElementById("cityInput").value.trim();
    if (city === "") {
        alert("Please enter a city name.");
        return;
    }
    
    let apiKey = "67c98ee121c042cab3d82840252901";
    let url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById("location").innerText = `Location: ${data.location.name}, ${data.location.country}`;
            document.getElementById("temperature").innerText = `Temperature: ${data.current.temp_c}°C`;
            document.getElementById("condition").innerText = `Condition: ${data.current.condition.text}`;
        })
        .catch(error => alert("Error fetching weather data. Please check the city name and try again."));
});
