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

  newCity = newCity.trim().toUpperCase();

  let cityElement = document.querySelector(".city");

  cityElement.textContent = newCity;
}

document.querySelector(".search-form").addEventListener("submit", updateCity);

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

//API current temperatura
function getForecast(city) {
  let apiKey = "co1932ee5cba3475f06de51eb085140t";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${metric}`;
  console.log(apiUrl);
}
