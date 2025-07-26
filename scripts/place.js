
const year = document.querySelector("#year");
const today = new Date();
year.innerHTML = ` <span class="highlight">${today.getFullYear()}</span>`;
full.innerHTML = `<span class="highlight">${new Intl.DateTimeFormat(
	"en-US",
	{
		dateStyle: "full"
	}
).format(today)}</span>`;
// Define static values for temperature and wind speed
let temperature = 10; // °C
let windSpeed = 4.8; // km/h

// Function to calculate windchill factor
function calculateWindChill(temperature, windSpeed) {
  // Windchill formula for Celsius
  return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
}

// Calculate windchill factor
let windChill = calculateWindChill(temperature, windSpeed);

// Display windchill factor
document.getElementById("windchill").innerHTML = `Windchill: ${Math.round(windChill)}°C`;
