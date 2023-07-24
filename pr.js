const apiKey = "574d5eb7f0c1cb351582d3aab0b585c4";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");

async function checkWeather(City) {
  const response = await fetch(apiUrl + City + `&appid=${apiKey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();

    document.querySelector(".City").innerHTML = data.name;
    document.querySelector(".Temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".Wind").innerHTML = data.wind.speed + "km/hr";

    if (data.weather[0].main == "Clouds") {
      weathericon.src = "clouds.jpeg";
    } else if (data.weather[0].main == "Rain") {
      weathericon.src = "rain.png";
    } else if (data.weather[0].main == "Clear") {
      weathericon.src = "weather-clear.png";
    } else if (data.weather[0].main == "Drizzle") {
      weathericon.src = "drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weathericon.src = "fog.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchbtn.addEventListener("click", () => {
  checkWeather(searchbox.value);
});






