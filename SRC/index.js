// Add forecast information using JS
function displayForecast() {
  let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let forecastHtml = "";

  days.forEach(function (day) {
    forecastHtml =
      forecastHtml +
      ` 
      <div class="weather-forecast-day">
                            <div class="weather-forecast-date">${day}</div>
                             <div id="temp_img"> <img
                            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png" alt="" width="50%">
                    </div>
                            <div class="weather-forecast-temperatures">
                                <div class="weather-forecast-temperature">
                                    <strong>15º</strong>
                                </div>
                                <div class="weather-forecast-temperature">9º</div>
                            </div>
                        </div>
`;
  });
  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = forecastHtml;
}
displayForecast();

// changing H1
function updateCity(event) {
  event.preventDefault();

  let newCity = document.querySelector("#search-form-input").value;
  newCity = newCity[0].trim().toUpperCase() + newCity.substring(1);

  let cityElement = document.querySelector(".city");

  cityElement.textContent = newCity;
  document.querySelector(".search-form").addEventListener("submit", updateCity);
}

// Adiciona o evento de submit ao formulário
document.querySelector(".search-form").addEventListener("submit", updateCity);
//API current temperatura
function displayTemperature(response) {
  let temperature = Math.round(response.data.temperature.current);
  let tempSensation = Math.round(response.data.temperature.feels_like);
  let description = response.data.condition.description;
  let iconElement = document.querySelector("#temp_img");
  let humidity = Math.round(response.data.temperature.humidity);
  let wind = Math.round(response.data.wind.speed);
  let city = response.data.city;
  let country = response.data.country;

  let countryElement = document.querySelector(".country");
  countryElement.innerHTML = `- ${country}`;

  let valueElement = document.querySelector("#value-temp");
  valueElement.innerHTML = `${temperature}°C`;
  console.log(valueElement);

  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}"id="temp_img" />`;

  let minTempElement = document.querySelector("#temp-sensation");
  minTempElement.innerHTML = `${tempSensation} °C`;

  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = `${description}`;

  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = `${humidity}%`;

  let windElement = document.querySelector("#wind");
  windElement.innerHTML = `${wind}km`;
}

function searchCity(event) {
  event.preventDefault();
  let city = document
    .querySelector("#search-form-input")
    .value.trim()
    .toUpperCase();

  let apiKey = "co1932ee5cba3475f06de51eb085140t";

  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemperature);
}

let cityForm = document.querySelector(".search-form");
cityForm.addEventListener("submit", searchCity);

//Date - Week Day - Hour

function displayDateTime() {
  let date = new Date();

  let daysWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let dayWeek = daysWeek[date.getDay()];
  let day = String(date.getDate()).padStart(2, "0");
  let month = String(date.getMonth() + 1).padStart(2, "0");
  let year = date.getFullYear();
  let formattedDate = `${day}/${month}/${year}`;

  let hours = String(date.getHours()).padStart(2, "0"); // Adds 0 to the left if the number is less than 10
  let minutes = String(date.getMinutes()).padStart(2, "0");
  let seconds = String(date.getSeconds()).padStart(2, "0");
  let formattedTime = `${hours}:${minutes}`;

  document.getElementById("week-day").textContent = `${dayWeek}`;
  document.getElementById("current-date").textContent = formattedDate;
  document.getElementById("current-hour").textContent = formattedTime;
}

displayDateTime();
setInterval(displayDateTime, 1000);
