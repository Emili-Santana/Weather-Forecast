// Add forecast information using JS
function displayForecast() {
  let days = ["Tue", "Wed", "Thu", "Fri", "Sat"];
  let forecastHtml = "";

  days.forEach(function (day) {
    forecastHtml =
      forecastHtml +
      ` 
      <div class="weather-forecast-day">
                            <div class="weather-forecast-date">${day}</div>
                            <div class="weather-forecast-icon">🌤️</div>
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
