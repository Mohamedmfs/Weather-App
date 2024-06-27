const apiKey = "3947005fe2955c50342914a881062d6b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const res = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (res.status === 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    let data = await res.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '°F';
    document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + ' mph';
    document.querySelector(".humidity").innerHTML = data.main.humidity + '%';

    if (data.weather[0].main === "Clouds") {
      weatherIcon.src = "images/clouds.png";
    }
    else if (data.weather[0].main === "Clear") {
      weatherIcon.src = "images/clear.png";
    }
    else if (data.weather[0].main === "Rain") {
      weatherIcon.src = "images/rain.png";
    }
    else if (data.weather[0].main === "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    }
    else if (data.weather[0].main === "Mist") {
      weatherIcon.src = "images/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

const change = () => {
  checkWeather(searchBox.value);
}

searchBtn.addEventListener("click", change);

