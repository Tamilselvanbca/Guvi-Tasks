const cityName = document.getElementById("cityName");
const getBtn = document.getElementById("getBtn");
const currentWeather = document.querySelector(".currentWeather");
const min_temp = document.querySelector(".min-temp");
const max_temp = document.querySelector(".max-temp");
const city_name = document.querySelector(".city-name");
const weather_icon = document.getElementById("weather_icon");

function getWeather(city) {
  const response = fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${city},tn,in&limit=15&appid=c2992e8e9788c5d112051a7a743a1b70`
  );
  response
    .then((datas) => datas.json())
    .then((data) => {
      const lat = data[0].lat;
      const lon = data[0].lon;
      city_name.lastElementChild.innerHTML = data[0].name;
      cityWeather(lat, lon);
    })
    .catch((error) => {
      alert("City is not found");
    });
}
function cityWeather(lat, lon) {
  const response = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c2992e8e9788c5d112051a7a743a1b70&units=metric`
  );
  response
    .then((datas) => datas.json())
    .then((data) => {
      currentWeather.lastElementChild.innerHTML = Math.floor(data.main.temp);
      min_temp.lastElementChild.innerHTML = Math.floor(data.main.temp_min);
      max_temp.lastElementChild.innerHTML = Math.floor(data.main.temp_max);
      weather_icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    })
    .catch((error) => {
      alert("City is not found");
    });
}
getBtn.addEventListener("click", () => {
  let value = cityName.value;
  if (isNaN(value)) {
    getWeather(cityName.value);
    cityName.value = "";
  } else {
    alert("Enter the valid input");
  }
});
getBtn.addEventListener("mousedown", () => {
  getBtn.style.transform = "scale(0.9)";
  this.addEventListener("mouseup", () => {
    getBtn.style.transform = "scale(1)";
  });
});
