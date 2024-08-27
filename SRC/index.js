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

  let cityElement = document.querySelector(".city");

  cityElement.textContent = newCity;
}

document.querySelector(".search-form").addEventListener("submit", updateCity);
