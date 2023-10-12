function updateTime() {
  //Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngeles = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngeles.format("MMMM Do YYYY");

    losAngelesTimeElement.innerHTML = losAngeles.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  //Maputo
  let maputoElement = document.querySelector("#maputo");
  if (maputoElement) {
    let maputoDateElement = maputoElement.querySelector(".date");
    let maputoTimeElement = maputoElement.querySelector(".time");
    let maputo = moment().tz("Africa/Maputo");

    maputoDateElement.innerHTML = maputo.format("MMMM Do YYYY");

    maputoTimeElement.innerHTML = maputo.format("h:mm:ss [<small>]A[</small>]");
  }

  //Sydney
  let sydneyElement = document.querySelector("#sydney");
  if (sydneyElement) {
    let sydneyDateElement = sydneyElement.querySelector(".date");
    let sydneyTimeElement = sydneyElement.querySelector(".time");
    let sydney = moment().tz("Australia/Sydney");

    sydneyDateElement.innerHTML = sydney.format("MMMM Do YYYY");

    sydneyTimeElement.innerHTML = sydney.format("h:mm:ss [<small>]A[</small>]");
  }
}

function updateCity() {
  let cityTimeZone = document.querySelector("#city-select").value;

  if (cityTimeZone === "current-location") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone
    .replace("_", " ")
    .replace("Sao", "São")
    .split("/")[1];
  let cityTime = moment().tz(cityTimeZone);

  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city" id="">
          <div>
            <h2>${cityName}</h2>

            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss [<small>]A[</small>]"
          )}</div>
        </div>
        <a href="/">All cities</a>`;
}

updateTime();
setInterval(updateTime, 1000);
setInterval(updateCity, 1000);

let citySelectElement = document.querySelector("#city-select");
citySelectElement.addEventListener("change", updateCity);
