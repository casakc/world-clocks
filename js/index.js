function updateTime() {
  //Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngeles = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = losAngeles.format("MMMM Do YYYY");

  losAngelesTimeElement.innerHTML = losAngeles.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //Sydney
  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  let sydney = moment().tz("Australia/Sydney");

  sydneyDateElement.innerHTML = sydney.format("MMMM Do YYYY");

  sydneyTimeElement.innerHTML = sydney.format("h:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);
