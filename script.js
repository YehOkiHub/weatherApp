const apiKey = "5a2759fc07bc2944a12375330115e970";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=`
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");





// checking weather function based on city parameter
async function checkWeather(city){
    const response = await fetch(apiUrl +city + `&appid=${apiKey}&units=metric`)
    let data = await response.json()

    console.log(data)

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";


    if(data.weather[0].main == "Clear"){
        weatherIcon.src = "imgs/clear.png";
    }

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "imgs/clouds.png";
    }

    if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "imgs/drizzle.png";
    }

    if(data.weather[0].main == "Humidity"){
        weatherIcon.src = "imgs/humidity.png";
    }

    if(data.weather[0].main == "Mist"){
        weatherIcon.src = "imgs/mist.png";
    }

    if(data.weather[0].main == "Rain"){
        weatherIcon.src = "imgs/rain.png";
    }

    if(data.weather[0].main == "Snow"){
        weatherIcon.src = "imgs/snow.png";
    }

    if(data.weather[0].main == "Wind"){
        weatherIcon.src = "imgs/wind.png";
    }

}

// search button event listener
searchBtn.addEventListener("click", () => {
    
    checkWeather(searchBox.value)
    
});
