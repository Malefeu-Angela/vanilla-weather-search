function displayTemperature(response) {
  console.log(response.data);

  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElemnet = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElementElement = document.querySelector("#wind");

  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  cityElement.innerHTML = response.data.city;
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElementElement.innerHTML = response.data.temperature.humidity;
  windElement.innerHTML = response.data.wind.speed;
}

let apikey = "a105bf90a407023abfboc7aeet447b59";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Pretoria&key=${apikey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
